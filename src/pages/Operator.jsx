import React from 'react';
import { PageTemplate } from '../components/PageTemplate.jsx';
import { Link } from 'react-router-dom';
import { StructuredData } from '../components/StructuredData.jsx';
import { Icon } from '../components/Icon.jsx';
import { ConstitutionFAQ } from '../components/ConstitutionFAQ.jsx';
import { FinalCTA } from '../components/FinalCTA.jsx';
import content from '../content/site-0001/content.json';

export const Operator = () => {
    const orgData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "東京ガス 太陽光・蓄電池相談所",
        "url": "https://site-0001-tokyogas.vercel.app/",
        "logo": "https://site-0001-tokyogas.vercel.app/vite.svg",
        "description": "当サイトはアフィリエイトプログラムにより商品等をご紹介致しております。",
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer support",
            "url": "https://home.tokyo-gas.co.jp/power/solar/index.html"
        }
    };

    const breadcrumbData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "ホーム",
                "item": "https://site-0001-tokyogas.vercel.app/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "運営者情報",
                "item": "https://site-0001-tokyogas.vercel.app/operator"
            }
        ]
    };

    return (
        <PageTemplate
            title={content.operator.attr_title_43}
            description={content.operator.attr_description_44}
            path="/operator"
        >
            <StructuredData data={orgData} />
            <StructuredData data={breadcrumbData} />

            <div className="w-full py-12 md:py-20">
                {/* Block 1: 冒頭3行 (Who/What) */}
                <div className="mb-8 text-left px-4 sm:px-6 max-w-4xl mx-auto">
                    <span className="inline-block bg-gray-100 text-gray-800 font-bold px-4 py-1.5 rounded-full text-xs mb-4 border border-gray-300 tracking-wider">ABOUT US</span>
                    <p className="text-gray-600 text-sm font-bold leading-relaxed">
                        {content.operator.text_1}<br />
                        {content.operator.text_2}<br />
                        {content.operator.text_3}
                    </p>
                </div>

                {/* Block 2: 結論1行 */}
                <h1 className="text-3xl md:text-5xl font-black text-[#003366] leading-tight mb-8 px-4 sm:px-6 max-w-4xl mx-auto">
                    {content.operator.text_4}
                </h1>

                {/* Block 3: 前提条件 (3行以内) */}
                <div className="px-4 sm:px-6 md:px-0">
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 w-full max-w-2xl text-left mb-12 lg:ml-[calc(50vw-24rem)]">
                        <p className="text-xs font-black text-gray-600 mb-2 tracking-widest uppercase">Prerequisite for Information</p>
                        <ul className="text-sm font-bold text-slate-700 space-y-1">
                            <li className="flex items-center gap-2"><Icon name="check" className="size-4 text-gray-600" /> {content.operator.text_5}</li>
                            <li className="flex items-center gap-2"><Icon name="check" className="size-4 text-gray-600" /> {content.operator.text_6}</li>
                            <li className="flex items-center gap-2"><Icon name="check" className="size-4 text-gray-600" /> {content.operator.text_7}</li>
                        </ul>
                    </div>
                </div>

                <div className="text-center mb-16 border-b border-gray-100 pb-12 w-full">
                    <div className="w-full relative overflow-hidden">
                        <img
                            src="/images/operator_building.png"
                            alt={content.operator.attr_alt_45}
                            className="w-full object-cover aspect-video block"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/80 via-transparent to-transparent"></div>
                        <div className="absolute bottom-6 left-6 text-white text-left px-4 sm:px-6">
                            <p className="font-bold text-lg md:text-xl drop-shadow-md tracking-wider">{content.operator.text_8}</p>
                            <p className="text-xs md:text-sm text-blue-100 drop-shadow flex items-center gap-2 mt-1">
                                <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                                {content.operator.text_9}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="space-y-12 max-w-3xl mx-auto px-4 sm:px-6">
                    {/* Block 4: 誤解の解体 (Misconception) */}
                    <div className="px-4 sm:px-6 md:px-0">
                        <div className="bg-red-50 p-8 rounded-3xl border border-red-100 mb-20 max-w-5xl mx-auto">
                            <div className="flex items-center gap-3 mb-4 text-red-600">
                                <Icon name="x" className="size-8" />
                                <h2 className="text-xl font-black">{content.operator.text_10}</h2>
                            </div>
                            <p className="font-bold text-red-800 mb-4 leading-relaxed">
                                {content.operator.text_11}<span className="pink-marker">{content.operator.text_12}</span>
                            </p>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                {content.operator.text_13}
                            </p>
                        </div>
                    </div>

                    {/* Block 5: 判断基準 (Criteria) */}
                    <div className="mb-20">
                        <h2 className="text-2xl font-black text-[#003366] mb-8 border-l-4 border-gray-600 pl-4">{content.operator.text_14}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-2xl border border-slate-200">
                                <h3 className="font-bold mb-4">{content.operator.text_15}</h3>
                                <ul className="text-sm space-y-2 text-slate-600">
                                    <li>{content.operator.text_16}</li>
                                    <li>{content.operator.text_17}</li>
                                    <li>{content.operator.text_18}</li>
                                </ul>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                <h3 className="font-bold mb-4 text-gray-900">{content.operator.text_19}</h3>
                                <ul className="text-sm space-y-2 text-gray-800">
                                    <li>{content.operator.text_20}</li>
                                    <li>{content.operator.text_21}</li>
                                    <li>{content.operator.text_22}</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Block 6: 実例 (Case Study) */}
                    <div className="mb-20">
                        <h2 className="text-2xl font-black text-center text-[#003366] mb-12">
                            {content.operator.text_23}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                                <p className="text-xs font-black text-blue-600 mb-1 uppercase tracking-tighter">{content.operator.text_24}</p>
                                <p className="font-bold text-slate-800 mb-4">{content.operator.text_25}</p>
                                <div className="bg-blue-50 p-4 rounded-xl mb-4">
                                    <p className="text-xs font-black text-blue-600 mb-1 uppercase tracking-tighter">{content.operator.text_26}</p>
                                    <p className="text-lg font-black text-blue-900">{content.operator.text_27}</p>
                                </div>
                                <p className="text-xs font-black text-blue-600 mb-1 uppercase tracking-tighter">{content.operator.text_28}</p>
                                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                                    {content.operator.text_29}
                                </p>
                                <div className="pt-4 border-t border-slate-100">
                                    <p className="text-xs font-black text-orange-600 mb-1 uppercase tracking-tighter">{content.operator.text_30}</p>
                                    <a href="https://home.tokyo-gas.co.jp/power/solar/index.html" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-slate-800 hover:text-blue-600 flex items-center gap-2">
                                        {content.operator.text_31}<Icon name="arrowRight" className="size-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-12 max-w-3xl mx-auto mb-20">
                        {/* Section 1: PR Statement (Preserved as required for an Operator page) */}
                        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="bg-gray-50 border-b border-gray-100 px-8 py-5 flex items-center gap-4">
                                <span className="w-10 h-10 rounded-full bg-blue-100 text-[#003366] font-black flex items-center justify-center shrink-0">1</span>
                                <h2 className="text-xl md:text-2xl font-bold text-gray-800 tracking-tight">
                                    {content.operator.text_32}
                                </h2>
                            </div>
                            <div className="p-8 text-gray-600 leading-relaxed text-sm md:text-base space-y-5">
                                <p>{content.operator.text_33}<strong className="text-[#003366]">PR</strong>{content.operator.text_34}</p>
                            </div>
                        </section>

                        {/* Section 2: Disclaimer (Preserved as required for an Operator page) */}
                        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="bg-gray-50 border-b border-gray-100 px-8 py-5 flex items-center gap-4">
                                <span className="w-10 h-10 rounded-full bg-blue-100 text-[#003366] font-black flex items-center justify-center shrink-0">2</span>
                                <h2 className="text-xl md:text-2xl font-bold text-gray-800 tracking-tight">
                                    {content.operator.text_35}
                                </h2>
                            </div>
                            <div className="p-8 text-gray-600 leading-relaxed text-sm md:text-base">
                                <div className="bg-red-50 p-5 rounded-lg border border-red-100 mb-6">
                                    <ul className="list-none space-y-4 font-bold text-red-800 text-xs">
                                        <li>{content.operator.text_36}</li>
                                        <li>{content.operator.text_37}</li>
                                        <li>{content.operator.text_38}</li>
                                    </ul>
                                    <p className="text-sm">{content.operator.text_39}</p>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Block 7: 申込直前FAQ */}
                    <ConstitutionFAQ />

                    <FinalCTA />

                    {/* Internal Links Navigation */}
                    <div className="border-t-2 border-gray-100 pt-10 mt-16 pb-12">
                        <h3 className="font-bold text-lg text-gray-700 mb-6 text-center">{content.operator.text_40}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Link to="/eligible" className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 text-center flex items-center justify-between group">
                                <div className="text-left w-full">
                                    <div className="text-xs text-orange-500 font-bold mb-1 tracking-wider uppercase">Check</div>
                                    <div className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors text-lg">{content.operator.text_41}</div>
                                </div>
                                <Icon name="arrowRight" className="size-6 text-gray-300 group-hover:text-blue-600 transition-transform group-hover:translate-x-2" />
                            </Link>
                            <Link to="/" className="bg-[#003366] p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-[#003366] text-center flex items-center justify-between group">
                                <div className="text-left w-full">
                                    <div className="text-xs text-blue-200 font-bold mb-1 tracking-wider uppercase">Home</div>
                                    <div className="font-bold text-white transition-colors text-lg">{content.operator.text_42}</div>
                                </div>
                                <Icon name="arrowRight" className="size-6 text-blue-300 transition-transform group-hover:translate-x-2" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </PageTemplate>
    );
};
