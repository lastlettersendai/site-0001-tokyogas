import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            {/* Future pages can be added here, e.g., <Route path="/about" element={<About />} /> */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
