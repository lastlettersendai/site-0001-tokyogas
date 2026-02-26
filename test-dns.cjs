const https = require('https');
https.get('https://registry.npmjs.org', (res) => {
    console.log('Status:', res.statusCode);
}).on('error', (e) => {
    console.error('Error:', e.message);
});
