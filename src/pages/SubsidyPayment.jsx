import React from 'react';
import { PageTemplate } from '../components/PageTemplate.jsx';
import { Link } from 'react-router-dom';
import { FinalCTA } from '../components/FinalCTA.jsx';
import { Icon } from '../components/Icon.jsx';

export const SubsidyPayment = () => {
    return (
        <PageTemplate
            title="太陽光・蓄電池の補助金はいつ入金される？立て替えによる資金繰りリスク"
            description="補助金で安くなると言われても、入金されるのは「工事が終わってから数ヶ月後」です。一時的に数百万円をどう立て替えるか、資金繰りの注意点を解説します。"
            path="/subsidy-payment"
        >

            <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-20">
                {/* Hero Section */}
                <div className="text-center mb-16 border-b border-gray-100 pb-12">
                    <span className="inline-block bg-red-100 text-red-800 font-bold px-4 py-1.5 rounded-full text-sm mb-4 border border-red-200 tracking-wider">見落としがちな資金繰りの罠</span>
                    <h1 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
                        補助金は「いつ」<br className="hidden md:inline" />振り込まれるのか？
                    </h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
                        「補助金を使って実質100万円で導入できる！」という言葉には注意が必要です。<strong className="text-red-600">補助金は商品を買う時のレジでそのまま「値引き」されるわけではありません。</strong>
                    </p>

                    <div className="max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-2xl relative border border-gray-200">
                        <img
                            src="/images/subsidy_payment.png"
                            alt="補助金の入金タイミングと資金繰りのイメージ"
                            className="w-full h-auto object-cover max-h-[450px]"
                            loading="lazy"
                        />
                    </div>
                </div>

                {/* Wait Time Card (Conclusion) */}
                <div className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 p-8 rounded-2xl mb-20 shadow-lg relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-red-100 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
                    <h2 className="text-2xl font-black text-red-800 mb-6 flex items-center gap-3">
                        <Icon name="alert" className="text-red-500 size-10 mr-3 align-middle" />
                        結論：補助金は「完全な後払い」です
                    </h2>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-red-100 mb-6">
                        <p className="text-gray-700 leading-relaxed font-bold text-lg mb-4">
                            太陽光・蓄電池の補助金は、<span className="text-red-600 border-b-2 border-red-200">工事がすべて完了し、役所の審査に合格した「数ヶ月後」</span>に、お客様の銀行口座に直接振り込まれます。
                        </p>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li className="flex items-start gap-2">
                                <span className="text-red-500 mt-0.5">✘</span>
                                契約時に見積もり金額から値引きされるわけではない
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-500 mt-0.5">✘</span>
                                工事の支払いタイミングには補助金の手続きは間に合わせられない
                            </li>
                        </ul>
                    </div>

                    <div className="bg-red-600 text-white p-4 rounded-xl shadow-md text-center">
                        <p className="font-bold text-lg">
                            つまり、販売会社への工事費用の支払いは、<br className="hidden md:block" />
                            <span className="text-yellow-300 text-xl mx-1 underline decoration-yellow-500 decoration-2">全額を先行して支払う（立て替える）</span>必要があります。
                        </p>
                    </div>
                </div>

                {/* Payment Timeline Flow */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <span className="text-[#003366] font-bold tracking-widest text-sm mb-2 block uppercase">Timeline</span>
                        <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-4">
                            契約から入金までの流れ
                        </h2>
                        <p className="text-gray-600">お金が出ていくタイミングと、入ってくるタイミングの<br className="hidden md:block" />「ズレ」を正確に把握してください。</p>
                    </div>

                    <div className="relative max-w-2xl mx-auto pl-4 md:pl-0">
                        {/* Connecting Line */}
                        <div className="absolute left-[39px] md:left-[50px] top-8 bottom-8 w-1 bg-gray-200 -z-10"></div>

                        <div className="space-y-12">
                            {/* Step 1 */}
                            <div className="relative flex items-start group">
                                <div className="w-16 h-16 bg-white border-4 border-gray-200 text-gray-400 rounded-full flex items-center justify-center font-black text-xl shrink-0 z-10 mr-6 shadow-sm group-hover:border-blue-300 transition-colors">1</div>
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex-1 group-hover:shadow-md transition-shadow">
                                    <h3 className="font-bold text-xl text-gray-800 mb-2">ご契約・交付申請</h3>
                                    <p className="text-gray-600 text-sm">東京ガスにて契約。役所へ「この内容で工事をして補助金をもらう予定です」という事前申請を提出します（東京ガス代行）。</p>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="relative flex items-start group">
                                <div className="w-16 h-16 bg-white border-4 border-gray-200 text-gray-400 rounded-full flex items-center justify-center font-black text-xl shrink-0 z-10 mr-6 shadow-sm group-hover:border-blue-300 transition-colors">2</div>
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex-1 group-hover:shadow-md transition-shadow">
                                    <h3 className="font-bold text-xl text-gray-800 mb-2 flex items-center gap-2">交付決定通知 <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded font-normal">約1〜2ヶ月後</span></h3>
                                    <p className="text-gray-600 text-sm">役所の審査が通り、予算枠が正式に確保されます。この決定が出て初めて着工が可能になります。</p>
                                </div>
                            </div>

                            {/* Step 3 (CRITICAL) */}
                            <div className="relative flex items-start group">
                                <div className="absolute left-[39px] md:left-[50px] top-8 bottom-[-48px] w-1 bg-gradient-to-b from-red-500 to-orange-500 -z-10"></div>
                                <div className="w-16 h-16 bg-red-500 border-4 border-red-100 text-white rounded-full flex items-center justify-center font-black text-2xl shrink-0 z-10 mr-6 shadow-lg animate-pulse">💸</div>
                                <div className="bg-red-50 p-6 rounded-2xl shadow-md border-2 border-red-200 flex-1">
                                    <h3 className="font-black text-xl text-red-700 mb-3 border-b border-red-200 pb-2">工事開始 ＆ お支払い（出費！）</h3>
                                    <p className="text-red-900 text-sm font-bold mb-3">ここで販売会社へのお支払いが発生します。</p>
                                    <div className="bg-white p-3 rounded-xl border border-red-100 text-sm">
                                        <p className="font-bold text-gray-800 border-l-2 border-red-500 pl-2 mb-2">現金一括の場合：<span className="text-red-600">全額（数百万円）の出費</span></p>
                                        <p className="font-bold text-gray-800 border-l-2 border-blue-500 pl-2">ソーラーローンの場合：<span className="text-blue-600">月々の支払いがスタート</span></p>
                                    </div>
                                </div>
                            </div>

                            {/* Step 4 */}
                            <div className="relative flex items-start group">
                                <div className="w-16 h-16 bg-white border-4 border-orange-200 text-orange-400 rounded-full flex items-center justify-center font-black text-xl shrink-0 z-10 mr-6 shadow-sm group-hover:border-orange-400 transition-colors">4</div>
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex-1 group-hover:shadow-md transition-shadow">
                                    <h3 className="font-bold text-xl text-gray-800 mb-2">実績報告の提出</h3>
                                    <p className="text-gray-600 text-sm">工事完了後、施工写真や領収書などを役所へ提出し、「間違いなく設置され、支払いも終わった」ことを証明します。</p>
                                </div>
                            </div>

                            {/* Step 5 (REWARD) */}
                            <div className="relative flex items-start group">
                                <div className="w-16 h-16 bg-[#003366] border-4 border-blue-200 text-white rounded-full flex items-center justify-center font-black text-2xl shrink-0 z-10 mr-6 shadow-lg transform group-hover:scale-110 transition-transform"><Icon name="money" className="text-white size-8" /></div>
                                <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-2xl shadow-md border-2 border-[#003366] flex-1 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 rounded-bl-full -z-10 opacity-50"></div>
                                    <h3 className="font-black text-xl text-[#003366] mb-3">補助金の「入金」</h3>
                                    <p className="text-blue-900 text-sm font-bold bg-blue-100 p-3 rounded-lg border border-blue-200">
                                        工事完了から【約2〜4ヶ月後】に、お客様の口座へまとまった補助金が振り込まれます。<br />
                                        <span className="text-xs text-gray-600 font-normal mt-2 block">※役所の混み具合により半年近く待たされるケースもあります。気長に待ちましょう。</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Solar Loan Section */}
                <div className="mb-20">
                    <h2 className="text-2xl md:text-3xl font-black text-center text-gray-800 mb-8">
                        資金繰り対策：「ソーラーローン」の賢い使い方
                    </h2>

                    <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                        <p className="text-gray-600 mb-8 text-center text-lg">
                            数百万円の現金を一気に減らしたくない場合、多くの人が金利の安い「専用ソーラーローン」を活用します。<br className="hidden md:block" />この際、補助金の入金を見越したテクニックがあります。
                        </p>

                        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 relative">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#003366] text-white font-bold px-6 py-2 rounded-full text-sm shadow-md">鉄則テクニック</div>

                            <h3 className="font-black text-gray-800 text-2xl text-center mt-4 mb-6 text-blue-900">
                                補助金が入ったら「繰り上げ返済」で<br className="md:hidden" />負担を激減させる
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mb-6">
                                <div className="bg-white p-4 rounded-xl text-center shadow-sm border border-gray-100">
                                    <div className="text-3xl mb-2">🏦</div>
                                    <div className="font-bold text-gray-700 text-sm mb-1">契約時</div>
                                    <div className="text-xs text-gray-500">全額（補助金引く前）でローンを組み、月々支払い開始</div>
                                </div>
                                <div className="bg-white p-4 rounded-xl text-center shadow-sm border border-gray-100">
                                    <div className="text-3xl mb-2 flex justify-center"><Icon name="money" className="text-blue-700 size-8" /></div>
                                    <div className="font-bold text-blue-700 text-sm mb-1">数ヶ月後（補助金入金）</div>
                                    <div className="text-xs text-gray-500">口座に入った補助金（数十万円〜）をそのまま一部繰り上げ返済に充てる</div>
                                </div>
                            </div>
                        </div>

                        <p className="text-sm text-gray-600 bg-white p-4 rounded-xl border border-yellow-200 border-l-4 border-l-yellow-400">
                            <strong>メリット：</strong> 実質的な借入総額が一気に下がり、「月々の支払い額を下げる」または「返済期間を短縮」することが可能です。<br />
                            <span className="text-xs text-gray-500 mt-1 block">※金融機関によって繰り上げ返済の手数料ルールが異なるため、ローンの見積もり時に必ず担当者へ確認してください。</span>
                        </p>
                    </div>
                </div>
            </div>

            <FinalCTA />

            {/* Internal Links Navigation */}
            <div className="border-t-2 border-gray-100 pt-10">
                <h3 className="font-bold text-lg text-gray-700 mb-6 text-center">次はこちらも確認してください</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link to="/cancellation" className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 text-center flex items-center justify-between group">
                        <div className="text-left w-full">
                            <div className="text-xs text-red-500 font-bold mb-1 tracking-wider uppercase">Risk</div>
                            <div className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors text-lg">引越し・解体リスク</div>
                        </div>
                        <span className="text-2xl text-gray-300 group-hover:text-blue-600 transition-transform group-hover:translate-x-2">&rarr;</span>
                    </Link>
                    <Link to="/" className="bg-[#003366] p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-[#003366] text-center flex items-center justify-between group">
                        <div className="text-left w-full">
                            <div className="text-xs text-blue-200 font-bold mb-1 tracking-wider uppercase">Home</div>
                            <div className="font-bold text-white transition-colors text-lg">トップページへ戻る</div>
                        </div>
                        <span className="text-xl text-blue-300 transition-transform group-hover:-translate-x-1">&rarr;</span>
                    </Link>
                </div>
            </div>

        </PageTemplate>
    );
};
