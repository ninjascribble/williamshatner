default: clean installdeps test client.build vm.stop vm.start

clean:
	rm -rf ./src/node_modules
	rm -f ./src/config/environment.json

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

ci.export:
	node ./ops/exportConfig.js ./src/config/environment.json

ci.deploy: client.build ci.export
	rsync -avz ./README.md $(REMOTE_USER)@$(REMOTE_SERVER):$(REMOTE_DIR)
	rsync -avz ./ops $(REMOTE_USER)@$(REMOTE_SERVER):$(REMOTE_DIR)
	rsync -avz ./src $(REMOTE_USER)@$(REMOTE_SERVER):$(REMOTE_DIR)
	rsync -avz ./static $(REMOTE_USER)@$(REMOTE_SERVER):$(REMOTE_DIR)
	ssh -t $(REMOTE_USER)@$(REMOTE_SERVER) "sudo $(REMOTE_DIR)/ops/setup.sh"
