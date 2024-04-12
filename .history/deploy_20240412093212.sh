#!/bin/bash

build(){
    
}

deploy() {
    sshpass -p "Sloper88!!" ssh -o StrictHostKeyChecking=no -tt c423648_dtm@addigo-labs.de <<-EOT
    
    exit
EOT
}

# install packages and check env
deploy
