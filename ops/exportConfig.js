const fs = require('fs');
const Config = require('../src/config');

let outfile = process.argv[2];
let data = {};

if (!outfile) {
  throw new Error('No outfile specified');
}

[ 'SHATNER_BASE_URL',
  'SHATNER_MONGO_DB' ].forEach(key => data[key] = Config.get(key));

fs.writeFileSync(outfile, JSON.stringify(data));
