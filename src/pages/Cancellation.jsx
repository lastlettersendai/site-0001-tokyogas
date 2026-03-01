import React from 'react';
import { PageTemplate } from '../components/PageTemplate.jsx';
import { Link } from 'react-router-dom';
import { FinalCTA } from '../components/FinalCTA.jsx';
import { Icon } from '../components/Icon.jsx';
import { ConstitutionFAQ } from '../components/ConstitutionFAQ.jsx';
import content from '../content/site-0001/content.json';

export const Cancellation = () => {
    return (
        <PageTemplate
            title={content.cancellation.attr_title_66}
            description={content.cancellation.attr_description_67}
            path="/cancellation"
        >

            <div className="w-full py-12 md:py-20">
                {/* Block 1: 冒頭3行 (Who/What) */}
                <div className="mb-8 text-left px-4 sm:px-6 max-w-4xl mx-auto">
                    <span className="inline-block bg-red-100 text-red-800 font-bold px-4 py-1.5 rounded-full text-xs mb-4 border border-red-300 tracking-wider">EXIT STRATEGY</span>
                    <p className="text-gray-600 text-sm font-bold leading-relaxed">
                        {content.cancellation.text_1}<br />
                        {content.cancellation.text_2}<br />
                        {content.cancellation.text_3}
                    </p>
                </div>

                {/* Block 2: 結論1行 */}
                <h1 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-8 px-4 sm:px-6 max-w-4xl mx-auto">
                    {content.cancellation.text_4}
                </h1>

                {/* Block 3: 前提条件 (3行以内) */}
                <div className="px-4 sm:px-6 md:px-0">
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 w-full max-w-2xl text-left mb-12 lg:ml-[calc(50vw-24rem)]">
                        <p className="text-xs font-black text-red-600 mb-2 tracking-widest uppercase">Prerequisite for Cancellation</p>
                        <ul className="text-sm font-bold text-slate-700 space-y-1">
                            <li className="flex items-center gap-2"><Icon name="check" className="size-4 text-red-600" /> {content.cancellation.text_5}</li>
                            <li className="flex items-center gap-2"><Icon name="check" className="size-4 text-red-600" /> {content.cancellation.text_6}</li>
                            <li className="flex items-center gap-2"><Icon name="check" className="size-4 text-red-600" /> {content.cancellation.text_7}</li>
                        </ul>
                    </div>
                </div>

                <div className="w-full relative overflow-hidden mb-16 px-0">
                    <img
                        src="/images/cancellation_truck.png"
                        alt={content.cancellation.attr_alt_68}
                        className="w-full object-cover aspect-video block"
                        loading="lazy"
                    />
                </div>

                <div className="text-center mb-16 border-b border-gray-100 pb-12 px-4 sm:px-6 max-w-4xl mx-auto">
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
                        {content.cancellation.text_8}<strong className="text-red-600">{content.cancellation.text_9}</strong>{content.cancellation.text_10}
                    </p>
                </div>

                {/* Warning Card */}
                <div className="bg-gradient-to-br from-red-50 to-orange-50 border-l-8 border-red-500 p-8 rounded-none sm:rounded-r-2xl mb-16 shadow-lg relative overflow-hidden group max-w-4xl mx-auto px-4 sm:px-6">
                    <div className="absolute -right-4 -top-4 text-red-100 opacity-40 text-9xl font-black transition-transform group-hover:scale-110">!</div>
                    <h2 className="text-2xl font-black text-red-800 mb-4 relative z-10 flex items-center gap-2">
                        <Icon name="shieldAlert" className="size-8 text-red-600 shrink-0" />
                        {content.cancellation.text_11}
                    </h2>
                    <div className="relative z-10 space-y-4">
                        <p className="text-gray-700 leading-relaxed font-bold bg-white/80 p-4 rounded-xl border border-red-100">
                            {content.cancellation.text_12}
                        </p>
                        <div className="bg-red-600 text-white p-5 rounded-xl shadow-md">
                            <p className="flex items-start">
                                <Icon name="idea" className="text-blue-500 mr-2 size-6 shrink-0 mt-0.5" />
                                <span>{content.cancellation.text_13}<span className="text-yellow-300 pink-marker ml-1">{content.cancellation.text_14}</span>{content.cancellation.text_15}</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Block 4: 誤解の解体 (Misconception) */}
                <div className="bg-red-50 p-8 rounded-none sm:rounded-3xl border border-red-100 mb-20 max-w-4xl mx-auto px-4 sm:px-6">
                    <div className="flex items-center gap-3 mb-4 text-red-600">
                        <Icon name="x" className="size-8" />
                        <h2 className="text-xl font-black">{content.cancellation.text_16}</h2>
                    </div>
                    <p className="font-bold text-red-800 mb-4 leading-relaxed">
                        {content.cancellation.text_17}<span className="pink-marker">{content.cancellation.text_18}</span>
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                        {content.cancellation.text_19}
                    </p>
                </div>

                {/* Block 5: 判断基準 (Criteria) */}
                <div className="mb-20 max-w-4xl mx-auto px-4 sm:px-6">
                    <h2 className="text-2xl font-black text-[#003366] mb-8 border-l-4 border-red-600 pl-4">{content.cancellation.text_20}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-2xl border border-slate-200">
                            <h3 className="font-bold mb-4">{content.cancellation.text_21}</h3>
                            <ul className="text-sm space-y-2 text-slate-600">
                                <li>{content.cancellation.text_22}</li>
                                <li>{content.cancellation.text_23}</li>
                                <li>{content.cancellation.text_24}</li>
                            </ul>
                        </div>
                        <div className="bg-red-50 p-6 rounded-2xl border border-red-200">
                            <h3 className="font-bold mb-4 text-red-900">{content.cancellation.text_25}</h3>
                            <ul className="text-sm space-y-2 text-red-800">
                                <li>{content.cancellation.text_26}</li>
                                <li>{content.cancellation.text_27}</li>
                                <li>{content.cancellation.text_28}</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Block 6: 実例 (Case Study) - Format Fixed: Premise -> Conclusion -> Reason -> Next Q */}
                <div className="mb-20 max-w-4xl mx-auto px-4 sm:px-6">
                    <h2 className="text-2xl font-black text-center text-[#003366] mb-12">
                        {content.cancellation.text_29}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                            <p className="text-xs font-black text-blue-600 mb-1 uppercase tracking-tighter">{content.cancellation.text_30}</p>
                            <p className="font-bold text-slate-800 mb-4">{content.cancellation.text_31}</p>
                            <div className="bg-blue-50 p-4 rounded-xl mb-4">
                                <p className="text-xs font-black text-blue-600 mb-1 uppercase tracking-tighter">{content.cancellation.text_32}</p>
                                <p className="text-lg font-black text-blue-900">{content.cancellation.text_33}</p>
                            </div>
                            <p className="text-xs font-black text-blue-600 mb-1 uppercase tracking-tighter">{content.cancellation.text_34}</p>
                            <p className="text-sm text-slate-600 leading-relaxed mb-6">
                                {content.cancellation.text_35}
                            </p>
                            <div className="pt-4 border-t border-slate-100">
                                <p className="text-xs font-black text-orange-600 mb-1 uppercase tracking-tighter">{content.cancellation.text_36}</p>
                                <Link to="/faq" className="text-sm font-bold text-slate-800 hover:text-blue-600 flex items-center gap-2">
                                    {content.cancellation.text_37}<Icon name="arrowRight" className="size-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Block 7: 申込直前FAQ */}
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    <ConstitutionFAQ />
                </div>

                <div className="mb-16 max-w-4xl mx-auto px-4 sm:px-6">
                    <h2 className="text-2xl font-bold text-[#003366] mb-8 pb-2 border-b-2 border-blue-100">
                        {content.cancellation.text_38}<span className="mx-1">3</span>{content.cancellation.text_39}
                    </h2>
                    <p className="text-gray-600 mb-6">{content.cancellation.text_40}</p>

                    <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-md">
                        <div className="space-y-6">
                            <div className="border-b text-gray-700 uppercase tracking-widest text-xs font-bold pb-2 border-gray-100">
                                {content.cancellation.text_41}
                            </div>
                            <div className="space-y-4 font-medium text-gray-800 text-lg">
                                <p className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                                    <span className="text-[#003366] font-black">Q1.</span>
                                    <span>{content.cancellation.text_42}</span>
                                </p>
                                <p className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                                    <span className="text-[#003366] font-black">Q2.</span>
                                    <span>{content.cancellation.text_43}</span>
                                </p>
                                <p className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                                    <span className="text-[#003366] font-black">Q3.</span>
                                    <span>{content.cancellation.text_44}</span>
                                </p>
                                <p className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                                    <span className="text-[#003366] font-black">Q4.</span>
                                    <span>{content.cancellation.text_45}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Branching Options Diagram */}
                <section className="mb-20 max-w-4xl mx-auto px-4 sm:px-6">
                    <h2 className="text-2xl md:text-3xl font-black text-[#003366] text-center mb-10">
                        {content.cancellation.text_46}
                    </h2>

                    <div className="relative max-w-3xl mx-auto">
                        {/* Connecting Lines for Desktop */}
                        <div className="hidden md:block absolute top-[60px] left-[50%] w-0.5 h-10 bg-gray-300"></div>
                        <div className="hidden md:block absolute top-[100px] left-[25%] right-[25%] h-0.5 bg-gray-300"></div>

                        {/* Top Node */}
                        <div className="bg-white border-2 border-gray-800 rounded-2xl p-6 text-center shadow-lg relative z-10 md:w-2/3 mx-auto mb-10">
                            <Icon name="home" className="size-8 text-gray-800 mb-2 block mx-auto" />
                            <h3 className="font-black text-xl text-gray-800">{content.cancellation.text_47}</h3>
                            <p className="text-sm text-gray-600 mt-2">{content.cancellation.text_48}</p>
                        </div>

                        {/* Branches Grid */}
                        <div className="grid md:grid-cols-2 gap-8 md:gap-12 relative">
                            {/* Branch 1: Sell/Transfer */}
                            <div className="relative">
                                {/* Vertical line pointing down to this card on desktop */}
                                <div className="hidden md:block absolute -top-8 left-[50%] w-0.5 h-8 bg-gray-300"></div>
                                {/* Downward arrow */}
                                <div className="hidden md:block absolute -top-2 left-[50%] -translate-x-1/2 w-4 h-4 border-b-2 border-r-2 border-gray-300 rotate-45"></div>

                                <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 shadow-md h-full flex flex-col group hover:-translate-y-1 transition-transform">
                                    <div className="bg-blue-600 text-white font-bold text-center py-2 rounded-t-xl -mt-6 -mx-6 mb-4">
                                        {content.cancellation.text_49}
                                    </div>
                                    <h4 className="font-black text-lg text-blue-900 mb-3 flex items-center gap-2">
                                        <Icon name="handshake" className="size-6 text-blue-600" /> {content.cancellation.text_50}
                                    </h4>
                                    <p className="text-sm text-gray-700 leading-relaxed bg-white p-4 rounded-xl border border-blue-100 flex-1">
                                        {content.cancellation.text_51}<br /><br />
                                        <strong className="text-red-500">{content.cancellation.text_52}</strong> {content.cancellation.text_53}
                                    </p>
                                </div>
                            </div>

                            {/* Branch 2: Demolish/Move */}
                            <div className="relative">
                                {/* Vertical line pointing down to this card on desktop */}
                                <div className="hidden md:block absolute -top-8 left-[50%] w-0.5 h-8 bg-gray-300"></div>
                                {/* Downward arrow */}
                                <div className="hidden md:block absolute -top-2 left-[50%] -translate-x-1/2 w-4 h-4 border-b-2 border-r-2 border-gray-300 rotate-45"></div>

                                <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 shadow-md h-full flex flex-col group hover:-translate-y-1 transition-transform">
                                    <div className="bg-red-600 text-white font-bold text-center py-2 rounded-t-xl -mt-6 -mx-6 mb-4">
                                        {content.cancellation.text_54}
                                    </div>
                                    <h4 className="font-black text-lg text-red-900 mb-3 flex items-center gap-2">
                                        <Icon name="construction" className="size-6 text-red-600" /> {content.cancellation.text_55}
                                    </h4>
                                    <p className="text-sm text-gray-700 leading-relaxed bg-white p-4 rounded-xl border border-red-100 flex-1">
                                        {content.cancellation.text_56}<strong className="text-red-600">{content.cancellation.text_57}</strong>{content.cancellation.text_58}<br /><br />
                                        {content.cancellation.text_59}<br />
                                        <span className="text-xs text-red-500 font-bold block mt-2">{content.cancellation.text_60}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="bg-blue-50 p-6 rounded-none sm:rounded-xl border border-blue-100 text-gray-700 leading-relaxed text-sm mb-16 shadow-sm max-w-4xl mx-auto px-4 sm:px-6">
                    <p className="mb-3 font-bold text-[#003366] text-lg flex items-center gap-2">
                        <Icon name="shield" className="size-6 text-blue-600" /> {content.cancellation.text_61}
                    </p>
                    <p className="bg-white p-4 rounded-lg border border-blue-50 mb-3">
                        {content.cancellation.text_62}<strong className="text-red-500">{content.cancellation.text_63}</strong>{content.cancellation.text_64}
                    </p>
                    <p className="flex items-start">
                        <Icon name="alert" className="text-red-600 size-5 mr-2 align-middle mt-0.5" />
                        <span>{content.cancellation.text_65}</span>
                    </p>
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    <FinalCTA />
                </div>

            </div>
        </PageTemplate>
    );
};
