import React, { useState } from 'react';
import { PageTemplate } from '../components/PageTemplate.jsx';
import { Link } from 'react-router-dom';
import { CTALink } from '../components/CTALink.jsx';
import { FinalCTA } from '../components/FinalCTA.jsx';
import { Icon } from '../components/Icon.jsx';
import { ConstitutionFAQ } from '../components/ConstitutionFAQ.jsx';
import content from '../content/site-0001/content.json';

export const Cost = () => {
    // Simulator State
    const [roofSize, setRoofSize] = useState('medium');
    const [hasBattery, setHasBattery] = useState(true);

    const calcEstimate = () => {
        let baseCost = 0;
        let kw = 0;
        if (roofSize === 'small') { baseCost = 80; kw = 3; }
        if (roofSize === 'medium') { baseCost = 120; kw = 5; }
        if (roofSize === 'large') { baseCost = 180; kw = 8; }

        const batteryCost = hasBattery ? 150 : 0;
        const total = baseCost + batteryCost;

        return { total, kw };
    };

    const estimate = calcEstimate();
    return (
        <PageTemplate
            title={content.cost.attr_title_59}
            description={content.cost.attr_description_60}
            path="/cost"
        >

            <div className="w-full py-12 md:py-20">
                {/* Block 1: 冒頭3行 (Who/What) */}
                <div className="mb-8 px-4 sm:px-6 max-w-4xl mx-auto">
                    <span className="inline-block bg-orange-100 text-orange-800 font-bold px-4 py-1.5 rounded-full text-xs mb-4 border border-orange-300 tracking-wider">COST & TRANSPARENCY</span>
                    <p className="text-gray-600 text-sm font-bold leading-relaxed">
                        {content.cost.text_1}<br />
                        {content.cost.text_2}<br />
                        {content.cost.text_3}
                    </p>
                </div>

                {/* Block 2: 結論1行 */}
                <h1 className="text-3xl md:text-5xl font-black text-[#003366] leading-tight mb-8 px-4 sm:px-6 max-w-4xl mx-auto">
                    {content.cost.text_4}<span className="mx-1">0</span>{content.cost.text_5}
                </h1>

                {/* Block 3: 前提条件 (3行以内) */}
                <div className="px-4 sm:px-6 md:px-0">
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 w-full max-w-2xl text-left mb-12 lg:ml-[calc(50vw-24rem)]">
                        <p className="text-xs font-black text-orange-600 mb-2 tracking-widest uppercase">Prerequisite for Pricing</p>
                        <ul className="text-sm font-bold text-slate-700 space-y-1">
                            <li className="flex items-center gap-2"><Icon name="check" className="size-4 text-orange-600" /> {content.cost.text_6}</li>
                            <li className="flex items-center gap-2"><Icon name="check" className="size-4 text-orange-600" /> {content.cost.text_7}</li>
                            <li className="flex items-center gap-2"><Icon name="check" className="size-4 text-orange-600" /> {content.cost.text_8}</li>
                        </ul>
                    </div>
                </div>

                <div className="text-center mb-12 border-b border-gray-100 pb-12 w-full">
                    <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-10 px-4 sm:px-6">
                        {content.cost.text_9}<br />{content.cost.text_10}
                    </p>
                    <div className="w-full relative overflow-hidden">
                        <img
                            src="/images/cost_inspector.png"
                            alt={content.cost.attr_alt_61}
                            className="w-full object-cover aspect-video block"
                            loading="lazy"
                        />
                    </div>
                </div>

                <div className="bg-white p-6 md:p-10 rounded-2xl sm:rounded-xl shadow-sm border border-gray-200 mb-16 max-w-5xl mx-4 sm:mx-6 lg:mx-auto">
                    <h2 className="text-2xl font-bold text-gray-800 mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <span className="bg-[#003366] text-white px-4 py-2 rounded-lg text-sm tracking-wider shadow-sm shrink-0">POINT <span className="mx-1">1</span></span>
                        <span>{content.cost.text_11}<span className="mx-1">3</span>{content.cost.text_12}</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 relative pt-12">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl shadow-md border-4 border-blue-50"><Icon name="home" className="text-blue-600 size-8" /></div>
                            <h3 className="font-bold text-center text-[#003366] mb-3 text-lg">{content.cost.text_13}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">{content.cost.text_14}</p>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 relative pt-12">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl shadow-md border-4 border-blue-50"><Icon name="zap" className="text-yellow-500 size-8" /></div>
                            <h3 className="font-bold text-center text-[#003366] mb-3 text-lg">{content.cost.text_15}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">{content.cost.text_16}</p>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 relative pt-12">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl shadow-md border-4 border-blue-50"><Icon name="wrench" className="text-gray-600 size-8" /></div>
                            <h3 className="font-bold text-center text-[#003366] mb-3 text-lg">{content.cost.text_17}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">{content.cost.text_18}</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm mb-16 border border-gray-100 max-w-5xl mx-4 sm:mx-6 lg:mx-auto">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                        <Icon name="clipboard" className="text-orange-500 size-8 mr-2" />
                        {content.cost.text_19}
                    </h2>

                    <p className="text-gray-600 mb-6">{content.cost.text_20}</p>

                    <div className="space-y-6">
                        {/* Question 1 */}
                        <div>
                            <p className="font-bold text-gray-800 mb-3">{content.cost.text_21}</p>
                            <div className="flex flex-wrap gap-3">
                                <button onClick={() => setRoofSize('small')} className={`px-4 py-2 rounded-full font-bold text-sm transition-colors border ${roofSize === 'small' ? 'bg-[#003366] text-white border-[#003366]' : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-100'}`}>小さめ（約3kW）</button>
                                <button onClick={() => setRoofSize('medium')} className={`px-4 py-2 rounded-full font-bold text-sm transition-colors border ${roofSize === 'medium' ? 'bg-[#003366] text-white border-[#003366]' : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-100'}`}>標準サイズ（約5kW）</button>
                                <button onClick={() => setRoofSize('large')} className={`px-4 py-2 rounded-full font-bold text-sm transition-colors border ${roofSize === 'large' ? 'bg-[#003366] text-white border-[#003366]' : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-100'}`}>大きめ（約8kW）</button>
                            </div>
                        </div>

                        {/* Question 2 */}
                        <div>
                            <p className="font-bold text-gray-800 mb-3">{content.cost.text_22} <span className="text-xs font-normal text-gray-500">{content.cost.text_23}</span></p>
                            <div className="flex flex-wrap gap-3">
                                <button onClick={() => setHasBattery(true)} className={`px-4 py-2 rounded-full font-bold text-sm transition-colors border ${hasBattery ? 'bg-orange-500 text-white border-orange-500' : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-100'}`}>はい（災害時も安心）</button>
                                <button onClick={() => setHasBattery(false)} className={`px-4 py-2 rounded-full font-bold text-sm transition-colors border ${!hasBattery ? 'bg-gray-600 text-white border-gray-600' : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-100'}`}>いいえ（太陽光のみ）</button>
                            </div>
                        </div>

                        {/* Result Block (Premium Quote Card UI) */}
                        <div className="mt-10 relative">
                            {/* Card Background Glow */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-[#003366] to-orange-400 rounded-2xl blur opacity-30 animate-pulse md:-inset-1"></div>

                            <div className="relative bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.08)] bg-[linear-gradient(to_bottom,rgba(255,255,255,1),rgba(248,250,252,0.8))]">
                                <div className="absolute top-0 right-0 bg-[#003366] text-white text-xs font-bold px-3 py-1.5 md:px-4 rounded-bl-lg rounded-tr-2xl">{content.cost.text_24}</div>

                                <p className="text-sm text-gray-500 font-bold mb-1 text-center mt-2">{content.cost.text_25}</p>
                                <p className="text-center font-bold text-[#003366] mb-6 pb-4 border-b border-gray-200">
                                    パネル {estimate.kw}kW {hasBattery ? '+ 蓄電池' : 'のみ'}
                                </p>

                                <div className="text-center mb-6">
                                    <span className="text-2xl text-gray-400 font-bold align-top">{content.cost.text_26}</span>
                                    <span className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#003366] to-blue-800 tracking-tighter mx-1 drop-shadow-sm">
                                        {estimate.total}
                                    </span>
                                    <span className="text-2xl text-gray-600 font-bold baseline">{content.cost.text_27}</span>
                                    <span className="text-xl text-gray-400 font-medium ml-1">〜</span>
                                </div>

                                <p className="text-xs text-center text-red-500 font-bold mb-6 bg-red-50 p-3 rounded-md">
                                    {content.cost.text_28}<br className="md:hidden" />{content.cost.text_29}
                                </p>

                                <div className="bg-gray-50 border border-gray-100 p-4 rounded-xl relative overflow-hidden">
                                    <div className="absolute left-0 top-0 w-1 h-full bg-blue-500"></div>
                                    <p className="text-sm text-gray-700 leading-relaxed pl-2 relative z-10">
                                        <strong className="text-blue-800 flex items-center gap-1 mb-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> {content.cost.text_30}</strong>
                                        {content.cost.text_31}<br className="hidden md:block" />
                                        {content.cost.text_32}<strong className="text-red-600">{content.cost.text_33}</strong>{content.cost.text_34}<strong className="text-blue-600 font-bold border-b border-blue-600">{content.cost.text_35}</strong>{content.cost.text_36}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Block 4: 誤解の解体 (Misconception) */}
                <div className="px-4 sm:px-6 md:px-0">
                    <div className="bg-red-50 p-8 rounded-3xl border border-red-100 mb-20 max-w-5xl mx-auto">
                        <div className="flex items-center gap-3 mb-4 text-red-600">
                            <Icon name="x" className="size-8" />
                            <h2 className="text-xl font-black">{content.cost.text_37}</h2>
                        </div>
                        <p className="font-bold text-red-800 mb-4 leading-relaxed">
                            {content.cost.text_38}<span className="pink-marker">{content.cost.text_39}</span>
                        </p>
                        <p className="text-sm text-gray-700 leading-relaxed">
                            {content.cost.text_40}
                        </p>
                    </div>
                </div>

                {/* Block 5: 判断基準 (Criteria) */}
                <div className="mb-20 px-4 sm:px-6 max-w-5xl mx-auto">
                    <h2 className="text-2xl font-black text-[#003366] mb-8 border-l-4 border-orange-600 pl-4">{content.cost.text_41}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-2xl border border-slate-200">
                            <h3 className="font-bold mb-4">{content.cost.text_42}</h3>
                            <ul className="text-sm space-y-2 text-slate-600">
                                <li>{content.cost.text_43}</li>
                                <li>{content.cost.text_44}</li>
                                <li>{content.cost.text_45}</li>
                            </ul>
                        </div>
                        <div className="bg-orange-50 p-6 rounded-2xl border border-orange-200">
                            <h3 className="font-bold mb-4 text-orange-900">{content.cost.text_46}</h3>
                            <ul className="text-sm space-y-2 text-orange-800">
                                <li>{content.cost.text_47}</li>
                                <li>{content.cost.text_48}</li>
                                <li>{content.cost.text_49}</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Block 6: 実例 (Case Study) - Format Fixed: Premise -> Conclusion -> Reason -> Next Q */}
                <div className="mb-20 px-4 sm:px-6 max-w-5xl mx-auto">
                    <h2 className="text-2xl font-black text-center text-[#003366] mb-12">
                        {content.cost.text_50}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                            <p className="text-xs font-black text-blue-600 mb-1 uppercase tracking-tighter">{content.cost.text_51}</p>
                            <p className="font-bold text-slate-800 mb-4">{content.cost.text_52}</p>
                            <div className="bg-blue-50 p-4 rounded-xl mb-4">
                                <p className="text-xs font-black text-blue-600 mb-1 uppercase tracking-tighter">{content.cost.text_53}</p>
                                <p className="text-lg font-black text-blue-900">{content.cost.text_54}</p>
                            </div>
                            <p className="text-xs font-black text-blue-600 mb-1 uppercase tracking-tighter">{content.cost.text_55}</p>
                            <p className="text-sm text-slate-600 leading-relaxed mb-6">
                                {content.cost.text_56}
                            </p>
                            <div className="pt-4 border-t border-slate-100">
                                <p className="text-xs font-black text-orange-600 mb-1 uppercase tracking-tighter">{content.cost.text_57}</p>
                                <Link to="/subsidy-tokyo" className="text-sm font-bold text-slate-800 hover:text-blue-600 flex items-center gap-2">
                                    {content.cost.text_58}<Icon name="arrowRight" className="size-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-16">
                    <ConstitutionFAQ />
                    <FinalCTA />
                </div>
            </div>
        </PageTemplate>
    );
};
