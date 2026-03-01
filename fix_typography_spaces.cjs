const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src/pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
    let content = fs.readFileSync(path.join(pagesDir, file), 'utf-8');
    let changed = false;

    // 1. Appending half-width spaces around numbers in headings h1, h2, h3
    // We match <h1...>...</h1> etc, and then parse its text nodes.
    const headingRegex = /<(h[123])([^>]*)>(.*?)<\/h[123]>/gs;
    content = content.replace(headingRegex, (match, tag, attrs, inner) => {
        // split by tags to only modify text
        const parts = inner.split(/(<[^>]*>)/);
        const newParts = parts.map(part => {
            if (part.startsWith('<') && part.endsWith('>')) {
                return part;
            }
            // Add spaces around numbers, but don't double space if already spaced
            // \b doesn't work well with Japanese characters, so we use lookarounds
            // Replace any chunk of digits with space around it, then collapse double spaces.
            let text = part.replace(/([0-9０-９]+)/g, ' $1 ');
            // Clean up any double spaces that might have formed
            text = text.replace(/  +/g, ' ');
            // Also clean up space right after a line break or before a line break if it matters, 
            // but standard HTML ignores spacing so it's fine.
            return text;
        });
        const newInner = newParts.join('');
        return `<${tag}${attrs}>${newInner}</${tag}>`;
    });

    // 2. Replace `:` and `;` with `：` and `；` in all text nodes.
    // We should safely do this only outside of JSX tags/attributes.
    // So again, we split the entire file content by <...> tags
    const allParts = content.split(/(<[^>]*>)/);
    const newAllParts = allParts.map(part => {
        // If it's a tag <...>, keep it as is
        if (part.startsWith('<') && part.endsWith('>')) {
            return part;
        }
        // If it's pure text, replace colons and semicolons
        // Exclude common URL patterns if any exist in text nodes (like http://)
        let text = part;
        if (!text.includes('http')) {
            text = text.replace(/:/g, '：').replace(/;/g, '；');
        } else {
            // Safer replacement if http is present
            text = text.replace(/(?<!https?):/g, '：').replace(/;/g, '；');
        }
        return text;
    });

    const finalContent = newAllParts.join('');

    if (finalContent !== fs.readFileSync(path.join(pagesDir, file), 'utf-8')) {
        fs.writeFileSync(path.join(pagesDir, file), finalContent);
        console.log(`Updated typography in ${file}`);
    }
});
