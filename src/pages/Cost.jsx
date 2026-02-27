import React, { useState } from 'react';
import { SEOHead } from '../components/SEOHead.jsx';
import { Layout } from '../components/Layout.jsx';
import { Link } from 'react-router-dom';
import { CTALink } from '../components/CTALink.jsx';
import { FinalCTA } from '../components/FinalCTA.jsx';

export const Cost = () => {
    // Simulator State
    const [roofSize, setRoofSize] = useState('medium');
    const [hasBattery, setHasBattery] = useState(true);

    const calcEstimate = () => {
        let baseCost = 0;
        let kw = 0;
        if (roofSize === 'small') { baseCost = 80; kw = 3; }
        if (roofSize === 'medium') { baseCost = 120; kw = 5; }
        if (roofSize === 'large') { baseCost = 180; kw = 8; }

        const batteryCost = hasBattery ? 150 : 0;
        const total = baseCost + batteryCost;

        return { total, kw };
    };

    const estimate = calcEstimate();
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

                <div className="bg-white p-8 rounded-2xl shadow-sm mb-16 border border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                        <span className="text-orange-500 text-3xl">📝</span>
                        1秒でわかる！太陽光＋蓄電池 概算シミュレーター
                    </h2>

                    <p className="text-gray-600 mb-6">ご自宅の大きさと蓄電池の希望を選ぶだけで、大まかな初期費用相場（目安）がわかります。</p>

                    <div className="space-y-6 bg-gray-50 p-6 rounded-xl border border-gray-200">
                        {/* Question 1 */}
                        <div>
                            <p className="font-bold text-gray-800 mb-3">Q1. ご自宅（屋根）の広さは？</p>
                            <div className="flex flex-wrap gap-3">
                                <button onClick={() => setRoofSize('small')} className={`px-4 py-2 rounded-full font-bold text-sm transition-colors border ${roofSize === 'small' ? 'bg-[#003366] text-white border-[#003366]' : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-100'}`}>小さめ（約3kW）</button>
                                <button onClick={() => setRoofSize('medium')} className={`px-4 py-2 rounded-full font-bold text-sm transition-colors border ${roofSize === 'medium' ? 'bg-[#003366] text-white border-[#003366]' : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-100'}`}>標準サイズ（約5kW）</button>
                                <button onClick={() => setRoofSize('large')} className={`px-4 py-2 rounded-full font-bold text-sm transition-colors border ${roofSize === 'large' ? 'bg-[#003366] text-white border-[#003366]' : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-100'}`}>大きめ（約8kW）</button>
                            </div>
                        </div>

                        {/* Question 2 */}
                        <div>
                            <p className="font-bold text-gray-800 mb-3">Q2. 蓄電池も一緒に導入したいですか？ <span className="text-xs font-normal text-gray-500">※強く推奨</span></p>
                            <div className="flex flex-wrap gap-3">
                                <button onClick={() => setHasBattery(true)} className={`px-4 py-2 rounded-full font-bold text-sm transition-colors border ${hasBattery ? 'bg-orange-500 text-white border-orange-500' : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-100'}`}>はい（災害時も安心）</button>
                                <button onClick={() => setHasBattery(false)} className={`px-4 py-2 rounded-full font-bold text-sm transition-colors border ${!hasBattery ? 'bg-gray-600 text-white border-gray-600' : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-100'}`}>いいえ（太陽光のみ）</button>
                            </div>
                        </div>

                        {/* Result Block (Principle 1) */}
                        <div className="mt-8 bg-white border-2 border-[#003366] rounded-xl p-6 text-center shadow-md">
                            <p className="text-sm text-gray-500 font-bold mb-2">あなたの相場目安（パネル{estimate.kw}kW {hasBattery ? '+ 蓄電池' : 'のみ'}）</p>
                            <div className="text-4xl md:text-5xl font-black text-[#003366] mb-2 tracking-tight">
                                約<span className="text-orange-500">{estimate.total}</span>万円 <span className="text-lg text-gray-500 font-medium">〜</span>
                            </div>
                            <p className="text-xs text-red-500 font-bold mb-4">※上記はあくまで全国平均から算出した概算であり、実際の費用を保証するものではありません。</p>
                            <p className="text-sm text-gray-700 bg-blue-50 p-3 rounded-lg text-left leading-relaxed">
                                <strong className="text-blue-800">💡 安く見せるネットの情報に注意！</strong><br />
                                太陽光は「足場代」や「分電盤工事」などの付帯費用で数十万円ブレます。そのため、ネット上で確定金額を出すことは物理的に不可能です。<br />
                                確実な金額を知るには、<strong className="text-red-600 line-through">ネットで調べる</strong> のではなく、 <strong className="text-blue-600 underline">ご自宅の図面をプロに見せる</strong> のが唯一の正解です。
                            </p>
                        </div>
                    </div>
                </div>

                <div className="text-center mb-16">
                    <h2 className="text-2xl md:text-3xl font-black text-[#003366] mb-4">なぜ、ネットの「平均価格」を信じてはいけないのか？</h2>
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
            </div>

            <FinalCTA />

        </Layout>
    );
};
