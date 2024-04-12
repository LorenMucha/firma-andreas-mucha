#!/bin/bash

check_location() {
    if [[ "$(pwd)" == *"scripts" ]]; then
        cd ../
    fi
}

prepare() {
    sudo apt-get install sshpass
    BRANCH="$(git branch --show-current)"
    check_location
    sudo chmod +x scripts/sonar.sh
}

add_tag() {

    CURTAG=$(git describe --abbrev=0 --tags)
    CURTAG="${CURTAG/v/}"

    IFS='.' read -a vers <<<"$CURTAG"

    MAJ=${vers[0]}
    MIN=${vers[1]}
    BUG=${vers[2]}
    echo "Current Tag: v$MAJ.$MIN.$BUG, Current Branch: $BRANCH"

    case "$BRANCH" in
    *master*)
        ((MIN += 1))
        BUG=0
        echo "Incrementing $BRANCH Version#"
        ;;
    esac

    NEWTAG="v$MAJ.$MIN.$BUG"

    echo "Adding Tag: $NEWTAG"
    git tag -a $NEWTAG -m $NEWTAG

    git push --tags

}

deploy_dev() {
    read -p "Passwort für ssh addigo-labs: " passwort
    sshpass -p "$passwort" ssh -o StrictHostKeyChecking=no -tt c423648_dtm@addigo-labs.de <<-EOT
    cd ../../web/cockpit
    git pull
    composer install
    php artisan migrate --force
    php artisan optimize:clear
    exit
EOT
    health_check
}

deploy_prod() {
    #TODO
    # - merge with master
    # - tagging
    # - ssh deplloy tp dtm@addigo.de
    echo "deploy to prod"
    git checkout master
    git pull
    git merge develop

}

run_test() {
    read -p "Mit welcher Plattform arbeitest du? (docker/sail): " PLATFORM

    if [[ "$PLATFORM" == "sail" ]]; then
        ./vendor/bin/sail test --coverage-clover tests/reports/coverage.xml
    fi
    if [[ "$PLATFORM" == "docker" ]]; then
        cd ../
        docker compose run artisan test --coverage-clover tests/reports/coverage.xml
        cd src/
    fi
}

health_check() {
    # TODO ersetzen durch Health Endpunkt
    HEALTH_STATE="$(curl -LI https://cockpit.addigo-labs.de/api/version -o /dev/null -w '%{http_code}\n' -s)"
    if [[ $HEALTH_STATE == "200" ]]; then
        HEALTH_STATE=true
    else
        HEALTH_STATE=false
    fi
}

# install packages and check env
prepare
#run_test

if [[ "$BRANCH" == "develop" ]]; then
    deploy_dev
    health_check
    read -p "Auf Produktion veröffentlichen ? (yes/no): " DEPLOYPROD
    if [[ "$DEPLOYPROD" == "yes" && $HEALTH_STATE == true ]]; then
        run_test
        deploy_prod
    fi
else
    echo "your branch $Branch is not develop"
fi
