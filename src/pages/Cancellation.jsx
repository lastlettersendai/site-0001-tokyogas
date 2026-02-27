import React from 'react';
import { PageTemplate } from '../components/PageTemplate.jsx';
import { Link } from 'react-router-dom';
import { FinalCTA } from '../components/FinalCTA.jsx';
import { Icon } from '../components/Icon.jsx';

export const Cancellation = () => {
    return (
        <PageTemplate
            title="途中解約や引っ越しが不安な人へ｜東京ガス太陽光の契約前に確認するポイント"
            description="「もし途中で引っ越すことになったらどうなる？」太陽光や蓄電池の長期契約における最大の不安である「途中解約・清算金・撤去費」に関する事前の確認ポイントをまとめました。"
            path="/cancellation"
        >

            <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-20">
                {/* Hero Section */}
                <div className="text-center mb-16 border-b border-gray-100 pb-12">
                    <span className="inline-block bg-red-100 text-red-700 font-bold px-4 py-1.5 rounded-full text-sm mb-4 border border-red-200 tracking-wider">長期契約における最大の不安要素</span>
                    <h1 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
                        途中解約・引っ越しのリスク
                    </h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
                        太陽光・蓄電池は10年、15年と長く使うシステムです。「途中で家を手放すことになったら<strong className="text-red-600">莫大な違約金</strong>がかかるのでは？」と不安に思うのは当然です。
                    </p>

                    <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl relative border border-gray-200 bg-white">
                        <img
                            src="/images/cancellation_truck.png"
                            alt="引っ越しや解体時の太陽光パネル移設・撤去のリスク"
                            className="w-full h-auto object-cover max-h-[450px]"
                            loading="lazy"
                        />
                        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg border border-gray-100 font-bold text-gray-800 flex items-center gap-2">
                            <span className="text-xl">🚚</span> 予測不能なライフイベントへの備え
                        </div>
                    </div>
                </div>

                {/* Warning Card */}
                <div className="bg-gradient-to-br from-red-50 to-orange-50 border-l-8 border-red-500 p-8 rounded-r-2xl mb-16 shadow-lg relative overflow-hidden group">
                    <div className="absolute -right-4 -top-4 text-red-100 opacity-40 text-9xl font-black transition-transform group-hover:scale-110">!</div>
                    <h2 className="text-2xl font-black text-red-800 mb-4 relative z-10 flex items-center gap-2">
                        <span className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm shadow-md shrink-0">警</span>
                        結論：金額を決めるのは「契約形態」です
                    </h2>
                    <div className="relative z-10 space-y-4">
                        <p className="text-gray-700 leading-relaxed font-bold bg-white/80 p-4 rounded-xl border border-red-100">
                            途中解約の条件や精算金は、「一括購入」「ソーラーローン」「定額リースサービス」など、どのようなプランで契約したかにより完全に異なります。
                        </p>
                        <div className="bg-red-600 text-white p-5 rounded-xl shadow-md">
                            <p className="flex items-start">
                                <Icon name="idea" className="text-blue-500 mr-2 size-6 shrink-0 mt-0.5 align-middle" />
                                <span>ネット上の「〇〇万円請求された！」という極端な口コミに怯えるのではなく、見積もりの段階で担当者に<span className="text-yellow-300 underline decoration-yellow-500 decoration-2 ml-1">「5年後に引っ越すとしたらどうなりますか？」</span>と直接確認し、書面で残すことが最大の防御策です。</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Case Study Block (Principle 3) */}
                <div className="bg-white border-2 border-red-100 rounded-2xl p-8 mb-16 shadow-md relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-red-100 text-red-800 font-bold px-4 py-1 rounded-bl-xl text-sm">
                        モデルケース・シミュレーション
                    </div>
                    <h3 className="text-xl font-bold text-[#003366] mb-6 flex items-center gap-2">
                        <span className="text-2xl">👤</span>
                        【実例】契約から8年後に転勤で家を売却することになったAさんの場合
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                            <h4 className="font-bold text-gray-700 border-b pb-2 mb-3">前提条件</h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li>・契約プラン: 初期費用0円（15年定額モデル）</li>
                                <li>・月額料金: 15,000円</li>
                                <li>・解約時期: 8年目（残り7年）</li>
                                <li>・次の住人: 設備を引き継がない（撤去希望）</li>
                            </ul>
                        </div>
                        <div className="bg-red-50 p-5 rounded-xl border border-red-200">
                            <h4 className="font-bold text-red-800 border-b border-red-200 pb-2 mb-3">Aさんの精算金（概算）</h4>
                            <ul className="space-y-3 text-sm text-red-700">
                                <li className="flex justify-between"><span>残期間の精算金:</span> <span className="font-bold">約 120万円</span></li>
                                <li className="flex justify-between"><span>パネル撤去・処分費:</span> <span className="font-bold">約 30万円</span></li>
                                <li className="flex justify-between border-t border-red-200 pt-2 text-lg">
                                    <span>合計負担額:</span> <span className="font-black">約 150万円の一括支払い</span>
                                </li>
                            </ul>
                            <p className="text-xs text-red-500 mt-2">※金額はあくまでモデルケースであり、実際の契約内容により大きく異なります。</p>
                        </div>
                    </div>
                    <div className="mt-6 bg-yellow-50 p-4 rounded-lg text-sm text-gray-700 border border-yellow-200">
                        <strong className="text-red-600">【結論】</strong>このように、「万が一」が発生した際のリスク（残債・撤去費）は非常に高額になります。「我が家の場合はどうなるのか？」を、見積もりの段階で必ず担当者にシミュレーションしてもらうことが、後悔しないための最大の防衛策です。
                    </div>
                </div>

                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-[#003366] mb-8 pb-2 border-b-2 border-blue-100">
                        解約金・撤去費トラブルを防ぐ「3つの確認リスト」
                    </h2>
                    <p className="text-gray-600 mb-6">以下の項目をスマホにメモ（または印刷）して、無料相談・見積もりの際に担当者にそのまま質問してください。</p>

                    <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-md">
                        <div className="space-y-6">
                            <div className="border-b text-gray-700 uppercase tracking-widest text-xs font-bold pb-2 border-gray-100">
                                質問リスト（コピペ用）
                            </div>
                            <div className="space-y-4 font-medium text-gray-800 text-lg">
                                <p className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                                    <span className="text-[#003366] font-black">Q1.</span>
                                    <span>「もし途中で家を売却・解体することになった場合、解約手続き（中途解約）はどうなりますか？」</span>
                                </p>
                                <p className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                                    <span className="text-[#003366] font-black">Q2.</span>
                                    <span>「その際にかかる『清算金』や『違約金』は、どのように計算されますか？」</span>
                                </p>
                                <p className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                                    <span className="text-[#003366] font-black">Q3.</span>
                                    <span>「家を売る場合、次の持ち主に契約（残債や権利）をそのまま引き継ぐことは可能ですか？」</span>
                                </p>
                                <p className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                                    <span className="text-[#003366] font-black">Q4.</span>
                                    <span>「もし設備を撤去して更地にする場合、撤去費用はいくらくらい見積もっておけばいいですか？」</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Branching Options Diagram */}
                <section className="mb-20">
                    <h2 className="text-2xl md:text-3xl font-black text-[#003366] text-center mb-10">
                        契約後の「もしも…」分岐パターン
                    </h2>

                    <div className="relative max-w-3xl mx-auto">
                        {/* Connecting Lines for Desktop */}
                        <div className="hidden md:block absolute top-[60px] left-[50%] w-0.5 h-10 bg-gray-300"></div>
                        <div className="hidden md:block absolute top-[100px] left-[25%] right-[25%] h-0.5 bg-gray-300"></div>

                        {/* Top Node */}
                        <div className="bg-white border-2 border-gray-800 rounded-2xl p-6 text-center shadow-lg relative z-10 md:w-2/3 mx-auto mb-10">
                            <span className="text-3xl mb-2 block">🏠</span>
                            <h3 className="font-black text-xl text-gray-800">契約途中で家を手放す理由が発生</h3>
                            <p className="text-sm text-gray-600 mt-2">転勤、実家への帰省、建て替えなど</p>
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
                                        パターン A
                                    </div>
                                    <h4 className="font-black text-lg text-blue-900 mb-3 flex items-center gap-2">
                                        <span className="text-2xl">🤝</span> 家を第三者に売却する
                                    </h4>
                                    <p className="text-sm text-gray-700 leading-relaxed bg-white p-4 rounded-xl border border-blue-100 flex-1">
                                        ご自宅の売却価格に「太陽光の価値（ローン残債分等）」を上乗せして販売し、買主に設備をそのまま使ってもらうことで違約金を回避・相殺できるケースがあります。<br /><br />
                                        <strong className="text-red-500">※注意:</strong> 契約プラン（リース等）によっては名義変更（承継）ができない場合があるため、事前確認が必須です。
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
                                        パターン B
                                    </div>
                                    <h4 className="font-black text-lg text-red-900 mb-3 flex items-center gap-2">
                                        <span className="text-2xl">🏗️</span> 建物を壊して更地にする
                                    </h4>
                                    <p className="text-sm text-gray-700 leading-relaxed bg-white p-4 rounded-xl border border-red-100 flex-1">
                                        設備の契約自体を中途解約し、残債等の<strong className="text-red-600">「清算金」を一括</strong>で支払うのが一般的です。<br /><br />
                                        これに加え、屋根からパネルを取り外すための「足場代」「撤去工事費」「廃棄費用」（数十万円〜）が別途発生します。<br />
                                        <span className="text-xs text-red-500 font-bold block mt-2">解体予定が近い場合は、導入そのものを見送るのが無難です。</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 text-gray-700 leading-relaxed text-sm mb-16 shadow-sm">
                    <p className="mb-3 font-bold text-[#003366] text-lg flex items-center gap-2">
                        <span className="text-blue-500">🛡️</span> なぜ「東京ガス」のような大手を選ぶべきか
                    </p>
                    <p className="bg-white p-4 rounded-lg border border-blue-50 mb-3">
                        無名の悪質な販売代理店の場合、解約に関する重要事項（清算金の計算方法や撤去時の莫大な負担金）を<strong className="text-red-500">わざと極小文字で記載</strong>し、契約をせかすケースがあります。東京ガスのような長期間のインフラを提供する企業の場合、コンプライアンス上、こうした出口のリスクについて事前にしっかりと書面や対面で説明を行う責任を持ちます。
                    </p>
                    <p className="flex items-start">
                        <Icon name="alert" className="text-red-600 size-5 mr-2 align-middle mt-0.5" />
                        <span>それでも、書類を読まずにサインするのは危険です。必ずご自身で上記の「質問リスト」をぶつけて、担当者の誠実さを確かめてください。</span>
                    </p>
                </div>

                <FinalCTA />

                {/* Internal Links Navigation */}
                <div className="border-t-2 border-gray-100 pt-10 mt-16">
                    <h3 className="font-bold text-lg text-gray-700 mb-6 text-center">疑問が残る方はこちらもチェック</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Link to="/subsidy-tokyo" className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 text-center flex items-center justify-between group">
                            <span className="text-2xl text-gray-300 group-hover:text-blue-600 transition-transform group-hover:-translate-x-2">&larr;</span>
                            <div className="text-right">
                                <div className="text-xs text-orange-500 font-bold mb-1 tracking-wider uppercase">Money</div>
                                <div className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors text-lg">東京都の補助金と罠</div>
                            </div>
                        </Link>
                        <Link to="/" className="bg-[#003366] text-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-[#003366] text-center flex justify-center items-center group">
                            <div className="text-left w-full">
                                <div className="text-xs text-blue-200 font-bold mb-1 tracking-wider uppercase">Home</div>
                                <div className="font-bold text-white transition-colors text-lg">トップページへ戻る</div>
                            </div>
                            <span className="text-xl text-blue-300 transition-transform group-hover:translate-x-2">&rarr;</span>
                        </Link>
                    </div>
                </div>
            </div>
        </PageTemplate>
    );
};
