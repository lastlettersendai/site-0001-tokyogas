const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src/pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
    let content = fs.readFileSync(path.join(pagesDir, file), 'utf-8');
    let changed = false;

    // 1. Replace half-width slashes in texts
    const newContent = content
        .replace(/太陽光\/蓄電池/g, '太陽光・蓄電池')
        .replace(/令和6年度\/2024年/g, '令和6年度／2024年')
        .replace(/15万円\/kWh/g, '15万円／kWh')
        .replace(/テレビ\/スマホ/g, 'テレビ・スマホ')
        .replace(/照明（50W）＋テレビ\/スマホ/g, '照明（50W）＋テレビ・スマホ');

    if (newContent !== content) {
        content = newContent;
        changed = true;
    }

    // 2. Wrap large digits in headings with tracking-widest
    // Avoid double-wrapping
    const headingRegex = /<(h[12])([^>]*)>(.*?)<\/h[12]>/gs;
    const finalContent = content.replace(headingRegex, (match, tag, attrs, inner) => {
        if (inner.includes('<span className="tracking-widest">')) return match;

        let newInner = inner.replace(/([0-9０-９]+)/g, '<span className="tracking-widest">$1</span>');
        if (newInner !== inner) {
            return `<${tag}${attrs}>${newInner}</${tag}>`;
        }
        return match;
    });

    if (finalContent !== content) {
        content = finalContent;
        changed = true;
    }

    // 3. Let's fix some known cases of full-width blocks having rounded corners on mobile
    // such as bg-gradient blocks that don't have px-4 but have rounded-
    // Or we just add sm: prefixes to the rounded classes for the main cards that touch the edge.
    // e.g. Warning cards
    const noRoundMobile = content.replace(/rounded-r-2xl/g, 'rounded-none sm:rounded-r-2xl')
        .replace(/rounded-l-2xl/g, 'rounded-none sm:rounded-l-2xl')
        .replace(/rounded-2xl/g, 'rounded-none sm:rounded-2xl')
        .replace(/rounded-3xl/g, 'rounded-none sm:rounded-3xl')
        .replace(/rounded-xl/g, 'rounded-none sm:rounded-xl')
        .replace(/rounded-lg/g, 'rounded-none sm:rounded-lg')
        .replace(/rounded-full/g, 'rounded-full') // keep this
        .replace(/rounded-t-xl/g, 'rounded-none sm:rounded-t-xl');

    // Wait, replacing all rounded-2xl with rounded-none sm:rounded-2xl makes EVERY card square on mobile. 
    // Is that what the user wants? "マージンができないものは四隅の角を角丸にしないでください。"
    // This means things WITH margins SHOULD be rounded. So blind replacement is bad.

    if (changed) {
        fs.writeFileSync(path.join(pagesDir, file), content);
        console.log(`Updated typography in ${file}`);
    }
});
