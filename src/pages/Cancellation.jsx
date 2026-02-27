import React from 'react';
import { SEOHead } from '../components/SEOHead.jsx';
import { Layout } from '../components/Layout.jsx';
import { Link } from 'react-router-dom';

export const Cancellation = () => {
    return (
        <Layout>
            <SEOHead
                title="途中解約や引っ越しが不安な人へ｜東京ガス太陽光の契約前に確認するポイント"
                description="「もし途中で引っ越すことになったらどうなる？」太陽光や蓄電池の長期契約における最大の不安である「途中解約・清算金・撤去費」に関する事前の確認ポイントをまとめました。"
                path="/cancellation"
            />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-20">
                <div className="text-center mb-16 border-b border-gray-200 pb-10">
                    <span className="inline-block bg-red-100 text-red-700 font-bold px-4 py-1.5 rounded-full text-sm mb-4 border border-red-200 tracking-wider">最大の不安要素</span>
                    <h1 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
                        途中解約・引っ越しのリスク
                    </h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                        太陽光・蓄電池は10年、15年と長く使うシステムです。「途中で家を手放すことになったら莫大な違約金がかかるのでは？」と不安に思うのは当然です。契約前に「出口戦略」を確認しておきましょう。
                    </p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 p-6 md:p-8 rounded-r-lg mb-16 shadow-sm">
                    <h2 className="text-xl font-bold text-red-800 mb-4">結論：金額を決めるのは「契約形態」です</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        途中解約の条件や精算金は、どのようなプラン（一括購入、ローン、リース、定額サービス等）で契約したかにより完全に異なります。
                    </p>
                    <p className="text-gray-700 leading-relaxed font-bold bg-white p-4 rounded border border-red-100">
                        ネット上の「〇〇万円請求された！」という口コミに怯えるのではなく、見積もりの段階で担当者に「我が家のプランの場合、5年後に引っ越すとしたらどうなりますか？」と直接確認し、書面で残すことが最大の防御策です。
                    </p>
                </div>

                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-[#003366] mb-8 pb-2 border-b-2 border-blue-100">
                        契約前に担当者に聞くべき「質問テンプレ」
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

                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-[#003366] mb-8 pb-2 border-b-2 border-blue-100">よくあるケースと解釈の考え方</h2>
                    <div className="space-y-4">
                        <details className="bg-white rounded-lg shadow-sm border border-gray-200 group">
                            <summary className="font-bold p-5 cursor-pointer text-gray-800 list-none flex justify-between items-center pr-10 relative">
                                <span className="text-blue-600 mr-3">CASE 1.</span> 家を第三者に売却する場合（承継）
                                <span className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="p-5 pt-0 text-gray-600 text-sm md:text-base border-t border-gray-100 mt-2 pt-4 leading-relaxed">
                                ご自宅の売却価格に「太陽光・蓄電池の価値（ローン残債分など）」を上乗せして販売し、買主に設備をそのまま使ってもらうことで違約金等を回避・相殺できるケースがあります。ただし、契約プランによって権利の移行（承継）ができるかどうかが異なります。
                            </div>
                        </details>

                        <details className="bg-white rounded-lg shadow-sm border border-gray-200 group">
                            <summary className="font-bold p-5 cursor-pointer text-gray-800 list-none flex justify-between items-center pr-10 relative">
                                <span className="text-blue-600 mr-3">CASE 2.</span> 建物を壊して更地にする場合（撤去）
                                <span className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="p-5 pt-0 text-gray-600 text-sm md:text-base border-t border-gray-100 mt-2 pt-4 leading-relaxed">
                                この場合は、設備の契約自体を中途解約し、残債等の「清算金」を一括で支払うのが一般的です。これに加え、屋根からソーラーパネルを取り外すための「足場代」「撤去工事費」「廃棄費用」が別途発生します。解体予定がある場合は、導入前に「本当に十分な費用対効果が出るか（元が取れるか）」を慎重に考える必要があります。
                            </div>
                        </details>
                    </div>
                </section>

                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 text-gray-700 leading-relaxed text-sm mb-16">
                    <p className="mb-3 font-bold text-[#003366]">なぜ「東京ガス」のような大手を選ぶべきか？</p>
                    <p>
                        無名の悪質な販売代理店の場合、解約に関する重要事項（清算金の計算方法や撤去時の負担）をわざと小さく記載し、契約を急がせるケースがあります。東京ガスのような長期間のインフラを提供する企業の場合、コンプライアンス上、こうしたリスクについて事前にしっかりと書面や対面で説明を行う責任を持ちます。
                    </p>
                    <p className="mt-2 text-red-600 font-bold">
                        ※それでも、説明を聞かずにサインするのは危険です。必ずご自身で上記の「質問テンプレ」をぶつけて、担当者の誠実さを確かめてください。
                    </p>
                </div>

                {/* Call to action */}
                <div className="text-center relative">
                    <h3 className="text-2xl font-black text-gray-800 mb-6">不安を潰す最初の一歩はプロに聞くこと</h3>
                    <a href="https://home.tokyo-gas.co.jp/power/solar/index.html" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#003366] text-white font-bold text-lg md:text-xl py-4 px-10 rounded-full hover:bg-blue-800 transition-colors shadow-xl transform hover:-translate-y-1 w-full sm:w-auto">
                        無料相談で途中解約について聞く
                    </a>
                </div>

                {/* Internal Links Navigation */}
                <div className="border-t-2 border-gray-100 pt-10 mt-16">
                    <h3 className="font-bold text-lg text-gray-700 mb-6 text-center">疑問が残る方はこちらもチェック</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Link to="/cost" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 text-center flex items-center justify-between group">
                            <span className="text-xl text-gray-300 group-hover:text-blue-600 transition-colors">&larr;</span>
                            <div className="text-right">
                                <div className="text-xs text-blue-500 font-bold mb-1">費用が気になる</div>
                                <div className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors text-lg">費用の決まり方と見積もり</div>
                            </div>
                        </Link>
                        <Link to="/" className="bg-[#003366] text-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[#003366] text-center flex items-center justify-between group">
                            <div className="text-left w-full">
                                <div className="font-bold group-hover:text-blue-200 transition-colors text-lg mb-1">トップページへ戻る</div>
                                <div className="text-xs text-blue-200">すべての情報を総ざらいする</div>
                            </div>
                        </Link>
                    </div>
                </div>

            </div>
        </Layout>
    );
};
