import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as cheerio from 'cheerio';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '../dist');

// 設定
const mode = process.env.HEAD_CHECK_MODE || 'warn'; // warn | block
const targetTags = [
    { name: 'title', selector: 'title', attr: 'text' },
    { name: 'description', selector: 'meta[name="description"]', attr: 'content' },
    { name: 'canonical', selector: 'link[rel="canonical"]', attr: 'href' },
    { name: 'og:title', selector: 'meta[property="og:title"]', attr: 'content' },
    { name: 'og:description', selector: 'meta[property="og:description"]', attr: 'content' },
    { name: 'og:url', selector: 'meta[property="og:url"]', attr: 'content' }
];

function walk(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            walk(filePath, fileList);
        } else if (filePath.endsWith('.html')) {
            fileList.push(filePath);
        }
    }
    return fileList;
}

let hasError = false;

function validateHTMLFiles() {
    console.log(`🔍 [SEO Gate] Starting HTML Head validation (${mode} mode)`);
    if (!fs.existsSync(distDir)) {
        console.error('❌ dist directory not found. Please build the project first.');
        process.exit(1);
    }

    const htmlFiles = walk(distDir);
    let checkedCount = 0;

    for (const file of htmlFiles) {
        const content = fs.readFileSync(file, 'utf-8');
        const $ = cheerio.load(content);
        const relativePath = path.relative(path.resolve(__dirname, '..'), file);
        let fileHasError = false;

        // <head> 内のみを対象とする
        const head = $('head');

        targetTags.forEach(tag => {
            const elements = head.find(tag.selector);
            const count = elements.length;

            if (count !== 1) {
                if (!fileHasError) {
                    console.log(`\n- ${relativePath}`);
                    fileHasError = true;
                    hasError = true;
                }

                const values = [];
                elements.each((i, el) => {
                    if (tag.attr === 'text') {
                        values.push($(el).text().substring(0, 50));
                    } else {
                        values.push($(el).attr(tag.attr)?.substring(0, 50) || 'undefined');
                    }
                });

                console.log(`  - ${tag.name}: ${count}`);
                if (values.length > 0) {
                    console.log(`    values:`);
                    values.forEach(val => console.log(`      - "${val}"`));
                }
            }
        });
        checkedCount++;
    }

    console.log(`\n✅ Checked ${checkedCount} HTML files.`);

    if (hasError) {
        if (mode === 'block') {
            console.error('\n🚨 [SEO Gate] Validation FAILED due to duplicate or missing SEO tags in <head>. Block mode is active, stopping deployment.');
            process.exit(1);
        } else {
            console.warn('\n⚠️ [SEO Gate] Validation finished with warnings. Proceeding with deployment since mode is warn.');
        }
    } else {
        console.log('🎉 [SEO Gate] All SEO tags are uniquely verified!');
    }
}

validateHTMLFiles();
