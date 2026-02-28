import React from 'react';
import { PageTemplate } from '../components/PageTemplate.jsx';
import { Link } from 'react-router-dom';
import { FinalCTA } from '../components/FinalCTA.jsx';
import { Icon } from '../components/Icon.jsx';
import { ConstitutionFAQ } from '../components/ConstitutionFAQ.jsx';

export const Cancellation = () => {
    return (
        <PageTemplate
            title="途中解約や引っ越しが不安な人へ｜東京ガス太陽光の契約前に確認するポイント"
            description="「もし途中で引っ越すことになったらどうなる？」太陽光や蓄電池の長期契約における最大の不安である「途中解約・清算金・撤去費」に関する事前の確認ポイントをまとめました。"
            path="/cancellation"
        >

            <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-20">
                {/* Block 1: 冒頭3行 (Who/What) */}
                <div className="mb-8 text-left">
                    <span className="inline-block bg-red-100 text-red-800 font-bold px-4 py-1.5 rounded-full text-xs mb-4 border border-red-300 tracking-wider">EXIT STRATEGY</span>
                    <p className="text-gray-600 text-sm font-bold leading-relaxed">
                        「一生この家に住む」とは限りません。<br />
                        転勤、売却、そして解体。未来のライフイベントにおいて、太陽光が「足枷」にならないために。<br />
                        契約前に知っておくべき「出口の真実」を公開します。
                    </p>
                </div>

                {/* Block 2: 結論1行 */}
                <h1 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-8">
                    「家と一緒に売却」できるプランを選ぶのが正解です
                </h1>

                {/* Block 3: 前提条件 (3行以内) */}
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 inline-block w-full max-w-2xl text-left mb-12">
                    <p className="text-xs font-black text-red-600 mb-2 tracking-widest uppercase">Prerequisite for Cancellation</p>
                    <ul className="text-sm font-bold text-slate-700 space-y-1">
                        <li className="flex items-center gap-2"><Icon name="check" className="size-4 text-red-600" /> 10年以内に引越しや建て替えの可能性がある</li>
                        <li className="flex items-center gap-2"><Icon name="check" className="size-4 text-red-600" /> 違約金という言葉に強い不安を感じている</li>
                        <li className="flex items-center gap-2"><Icon name="check" className="size-4 text-red-600" /> 次の住人へ設備をスムーズに引き継ぎたい</li>
                    </ul>
                </div>

                <div className="text-center mb-16 border-b border-gray-100 pb-12">
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
                        太陽光・蓄電池は10年、15年と長く使うシステムです。「途中で家を手放すことになったら<strong className="text-red-600">莫大な違約金</strong>がかかるのでは？」と不安に思うのは当然です。
                    </p>
                </div>

                {/* Warning Card */}
                <div className="bg-gradient-to-br from-red-50 to-orange-50 border-l-8 border-red-500 p-8 rounded-r-2xl mb-16 shadow-lg relative overflow-hidden group">
                    <div className="absolute -right-4 -top-4 text-red-100 opacity-40 text-9xl font-black transition-transform group-hover:scale-110">!</div>
                    <h2 className="text-2xl font-black text-red-800 mb-4 relative z-10 flex items-center gap-2">
                        <Icon name="shieldAlert" className="size-8 text-red-600 shrink-0" />
                        結論：金額を決めるのは「契約形態」です
                    </h2>
                    <div className="relative z-10 space-y-4">
                        <p className="text-gray-700 leading-relaxed font-bold bg-white/80 p-4 rounded-xl border border-red-100">
                            途中解約の条件や精算金は、「一括購入」「ソーラーローン」「定額リースサービス」など、どのようなプランで契約したかにより完全に異なります。
                        </p>
                        <div className="bg-red-600 text-white p-5 rounded-xl shadow-md">
                            <p className="flex items-start">
                                <Icon name="idea" className="text-blue-500 mr-2 size-6 shrink-0 mt-0.5" />
                                <span>ネット上の「〇〇万円請求された！」という極端な口コミに怯えるのではなく、見積もりの段階で担当者に<span className="text-yellow-300 underline decoration-yellow-500 decoration-2 ml-1">「5年後に引っ越すとしたらどうなりますか？」</span>と直接確認し、書面で残すことが最大の防御策です。</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Block 4: 誤解の解体 (Misconception) */}
                <div className="bg-red-50 p-8 rounded-3xl border border-red-100 mb-20">
                    <div className="flex items-center gap-3 mb-4 text-red-600">
                        <Icon name="x" className="size-8" />
                        <h2 className="text-xl font-black">よくある誤解：「解約金は一律で一、二百万円かかる」</h2>
                    </div>
                    <p className="font-bold text-red-800 mb-4 leading-relaxed">
                        「〇〇万円請求された！」というネットの口コミは、<span className="underline decoration-red-500 decoration-2">多くの場合、悪質な業者の不透明な契約内容によるものです。</span>
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                        大手インフラの東京ガスが提供するプランでは、残債の計算式が明確に定められています。また、一括購入であればそもそも「解約金」という概念自体が存在しません。リスクを過大評価して導入を見送るのではなく、正しい「清算ルール」を書面で確認することが重要です。
                    </p>
                </div>

                {/* Block 5: 判断基準 (Criteria) */}
                <div className="mb-20">
                    <h2 className="text-2xl font-black text-[#003366] mb-8 border-l-4 border-red-600 pl-4">将来の不安に合わせた「契約の選び方」</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-2xl border border-slate-200">
                            <h3 className="font-bold mb-4">引越しの可能性があるなら「一括購入」</h3>
                            <ul className="text-sm space-y-2 text-slate-600 italic">
                                <li>・売却価格にシステムの価値をそのまま上乗せできる</li>
                                <li>・解約に伴う「事務手数料」などの無駄な出費がない</li>
                                <li>・名義変更が最もスムーズで、買主に喜ばれる</li>
                            </ul>
                        </div>
                        <div className="bg-red-50 p-6 rounded-2xl border border-red-200">
                            <h3 className="font-bold mb-4 text-red-900">手元の現金を残したいなら「承継可能なリース」</h3>
                            <ul className="text-sm space-y-2 text-red-800 italic">
                                <li>・次の住人に月々の支払いをそのまま引き継げる（承継）</li>
                                <li>・一括清算の負担を次のオーナーに交渉できる</li>
                                <li>・東京ガスのブランドがあるため、中古住宅としての信頼性が高い</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Block 6: 実例 (Case Study) - Format Fixed: Premise -> Conclusion -> Reason -> Next Q */}
                <div className="mb-20">
                    <h2 className="text-2xl font-black text-center text-[#003366] mb-12">
                        売却・解約シミュレーション
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                            <p className="text-xs font-black text-blue-600 mb-1 uppercase tracking-tighter">1. 前提</p>
                            <p className="font-bold text-slate-800 mb-4">築10年で売却・「エネカリ（15年）」の8年目に引越し</p>
                            <div className="bg-blue-50 p-4 rounded-xl mb-4">
                                <p className="text-xs font-black text-blue-600 mb-1 uppercase tracking-tighter">2. 結論</p>
                                <p className="text-lg font-black text-blue-900">実質負担 0円 で次の住人に引き継ぎ成功</p>
                            </div>
                            <p className="text-xs font-black text-blue-600 mb-1 uppercase tracking-tighter">3. 理由</p>
                            <p className="text-sm text-slate-600 leading-relaxed mb-6">
                                東京ガスの「承継手続き」を活用。次の住人が「光熱費が安い家」というメリットに納得し、残りのリース期間を引き継いでくれたため、Aさんの解約金負担は発生しませんでした。
                            </p>
                            <div className="pt-4 border-t border-slate-100">
                                <p className="text-xs font-black text-orange-600 mb-1 uppercase tracking-tighter">4. 次の質問</p>
                                <Link to="/faq" className="text-sm font-bold text-slate-800 hover:text-blue-600 flex items-center gap-2">
                                    「名義変更の手続きはどれくらい大変？」<Icon name="arrowRight" className="size-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Block 7: 申込直前FAQ */}
                <ConstitutionFAQ />

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
                            <Icon name="home" className="size-8 text-gray-800 mb-2 block mx-auto" />
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
                                        <Icon name="handshake" className="size-6 text-blue-600" /> 家を第三者に売却する
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
                                        <Icon name="construction" className="size-6 text-red-600" /> 建物を壊して更地にする
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
                        <Icon name="shield" className="size-6 text-blue-600" /> なぜ「東京ガス」のような大手を選ぶべきか
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

            </div>
        </PageTemplate>
    );
};
