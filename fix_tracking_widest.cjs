const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src/pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
    let content = fs.readFileSync(path.join(pagesDir, file), 'utf-8');

    // Reverse the tracking-widest spans
    // <span className="tracking-widest">8</span> -> 8
    const reversed = content.replace(/<span className="tracking-widest">([0-9０-９]+)<\/span>/g, '$1');

    // Now apply tracking-widest only to text nodes inside h1 and h2
    // To do this safely with regex, we can match <h1...> ... </h1> and use a replacer that avoids anything inside < >
    const finalContent = reversed.replace(/<(h[12])([^>]*)>(.*?)<\/h[12]>/gs, (match, tag, attrs, inner) => {
        // Replace numbers only outside of < > tags inside `inner`
        // We can split the inner string by tags <...>
        const parts = inner.split(/(<[^>]*>)/);
        const newParts = parts.map(part => {
            if (part.startsWith('<') && part.endsWith('>')) {
                return part; // keep tags intact
            }
            return part.replace(/([0-9０-９]+)/g, '<span className="tracking-widest">$1</span>');
        });
        return `<${tag}${attrs}>${newParts.join('')}</${tag}>`;
    });

    if (finalContent !== content) {
        fs.writeFileSync(path.join(pagesDir, file), finalContent);
        console.log(`Reverted and fixed ${file}`);
    }
});
