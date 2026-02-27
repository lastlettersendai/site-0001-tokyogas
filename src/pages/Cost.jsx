import React from 'react';
import { SEOHead } from '../components/SEOHead.jsx';
import { Layout } from '../components/Layout.jsx';
import { Link } from 'react-router-dom';
import { CTALink } from '../components/CTALink.jsx';

export const Cost = () => {
    return (
        <Layout>
            <SEOHead
                title="東京ガスの太陽光・蓄電池はいくら？費用が変わるポイントと見積もりの見方"
                description="「我が家だといくらかかるの？」という疑問に対し、屋根の形状や設備の容量など、金額が変動する3つのポイントを解説。相見積もりの考え方も紹介します。"
                path="/cost"
            />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-20">
                <div className="text-center mb-16 border-b border-gray-200 pb-10">
                    <h1 className="text-3xl md:text-4xl font-black text-[#003366] leading-tight mb-6">
                        東京ガスの太陽光・蓄電池はいくら？<br />
                        <span className="text-2xl md:text-3xl text-gray-700 mt-2 block">費用が変わるポイントと見積もりの見方</span>
                    </h1>
                    <p className="text-lg font-bold text-orange-600 bg-orange-50 inline-block px-6 py-3 rounded-full border border-orange-200">
                        結論：金額は家ごとに完全に異なります。まずは「内訳つきの見積もり」を取ることが最短ルートです。
                    </p>
                </div>

                <div className="bg-white p-6 md:p-10 rounded-xl shadow-sm border border-gray-200 mb-16">
                    <h2 className="text-2xl font-bold text-gray-800 mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <span className="bg-[#003366] text-white px-4 py-2 rounded-lg text-sm tracking-wider shadow-sm shrink-0">POINT 1</span>
                        <span>費用が変動する3つの大きな要因</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 relative pt-12">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl shadow-md border-4 border-blue-50">🏠</div>
                            <h3 className="font-bold text-center text-[#003366] mb-3 text-lg">1. 屋根の広さと形状</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">パネルを何枚載せられるかで基本料金が変わります。また、足場を組む面積や、特殊な屋根材（瓦など）の施工難易度によっても工事費が変動します。</p>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 relative pt-12">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl shadow-md border-4 border-blue-50">⚡</div>
                            <h3 className="font-bold text-center text-[#003366] mb-3 text-lg">2. 設備の容量選び</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">日中の電気使用量に合わせて、適切な蓄電池の容量（kWh）を選ぶ必要があります。容量が大きいほど高額になりますが、小さすぎると停電時や夜間に不足します。</p>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 relative pt-12">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl shadow-md border-4 border-blue-50">🛠️</div>
                            <h3 className="font-bold text-center text-[#003366] mb-3 text-lg">3. 付帯工事・電気工事</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">ご自宅の分電盤（ブレーカー）の古さや、配線を隠すための家の構造によって、追加の電気工事費が発生するケースがあります。</p>
                        </div>
                    </div>
                </div>

                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-[#003366] mb-8 pb-2 border-b-2 border-blue-100">
                        絶対に確認すべき「見積もりチェックリスト」
                    </h2>
                    <p className="text-gray-600 mb-6">見積もりが出た際は、以下の項目が含まれているか、または金額が明記されているかを確認してください。トラブルを防ぐ防波堤になります。</p>

                    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-inner">
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="text-green-600 text-xl font-bold mt-1">☑️</span>
                                <div>
                                    <strong className="text-gray-800 block">機器代と工事費が分かれているか</strong>
                                    <span className="text-sm text-gray-500">「一式」とだけ書かれている場合は内訳を求めましょう。</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-600 text-xl font-bold mt-1">☑️</span>
                                <div>
                                    <strong className="text-gray-800 block">足場代は含まれているか</strong>
                                    <span className="text-sm text-gray-500">後から「足場代は別でした」と言われないための確認項目です。</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-600 text-xl font-bold mt-1">☑️</span>
                                <div>
                                    <strong className="text-gray-800 block">補助金の「見込み額」と「適用後の実質負担額」</strong>
                                    <span className="text-sm text-gray-500 text-red-500 font-bold">※補助金は確定ではない旨の説明を担当者から必ず受けてください。</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-600 text-xl font-bold mt-1">☑️</span>
                                <div>
                                    <strong className="text-gray-800 block">保証内容（機器保証、施工保証、自然災害補償）が明記されているか</strong>
                                    <span className="text-sm text-gray-500">各保証の「年数」と「適用範囲」の見落としがないようにします。</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-[#003366] mb-8 pb-2 border-b-2 border-blue-100">よくある質問（費用・相見積もり）</h2>
                    <div className="space-y-4">
                        <details className="bg-white rounded-lg shadow-sm border border-gray-200 group">
                            <summary className="font-bold p-5 cursor-pointer text-gray-800 list-none flex justify-between items-center pr-10 relative">
                                <span className="text-blue-600 mr-3">Q.</span> 他社と相見積もりをした方がいいですか？
                                <span className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="p-5 pt-0 text-gray-600 text-sm md:text-base border-t border-gray-100 mt-2 pt-4 leading-relaxed">
                                基本的に相見積もりは推奨されます。ただし、比較する際は<strong className="text-gray-800">「パネルのメーカー」「蓄電池の容量」「保証年数」「足場代の有無」などを同条件に揃えて</strong>比較しないと、安かろう悪かろうの業者を選んでしまうリスクがあります。価格だけでなく、アフターサポートの安心感（東京ガスという看板の強みなど）も含めて総合的に判断してください。
                            </div>
                        </details>

                        <details className="bg-white rounded-lg shadow-sm border border-gray-200 group">
                            <summary className="font-bold p-5 cursor-pointer text-gray-800 list-none flex justify-between items-center pr-10 relative">
                                <span className="text-blue-600 mr-3">Q.</span> 初期費用0円のプランもあると聞きましたが？
                                <span className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="p-5 pt-0 text-gray-600 text-sm md:text-base border-t border-gray-100 mt-2 pt-4 leading-relaxed">
                                いわゆる「PPAモデル（第三者所有モデル）」やリース契約のことです。初期費用がかからない分、契約期間中は売電収入が得られなかったり、長期的には一括購入より総支払額が高くなるケースがあります。本サイトでは、補助金を活用した「購入」をご案内しています。
                            </div>
                        </details>
                    </div>
                </section>

                {/* Call to action */}
                <div className="bg-[#003366] rounded-2xl p-8 md:p-12 text-center text-white shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-blue-500 rounded-full opacity-20 blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-white rounded-full opacity-10 blur-2xl"></div>

                    <h2 className="text-2xl md:text-3xl font-black mb-6 relative z-10">ネットの口コミより、我が家の「実数」を。</h2>
                    <p className="mb-8 text-blue-100 leading-relaxed max-w-2xl mx-auto relative z-10">
                        「うちは結局いくら？」という疑問は、ネットを何時間検索しても答えは出ません。<br className="hidden md:inline" />まずは東京ガスの無料シミュレーションで、ご自宅専用の見積もりを出してみましょう。
                    </p>
                    <div className="relative z-10">
                        <CTALink href="https://home.tokyo-gas.co.jp/power/solar/index.html" eventName="click_cta_cost" className="inline-block bg-orange-500 text-white font-bold text-lg md:text-xl py-4 px-10 rounded-full hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto">
                            我が家の図面で無料見積もりをする
                        </CTALink>
                        <p className="mt-4 text-xs text-blue-300">※お見積もりは無料です。無理な営業等はございません。</p>
                    </div>
                </div>

                {/* Internal Links Navigation */}
                <div className="border-t-2 border-gray-100 pt-10 mt-12">
                    <h3 className="font-bold text-lg text-gray-700 mb-6 text-center">費用と一緒に確認すべき重要項目</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Link to="/cancellation" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 text-center flex items-center justify-between group">
                            <div className="text-left">
                                <div className="text-xs text-red-500 font-bold mb-1">最大の不安を解消</div>
                                <div className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors text-lg">解約・引越しの「清算金」リスク</div>
                            </div>
                            <span className="text-xl text-gray-300 group-hover:text-blue-600 transition-colors">&rarr;</span>
                        </Link>
                        <Link to="/subsidy-tokyo" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 text-center flex items-center justify-between group">
                            <div className="text-left">
                                <div className="text-xs text-blue-500 font-bold mb-1">費用を下げるカギ</div>
                                <div className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors text-lg">東京都の補助金と注意点</div>
                            </div>
                            <span className="text-xl text-gray-300 group-hover:text-blue-600 transition-colors">&rarr;</span>
                        </Link>
                    </div>
                </div>

            </div>
        </Layout>
    );
};
