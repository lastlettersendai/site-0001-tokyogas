import React, { useContext, useEffect } from 'react';

import { SEOContext } from '../contexts/SEOContext.jsx';

export const SEOHead = ({ title, description, path = '', imageUrl = '/ogp.jpg' }) => {
    const siteName = "東京ガスの太陽光・蓄電池 - 導入前シミュレーションと解説";
    const baseUrl = "https://site-0001-tokyogas.vercel.app"; // GodMaster Standard Canonical Domain
    const fullUrl = `${baseUrl}${path}`;
    const fullImageUrl = imageUrl.startsWith('http') ? imageUrl : `${baseUrl}${imageUrl}`;

    const context = useContext(SEOContext);

    // 1. Server-Side Generation (SSG) Data Extraction
    if (typeof window === 'undefined' && context) {
        context.headHtml = `
            <title>${title}</title>
            <meta name="description" content="${description}" />
            <link rel="canonical" href="${fullUrl}" />
            <meta property="og:title" content="${title}" />
            <meta property="og:description" content="${description}" />
            <meta property="og:type" content="${path === '/' ? 'website' : 'article'}" />
            <meta property="og:url" content="${fullUrl}" />
            <meta property="og:image" content="${fullImageUrl}" />
            <meta property="og:site_name" content="${siteName}" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="${title}" />
            <meta name="twitter:description" content="${description}" />
            <meta name="twitter:image" content="${fullImageUrl}" />
            <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        `;
    }

    // 2. Client-Side Rendering (CSR) DOM Updates (when navigating via React Router)
    useEffect(() => {
        if (typeof window === 'undefined') return;

        document.title = title;

        const updateTag = (selector, attribute, value, createFn) => {
            let el = document.querySelector(selector);
            if (!el) {
                el = createFn();
                document.head.appendChild(el);
            }
            el.setAttribute(attribute, value);
        };

        updateTag('meta[name="description"]', 'content', description, () => {
            const meta = document.createElement('meta');
            meta.name = "description";
            return meta;
        });

        updateTag('link[rel="canonical"]', 'href', fullUrl, () => {
            const link = document.createElement('link');
            link.rel = "canonical";
            return link;
        });
    }, [title, description, fullUrl]);

    return null; // Renders nothing in the DOM tree
};
