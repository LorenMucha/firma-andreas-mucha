#!/bin/bash


deploy() {
    sshpass -p "" ssh -o StrictHostKeyChecking=no -tt c423648_dtm@addigo-labs.de <<-EOT
    cd ../../web/cockpit
    git pull
    composer install
    php artisan migrate --force
    php artisan optimize:clear
    exit
EOT
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
