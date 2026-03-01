const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src/pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
    let content = fs.readFileSync(path.join(pagesDir, file), 'utf-8');
    let changed = false;

    // 1. Replace half-width slashes in Japanese text
    // E.g. "太陽光/蓄電池" -> "太陽光・蓄電池", "令和6年度/2024年" -> "令和6年度／2024年", "15万円/kWh" -> "15万円／kWh"
    const newContent = content
        .replace(/太陽光\/蓄電池/g, '太陽光・蓄電池')
        .replace(/(\S)\/(\S)/g, (match, p1, p2) => {
            if (p1 === '<' || p2 === '>' || p1 === '/' || p2 === '/') return match;
            if (p1 === 't' && p2 === 'p') return match; // http
            if (p1 === ':' && p2 === '/') return match; // http://
            
            // If surrounding characters are Japanese or numbers/letters used in Japanese text context
            if (/[\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\uFF00-\uFFEF\u4E00-\u9FAF]/.test(p1) || 
                /[\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\uFF00-\uFFEF\u4E00-\u9FAF]/.test(p2)) {
                return `${p1}／${p2}`;
            }
            // Let's just manually replace matching known cases if automatic is tricky, 
            // but let's try to just carefully replace digits/kanji + slash
            if (/\d/.test(p1) && /[kK]Wh/.test(p2)) return `${p1}／${p2}`;
            return match;
        });
    
    if (newContent !== content) {
        content = newContent;
        changed = true;
    }

    // 2. Wrap large digits in headings with tracking-widest
    // Only target h1, h2
    // regex to find <h1 ...> ... </h1>
    const headingRegex = /<(h[12])([^>]*)>(.*?)<\/h[12]>/gs;
    const finalContent = content.replace(headingRegex, (match, tag, attrs, inner) => {
        // if already has span with tracking, ignore
        if (inner.includes('<span className="tracking-widest">')) return match;
        
        // Find digits and wrap them
        const newInner = inner.replace(/([0-9０-９]+)/g, '<span className="tracking-widest">$1</span>');
        if (newInner !== inner) {
            return `<${tag}${attrs}>${newInner}</${tag}>`;
        }
        return match;
    });

    if (finalContent !== content) {
        changed = true;
    }

    if (changed) {
        fs.writeFileSync(path.join(pagesDir, file), finalContent);
        console.log(`Updated ${file}`);
    }
});
