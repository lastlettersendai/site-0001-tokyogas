const fs = require('fs');
const path = require('path');

const contentPath = path.join(__dirname, 'src/content/site-0001/content.json');
const contentData = JSON.parse(fs.readFileSync(contentPath, 'utf8'));

const pagesDir = path.join(__dirname, 'src/pages');
const pages = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx') && f !== 'Editor.jsx');

const componentsDir = path.join(__dirname, 'src/components');
const components = ['DiagnosisBlock.jsx', 'ConstitutionFAQ.jsx', 'FinalCTA.jsx'];

const japaneseRegex = /[ぁ-んァ-ン一-龥]/;

function processFile(filePath, sectionName) {
    if (!fs.existsSync(filePath)) return;

    let code = fs.readFileSync(filePath, 'utf8');
    if (!contentData[sectionName]) contentData[sectionName] = {};

    let counter = 1;
    let modified = false;

    // Note: this simple regex replacement might have edge cases, but for this specific React structure it should cover 90%

    // 1. JSX Text Nodes: >日本語<
    code = code.replace(/>([^<]+)</g, (match, text) => {
        const trimmed = text.trim();
        if (japaneseRegex.test(trimmed) && !trimmed.includes('{') && !trimmed.includes('}')) {
            const key = `text_${counter++}`;
            contentData[sectionName][key] = trimmed;
            modified = true;
            // Preserve surrounding whitespace inside the tags
            return match.replace(trimmed, `{content.${sectionName}.${key}}`);
        }
        return match;
    });

    // 2. JSX String Attributes like title="日本語", description="...", alt="..."
    code = code.replace(/([a-zA-Z0-9_-]+)="([^"]+)"/g, (match, attrName, text) => {
        if (japaneseRegex.test(text) && !text.includes('{')) {
            const key = `attr_${attrName}_${counter++}`;
            contentData[sectionName][key] = text;
            modified = true;
            return `${attrName}={content.${sectionName}.${key}}`;
        }
        return match;
    });

    // 3. JS strings in arrays or plain code. Since replacing raw quotes might break JSX, we will only do this for specific patterns like array items.
    code = code.replace(/\[\s*((?:"[^"]+"\s*,\s*)*"[^"]+"\s*)\]/g, (match) => {
        // Just let manual fixing handle deeply nested arrays if any to avoid breaking JSX.
        // Actually, let's just replace strings inside mapping.
        return match.replace(/"([^"]+)"/g, (m, text) => {
            if (japaneseRegex.test(text)) {
                const key = `str_${counter++}`;
                contentData[sectionName][key] = text;
                modified = true;
                return `content.${sectionName}.${key}`;
            }
            return m;
        });
    });

    // Delete the single quote replacement as it's too risky.

    if (modified) {
        if (!code.includes('import content from')) {
            // Find the last import statment
            const importsEndIndex = code.lastIndexOf('import ');
            if (importsEndIndex !== -1) {
                const endOfLine = code.indexOf('\n', importsEndIndex);
                // Also check if content is already imported
                if (!code.includes("import content from")) {
                    code = code.slice(0, endOfLine + 1) + `import content from '../content/site-0001/content.json';\n` + code.slice(endOfLine + 1);
                }
            } else {
                code = `import content from '../content/site-0001/content.json';\n` + code;
            }
        }
        fs.writeFileSync(filePath, code, 'utf8');
        console.log(`Updated ${sectionName}`);
    }
}

pages.forEach(file => {
    const pageName = file.replace('.jsx', '').toLowerCase();
    const filePath = path.join(pagesDir, file);
    processFile(filePath, pageName);
});

components.forEach(file => {
    const pageName = file.replace('.jsx', '').toLowerCase();
    const filePath = path.join(componentsDir, file);
    processFile(filePath, pageName);
});

fs.writeFileSync(contentPath, JSON.stringify(contentData, null, 4), 'utf8');
console.log('Extraction complete.');
