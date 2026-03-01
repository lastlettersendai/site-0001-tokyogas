import React, { useState } from 'react';
import { PageTemplate } from '../components/PageTemplate.jsx';
import { Link } from 'react-router-dom';
import { Icon } from '../components/Icon.jsx';
import { ConstitutionFAQ } from '../components/ConstitutionFAQ.jsx';
import { FinalCTA } from '../components/FinalCTA.jsx';
import content from '../content/site-0001/content.json';

export const Eligible = () => {
    // Interactive checklist states
    const [steps, setSteps] = useState({ 1: null, 2: null, 3: null });

    const getResult = () => {
        if (steps[1] === null || steps[2] === null || steps[3] === null) return null;
        if (steps[1] === 'yes' && steps[2] === 'yes' && steps[3] === 'yes') return 'A';
        if (steps[1] === 'yes' && steps[2] === 'yes' && steps[3] === 'unknown') return 'B';
        return 'C';
    };

    const result = getResult();

    return (
        <PageTemplate
            title={content.eligible.attr_title_63}
            description={content.eligible.attr_description_64}
            path="/eligible"
        >

            <div className="w-full py-12 md:py-20">
                {/* Block 1: 冒頭3行 (Who/What) */}
                <div className="mb-8 text-left px-4 sm:px-6 max-w-4xl mx-auto">
                    <span className="inline-block bg-blue-100 text-blue-800 font-bold px-4 py-1.5 rounded-full text-xs mb-4 border border-blue-300 tracking-wider">ELIGIBILITY CHECK</span>
                    <p className="text-gray-600 text-sm font-bold leading-relaxed">
                        {content.eligible.text_1}<br />
                        {content.eligible.text_2}<br />
                        {content.eligible.text_3}
                    </p>
                </div>

                <h1 className="text-3xl md:text-5xl font-black text-[#003366] leading-tight mb-8 px-4 sm:px-6">
                    {content.eligible.text_4}<span className="mx-1">3</span>{content.eligible.text_5}
                </h1>

                {/* Block 3: 前提条件 (3行以内) */}
                <div className="px-4 sm:px-6 md:px-0">
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 w-full max-w-2xl mx-auto text-left mb-12">
                        <p className="text-xs font-black text-blue-600 mb-2 tracking-widest uppercase">Prerequisite for Check</p>
                        <ul className="text-sm font-bold text-slate-700 space-y-1">
                            <li className="flex items-center gap-2"><Icon name="check" className="size-4 text-blue-600" /> {content.eligible.text_6}</li>
                            <li className="flex items-center gap-2"><Icon name="check" className="size-4 text-blue-600" /> {content.eligible.text_7}</li>
                            <li className="flex items-center gap-2"><Icon name="check" className="size-4 text-blue-600" /> {content.eligible.text_8}</li>
                        </ul>
                    </div>
                </div>

                <div className="text-center mb-12 border-b border-gray-100 pb-12 w-full">
                    <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-10 px-4 sm:px-6">
                        {content.eligible.text_9}
                    </p>
                    <div className="w-full relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full p-3 bg-gradient-to-b from-black/60 to-transparent z-10 flex text-white font-bold text-sm px-4 sm:px-6">
                            <span><Icon name="check" className="text-blue-400 size-4 mr-1 align-middle" /> {content.eligible.text_10}</span>
                        </div>
                        <img
                            src="/images/eligible_roof.png"
                            alt={content.eligible.attr_alt_65}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    <div className="bg-white p-4 text-left max-w-4xl mx-auto px-4 sm:px-6">
                        <p className="text-sm text-gray-700 font-bold flex items-center gap-2 mt-4">
                            <span className="text-blue-600 text-xl"><Icon name="idea" className="text-blue-600 size-6" /></span>
                            {content.eligible.text_11}
                        </p>
                    </div>
                </div>

                {/* Interactive Diagnostic */}
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-16 relative">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-[#003366] to-orange-400"></div>
                    <div className="bg-gray-50/50 py-6 px-6 border-b border-gray-100">
                        <h2 className="text-[#003366] font-black text-xl md:text-2xl text-center flex items-center justify-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-orange-500 text-white text-base flex items-center justify-center shadow-md">?</span>
                            {content.eligible.text_12}
                        </h2>
                    </div>

                    <div className="p-6 md:p-10 space-y-8" style={{ backgroundImage: 'url("/assets/pattern-grid.svg")' }}>
                        {/* Question 1 */}
                        <div className={`bg-white rounded-2xl p-6 md:p-8 border-2 transition-all duration-300 shadow-sm ${steps[1] ? 'border-green-400 bg-green-50/20' : 'border-blue-100 hover:border-blue-300 hover:shadow-md'}`}>
                            <div className="flex items-start gap-4 mb-6">
                                <div className="bg-[#003366] text-white font-black text-xl w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-md">Q1</div>
                                <div>
                                    <h3 className="font-bold text-gray-800 text-lg md:text-xl leading-snug">{content.eligible.text_13}</h3>
                                    <p className="text-sm text-gray-500 mt-2 font-medium">{content.eligible.text_14}</p>
                                </div>
                            </div>
                            <div className="flex gap-4 md:pl-16">
                                <button onClick={() => setSteps({ ...steps, 1: 'yes' })} className={`flex-1 py-4 rounded-xl font-bold text-lg transition-all border-2 ${steps[1] === 'yes' ? 'bg-[#003366] text-white border-[#003366] shadow-lg scale-[1.02]' : 'bg-white text-gray-600 border-gray-200 hover:border-[#003366] hover:text-[#003366]'}`}>はい</button>
                                <button onClick={() => setSteps({ ...steps, 1: 'no' })} className={`flex-1 py-4 rounded-xl font-bold text-lg transition-all border-2 ${steps[1] === 'no' ? 'bg-orange-500 text-white border-orange-500 shadow-lg scale-[1.02]' : 'bg-white text-gray-600 border-gray-200 hover:border-orange-500 hover:text-orange-500'}`}>いいえ</button>
                            </div>
                        </div>

                        {/* Question 2 */}
                        <div className={`bg-white rounded-2xl p-6 md:p-8 border-2 transition-all duration-300 shadow-sm ${steps[2] ? 'border-green-400 bg-green-50/20' : 'border-blue-100 hover:border-blue-300 hover:shadow-md'}`}>
                            <div className="flex items-start gap-4 mb-6">
                                <div className="bg-[#003366] text-white font-black text-xl w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-md">Q2</div>
                                <div>
                                    <h3 className="font-bold text-gray-800 text-lg md:text-xl leading-snug">{content.eligible.text_15}</h3>
                                    <p className="text-sm text-gray-500 mt-2 font-medium">{content.eligible.text_16}</p>
                                </div>
                            </div>
                            <div className="flex gap-4 md:pl-16">
                                <button onClick={() => setSteps({ ...steps, 2: 'yes' })} className={`flex-1 py-4 rounded-xl font-bold text-lg transition-all border-2 ${steps[2] === 'yes' ? 'bg-[#003366] text-white border-[#003366] shadow-lg scale-[1.02]' : 'bg-white text-gray-600 border-gray-200 hover:border-[#003366] hover:text-[#003366]'}`}>はい</button>
                                <button onClick={() => setSteps({ ...steps, 2: 'no' })} className={`flex-1 py-4 rounded-xl font-bold text-lg transition-all border-2 ${steps[2] === 'no' ? 'bg-orange-500 text-white border-orange-500 shadow-lg scale-[1.02]' : 'bg-white text-gray-600 border-gray-200 hover:border-orange-500 hover:text-orange-500'}`}>いいえ</button>
                            </div>
                        </div>

                        {/* Question 3 */}
                        <div className={`bg-white rounded-2xl p-6 md:p-8 border-2 transition-all duration-300 shadow-sm ${steps[3] ? 'border-green-400 bg-green-50/20' : 'border-blue-100 hover:border-blue-300 hover:shadow-md'}`}>
                            <div className="flex items-start gap-4 mb-6">
                                <div className="bg-[#003366] text-white font-black text-xl w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-md">Q3</div>
                                <div>
                                    <h3 className="font-bold text-gray-800 text-lg md:text-xl leading-snug">{content.eligible.text_17}</h3>
                                    <p className="text-sm text-gray-500 mt-2 font-medium">{content.eligible.text_18}</p>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3 md:pl-16">
                                <button onClick={() => setSteps({ ...steps, 3: 'yes' })} className={`flex-1 py-4 rounded-xl font-bold text-base md:text-lg transition-all border-2 ${steps[3] === 'yes' ? 'bg-[#003366] text-white border-[#003366] shadow-lg scale-[1.02]' : 'bg-white text-gray-600 border-gray-200 hover:border-[#003366] hover:text-[#003366]'}`}>はい</button>
                                <button onClick={() => setSteps({ ...steps, 3: 'no' })} className={`flex-1 py-4 rounded-xl font-bold text-base md:text-lg transition-all border-2 ${steps[3] === 'no' ? 'bg-orange-500 text-white border-orange-500 shadow-lg scale-[1.02]' : 'bg-white text-gray-600 border-gray-200 hover:border-orange-500 hover:text-orange-500'}`}>いいえ</button>
                                <button onClick={() => setSteps({ ...steps, 3: 'unknown' })} className={`flex-1 py-4 rounded-xl font-bold text-base md:text-lg transition-all border-2 ${steps[3] === 'unknown' ? 'bg-blue-500 text-white border-blue-500 shadow-lg scale-[1.02]' : 'bg-white text-gray-600 border-gray-200 hover:border-blue-500 hover:text-blue-500'}`}>わからない</button>
                            </div>
                        </div>

                        {/* Result Area Premium Card */}
                        {result && (
                            <div className="mt-12 relative animate-[fade-in-up_0.5s_ease-out]">
                                <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-blue-500 to-orange-400 rounded-3xl blur opacity-40 animate-pulse"></div>
                                <div className="relative bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-2xl backdrop-blur-sm bg-white/90">
                                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#003366] to-blue-600 text-white font-bold px-6 py-2 rounded-full shadow-lg border border-white/50 text-sm tracking-widest uppercase">
                                        {content.eligible.text_19}
                                    </div>

                                    {result === 'A' && (
                                        <div className="text-center mt-4">
                                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 text-green-600 text-4xl mb-6 shadow-sm border-4 border-white ring-2 ring-green-100"><Icon name="party" className="text-green-600 size-10" /></div>
                                            <h3 className="text-green-600 text-2xl md:text-3xl font-black mb-6 tracking-tight">{content.eligible.text_20}</h3>
                                            <p className="text-gray-600 mb-8 max-w-lg mx-auto leading-relaxed text-lg">{content.eligible.text_21}<strong className="text-gray-800">{content.eligible.text_22}</strong>{content.eligible.text_23}</p>
                                            <a href="#cta" className="inline-block bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold text-lg py-4 px-12 rounded-full hover:from-orange-500 hover:to-orange-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 w-full sm:w-auto">
                                                {content.eligible.text_24}
                                            </a>
                                        </div>
                                    )}

                                    {result === 'B' && (
                                        <div className="text-center mt-4">
                                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 text-blue-600 text-4xl mb-6 shadow-sm border-4 border-white ring-2 ring-blue-100"><Icon name="clipboard" className="text-blue-600 size-10" /></div>
                                            <h3 className="text-blue-600 text-2xl md:text-3xl font-black mb-6 tracking-tight">{content.eligible.text_25}</h3>
                                            <p className="text-gray-600 mb-8 max-w-lg mx-auto leading-relaxed text-lg">{content.eligible.text_26}<strong className="text-gray-800">{content.eligible.text_27}</strong>{content.eligible.text_28}</p>
                                            <a href="#cta" className="inline-block bg-gradient-to-r from-[#003366] to-blue-800 text-white font-bold text-lg py-4 px-12 rounded-full hover:brightness-110 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 w-full sm:w-auto">
                                                {content.eligible.text_29}
                                            </a>
                                        </div>
                                    )}

                                    {result === 'C' && (
                                        <div className="text-center mt-4">
                                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 text-gray-400 text-4xl mb-6 shadow-sm border-4 border-white ring-2 ring-gray-100"><Icon name="pray" className="text-gray-400 size-10" /></div>
                                            <h3 className="text-gray-600 text-xl md:text-2xl font-black mb-6">{content.eligible.text_30}<br className="sm:hidden" />{content.eligible.text_31}</h3>
                                            <div className="bg-red-50 border border-red-100 p-6 rounded-none sm:rounded-2xl text-left max-w-lg mx-auto">
                                                <p className="text-gray-600 text-sm leading-relaxed">{content.eligible.text_32}<strong className="text-red-600">{content.eligible.text_33}</strong>{content.eligible.text_34}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Block 4: 誤解の解体 (Misconception) */}
                <div className="bg-red-50 p-8 rounded-none sm:rounded-3xl border border-red-100 mb-20 mt-16 max-w-4xl mx-auto px-4 sm:px-6">
                    <div className="flex items-center gap-3 mb-4 text-red-600">
                        <Icon name="x" className="size-8" />
                        <h2 className="text-xl font-black">{content.eligible.text_35}</h2>
                    </div>
                    <p className="font-bold text-red-800 mb-4 leading-relaxed">
                        {content.eligible.text_36}<span className="underline decoration-red-500 decoration-2">{content.eligible.text_37}</span>
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                        {content.eligible.text_38}
                    </p>
                </div>

                {/* Block 5: 判断基準 (Criteria) */}
                <div className="mb-20 max-w-4xl mx-auto px-4 sm:px-6">
                    <h2 className="text-2xl font-black text-[#003366] mb-8 border-l-4 border-blue-600 pl-4">{content.eligible.text_39}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-2xl border border-slate-200">
                            <h3 className="font-bold mb-4">{content.eligible.text_40}</h3>
                            <ul className="text-sm space-y-2 text-slate-600">
                                <li>{content.eligible.text_41}</li>
                                <li>{content.eligible.text_42}</li>
                                <li>{content.eligible.text_43}</li>
                            </ul>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
                            <h3 className="font-bold mb-4 text-blue-900">{content.eligible.text_44}</h3>
                            <ul className="text-sm space-y-2 text-blue-800">
                                <li>{content.eligible.text_45}</li>
                                <li>{content.eligible.text_46}</li>
                                <li>{content.eligible.text_47}</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Block 6: 実例 (Case Study) - Format Fixed: Premise -> Conclusion -> Reason -> Next Q */}
                <div className="mb-20 max-w-4xl mx-auto px-4 sm:px-6">
                    <h2 className="text-2xl font-black text-center text-[#003366] mb-12">
                        {content.eligible.text_48}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                            <p className="text-xs font-black text-blue-600 mb-1 uppercase tracking-tighter">{content.eligible.text_49}</p>
                            <p className="font-bold text-slate-800 mb-4">{content.eligible.text_50}</p>
                            <div className="bg-blue-50 p-4 rounded-xl mb-4">
                                <p className="text-xs font-black text-blue-600 mb-1 uppercase tracking-tighter">{content.eligible.text_51}</p>
                                <p className="text-lg font-black text-blue-900">{content.eligible.text_52}</p>
                            </div>
                            <p className="text-xs font-black text-blue-600 mb-1 uppercase tracking-tighter">{content.eligible.text_53}</p>
                            <p className="text-sm text-slate-600 leading-relaxed mb-6">
                                {content.eligible.text_54}
                            </p>
                            <div className="pt-4 border-t border-slate-100">
                                <p className="text-xs font-black text-orange-600 mb-1 uppercase tracking-tighter">{content.eligible.text_55}</p>
                                <Link to="/installation" className="text-sm font-bold text-slate-800 hover:text-blue-600 flex items-center gap-2">
                                    {content.eligible.text_56}<Icon name="arrowRight" className="size-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Block 7: 申込直前FAQ */}
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    <ConstitutionFAQ />
                    <div className="space-y-4">
                        <details className="bg-white rounded-lg shadow-sm border border-gray-200 group">
                            <summary className="font-bold p-5 cursor-pointer text-gray-800 list-none flex items-center pr-14 relative">
                                <span className="flex items-center gap-2"><span className="text-blue-600 font-bold">Q.</span> <span>{content.eligible.text_57}</span></span>
                                <Icon name="chevronDown" className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 group-open:rotate-180 transition-transform size-5" />
                            </summary>
                            <div className="p-5 pt-0 text-gray-600 text-sm md:text-base border-t border-gray-100 mt-2 pt-4">
                                {content.eligible.text_58}
                            </div>
                        </details>

                        <details className="bg-white rounded-lg shadow-sm border border-gray-200 group">
                            <summary className="font-bold p-5 cursor-pointer text-gray-800 list-none flex items-center pr-14 relative">
                                <span className="flex items-center gap-2"><span className="text-blue-600 font-bold">Q.</span> <span>{content.eligible.text_59}</span></span>
                                <Icon name="chevronDown" className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 group-open:rotate-180 transition-transform size-5" />
                            </summary>
                            <div className="p-5 pt-0 text-gray-600 text-sm md:text-base border-t border-gray-100 mt-2 pt-4">
                                {content.eligible.text_60}
                            </div>
                        </details>

                        <details className="bg-white rounded-lg shadow-sm border border-gray-200 group">
                            <summary className="font-bold p-5 cursor-pointer text-gray-800 list-none flex items-center pr-14 relative">
                                <span className="flex items-center gap-2"><span className="text-blue-600 font-bold">Q.</span> <span>{content.eligible.text_61}</span></span>
                                <Icon name="chevronDown" className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 group-open:rotate-180 transition-transform size-5" />
                            </summary>
                            <div className="p-5 pt-0 text-gray-600 text-sm md:text-base border-t border-gray-100 mt-2 pt-4">
                                {content.eligible.text_62}
                            </div>
                        </details>
                    </div>
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-16">
                        <FinalCTA />
                    </div>
                </div>
            </div>
        </PageTemplate>
    );
};
