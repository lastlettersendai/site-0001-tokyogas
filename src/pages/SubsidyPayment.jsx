import React from 'react';
import { PageTemplate } from '../components/PageTemplate.jsx';
import { Link } from 'react-router-dom';
import { FinalCTA } from '../components/FinalCTA.jsx';
import { Icon } from '../components/Icon.jsx';
import { ConstitutionFAQ } from '../components/ConstitutionFAQ.jsx';
import content from '../content/site-0001/content.json';

export const SubsidyPayment = () => {
    return (
        <PageTemplate
            title={content.subsidypayment.attr_title_60}
            description={content.subsidypayment.attr_description_61}
            path="/subsidy-payment"
        >

            <div className="w-full py-12 md:py-20">
                {/* Block 1: 冒頭3行 (Who/What) */}
                <div className="mb-8 text-left px-4 sm:px-6 max-w-4xl mx-auto">
                    <span className="inline-block bg-red-100 text-red-800 font-bold px-4 py-1.5 rounded-full text-xs mb-4 border border-red-300 tracking-wider">PAYMENT TIMING</span>
                    <p className="text-gray-600 text-sm font-bold leading-relaxed">
                        {content.subsidypayment.text_1}<br />
                        {content.subsidypayment.text_2}<br />
                        {content.subsidypayment.text_3}
                    </p>
                </div>

                {/* Block 2: 結論1行 */}
                <h1 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-8 px-4 sm:px-6 max-w-4xl mx-auto">
                    {content.subsidypayment.text_4}
                </h1>

                {/* Block 3: 前提条件 (3行以内) */}
                <div className="px-4 sm:px-6 md:px-0">
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 w-full max-w-2xl text-left mb-12 lg:ml-[calc(50vw-24rem)]">
                        <p className="text-xs font-black text-red-600 mb-2 tracking-widest uppercase">Prerequisite for Cash Flow</p>
                        <ul className="text-sm font-bold text-slate-700 space-y-1">
                            <li className="flex items-center gap-2"><Icon name="check" className="size-4 text-red-600" /> {content.subsidypayment.text_5}</li>
                            <li className="flex items-center gap-2"><Icon name="check" className="size-4 text-red-600" /> {content.subsidypayment.text_6}</li>
                            <li className="flex items-center gap-2"><Icon name="check" className="size-4 text-red-600" /> {content.subsidypayment.text_7}</li>
                        </ul>
                    </div>
                </div>

                <div className="w-full relative overflow-hidden mb-16">
                    <img
                        src="/images/subsidy_payment.png"
                        alt={content.subsidypayment.attr_alt_62}
                        className="w-full object-cover aspect-video block"
                        loading="lazy"
                    />
                </div>

                <div className="text-center mb-16 border-b border-gray-100 pb-12 px-4 sm:px-6 max-w-4xl mx-auto">
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
                        {content.subsidypayment.text_8}<strong className="text-red-600">{content.subsidypayment.text_9}</strong>
                    </p>
                </div>

                {/* Wait Time Card (Conclusion) */}
                <div className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 p-8 rounded-none sm:rounded-2xl mb-20 shadow-lg relative overflow-hidden group max-w-4xl mx-auto px-4 sm:px-6">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-red-100 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
                    <h2 className="text-2xl font-black text-red-800 mb-6 flex items-center gap-3">
                        <Icon name="alert" className="text-red-500 size-10 mr-3 align-middle" />
                        {content.subsidypayment.text_10}
                    </h2>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-red-100 mb-6">
                        <p className="text-gray-700 leading-relaxed font-bold text-lg mb-4">
                            {content.subsidypayment.text_11}<span className="text-red-600 border-b-2 border-red-200">{content.subsidypayment.text_12}</span>{content.subsidypayment.text_13}
                        </p>
                        <ul className="space-y-3 text-sm text-gray-600 [&>li>svg]:size-4 [&>li>svg]:shrink-0 [&>li>svg]:align-middle [&>li>svg]:mt-0.5">
                            <li className="flex items-start gap-2">
                                <Icon name="x" className="text-red-500" />
                                {content.subsidypayment.text_14}
                            </li>
                            <li className="flex items-start gap-2">
                                <Icon name="x" className="text-red-500" />
                                {content.subsidypayment.text_15}
                            </li>
                        </ul>
                    </div>

                    <div className="bg-red-600 text-white p-4 rounded-xl shadow-md text-center">
                        <p className="font-bold text-lg">
                            {content.subsidypayment.text_16}<br className="hidden md:block" />
                            <span className="text-yellow-300 text-xl mx-1 pink-marker">{content.subsidypayment.text_17}</span>{content.subsidypayment.text_18}
                        </p>
                    </div>
                </div>

                {/* Payment Timeline Flow */}
                <div className="mb-20 max-w-4xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-12">
                        <span className="text-[#003366] font-bold tracking-widest text-sm mb-2 block uppercase">Timeline</span>
                        <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-4">
                            {content.subsidypayment.text_19}
                        </h2>
                        <p className="text-gray-600">{content.subsidypayment.text_20}<br className="hidden md:block" />{content.subsidypayment.text_21}</p>
                    </div>

                    <div className="relative max-w-2xl mx-auto pl-4 md:pl-0">
                        {/* Connecting Line */}
                        <div className="absolute left-[39px] md:left-[50px] top-8 bottom-8 w-1 bg-gray-200 -z-10"></div>

                        <div className="space-y-12">
                            {/* Step 1 */}
                            <div className="relative flex items-start group">
                                <div className="w-16 h-16 bg-white border-4 border-gray-200 text-gray-400 rounded-full flex items-center justify-center font-black text-xl shrink-0 z-10 mr-6 shadow-sm group-hover:border-blue-300 transition-colors">1</div>
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex-1 group-hover:shadow-md transition-shadow">
                                    <h3 className="font-bold text-xl text-gray-800 mb-2">{content.subsidypayment.text_22}</h3>
                                    <p className="text-gray-600 text-sm">{content.subsidypayment.text_23}</p>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="relative flex items-start group">
                                <div className="w-16 h-16 bg-white border-4 border-gray-200 text-gray-400 rounded-full flex items-center justify-center font-black text-xl shrink-0 z-10 mr-6 shadow-sm group-hover:border-blue-300 transition-colors">2</div>
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex-1 group-hover:shadow-md transition-shadow">
                                    <h3 className="font-bold text-xl text-gray-800 mb-2 flex items-center gap-2">{content.subsidypayment.text_24} <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded font-normal">{content.subsidypayment.text_25}</span></h3>
                                    <p className="text-gray-600 text-sm">{content.subsidypayment.text_26}</p>
                                </div>
                            </div>

                            {/* Step 3 (CRITICAL) */}
                            <div className="relative flex items-start group">
                                <div className="absolute left-[39px] md:left-[50px] top-8 bottom-[-48px] w-1 bg-gradient-to-b from-red-500 to-orange-500 -z-10"></div>
                                <div className="w-16 h-16 bg-red-500 border-4 border-red-100 text-white rounded-full flex items-center justify-center font-black text-2xl shrink-0 z-10 mr-6 shadow-lg animate-pulse"><Icon name="banknote" className="size-8 text-white" /></div>
                                <div className="bg-red-50 p-6 rounded-2xl shadow-md border-2 border-red-200 flex-1">
                                    <h3 className="font-black text-xl text-red-700 mb-3 border-b border-red-200 pb-2">{content.subsidypayment.text_27}</h3>
                                    <p className="text-red-900 text-sm font-bold mb-3">{content.subsidypayment.text_28}</p>
                                    <div className="bg-white p-3 rounded-xl border border-red-100 text-sm">
                                        <p className="font-bold text-gray-800 border-l-2 border-red-500 pl-2 mb-2">{content.subsidypayment.text_29}<span className="text-red-600">{content.subsidypayment.text_30}</span></p>
                                        <p className="font-bold text-gray-800 border-l-2 border-blue-500 pl-2">{content.subsidypayment.text_31}<span className="text-blue-600">{content.subsidypayment.text_32}</span></p>
                                    </div>
                                </div>
                            </div>

                            {/* Step 4 */}
                            <div className="relative flex items-start group">
                                <div className="w-16 h-16 bg-white border-4 border-orange-200 text-orange-400 rounded-full flex items-center justify-center font-black text-xl shrink-0 z-10 mr-6 shadow-sm group-hover:border-orange-400 transition-colors">4</div>
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex-1 group-hover:shadow-md transition-shadow">
                                    <h3 className="font-bold text-xl text-gray-800 mb-2">{content.subsidypayment.text_33}</h3>
                                    <p className="text-gray-600 text-sm">{content.subsidypayment.text_34}</p>
                                </div>
                            </div>

                            {/* Step 5 (REWARD) */}
                            <div className="relative flex items-start group">
                                <div className="w-16 h-16 bg-[#003366] border-4 border-blue-200 text-white rounded-full flex items-center justify-center font-black text-2xl shrink-0 z-10 mr-6 shadow-lg transform group-hover:scale-110 transition-transform"><Icon name="money" className="text-white size-8" /></div>
                                <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-2xl shadow-md border-2 border-[#003366] flex-1 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 rounded-bl-full -z-10 opacity-50"></div>
                                    <h3 className="font-black text-xl text-[#003366] mb-3">{content.subsidypayment.text_35}</h3>
                                    <p className="text-blue-900 text-sm font-bold bg-blue-100 p-3 rounded-lg border border-blue-200">
                                        {content.subsidypayment.text_36}<br />
                                        <span className="text-xs text-gray-600 font-normal mt-2 block">{content.subsidypayment.text_37}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Block 4: 誤解の解体 (Misconception) */}
                <div className="bg-red-50 p-8 rounded-none sm:rounded-3xl border border-red-100 mb-20 max-w-4xl mx-auto px-4 sm:px-6">
                    <div className="flex items-center gap-3 mb-4 text-red-600">
                        <Icon name="x" className="size-8" />
                        <h2 className="text-xl font-black">{content.subsidypayment.text_38}</h2>
                    </div>
                    <p className="font-bold text-red-800 mb-4 leading-relaxed">
                        {content.subsidypayment.text_39}<span className="pink-marker">{content.subsidypayment.text_40}</span>
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                        {content.subsidypayment.text_41}
                    </p>
                </div>

                {/* Block 5: 判断基準 (Criteria) */}
                <div className="mb-20 max-w-4xl mx-auto px-4 sm:px-6">
                    <h2 className="text-2xl font-black text-[#003366] mb-8 border-l-4 border-red-600 pl-4">{content.subsidypayment.text_42}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-2xl border border-slate-200">
                            <h3 className="font-bold mb-4">{content.subsidypayment.text_43}</h3>
                            <ul className="text-sm space-y-2 text-slate-600">
                                <li>{content.subsidypayment.text_44}</li>
                                <li>{content.subsidypayment.text_45}</li>
                                <li>{content.subsidypayment.text_46}</li>
                            </ul>
                        </div>
                        <div className="bg-red-50 p-6 rounded-2xl border border-red-200">
                            <h3 className="font-bold mb-4 text-red-900">{content.subsidypayment.text_47}</h3>
                            <ul className="text-sm space-y-2 text-red-800">
                                <li>{content.subsidypayment.text_48}</li>
                                <li>{content.subsidypayment.text_49}</li>
                                <li>{content.subsidypayment.text_50}</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Block 6: 実例 (Case Study) - Format Fixed: Premise -> Conclusion -> Reason -> Next Q */}
                <div className="mb-20 max-w-4xl mx-auto px-4 sm:px-6">
                    <h2 className="text-2xl font-black text-center text-[#003366] mb-12">
                        {content.subsidypayment.text_51}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                            <p className="text-xs font-black text-blue-600 mb-1 uppercase tracking-tighter">{content.subsidypayment.text_52}</p>
                            <p className="font-bold text-slate-800 mb-4">{content.subsidypayment.text_53}</p>
                            <div className="bg-blue-50 p-4 rounded-xl mb-4">
                                <p className="text-xs font-black text-blue-600 mb-1 uppercase tracking-tighter">{content.subsidypayment.text_54}</p>
                                <p className="text-lg font-black text-blue-900">{content.subsidypayment.text_55}</p>
                            </div>
                            <p className="text-xs font-black text-blue-600 mb-1 uppercase tracking-tighter">{content.subsidypayment.text_56}</p>
                            <p className="text-sm text-slate-600 leading-relaxed mb-6">
                                {content.subsidypayment.text_57}
                            </p>
                            <div className="pt-4 border-t border-slate-100">
                                <p className="text-xs font-black text-orange-600 mb-1 uppercase tracking-tighter">{content.subsidypayment.text_58}</p>
                                <Link to="/cancellation" className="text-sm font-bold text-slate-800 hover:text-blue-600 flex items-center gap-2">
                                    {content.subsidypayment.text_59}<Icon name="arrowRight" className="size-4" />
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

        </PageTemplate>
    );
};
