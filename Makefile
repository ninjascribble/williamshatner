default: cleandeps installdeps client.build vm.stop vm.start

cleandeps:
	cd ./src; rm -rf node_modules

installdeps:
	cd ./src; npm install

test:
	cd ./src; npm run test

client.dev:
	cd ./src; npm run dev

client.build:
	cd ./src; npm run build

server.restart:
	vagrant ssh -c "sudo service shatner restart"

server.logs:
	vagrant ssh -c "tail -f /var/log/shatner.log"

vm.start:
	vagrant up --provision

vm.stop:
	vagrant halt

vm.deploy: test client.build server.restart

ci.deploy: client.build
	rsync -avz ./ops $REMOTE_USER@$REMOTE_SERVER:$REMOTE_DIR
	rsync -avz ./src $REMOTE_USER@$REMOTE_SERVER:$REMOTE_DIR
	rsync -avz ./static $REMOTE_USER@$REMOTE_SERVER:$REMOTE_DIR
	ssh -t $REMOTE_USER@$REMOTE_SERVER "sudo $REMOTE_DIR/ops/setup.sh"
