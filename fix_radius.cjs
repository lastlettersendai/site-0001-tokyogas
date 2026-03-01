const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src/pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
    let content = fs.readFileSync(path.join(pagesDir, file), 'utf-8');
    let changed = false;

    // We look for elements that have a background, a rounded class, and span full width on mobile.
    // Full width on mobile usually means they have `px-4` or `px-6` but NO `mx-4` or `mx-6`.
    // Example: "bg-red-50 p-8 rounded-3xl border border-red-100 mb-20 max-w-4xl mx-auto px-4 sm:px-6"

    // Also warning cards: "bg-gradient-to-br from-red-50 to-orange-50 border-l-8 border-red-500 p-8 rounded-r-2xl mb-16 shadow-lg relative overflow-hidden group max-w-4xl mx-auto px-4 sm:px-6"

    const regex = /className="([^"]*)"/g;

    const newContent = content.replace(regex, (match, classStr) => {
        // Only target element strings that have rounded-(lg|xl|2xl|3xl|r-2xl) but NOT rounded-none
        // and have bg- 
        // and DO NOT have mx-4, mx-6, mx-auto is ok.
        if (!classStr.includes('rounded-') || classStr.includes('rounded-none') || classStr.includes('rounded-full')) {
            return match;
        }

        // If it's a card touching the edge on mobile:
        // It typically has px-4 or px-6, but NO mx-4 or mx-6.
        // What if it has neither px- nor mx-? It might be an inner card that is padded by its parent!
        // So we ONLY adjust things that have `px-4` or `px-6` (or `max-w-`) AND lack `mx-4`/`md:mx-0` etc.
        // Wait, if it has `max-w-4xl` and `mx-auto`, it touches the edge on mobile.
        const touchesEdge = (classStr.includes('max-w-') && classStr.includes('mx-auto') && !classStr.match(/\bmx-[1-9]\b/)) ||
            (classStr.includes('px-4') && !classStr.match(/\bmx-[1-9]\b/));

        if (touchesEdge && (classStr.includes('bg-') || classStr.includes('border'))) {
            // Replace rounded classes
            const newClassStr = classStr.replace(/\brounded-(lg|xl|2xl|3xl|r-2xl|l-2xl|t-xl)\b/g, 'rounded-none sm:rounded-$1');
            return `className="${newClassStr}"`;
        }

        return match;
    });

    if (newContent !== content) {
        fs.writeFileSync(path.join(pagesDir, file), newContent);
        console.log(`Updated rounded corners in ${file}`);
    }
});
