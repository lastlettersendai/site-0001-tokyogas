import React from 'react';
import { PageTemplate } from '../components/PageTemplate.jsx';
import { Link } from 'react-router-dom';
import { FinalCTA } from '../components/FinalCTA.jsx';
import { Icon } from '../components/Icon.jsx';
import { ConstitutionFAQ } from '../components/ConstitutionFAQ.jsx';
import content from '../content/site-0001/content.json';

export const Installation = () => {
    return (
        <PageTemplate
            title={content.installation.attr_title_62}
            description={content.installation.attr_description_63}
            path="/installation"
        >

            <div className="w-full py-12 md:py-20">
                {/* Block 1: 冒頭3行 (Who/What) */}
                <div className="mb-8 px-4 sm:px-6 max-w-4xl mx-auto">
                    <span className="inline-block bg-blue-100 text-blue-800 font-bold px-4 py-1.5 rounded-full text-xs mb-4 border border-blue-300 tracking-wider uppercase">INSTALLATION QUALITY</span>
                    <p className="text-gray-600 text-sm font-bold leading-relaxed">
                        {content.installation.text_1}<br />
                        {content.installation.text_2}<br />
                        {content.installation.text_3}
                    </p>
                </div>

                {/* Block 2: 結論1行 */}
                <h1 className="text-3xl md:text-5xl font-black text-[#003366] leading-tight mb-8 px-4 sm:px-6 max-w-4xl mx-auto">
                    {content.installation.text_4}
                </h1>

                {/* Block 3: 前提条件 (3行以内) */}
                <div className="px-4 sm:px-6 md:px-0">
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 inline-block w-full max-w-2xl text-left mb-12 lg:ml-[calc(50vw-24rem)]">
                        <p className="text-xs font-black text-blue-600 mb-2 tracking-widest uppercase">Prerequisite for Safety</p>
                        <ul className="text-sm font-bold text-slate-700 space-y-1">
                            <li className="flex items-center gap-2"><Icon name="check" className="size-4 text-blue-600" /> {content.installation.text_5}</li>
                            <li className="flex items-center gap-2"><Icon name="check" className="size-4 text-blue-600" /> {content.installation.text_6}</li>
                            <li className="flex items-center gap-2"><Icon name="check" className="size-4 text-blue-600" /> {content.installation.text_7}</li>
                        </ul>
                    </div>
                </div>

                <div className="text-center mb-16 border-b border-gray-100 pb-12 w-full">
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed mb-10 px-4 sm:px-6">
                        {content.installation.text_8}
                    </p>
                    <div className="w-full relative overflow-hidden">
                        <img
                            src="/images/installation_workers.png"
                            alt={content.installation.attr_alt_64}
                            className="w-full object-cover aspect-video block"
                            loading="lazy"
                        />
                    </div>
                </div>

                {/* Risk Cards */}
                <div className="mb-20 max-w-4xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-10">
                        <span className="text-red-500 font-bold tracking-widest text-sm mb-2 block uppercase">Danger</span>
                        <h2 className="text-2xl md:text-3xl font-black text-gray-800 mb-4">{content.installation.text_9}<br className="md:hidden" />{content.installation.text_10}</h2>
                        <p className="text-gray-600">{content.installation.text_11}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white border-t-4 border-red-500 p-6 rounded-b-xl shadow-[0_4px_20px_rgb(0,0,0,0.05)] hover:-translate-y-1 transition-transform">
                            <div className="mb-4 flex items-center justify-center"><Icon name="droplet" className="text-blue-500 size-8" /></div>
                            <h3 className="font-bold text-gray-800 text-lg mb-3">{content.installation.text_12}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">{content.installation.text_13}</p>
                        </div>
                        <div className="bg-white border-t-4 border-red-500 p-6 rounded-b-xl shadow-[0_4px_20px_rgb(0,0,0,0.05)] hover:-translate-y-1 transition-transform">
                            <div className="mb-4 flex items-center justify-center"><Icon name="wind" className="text-gray-500 size-8" /></div>
                            <h3 className="font-bold text-gray-800 text-lg mb-3">{content.installation.text_14}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">{content.installation.text_15}</p>
                        </div>
                        <div className="bg-white border-t-4 border-red-500 p-6 rounded-b-xl shadow-[0_4px_20px_rgb(0,0,0,0.05)] hover:-translate-y-1 transition-transform">
                            <div className="mb-4 flex items-center justify-center"><Icon name="phoneOff" className="text-red-500 size-8" /></div>
                            <h3 className="font-bold text-gray-800 text-lg mb-3">{content.installation.text_16}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">{content.installation.text_17}</p>
                        </div>
                    </div>
                </div>

                {/* Block 4: 誤解の解体 (Misconception) */}
                <div className="bg-red-50 p-8 rounded-none sm:rounded-3xl border border-red-100 mb-20 max-w-4xl mx-auto px-4 sm:px-6">
                    <div className="flex items-center gap-3 mb-4 text-red-600">
                        <Icon name="x" className="size-8" />
                        <h2 className="text-xl font-black">{content.installation.text_18}</h2>
                    </div>
                    <p className="font-bold text-red-800 mb-4 leading-relaxed">
                        {content.installation.text_19}<span className="underline decoration-red-500 decoration-2">{content.installation.text_20}</span>{content.installation.text_21}
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                        {content.installation.text_22}
                    </p>
                </div>

                {/* Block 5: 判断基準 (Criteria) */}
                <div className="mb-20 max-w-4xl mx-auto px-4 sm:px-6">
                    <h2 className="text-2xl font-black text-[#003366] mb-8 border-l-4 border-blue-600 pl-4">{content.installation.text_23}<span className="mx-1">3</span>{content.installation.text_24}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-2xl border border-slate-200">
                            <h3 className="font-bold mb-4">{content.installation.text_25}</h3>
                            <ul className="text-sm space-y-2 text-slate-600">
                                <li>{content.installation.text_26}</li>
                                <li>{content.installation.text_27}</li>
                                <li>{content.installation.text_28}</li>
                            </ul>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
                            <h3 className="font-bold mb-4 text-blue-900">{content.installation.text_29}</h3>
                            <ul className="text-sm space-y-2 text-blue-800">
                                <li>{content.installation.text_30}</li>
                                <li>{content.installation.text_31}</li>
                                <li>{content.installation.text_32}</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Split Layout: Warranty Cards */}
                <div className="bg-[#001a33] rounded-3xl overflow-hidden shadow-2xl mb-20 max-w-4xl mx-auto mx-4 sm:mx-6">
                    <div className="w-full p-8 md:p-12 text-white">
                        <h2 className="text-2xl md:text-3xl font-black mb-6">
                            {content.installation.text_33}
                        </h2>
                        <p className="text-gray-300 mb-8 leading-relaxed">
                            {content.installation.text_34}
                        </p>

                        <div className="space-y-4">
                            <div className="bg-white/5 border border-white/10 p-5 rounded-xl hover:bg-white/10 transition-colors">
                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-500/20 w-12 h-12 rounded-lg flex items-center justify-center shrink-0"><Icon name="shield" className="text-blue-300 size-6" /></div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">{content.installation.text_35}</h3>
                                        <p className="text-sm text-gray-400">{content.installation.text_36}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-5 rounded-xl hover:bg-white/10 transition-colors">
                                <div className="flex items-start gap-4">
                                    <div className="bg-orange-500/20 w-12 h-12 rounded-lg flex items-center justify-center shrink-0"><Icon name="building" className="text-orange-300 size-6" /></div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">{content.installation.text_37}</h3>
                                        <p className="text-sm text-gray-400">{content.installation.text_38}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Comparison Table */}
                <div className="mb-20 max-w-4xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-10">
                        <h3 className="text-2xl font-black text-gray-800 mb-4">{content.installation.text_39}</h3>
                        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
                            {content.installation.text_40}
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                        <div className="flex flex-col md:flex-row border-b border-gray-100 bg-gray-50">
                            <div className="p-4 md:p-6 w-full md:w-1/3 flex items-center font-bold text-gray-500 border-r border-gray-100">{content.installation.text_41}</div>
                            <div className="p-4 md:p-6 w-full md:w-1/3 text-center bg-red-50 border-r border-gray-100 flex flex-col justify-center">
                                <span className="text-xs font-bold text-red-500 mb-1">Risk</span>
                                <span className="font-black text-gray-800 text-lg">{content.installation.text_42}</span>
                            </div>
                            <div className="p-4 md:p-6 w-full md:w-1/3 text-center bg-[#003366] text-white flex flex-col justify-center">
                                <span className="text-xs font-bold text-blue-300 mb-1">Safe</span>
                                <span className="font-black text-lg">{content.installation.text_43}</span>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row border-b border-gray-100">
                            <div className="p-4 md:p-6 w-full md:w-1/3 font-bold text-gray-700 bg-gray-50 md:bg-white border-r border-gray-100 flex items-center">{content.installation.text_44}</div>
                            <div className="p-4 md:p-6 w-full md:w-1/3 text-center text-gray-600 border-r border-gray-100">{content.installation.text_45}</div>
                            <div className="p-4 md:p-6 w-full md:w-1/3 text-center text-blue-800 font-bold bg-blue-50">{content.installation.text_46}</div>
                        </div>

                        <div className="flex flex-col md:flex-row border-b border-gray-100">
                            <div className="p-4 md:p-6 w-full md:w-1/3 font-bold text-gray-700 bg-gray-50 md:bg-white border-r border-gray-100 flex items-center">{content.installation.text_47}</div>
                            <div className="p-4 md:p-6 w-full md:w-1/3 text-center text-red-600 font-bold border-r border-gray-100 bg-red-50/50">{content.installation.text_48}</div>
                            <div className="p-4 md:p-6 w-full md:w-1/3 text-center text-blue-800 font-bold bg-blue-50">{content.installation.text_49}</div>
                        </div>

                        <div className="flex flex-col md:flex-row">
                            <div className="p-4 md:p-6 w-full md:w-1/3 font-bold text-gray-700 bg-gray-50 md:bg-white border-r border-gray-100 flex items-center">{content.installation.text_50}</div>
                            <div className="p-4 md:p-6 w-full md:w-1/3 text-center text-gray-600 border-r border-gray-100">{content.installation.text_51}</div>
                            <div className="p-4 md:p-6 w-full md:w-1/3 text-center text-blue-800 font-bold bg-blue-50">{content.installation.text_52}</div>
                        </div>
                    </div>
                </div>

                {/* Block 6: 実例 (Case Study) - Format Fixed: Premise -> Conclusion -> Reason -> Next Q */}
                <div className="mb-20 max-w-4xl mx-auto px-4 sm:px-6">
                    <h2 className="text-2xl font-black text-center text-[#003366] mb-12">
                        {content.installation.text_53}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                            <p className="text-xs font-black text-blue-600 mb-1 uppercase tracking-tighter">{content.installation.text_54}</p>
                            <p className="font-bold text-slate-800 mb-4">{content.installation.text_55}</p>
                            <div className="bg-blue-50 p-4 rounded-xl mb-4">
                                <p className="text-xs font-black text-blue-600 mb-1 uppercase tracking-tighter">{content.installation.text_56}</p>
                                <p className="text-lg font-black text-blue-900">{content.installation.text_57}</p>
                            </div>
                            <p className="text-xs font-black text-blue-600 mb-1 uppercase tracking-tighter">{content.installation.text_58}</p>
                            <p className="text-sm text-slate-600 leading-relaxed mb-6">
                                {content.installation.text_59}
                            </p>
                            <div className="pt-4 border-t border-slate-100">
                                <p className="text-xs font-black text-orange-600 mb-1 uppercase tracking-tighter">{content.installation.text_60}</p>
                                <Link to="/faq" className="text-sm font-bold text-slate-800 hover:text-blue-600 flex items-center gap-2">
                                    {content.installation.text_61}<Icon name="arrowRight" className="size-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Block 7: 申込直前FAQ */}
                <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-16">
                    <ConstitutionFAQ />
                </div>
            </div>
        </PageTemplate>
    );
};
