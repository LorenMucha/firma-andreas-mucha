#!/bin/bash

build(){
    yarn build
}

deploy() {
    rsync -avzh -e 'ssh -p 22' // remoteUser@remoteHostIpAddress:/path/to/remote/dir
    sshpass -p "Sloper88!!" ssh -o StrictHostKeyChecking=no -tt c423648_dtm@addigo-labs.de <<-EOT
    
    exit
EOT
}

# install packages and check env
build
deploy
