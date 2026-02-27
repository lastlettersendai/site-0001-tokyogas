import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, '..', p)

// The template is the standard index.html built by vite (client build)
const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import(toAbsolute('dist/server/entry-server.js'))

const routesToPrerender = [
    '/',
    '/eligible',
    '/cost',
    '/cancellation',
    '/subsidy-tokyo',
    '/subsidy-payment',
    '/outage',
    '/installation',
    '/faq',
    '/operator'
];

(async () => {
    console.log('Building static pages...');

    for (const url of routesToPrerender) {
        // use React Router DOM server render function
        const { appHtml, headHtml } = render(url)

        // Inject the SSR HTML and Meta Tags
        let html = template.replace(`<!--app-html-->`, appHtml)
        html = html.replace(`<!--app-head-->`, headHtml)

        // Save to the appropriate folder structure
        const filePath = url === '/' ? 'index.html' : `${url.replace(/^\//, '')}/index.html`;
        const absolutePath = toAbsolute(`dist/${filePath}`);

        fs.mkdirSync(path.dirname(absolutePath), { recursive: true });
        fs.writeFileSync(absolutePath, html);

        console.log(`✅ pre-rendered: ${filePath}`);
    }

    // Generate sitemap.xml
    const baseUrl = 'https://site-0001-tokyogas.vercel.app';
    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routesToPrerender.map(route => `  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

    fs.writeFileSync(toAbsolute('dist/sitemap.xml'), sitemapXml);
    console.log(`✅ generated: sitemap.xml`);

    // Generate robots.txt
    const robotsTxt = `User-agent: *
Allow: /
Sitemap: ${baseUrl}/sitemap.xml
`;
    fs.writeFileSync(toAbsolute('dist/robots.txt'), robotsTxt);
    console.log(`✅ generated: robots.txt`);

    console.log('SSG Build Complete!');
})();
