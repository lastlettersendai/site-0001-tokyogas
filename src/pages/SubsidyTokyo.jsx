import React from 'react';
import { PageTemplate } from '../components/PageTemplate.jsx';
import { Link } from 'react-router-dom';
import { FinalCTA } from '../components/FinalCTA.jsx';
import { Icon } from '../components/Icon.jsx';
import { ConstitutionFAQ } from '../components/ConstitutionFAQ.jsx';
import content from '../content/site-0001/content.json';

export const SubsidyTokyo = () => {
    return (
        <PageTemplate
            title={content.subsidytokyo.attr_title_56}
            description={content.subsidytokyo.attr_description_57}
            path="/subsidy-tokyo"
        >

            <div className="w-full py-12 md:py-20">
                {/* Block 1: 冒頭3行 (Who/What) */}
                <div className="mb-8 px-4 sm:px-6 max-w-5xl mx-auto">
                    <span className="inline-block bg-blue-100 text-blue-800 font-bold px-4 py-1.5 rounded-full text-xs mb-4 border border-blue-300 tracking-wider">SUBSIDY STRATEGY</span>
                    <p className="text-gray-600 text-sm font-bold leading-relaxed">
                        {content.subsidytokyo.text_1}<br />
                        {content.subsidytokyo.text_2}<br />
                        {content.subsidytokyo.text_3}
                    </p>
                </div>

                {/* Block 2: 結論1行 */}
                <h1 className="text-3xl md:text-5xl font-black text-[#003366] leading-tight mb-8 px-4 sm:px-6 max-w-5xl mx-auto">
                    {content.subsidytokyo.text_4}
                </h1>

                {/* Block 3: 前提条件 (3行以内) */}
                <div className="px-4 sm:px-6 md:px-0">
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 w-full max-w-2xl text-left mb-12 lg:ml-[calc(50vw-24rem)]">
                        <p className="text-xs font-black text-blue-600 mb-2 tracking-widest uppercase">Prerequisite for Subsidy</p>
                        <ul className="text-sm font-bold text-slate-700 space-y-1">
                            <li className="flex items-center gap-2"><Icon name="check" className="size-4 text-blue-600" /> {content.subsidytokyo.text_5}</li>
                            <li className="flex items-center gap-2"><Icon name="check" className="size-4 text-blue-600" /> {content.subsidytokyo.text_6}</li>
                            <li className="flex items-center gap-2"><Icon name="check" className="size-4 text-blue-600" /> {content.subsidytokyo.text_7}</li>
                        </ul>
                    </div>
                </div>

                <div className="w-full relative overflow-hidden mb-16">
                    <img
                        src="/images/subsidy_tokyo.png"
                        alt={content.subsidytokyo.attr_alt_58}
                        className="w-full object-cover aspect-video block"
                        loading="lazy"
                    />
                </div>

                <div className="text-center mb-16 border-b border-gray-100 pb-12 px-4 sm:px-6 max-w-5xl mx-auto">
                    <p className="text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed text-lg">
                        {content.subsidytokyo.text_8}<strong className="text-red-600">{content.subsidytokyo.text_9}</strong>
                    </p>
                </div>

                {/* Max Subsidy Cards */}
                <div className="mb-20 max-w-5xl mx-auto px-4 sm:px-6">
                    <h2 className="text-2xl md:text-3xl font-black text-center text-gray-800 mb-8">
                        {content.subsidytokyo.text_10}<br className="md:hidden" />{content.subsidytokyo.text_11}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                        {/* Glow Effect */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-yellow-200 via-orange-200 to-yellow-200 rounded-3xl blur-xl opacity-30 -z-10"></div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-yellow-200 relative overflow-hidden group hover:-translate-y-1 transition-transform">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-100 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
                            <div className="mb-4"><Icon name="sun" className="text-yellow-500 size-10" /></div>
                            <h3 className="font-bold text-gray-800 text-xl mb-2">{content.subsidytokyo.text_12}</h3>
                            <div className="flex items-baseline gap-2 mb-4">
                                <span className="text-sm text-gray-600 font-bold">{content.subsidytokyo.text_13}</span>
                                <span className="text-4xl md:text-5xl font-black text-orange-500 tracking-tighter">15<span className="text-2xl">{content.subsidytokyo.text_14}</span></span>
                            </div>
                            <p className="text-sm text-gray-600 leading-relaxed p-3 bg-gray-50 rounded-xl border border-gray-100">
                                {content.subsidytokyo.text_15}<strong className="text-red-500 text-base">{content.subsidytokyo.text_16}</strong>{content.subsidytokyo.text_17}
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-yellow-200 relative overflow-hidden group hover:-translate-y-1 transition-transform">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
                            <div className="mb-4"><Icon name="battery" className="text-blue-500 size-10" /></div>
                            <h3 className="font-bold text-gray-800 text-xl mb-2">{content.subsidytokyo.text_18}</h3>
                            <div className="flex items-baseline gap-2 mb-4">
                                <span className="text-sm text-gray-600 font-bold">{content.subsidytokyo.text_19}</span>
                                <span className="text-4xl md:text-5xl font-black text-[#003366] tracking-tighter">3/4<span className="text-2xl ml-1">{content.subsidytokyo.text_20}</span></span>
                            </div>
                            <p className="text-sm text-gray-600 leading-relaxed p-3 bg-gray-50 rounded-xl border border-gray-100">
                                {content.subsidytokyo.text_21}
                            </p>
                        </div>
                    </div>
                    <p className="text-center text-xs text-gray-500 mt-6 bg-gray-100 py-2 rounded-full inline-block px-4 mx-auto w-full md:w-auto">
                        {content.subsidytokyo.text_22}
                    </p>
                </div>

                {/* Important Warnings */}
                <div className="bg-gradient-to-br from-red-50 to-orange-50 border-l-8 border-red-500 p-8 rounded-none sm:rounded-r-2xl mb-20 shadow-sm relative overflow-hidden max-w-5xl mx-auto px-4 sm:px-6">
                    <div className="absolute top-0 right-0 text-red-100 opacity-30 text-9xl font-black -mt-4 -mr-4">!</div>
                    <h2 className="text-2xl font-black text-red-800 mb-6 flex items-center gap-3 relative z-10">
                        <Icon name="shieldAlert" className="size-8 text-red-600" />
                        {content.subsidytokyo.text_23}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-red-100">
                            <h3 className="font-bold text-red-700 mb-2 flex items-center gap-2"><Icon name="clock" className="text-red-700 size-5" /> {content.subsidytokyo.text_24}</h3>
                            <p className="text-sm text-gray-700">{content.subsidytokyo.text_25}</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-red-100">
                            <h3 className="font-bold text-red-700 mb-2 flex items-center gap-2"><Icon name="ban" className="text-red-700 size-5" /> {content.subsidytokyo.text_26}</h3>
                            <p className="text-sm text-gray-700">{content.subsidytokyo.text_27}</p>
                        </div>
                    </div>
                </div>

                {/* Block 4: 誤解の解体 (Misconception) */}
                <div className="bg-red-50 p-8 rounded-none sm:rounded-3xl border border-red-100 mb-20 max-w-5xl mx-auto px-4 sm:px-6">
                    <div className="flex items-center gap-3 mb-4 text-red-600">
                        <Icon name="x" className="size-8" />
                        <h2 className="text-xl font-black">{content.subsidytokyo.text_28}</h2>
                    </div>
                    <p className="font-bold text-red-800 mb-4 leading-relaxed">
                        {content.subsidytokyo.text_29}<span className="pink-marker">{content.subsidytokyo.text_30}</span>
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                        {content.subsidytokyo.text_31}
                    </p>
                </div>

                {/* Block 5: 判断基準 (Criteria) */}
                <div className="mb-20 max-w-5xl mx-auto px-4 sm:px-6">
                    <h2 className="text-2xl font-black text-[#003366] mb-8 border-l-4 border-blue-600 pl-4">{content.subsidytokyo.text_32}<span className="mx-1">3</span>{content.subsidytokyo.text_33}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-2xl border border-slate-200">
                            <h3 className="font-bold mb-4">{content.subsidytokyo.text_34}</h3>
                            <ul className="text-sm space-y-2 text-slate-600">
                                <li>{content.subsidytokyo.text_35}</li>
                                <li>{content.subsidytokyo.text_36}</li>
                                <li>{content.subsidytokyo.text_37}</li>
                            </ul>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
                            <h3 className="font-bold mb-4 text-blue-900">{content.subsidytokyo.text_38}</h3>
                            <ul className="text-sm space-y-2 text-blue-800">
                                <li>{content.subsidytokyo.text_39}</li>
                                <li>{content.subsidytokyo.text_40}</li>
                                <li>{content.subsidytokyo.text_41}</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Block 6: 実例 (Case Study) - Format Fixed: Premise -> Conclusion -> Reason -> Next Q */}
                <div className="mb-20 max-w-5xl mx-auto px-4 sm:px-6">
                    <h2 className="text-2xl font-black text-center text-[#003366] mb-12">
                        {content.subsidytokyo.text_42}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                            <p className="text-xs font-black text-blue-600 mb-1 uppercase tracking-tighter">{content.subsidytokyo.text_43}</p>
                            <p className="font-bold text-slate-800 mb-4">{content.subsidytokyo.text_44}</p>
                            <div className="bg-blue-50 p-4 rounded-xl mb-4">
                                <p className="text-xs font-black text-blue-600 mb-1 uppercase tracking-tighter">{content.subsidytokyo.text_45}</p>
                                <p className="text-lg font-black text-blue-900">{content.subsidytokyo.text_46}</p>
                            </div>
                            <p className="text-xs font-black text-blue-600 mb-1 uppercase tracking-tighter">{content.subsidytokyo.text_47}</p>
                            <p className="text-sm text-slate-600 leading-relaxed mb-6">
                                {content.subsidytokyo.text_48}
                            </p>
                            <div className="pt-4 border-t border-slate-100">
                                <p className="text-xs font-black text-orange-600 mb-1 uppercase tracking-tighter">{content.subsidytokyo.text_49}</p>
                                <Link to="/subsidy-payment" className="text-sm font-bold text-slate-800 hover:text-blue-600 flex items-center gap-2">
                                    {content.subsidytokyo.text_50}<Icon name="arrowRight" className="size-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Block 7: 申込直前FAQ */}
                <div className="max-w-5xl mx-auto px-4 sm:px-6">
                    <ConstitutionFAQ />
                </div>

                <div className="mb-16 max-w-5xl mx-auto px-4 sm:px-6 mt-16">
                    <h2 className="text-2xl font-bold text-[#003366] mb-8 pb-2 border-b-2 border-blue-100">
                        {content.subsidytokyo.text_51}
                    </h2>

                    <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100 shadow-sm">
                        <ul className="space-y-6 [&>li>svg]:size-5 [&>li>svg]:shrink-0 [&>li>svg]:align-middle [&>li>svg]:mt-0.5">
                            <li className="flex items-start gap-4">
                                <Icon name="message" className="text-blue-600" />
                                <div>
                                    <strong className="text-gray-800 block text-lg mb-2">{content.subsidytokyo.text_52}</strong>
                                    <p className="text-sm text-gray-600 leading-relaxed">{content.subsidytokyo.text_53}</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <Icon name="message" className="text-blue-600" />
                                <div>
                                    <strong className="text-gray-800 block text-lg mb-2">{content.subsidytokyo.text_54}</strong>
                                    <p className="text-sm text-gray-600 leading-relaxed">{content.subsidytokyo.text_55}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="max-w-5xl mx-auto px-4 sm:px-6">
                    <FinalCTA />
                </div>


            </div>
        </PageTemplate>
    );
};
