import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import path from 'path'

export default defineConfig({
    base: '/',
    plugins: [
        tailwindcss(),
        react(),
        {
            name: 'content-editor-api',
            configureServer(server) {
                server.middlewares.use((req, res, next) => {
                    if (req.url === '/api/get-content' && req.method === 'GET') {
                        try {
                            const filePath = path.resolve(__dirname, 'src/content/site-0001/content.json');
                            if (!fs.existsSync(filePath)) {
                                fs.writeFileSync(filePath, '{}', 'utf-8');
                            }
                            const data = fs.readFileSync(filePath, 'utf-8');
                            res.setHeader('Content-Type', 'application/json');
                            res.end(data);
                        } catch (err) {
                            res.statusCode = 500;
                            res.end(JSON.stringify({ error: err.message }));
                        }
                    } else if (req.url === '/api/save-content' && req.method === 'POST') {
                        let body = '';
                        req.on('data', chunk => { body += chunk; });
                        req.on('end', () => {
                            try {
                                const data = JSON.parse(body);
                                const filePath = path.resolve(__dirname, 'src/content/site-0001/content.json');
                                fs.writeFileSync(filePath, JSON.stringify(data, null, 4), 'utf-8');
                                res.setHeader('Content-Type', 'application/json');
                                res.end(JSON.stringify({ success: true }));
                            } catch (err) {
                                res.statusCode = 500;
                                res.end(JSON.stringify({ error: err.message }));
                            }
                        });
                    } else {
                        next();
                    }
                });
            }
        }
    ],
    server: {
        host: 'localhost',
        port: 3000,
        strictPort: true
    }
})
