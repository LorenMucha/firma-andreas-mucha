#!/bin/bash


deploy() {
    sshpass -p "Sloper88!!" ssh -o StrictHostKeyChecking=no -tt c423648_dtm@addigo-labs.de <<-EOT
    
    exit
EOT
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
