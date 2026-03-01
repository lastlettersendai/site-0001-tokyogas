import React from 'react';
import { Layout } from './Layout.jsx';
import { SEOHead } from './SEOHead.jsx';

export const PageTemplate = ({ title, description, path, children }) => {
    return (
        <Layout>
            <SEOHead title={title} description={description} path={path} />
            {children}
        </Layout>
    );
};
