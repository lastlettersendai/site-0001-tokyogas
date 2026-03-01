import React from 'react';
import { PageTemplate } from '../components/PageTemplate.jsx';
import { Link } from 'react-router-dom';
import { StructuredData } from '../components/StructuredData.jsx';
import { CTALink } from '../components/CTALink.jsx';
import { FinalCTA } from '../components/FinalCTA.jsx';
import { Icon } from '../components/Icon.jsx';
import { ConstitutionFAQ } from '../components/ConstitutionFAQ.jsx';
import { DiagnosisBlock } from '../components/DiagnosisBlock.jsx';
import content from '../content/site-0001/content.json';

const Home = () => {
    const articleData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "太陽光・蓄電池で後悔しないための最後の確認ポイント",
        "description": "東京ガスの太陽光・蓄電池シミュレーション。導入前に確認すべき「途中解約リスク」「費用の決まり方」「補助金の事実」をまとめました。",
        "author": {
            "@type": "Organization",
            "name": "東京ガス 太陽光・蓄電池相談所",
            "url": "https://site-0001-tokyogas.vercel.app/"
        },
        "publisher": {
            "@type": "Organization",
            "name": "東京ガス 太陽光・蓄電池相談所",
            "logo": {
                "@type": "ImageObject",
                "url": "https://site-0001-tokyogas.vercel.app/vite.svg"
            }
        },
        "datePublished": "2026-02-26T08:00:00+09:00",
        "dateModified": new Date().toISOString()
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
            }
        ]
    };

    return (
        <PageTemplate
            title={content.home.attr_title_38}
            description={content.home.attr_description_39}
            path="/"
        >
            <StructuredData data={articleData} />
            <StructuredData data={breadcrumbData} />

            {/* Hero Section */}
            <section className="bg-gradient-to-b from-[#003366] to-[#004080] text-white pt-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mt-20 -mr-20 blur-3xl"></div>

                <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col items-center gap-12 text-center pb-12">
                    <div className="w-full">
                        {/* Block 1: 冒頭3行 (Who/What) */}
                        <div className="mb-6">
                            <span className="inline-block bg-blue-800 text-blue-100 font-bold px-4 py-1.5 rounded-full text-xs md:text-sm border border-blue-700 tracking-wider shadow-inner mb-4">TOKYO GAS SOLAR SOLUTIONS</span>
                            <p className="text-blue-100/80 text-sm font-bold leading-relaxed">
                                {content.home.text_1}<br />
                                {content.home.text_2}<br />
                                {content.home.text_3}
                            </p>
                        </div>

                        {/* Block 2: 結論1行 */}
                        <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black leading-tight mb-8 tracking-tight">
                            {content.home.text_4}<span className="text-orange-400"><span className="mx-1">0</span>{content.home.text_5}</span>{content.home.text_6}<br />
                            <span className="pink-marker"><span className="mx-1">15</span>{content.home.text_7}</span>{content.home.text_8}
                        </h1>

                        {/* Block 3: 前提条件 (3行以内) */}
                        <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20 inline-block w-full max-w-md text-left mb-10">
                            <p className="text-xs font-black text-orange-400 mb-2 tracking-widest uppercase">Target & Premise</p>
                            <ul className="text-sm font-bold text-white space-y-1">
                                <li className="flex items-center gap-2"><Icon name="check" className="size-4 text-orange-400" /> {content.home.text_9}</li>
                                <li className="flex items-center gap-2"><Icon name="check" className="size-4 text-orange-400" /> {content.home.text_10}</li>
                                <li className="flex items-center gap-2"><Icon name="check" className="size-4 text-orange-400" /> {content.home.text_11}</li>
                            </ul>
                        </div>

                        <div>
                            <Link to="/eligible" className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white font-black text-xl py-4 px-8 rounded-full hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto text-center">
                                {content.home.text_12} <Icon name="arrowRight" className="size-6" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Full Bleed Hero Image Block */}
                <div className="w-full relative">
                    <picture>
                        <source srcSet="/images/home_hero.png" type="image/png" />
                        <img
                            src="/images/home_hero.png"
                            alt={content.home.attr_alt_40}
                            className="w-full object-cover aspect-video block"
                            decoding="async"
                            fetchPriority="high"
                            loading="eager"
                        />
                    </picture>
                </div>
            </section>

            {/* Block 4: 誤解の解体 (Misconception) */}
            <section className="py-16 bg-[#001a33] text-white">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="bg-red-500 text-white p-2 rounded-lg">
                                <Icon name="x" className="size-6" />
                            </div>
                            <h2 className="text-xl md:text-2xl font-black">{content.home.text_13}</h2>
                        </div>
                        <p className="text-lg md:text-xl font-bold leading-relaxed mb-6">
                            {content.home.text_14}<br className="hidden md:block" />
                            <span className="text-red-400">{content.home.text_15}</span>
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            {content.home.text_16}
                        </p>
                    </div>
                </div>
            </section>

            {/* Block 5: 判断基準 (Criteria) */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-blue-600 font-bold tracking-widest text-sm mb-2 block uppercase">Judgment Criteria</span>
                        <h2 className="text-3xl md:text-4xl font-black text-slate-800">{content.home.text_17}</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            {[
                                content.home.str_41,
                                content.home.str_42,
                                content.home.str_43,
                                content.home.str_44
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 font-bold text-slate-700">
                                    <Icon name="check" className="text-blue-600 size-6 shrink-0" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                        <div className="bg-blue-600 p-8 rounded-3xl text-white flex flex-col justify-center">
                            <p className="text-xl font-black mb-4 leading-tight">{content.home.text_18}<br />{content.home.text_19}</p>
                            <p className="text-blue-100 text-sm leading-relaxed">
                                {content.home.text_20}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Decision Diagnosis Block (Constitution Requirement) */}
            <DiagnosisBlock />

            {/* Block 6: 実例 (Case Study) - Format Fixed: Premise -> Conclusion -> Reason -> Next Q */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-blue-600 font-bold tracking-widest text-sm mb-2 block uppercase">Simulation Results</span>
                        <h2 className="text-3xl md:text-4xl font-black text-slate-800">{content.home.text_21}</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Case 1 */}
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
                            <div className="space-y-6">
                                <div>
                                    <p className="text-xs font-black text-blue-600 mb-1 uppercase tracking-tighter">{content.home.text_22}</p>
                                    <p className="font-bold text-slate-800">{content.home.text_23}</p>
                                </div>
                                <div className="bg-blue-50 p-4 rounded-xl">
                                    <p className="text-xs font-black text-blue-600 mb-1 uppercase tracking-tighter">{content.home.text_24}</p>
                                    <p className="text-xl font-black text-blue-900">{content.home.text_25}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-black text-blue-600 mb-1 uppercase tracking-tighter">{content.home.text_26}</p>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        {content.home.text_27}
                                    </p>
                                </div>
                                <div className="pt-4 border-t border-slate-100">
                                    <p className="text-xs font-black text-orange-600 mb-1 uppercase tracking-tighter">{content.home.text_28}</p>
                                    <Link to="/subsidy-payment" className="text-sm font-bold text-slate-800 hover:text-blue-600 flex items-center gap-2">
                                        {content.home.text_29}<Icon name="arrowRight" className="size-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Case 2 */}
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
                            <div className="space-y-6">
                                <div>
                                    <p className="text-xs font-black text-blue-600 mb-1 uppercase tracking-tighter">{content.home.text_30}</p>
                                    <p className="font-bold text-slate-800">{content.home.text_31}</p>
                                </div>
                                <div className="bg-blue-50 p-4 rounded-xl">
                                    <p className="text-xs font-black text-blue-600 mb-1 uppercase tracking-tighter">{content.home.text_32}</p>
                                    <p className="text-xl font-black text-blue-900">{content.home.text_33}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-black text-blue-600 mb-1 uppercase tracking-tighter">{content.home.text_34}</p>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        {content.home.text_35}
                                    </p>
                                </div>
                                <div className="pt-4 border-t border-slate-100">
                                    <p className="text-xs font-black text-orange-600 mb-1 uppercase tracking-tighter">{content.home.text_36}</p>
                                    <Link to="/cancellation" className="text-sm font-bold text-slate-800 hover:text-blue-600 flex items-center gap-2">
                                        {content.home.text_37}<Icon name="arrowRight" className="size-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 7: 申込直前FAQ (Constitution Requirement) */}
            <ConstitutionFAQ />



            <FinalCTA />

        </PageTemplate>
    );
};

export default Home;
