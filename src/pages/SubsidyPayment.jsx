import React from 'react';
import { SEOHead } from '../components/SEOHead.jsx';
import { Layout } from '../components/Layout.jsx';
import { Link } from 'react-router-dom';

export const SubsidyPayment = () => {
    return (
        <Layout>
            <SEOHead
                title="太陽光・蓄電池の補助金はいつ入金される？立て替えによる資金繰りリスク"
                description="補助金で安くなると言われても、入金されるのは「工事が終わってから数ヶ月後」です。一時的に数百万円をどう立て替えるか、資金繰りの注意点を解説します。"
                path="/subsidy-payment"
            />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-20">
                <div className="text-center mb-16 border-b border-gray-200 pb-10">
                    <span className="inline-block bg-red-100 text-red-800 font-bold px-4 py-1.5 rounded-full text-sm mb-4 border border-red-200 tracking-wider">見落としがちな資金繰りの罠</span>
                    <h1 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
                        補助金は「いつ」<br className="hidden md:inline" />振り込まれるのか？
                    </h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                        「補助金を使って実質100万円で導入できる！」という言葉には注意が必要です。補助金は商品を買う時のレジでそのまま「値引き」されるわけではありません。
                    </p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 p-6 md:p-8 rounded-r-lg mb-16 shadow-sm">
                    <h2 className="text-xl font-bold text-red-800 mb-4">結論：補助金は「後払い」です。一時的な立て替えが必要です。</h2>
                    <p className="text-gray-700 leading-relaxed font-bold">
                        基本的に太陽光・蓄電池の補助金は、工事がすべて完了し、メーカーの保証書や設置前後の写真などの「実績報告」を役所に提出して、審査に合格した「後」に、指定した銀行口座に直接振り込まれます。
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-4">
                        つまり、販売会社への工事費用の支払いは、<strong className="text-black bg-yellow-200 px-1">全額（または補助金を引く前の金額）を先行して支払う</strong>か、ローンを組む必要があるのが一般的です。
                    </p>
                </div>

                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-[#003366] mb-8 pb-2 border-b-2 border-blue-100">
                        契約から入金までのモデルスケジュール
                    </h2>

                    <div className="relative border-l-4 border-blue-200 ml-4 md:ml-8 space-y-10 pl-8 py-4">
                        <div className="relative">
                            <span className="absolute -left-[45px] top-1 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-600 border-4 border-white shadow-sm">1</span>
                            <h3 className="font-bold text-lg text-gray-800 mb-2">ご契約・補助金の「交付申請」</h3>
                            <p className="text-gray-600 text-sm">東京ガスにて契約。その後、東京ガス側で役所へ「この内容で工事をして補助金をもらう予定です」という申請を出します。</p>
                        </div>
                        <div className="relative">
                            <span className="absolute -left-[45px] top-1 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-600 border-4 border-white shadow-sm">2</span>
                            <h3 className="font-bold text-lg text-gray-800 mb-2">役所からの「交付決定通知」</h3>
                            <p className="text-gray-600 text-sm">役所の審査が通り、「この金額の枠を確保しました」という通知が来ます。（※ここまで1〜2ヶ月かかることも）</p>
                        </div>
                        <div className="relative">
                            <span className="absolute -left-[45px] top-1 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center font-bold text-white border-4 border-white shadow-sm">3</span>
                            <h3 className="font-bold text-lg text-blue-800 mb-2">工事開始 ＆ お支払い（ローン開始）</h3>
                            <p className="text-gray-600 text-sm"><strong className="text-red-500">ここで販売会社へのお支払いが発生します。現金一括の場合は数百万円の出費、ソーラーローンの場合は支払いがスタートします。</strong></p>
                        </div>
                        <div className="relative">
                            <span className="absolute -left-[45px] top-1 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-600 border-4 border-white shadow-sm">4</span>
                            <h3 className="font-bold text-lg text-gray-800 mb-2">実績報告の提出</h3>
                            <p className="text-gray-600 text-sm">工事完了後、施工写真や領収書などを役所へ提出します（東京ガスが代行）。</p>
                        </div>
                        <div className="relative">
                            <span className="absolute -left-[45px] top-1 w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center font-bold text-white border-4 border-white shadow-sm">5</span>
                            <h3 className="font-bold text-lg text-orange-800 mb-2">補助金の「確定通知」と「入金」</h3>
                            <p className="text-gray-600 text-sm font-bold bg-orange-50 p-2 rounded border border-orange-100 mt-2">
                                工事完了から概ね【2〜4ヶ月後】に、お客様の口座へ補助金が直接振り込まれます。<br />
                                （※役所の混み具合により半年近く待たされるケースもあります）
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-[#003366] mb-8 pb-2 border-b-2 border-blue-100">
                        「ソーラーローン」を使う場合のポイント
                    </h2>
                    <p className="text-gray-600 mb-6">数百万円の現金を手元から減らしたくない・用意できない場合、多くの人が専用のソーラーローンを活用します。この際、補助金の入金を見越したテクニックがあります。</p>

                    <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
                        <ul className="space-y-6">
                            <li>
                                <h3 className="font-bold text-gray-800 border-l-4 border-[#003366] pl-3 mb-2">補助金が入ったら「繰り上げ返済」をする</h3>
                                <p className="text-gray-600 text-sm">
                                    最初は全額でローンを組み、数ヶ月後に補助金が口座に振り込まれたら、その補助金をそのままローンの「一部繰り上げ返済」に充てることで、月々の支払い額を下げたり、返済期間を短縮することが可能です。<br />
                                    ※ただし、金融機関によって繰り上げ返済の手数料がかかる場合があるので、見積もり時に担当者に確認してください。
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Call to action */}
                <div className="text-center relative">
                    <h3 className="text-2xl font-black text-gray-800 mb-6">支払いのタイミングも、シミュレーションで可視化を</h3>
                    <a href="https://home.tokyo-gas.co.jp/power/solar/index.html" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#003366] text-white font-bold text-lg md:text-xl py-4 px-10 rounded-full hover:bg-blue-800 transition-colors shadow-xl transform hover:-translate-y-1 w-full sm:w-auto">
                        無料相談で支払い計画を立てる
                    </a>
                </div>

                {/* Internal Links Navigation */}
                <div className="border-t-2 border-gray-100 pt-10 mt-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Link to="/subsidy-tokyo" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 text-center flex items-center justify-between group">
                            <span className="text-xl text-gray-300 group-hover:text-blue-600 transition-colors">&larr;</span>
                            <div className="text-right w-full">
                                <div className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors text-lg">東京都の補助金の仕組みへ</div>
                            </div>
                        </Link>
                        <Link to="/" className="bg-[#003366] text-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[#003366] flex flex-col items-center justify-center group">
                            <div className="font-bold group-hover:text-blue-200 transition-colors text-lg">トップページへ戻る</div>
                        </Link>
                    </div>
                </div>

            </div>
        </Layout>
    );
};
