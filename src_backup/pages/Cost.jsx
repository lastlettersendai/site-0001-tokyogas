import React, { useState } from 'react';
import { PageTemplate } from '../components/PageTemplate.jsx';
import { Link } from 'react-router-dom';
import { CTALink } from '../components/CTALink.jsx';
import { FinalCTA } from '../components/FinalCTA.jsx';
import { Icon } from '../components/Icon.jsx';
import { ConstitutionFAQ } from '../components/ConstitutionFAQ.jsx';

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
        <PageTemplate
            title="東京ガスの太陽光・蓄電池はいくら？費用が変わるポイントと見積もりの見方"
            description="「我が家だといくらかかるの？」という疑問に対し、屋根の形状や設備の容量など、金額が変動する3つのポイントを解説。相見積もりの考え方も紹介します。"
            path="/cost"
        >

            <div className="w-full py-12 md:py-20">
                {/* Block 1: 冒頭3行 (Who/What) */}
                <div className="mb-8 px-4 sm:px-6 max-w-4xl mx-auto">
                    <span className="inline-block bg-orange-100 text-orange-800 font-bold px-4 py-1.5 rounded-full text-xs mb-4 border border-orange-300 tracking-wider">COST & TRANSPARENCY</span>
                    <p className="text-gray-600 text-sm font-bold leading-relaxed">
                        「結局、初期費用はいくら？」という問いに答えます。<br />
                        安く見せるネットの広告に惑わされる時間は終わりです。<br />
                        あなたの予算に合った「正しい選択肢」を提示します。
                    </p>
                </div>

                {/* Block 2: 結論1行 */}
                <h1 className="text-3xl md:text-5xl font-black text-[#003366] leading-tight mb-8 px-4 sm:px-6 max-w-4xl mx-auto">
                    「補助金」と「<span className="mx-1">0</span>円設置」を組み合わせるのが正解です
                </h1>

                {/* Block 3: 前提条件 (3行以内) */}
                <div className="px-4 sm:px-6 md:px-0">
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 inline-block w-full max-w-2xl text-left mb-12 lg:ml-[calc(50vw-24rem)]">
                        <p className="text-xs font-black text-orange-600 mb-2 tracking-widest uppercase">Prerequisite for Pricing</p>
                        <ul className="text-sm font-bold text-slate-700 space-y-1">
                            <li className="flex items-center gap-2"><Icon name="check" className="size-4 text-orange-600" /> 手元の現金を残したまま導入したい</li>
                            <li className="flex items-center gap-2"><Icon name="check" className="size-4 text-orange-600" /> 15年間のトータルコスト（維持費含む）で得をしたい</li>
                            <li className="flex items-center gap-2"><Icon name="check" className="size-4 text-orange-600" /> 契約後の「追加費用」に怯えたくない</li>
                        </ul>
                    </div>
                </div>

                <div className="text-center mb-12 border-b border-gray-100 pb-12 w-full">
                    <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-10 px-4 sm:px-6">
                        太陽光の価格は「屋根の形」と「電気の使い方」で決まります。<br />金額は家ごとに完全に異なります。まずはプロによる「内訳つきの正確な見積もり」を取ることが唯一の正解です。
                    </p>
                    <div className="w-full relative overflow-hidden">
                        <img
                            src="/images/cost_inspector.png"
                            alt="信頼できる施工士"
                            className="w-full object-cover aspect-video block"
                            loading="lazy"
                        />
                    </div>
                </div>

                <div className="bg-white p-6 md:p-10 rounded-2xl sm:rounded-xl shadow-sm border border-gray-200 mb-16 max-w-5xl mx-4 sm:mx-6 lg:mx-auto">
                    <h2 className="text-2xl font-bold text-gray-800 mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <span className="bg-[#003366] text-white px-4 py-2 rounded-lg text-sm tracking-wider shadow-sm shrink-0">POINT <span className="mx-1">1</span></span>
                        <span>費用が変動する<span className="mx-1">3</span>つの大きな要因</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 relative pt-12">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl shadow-md border-4 border-blue-50"><Icon name="home" className="text-blue-600 size-8" /></div>
                            <h3 className="font-bold text-center text-[#003366] mb-3 text-lg">1 . 屋根の広さと形状</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">パネルを何枚載せられるかで基本料金が変わります。また、足場を組む面積や、特殊な屋根材（瓦など）の施工難易度によっても工事費が変動します。</p>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 relative pt-12">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl shadow-md border-4 border-blue-50"><Icon name="zap" className="text-yellow-500 size-8" /></div>
                            <h3 className="font-bold text-center text-[#003366] mb-3 text-lg">2 . 設備の容量選び</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">日中の電気使用量に合わせて、適切な蓄電池の容量（kWh）を選ぶ必要があります。容量が大きいほど高額になりますが、小さすぎると停電時や夜間に不足します。</p>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 relative pt-12">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl shadow-md border-4 border-blue-50"><Icon name="wrench" className="text-gray-600 size-8" /></div>
                            <h3 className="font-bold text-center text-[#003366] mb-3 text-lg">3 . 付帯工事・電気工事</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">ご自宅の分電盤（ブレーカー）の古さや、配線を隠すための家の構造によって、追加の電気工事費が発生するケースがあります。</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm mb-16 border border-gray-100 max-w-5xl mx-4 sm:mx-6 lg:mx-auto">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                        <Icon name="clipboard" className="text-orange-500 size-8 mr-2" />
                        1秒でわかる！太陽光＋蓄電池 概算シミュレーター
                    </h2>

                    <p className="text-gray-600 mb-6">ご自宅の大きさと蓄電池の希望を選ぶだけで、大まかな初期費用相場（目安）がわかります。</p>

                    <div className="space-y-6">
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

                        {/* Result Block (Premium Quote Card UI) */}
                        <div className="mt-10 relative">
                            {/* Card Background Glow */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-[#003366] to-orange-400 rounded-2xl blur opacity-30 animate-pulse md:-inset-1"></div>

                            <div className="relative bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.08)] bg-[linear-gradient(to_bottom,rgba(255,255,255,1),rgba(248,250,252,0.8))]">
                                <div className="absolute top-0 right-0 bg-[#003366] text-white text-xs font-bold px-3 py-1.5 md:px-4 rounded-bl-lg rounded-tr-2xl">概算シミュレーション結果</div>

                                <p className="text-sm text-gray-500 font-bold mb-1 text-center mt-2">あなたの相場目安</p>
                                <p className="text-center font-bold text-[#003366] mb-6 pb-4 border-b border-gray-200">
                                    パネル {estimate.kw}kW {hasBattery ? '+ 蓄電池' : 'のみ'}
                                </p>

                                <div className="text-center mb-6">
                                    <span className="text-2xl text-gray-400 font-bold align-top">約</span>
                                    <span className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#003366] to-blue-800 tracking-tighter mx-1 drop-shadow-sm">
                                        {estimate.total}
                                    </span>
                                    <span className="text-2xl text-gray-600 font-bold baseline">万円</span>
                                    <span className="text-xl text-gray-400 font-medium ml-1">〜</span>
                                </div>

                                <p className="text-xs text-center text-red-500 font-bold mb-6 bg-red-50 p-3 rounded-md">
                                    ※上記は全国平均からの概算であり、<br className="md:hidden" />実際の費用を保証するものではありません。
                                </p>

                                <div className="bg-gray-50 border border-gray-100 p-4 rounded-xl relative overflow-hidden">
                                    <div className="absolute left-0 top-0 w-1 h-full bg-blue-500"></div>
                                    <p className="text-sm text-gray-700 leading-relaxed pl-2 relative z-10">
                                        <strong className="text-blue-800 flex items-center gap-1 mb-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> 安く見せるネット情報に注意！</strong>
                                        太陽光工事は「足場代」や「各種電気工事」などの付帯費用で数十万円ブレます。ネット上の確定金額は不可能です。<br className="hidden md:block" />
                                        確実な金額を知るには、<strong className="text-red-600">ネット検索</strong>ではなく<strong className="text-blue-600 font-bold border-b border-blue-600">ご自宅の図面をプロに見せる</strong>のが唯一の正解です。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Block 4: 誤解の解体 (Misconception) */}
                <div className="px-4 sm:px-6 md:px-0">
                    <div className="bg-red-50 p-8 rounded-3xl border border-red-100 mb-20 max-w-5xl mx-auto">
                        <div className="flex items-center gap-3 mb-4 text-red-600">
                            <Icon name="x" className="size-8" />
                            <h2 className="text-xl font-black">よくある誤解：「一括購入が一番安い」</h2>
                        </div>
                        <p className="font-bold text-red-800 mb-4 leading-relaxed">
                            初期費用の安さだけで選ぶと、<span className="underline decoration-red-500 decoration-2">15年後のメンテナンス費用で大損します。</span>
                        </p>
                        <p className="text-sm text-gray-700 leading-relaxed">
                            一括購入は金利負担がない一方、機器の故障や不具合の対応はすべて自己負担です。東京ガスの「エネカリ」なら月々定額で15年間のフル保証がつくため、突発的な高額修理（パワコン交換など）のリスクを完全にゼロにできます。
                        </p>
                    </div>
                </div>

                {/* Block 5: 判断基準 (Criteria) */}
                <div className="mb-20 px-4 sm:px-6 max-w-5xl mx-auto">
                    <h2 className="text-2xl font-black text-[#003366] mb-8 border-l-4 border-orange-600 pl-4">あなたに最適な「支払い方法」</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-2xl border border-slate-200">
                            <h3 className="font-bold mb-4">「補助金活用・一括購入」の基準</h3>
                            <ul className="text-sm space-y-2 text-slate-600">
                                <li>・手元の現金を運用せず、支払いを一度で終わらせたい</li>
                                <li>・補助金を最大額（数十万円）確保したい</li>
                                <li>・売電収入をすべて自分の所得にしたい</li>
                            </ul>
                        </div>
                        <div className="bg-orange-50 p-6 rounded-2xl border border-orange-200">
                            <h3 className="font-bold mb-4 text-orange-900">「0円設置・エネカリ」の基準</h3>
                            <ul className="text-sm space-y-2 text-orange-800">
                                <li>・手元の貯金を減らしたくない</li>
                                <li>・15年間の「突発的な故障」に一切費用を払いたくない</li>
                                <li>・家計の支出をフラットに保ちたい</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Block 6: 実例 (Case Study) - Format Fixed: Premise -> Conclusion -> Reason -> Next Q */}
                <div className="mb-20 px-4 sm:px-6 max-w-5xl mx-auto">
                    <h2 className="text-2xl font-black text-center text-[#003366] mb-12">
                        支払いシミュレーション
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                            <p className="text-xs font-black text-blue-600 mb-1 uppercase tracking-tighter">1. 前提</p>
                            <p className="font-bold text-slate-800 mb-4">4人家族・太陽光5kW＋蓄電池7kWh・補助金フル活用</p>
                            <div className="bg-blue-50 p-4 rounded-xl mb-4">
                                <p className="text-xs font-black text-blue-600 mb-1 uppercase tracking-tighter">2. 結論</p>
                                <p className="text-lg font-black text-blue-900">月々の家計収支:約2,500円 のプラス</p>
                            </div>
                            <p className="text-xs font-black text-blue-600 mb-1 uppercase tracking-tighter">3. 理由</p>
                            <p className="text-sm text-slate-600 leading-relaxed mb-6">
                                電気代削減額（1.5万円）＋売電（0.5万円）− 導入コスト月換算分（1.7万円）。生活を変えずに家計を改善。
                            </p>
                            <div className="pt-4 border-t border-slate-100">
                                <p className="text-xs font-black text-orange-600 mb-1 uppercase tracking-tighter">4. 次の質問</p>
                                <Link to="/subsidy-tokyo" className="text-sm font-bold text-slate-800 hover:text-blue-600 flex items-center gap-2">
                                    「実際に受け取れる補助金の額は？」<Icon name="arrowRight" className="size-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-16">
                    <ConstitutionFAQ />
                    <FinalCTA />
                </div>
            </div>
        </PageTemplate>
    );
};
