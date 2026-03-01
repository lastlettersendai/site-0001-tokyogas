const fs = require('fs');
const path = require('path');

function processDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if (fullPath.endsWith('.jsx')) {
            const content = fs.readFileSync(fullPath, 'utf8');
            const lines = content.split('\n');
            lines.forEach((line, i) => {
                // look for " number "
                if (/ [0-9]+ /.test(line) && !line.includes('className=') && !line.includes('export ') && !line.includes('import ') && !line.includes('var ') && !line.includes('const ') && !line.includes('let ') && !line.includes('//')) {
                    console.log(`FILE: ${fullPath} LINE: ${i + 1}`);
                    console.log(`ORIG: ${line}`);
                    let modified = line;
                    let prev = '';
                    // Only replace spaces if it's not looking like a prop or tag
                    while(modified !== prev) {
                        prev = modified;
                        modified = modified.replace(/([^a-zA-Z0-9_.\-]|^) ([0-9]+) (?=[^a-zA-Z0-9_.\-]|$)/g, '$1$2');
                    }
                    console.log(`MODI: ${modified}`);
                    console.log('---');
                } else if (line.includes('> ') && line.match(/> [0-9]+ </)) {
                    console.log(`FILE: ${fullPath} LINE: ${i + 1}`);
                    console.log(`ORIG: ${line}`);
                    let modified = line.replace(/> ([0-9]+) </g, '>$1<');
                    console.log(`MODI: ${modified}`);
                    console.log('---');
                } else if (line.includes(' <span') && / <span className="tracking-widest"> [0-9]+ <\/span>/.test(line)) {
                     // specific match
                    console.log(`FILE: ${fullPath} LINE: ${i + 1}`);
                    console.log(`ORIG: ${line}`);
                    let modified = line.replace(/ <span className="tracking-widest"> ([0-9]+) <\/span>/g, '<span className="tracking-widest">$1<\/span>');
                    console.log(`MODI: ${modified}`);
                    console.log('---');
                }
            });
        }
    }
}

processDir(path.join(__dirname, 'src'));
