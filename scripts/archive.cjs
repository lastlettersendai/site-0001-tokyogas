const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else if (file.endsWith('index.html')) {
            results.push(file);
        }
    });
    return results;
}

const distDir = path.join(__dirname, '../dist');
const files = walk(distDir);
const archiveDir = path.join(__dirname, '../archive_output');

if (!fs.existsSync(archiveDir)) {
    fs.mkdirSync(archiveDir, { recursive: true });
}

const out = files.map(f => fs.readFileSync(f, 'utf8')).join('\n');
fs.writeFileSync(path.join(archiveDir, 'all_pages_html.txt'), out);
console.log('Successfully wrote to archive_output/all_pages_html.txt');
