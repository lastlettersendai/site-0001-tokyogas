import React from 'react';
import { PageTemplate } from '../components/PageTemplate.jsx';
import { Link } from 'react-router-dom';
import { FinalCTA } from '../components/FinalCTA.jsx';
import { Icon } from '../components/Icon.jsx';
import { ConstitutionFAQ } from '../components/ConstitutionFAQ.jsx';
import content from '../content/site-0001/content.json';

export const Outage = () => {
    return (
        <PageTemplate
            title={content.outage.attr_title_31}
            description={content.outage.attr_description_32}
            path="/outage"
        >

            <div className="w-full py-12 md:py-20">
                {/* Block 1: 冒頭3行 (Who/What) */}
                <div className="mb-8 px-4 sm:px-6 max-w-4xl mx-auto">
                    <span className="inline-block bg-yellow-100 text-yellow-800 font-bold px-4 py-1.5 rounded-full text-xs mb-4 border border-yellow-300 tracking-wider">OUTAGE SURVIVAL GUIDE</span>
                    <p className="text-gray-600 text-sm font-bold leading-relaxed">
                        {content.outage.text_1}<br />
                        {content.outage.text_2}<br />
                        {content.outage.text_3}
                    </p>
                </div>

                {/* Block 2: 結論1行 */}
                <h1 className="text-3xl md:text-5xl font-black text-[#003366] leading-tight mb-8 px-4 sm:px-6 max-w-4xl mx-auto">
                    {content.outage.text_4}
                </h1>

                {/* Block 3: 前提条件 (3行以内) */}
                <div className="px-4 sm:px-6 md:px-0">
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 w-full max-w-2xl text-left mb-12 lg:ml-[calc(50vw-24rem)]">
                        <p className="text-xs font-black text-blue-600 mb-2 tracking-widest uppercase">Prerequisite for Survival</p>
                        <ul className="text-sm font-bold text-slate-700 space-y-1">
                            <li className="flex items-center gap-2"><Icon name="check" className="size-4 text-blue-600" /> {content.outage.text_5}</li>
                            <li className="flex items-center gap-2"><Icon name="check" className="size-4 text-blue-600" /> {content.outage.text_6}</li>
                            <li className="flex items-center gap-2"><Icon name="check" className="size-4 text-blue-600" /> {content.outage.text_7}</li>
                        </ul>
                    </div>
                </div>

                <div className="w-full relative overflow-hidden bg-[#0a1128] mb-16">
                    <img
                        src="/images/outage_window.png"
                        alt={content.outage.attr_alt_33}
                        className="w-full object-cover aspect-video block opacity-80"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128] via-transparent to-transparent opacity-90"></div>
                    <div className="absolute bottom-6 left-0 right-0 text-center px-4 sm:px-6">
                        <Icon name="idea" className="text-yellow-100 size-5 mr-1 align-middle" /> <span className="text-yellow-100 font-bold tracking-wide">{content.outage.text_8}</span>
                    </div>
                </div>

                {/* Block 4: 誤解の解体 (Misconception) */}
                <div className="bg-red-50 p-8 rounded-none sm:rounded-3xl border border-red-100 mb-20 max-w-4xl mx-auto px-4 sm:px-6">
                    <div className="flex items-center gap-3 mb-4 text-red-600">
                        <Icon name="x" className="size-8" />
                        <h2 className="text-xl font-black">{content.outage.text_9}</h2>
                    </div>
                    <p className="font-bold text-red-800 mb-4 leading-relaxed">
                        {content.outage.text_10}<span className="pink-marker">{content.outage.text_11}</span>
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                        {content.outage.text_12}
                    </p>
                </div>

                {/* Block 5: 判断基準 (Criteria) */}
                <div className="mb-20 max-w-4xl mx-auto px-4 sm:px-6">
                    <h2 className="text-2xl font-black text-[#003366] mb-8 border-l-4 border-blue-600 pl-4">{content.outage.text_13}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-2xl border border-slate-200">
                            <h3 className="font-bold mb-4">{content.outage.text_14}</h3>
                            <ul className="text-sm space-y-2 text-slate-600">
                                <li>{content.outage.text_15}</li>
                                <li>{content.outage.text_16}</li>
                                <li>{content.outage.text_17}</li>
                            </ul>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
                            <h3 className="font-bold mb-4 text-blue-900">{content.outage.text_18}</h3>
                            <ul className="text-sm space-y-2 text-blue-800">
                                <li>{content.outage.text_19}</li>
                                <li>{content.outage.text_20}</li>
                                <li>{content.outage.text_21}</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Block 6: 実例 (Case Study) - Format Fixed: Premise -> Conclusion -> Reason -> Next Q */}
                <div className="mb-20 max-w-4xl mx-auto px-4 sm:px-6">
                    <h2 className="text-2xl font-black text-center text-[#003366] mb-12">
                        {content.outage.text_22}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                            <p className="text-xs font-black text-blue-600 mb-1 uppercase tracking-tighter">{content.outage.text_23}</p>
                            <p className="font-bold text-slate-800 mb-4">{content.outage.text_24}</p>
                            <div className="bg-blue-50 p-4 rounded-xl mb-4">
                                <p className="text-xs font-black text-blue-600 mb-1 uppercase tracking-tighter">{content.outage.text_25}</p>
                                <p className="text-lg font-black text-blue-900">{content.outage.text_26}</p>
                            </div>
                            <p className="text-xs font-black text-blue-600 mb-1 uppercase tracking-tighter">{content.outage.text_27}</p>
                            <p className="text-sm text-slate-600 leading-relaxed mb-6">
                                {content.outage.text_28}
                            </p>
                            <div className="pt-4 border-t border-slate-100">
                                <p className="text-xs font-black text-orange-600 mb-1 uppercase tracking-tighter">{content.outage.text_29}</p>
                                <Link to="/cost" className="text-sm font-bold text-slate-800 hover:text-blue-600 flex items-center gap-2">
                                    {content.outage.text_30}<Icon name="arrowRight" className="size-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Block 7: 申込直前FAQ */}
                <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-16">
                    <ConstitutionFAQ />
                    <FinalCTA />
                </div>
            </div>
        </PageTemplate >
    );
};
