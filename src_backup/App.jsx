import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';
import { Eligible } from './pages/Eligible.jsx';
import { Cost } from './pages/Cost.jsx';
import { Cancellation } from './pages/Cancellation.jsx';
import { SubsidyTokyo } from './pages/SubsidyTokyo.jsx';
import { SubsidyPayment } from './pages/SubsidyPayment.jsx';
import { Outage } from './pages/Outage.jsx';
import { Installation } from './pages/Installation.jsx';
import { FAQ } from './pages/FAQ.jsx';
import { Operator } from './pages/Operator.jsx';
import Editor from './pages/Editor.jsx';

import ScrollToTop from './components/ScrollToTop.jsx';

function App() {
    return (
        <>
            <ScrollToTop />
            <Routes>
                {import.meta.env.DEV && <Route path="/editor" element={<Editor />} />}
                <Route path="/" element={<Home />} />
                <Route path="/eligible" element={<Eligible />} />
                <Route path="/cost" element={<Cost />} />
                <Route path="/cancellation" element={<Cancellation />} />
                <Route path="/subsidy-tokyo" element={<SubsidyTokyo />} />
                <Route path="/subsidy-payment" element={<SubsidyPayment />} />
                <Route path="/outage" element={<Outage />} />
                <Route path="/installation" element={<Installation />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/operator" element={<Operator />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;
