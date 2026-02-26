const dns = require('dns');
const originalLookup = dns.lookup;

dns.setServers(['8.8.8.8', '1.1.1.1']);

dns.lookup = function (hostname, options, callback) {
    if (typeof options === 'function') {
        callback = options;
        options = {};
    }
    dns.resolve4(hostname, (err, addresses) => {
        if (err) return originalLookup(hostname, options, callback);
        if (addresses && addresses.length > 0) {
            callback(null, addresses[0], 4);
        } else {
            originalLookup(hostname, options, callback);
        }
    });
};

require('/usr/local/lib/node_modules/npm/bin/npm-cli.js');
