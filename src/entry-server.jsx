import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App.jsx';
import { SEOContext } from './contexts/SEOContext.jsx';

export function render(url) {
    const seoContext = {};
    const appHtml = renderToString(
        <React.StrictMode>
            <SEOContext.Provider value={seoContext}>
                <StaticRouter location={url}>
                    <App />
                </StaticRouter>
            </SEOContext.Provider>
        </React.StrictMode>
    );

    const headHtml = seoContext.headHtml || '';

    return { appHtml, headHtml };
}
