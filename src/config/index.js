const path = require('path');
const nconf = require('nconf');

// Environment variables take presidence over all
nconf.argv().env();

// Roll your own config and set it in ./environment.json
nconf.file({ file: path.resolve(__dirname, 'environment.json') });

// Fallback to the defaults when config hasn't been set anywhere else
nconf.defaults({
  'SHATNER_BASE_URL': 'http://localhost:8080',
  'SHATNER_MONGO_DB': 'mongodb://localhost/shatner'
});

module.exports = nconf;
