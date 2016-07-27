What is this?
--
William Shatner is a URL shortener written in JavaScript. This is just a
quick side project used to practice a few skills across the full web stack.

[![CircleCI](https://circleci.com/gh/ninjascribble/williamshatner.svg?style=svg)](https://circleci.com/gh/ninjascribble/williamshatner)

**Website:** http://192.241.194.131/  
**GitHub Source:** https://github.com/ninjascribble/williamshatner  

Tools used
--
### Client-side
* [React](https://facebook.github.io/react/)
* [Redux](http://redux.js.org/)
* [Bootstrap](http://getbootstrap.com/)
* [Sass](http://sass-lang.com/)
* [Babel](https://babeljs.io)
* [Webpack](https://webpack.github.io/)

### Server-side
* [NodeJS](https://nodejs.org)
* [Express](https://expressjs.com/)

### Databases
* [MongoDb](https://www.mongodb.com)

### Deployment & Hosting
* [CircleCI](https://circleci.com/)
* [DigitalOcean](https://www.digitalocean.com/)

Building the project
--
William Shatner _requires_ [NodeJS 6.3+](https://nodejs.org/en/). It takes advantage of a number of
ES6 features that are not available in prior versions. For the best experience you'll also want to
have both [VirtualBox](https://www.virtualbox.org/wiki/Downloads) and
[Vagrant](https://www.vagrantup.com/) installed. Then just run `make`, let the build process
complete, and visit your local version at http://localhost:8080.

### A note about Vagrant
Vagrant is a virtual machine manager that allows filesystem sharing between a host and the VM. If
this is your first time using it, then expect it to take a while to download the base VM image. Once
the image has been downloaded a VM will be created and provisioned, and you'll be ready to go.
_**This project has only been tested on OS X El Capitan. Your mileage may vary.**_

### Some helpful `make` targets
* `default`: Installs dependencies, runs tests, builds the client-side code, and starts/provisions
the virtual machine.
* `test`: Runs all tests
* `client.dev`: Compiles the client-side code for dev. Includes source maps. The client-side code is recompiled any time a file is changed and saved.
* `client.build`: Compiles the client-side code for production. Minified, uglified, and ready to
ship.
* `server.restart`: Restarts the NodeJS service. Run this whenever you want to deploy server-side changes.
* `server.logs`: Tails the server logs.
* `vm.deploy`: Test the deploy process against your VM. This is useful prior to committing changes
that will be picked up and deployed by the CI service.

Todo
--
William Shatner is a side project, and not really meant for production use. A few things that would
love some love include:
* More test coverage
* A real domain
* A list of URLs the current user has shortened
* A list of popular/recent URLs
* Websocket support:
  * See popular/recent URLs in real-time
  * See click counts in real-time
