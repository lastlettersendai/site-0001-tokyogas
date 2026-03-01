import React from 'react';

export const CTALink = ({ href, children, eventName = 'click_cta', className = '' }) => {
    const handleClick = (e) => {
        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', eventName, {
                'event_category': 'CTA',
                'event_label': children.toString().substring(0, 30),
                'value': 1
            });
        }
    };

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            className={className}
        >
            {children}
        </a>
    );
};
