console.log("React start!");
window.onerror = (e) => console.log("Caught error:", e);

import React from 'react'
import { hydrateRoot } from 'react-dom/client'
import App from './App.jsx'
import './style.css'
import { BrowserRouter } from 'react-router-dom'

hydrateRoot(document.getElementById('root'),
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
)
