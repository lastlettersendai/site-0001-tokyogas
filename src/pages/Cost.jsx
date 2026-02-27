import React, { useState } from 'react';
import { PageTemplate } from '../components/PageTemplate.jsx';
import { Link } from 'react-router-dom';
import { CTALink } from '../components/CTALink.jsx';
import { FinalCTA } from '../components/FinalCTA.jsx';
import { Icon } from '../components/Icon.jsx';

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

            <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-20">
                {/* Intro Section with Image */}
                <div className="flex flex-col md:flex-row items-center gap-10 mb-16 border-b border-gray-100 pb-12">
                    <div className="w-full md:w-3/5 text-left">
                        <span className="text-orange-500 font-bold tracking-widest text-sm mb-3 block uppercase">Cost & Estimate</span>
                        <h1 className="text-4xl md:text-5xl font-black text-[#003366] leading-tight mb-6">
                            東京ガスのシステム<br />
                            費用はいくら？
                        </h1>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            「我が家だといくらかかるの？」という疑問に対し、金額が変動する3つのポイントを解説。
                        </p>
                        <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg inline-block shadow-sm">
                            <p className="text-sm md:text-base font-bold text-gray-800">
                                <span className="text-orange-600">結論：</span> 金額は家ごとに完全に異なります。<br />まずはプロによる「内訳つきの正確な見積もり」を取ることが唯一の正解です。
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-2/5 relative">
                        <div className="absolute -inset-2 bg-gradient-to-tr from-blue-100 to-orange-100 rounded-2xl blur-md opacity-70"></div>
                        <img
                            src="/images/cost_inspector.png"
                            alt="屋根と図面を確認する信頼できる施工士"
                            className="relative rounded-2xl shadow-lg border border-white w-full object-cover aspect-square"
                            loading="lazy"
                        />
                        <div className="absolute -bottom-4 -left-4 bg-white px-4 py-2 rounded-lg shadow-xl border border-gray-100 flex items-center gap-2">
                            <Icon name="hardhat" className="text-gray-800 size-6" />
                            <span className="text-sm font-bold text-[#003366]">プロの無料診断</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 md:p-10 rounded-xl shadow-sm border border-gray-200 mb-16">
                    <h2 className="text-2xl font-bold text-gray-800 mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <span className="bg-[#003366] text-white px-4 py-2 rounded-lg text-sm tracking-wider shadow-sm shrink-0">POINT 1</span>
                        <span>費用が変動する3つの大きな要因</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 relative pt-12">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl shadow-md border-4 border-blue-50"><Icon name="home" className="text-blue-600 size-8" /></div>
                            <h3 className="font-bold text-center text-[#003366] mb-3 text-lg">1. 屋根の広さと形状</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">パネルを何枚載せられるかで基本料金が変わります。また、足場を組む面積や、特殊な屋根材（瓦など）の施工難易度によっても工事費が変動します。</p>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 relative pt-12">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl shadow-md border-4 border-blue-50"><Icon name="zap" className="text-yellow-500 size-8" /></div>
                            <h3 className="font-bold text-center text-[#003366] mb-3 text-lg">2. 設備の容量選び</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">日中の電気使用量に合わせて、適切な蓄電池の容量（kWh）を選ぶ必要があります。容量が大きいほど高額になりますが、小さすぎると停電時や夜間に不足します。</p>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 relative pt-12">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl shadow-md border-4 border-blue-50"><Icon name="wrench" className="text-gray-600 size-8" /></div>
                            <h3 className="font-bold text-center text-[#003366] mb-3 text-lg">3. 付帯工事・電気工事</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">ご自宅の分電盤（ブレーカー）の古さや、配線を隠すための家の構造によって、追加の電気工事費が発生するケースがあります。</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm mb-16 border border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                        <Icon name="clipboard" className="text-orange-500 size-8 mr-2" />
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

                        {/* Result Block (Premium Quote Card UI) */}
                        <div className="mt-10 relative">
                            {/* Card Background Glow */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-[#003366] to-orange-400 rounded-2xl blur opacity-30 animate-pulse"></div>

                            <div className="relative bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.08)] bg-[linear-gradient(to_bottom,rgba(255,255,255,1),rgba(248,250,252,0.8))]">
                                <div className="absolute top-0 right-0 bg-[#003366] text-white text-xs font-bold px-4 py-1.5 rounded-bl-lg rounded-tr-2xl">概算シミュレーション結果</div>

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

                                <p className="text-xs text-center text-red-500 font-bold mb-6 bg-red-50 py-2 rounded-md">
                                    ※上記は全国平均からの概算であり、実際の費用を保証するものではありません。
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

                {/* Estimate Checklist Diagram/Visual Block */}
                <div className="mb-20">
                    <div className="text-center mb-10">
                        <span className="text-orange-500 font-bold tracking-widest text-sm mb-2 block uppercase">Warning</span>
                        <h2 className="text-2xl md:text-3xl font-black text-[#003366] mb-4">ネットの「平均価格」で<br className="md:hidden" />安心していませんか？</h2>
                        <p className="text-gray-600">見積もり提出時に「以下の費用」が明記されているか必ずチェックしてください。<br className="hidden md:block" />悪質な業者はこれを契約後に「追加請求」してきます。</p>
                    </div>

                    <div className="bg-[#001a33] rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                        {/* Blueprint Background Pattern */}
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                        <h3 className="text-xl font-bold text-white mb-8 text-center relative z-10">見積書で見落としてはならない <span className="text-orange-400">4つの項目</span></h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl hover:bg-white/15 transition-colors">
                                <div className="mb-3"><Icon name="box" className="text-orange-400 size-8" /></div>
                                <h4 className="text-lg font-bold text-white mb-2">1. 機器代 / 工事費の分離</h4>
                                <p className="text-sm text-gray-300">「一式」とだけ書かれている場合は危険。どのパネルにいくらかかり、工事の人件費がいくらか、内訳明記を求めましょう。</p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl hover:bg-white/15 transition-colors">
                                <div className="mb-3"><Icon name="hammer" className="text-orange-400 size-8" /></div>
                                <h4 className="text-lg font-bold text-white mb-2">2. 「足場代」の完全な記載</h4>
                                <p className="text-sm text-gray-300">屋根工事に必須の足場代（15万〜30万円前後）。これが「別途請求」の罠になりやすいため、合算されているか確認を。</p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl hover:bg-white/15 transition-colors">
                                <div className="mb-3"><Icon name="file" className="text-orange-400 size-8" /></div>
                                <h4 className="text-lg font-bold text-white mb-2">3. 補助金「適用前 / 後」の明記</h4>
                                <p className="text-sm text-gray-300">補助金は審査落ちや予算切れのリスクがあります。「適用後」の極端に安い金額だけを誇張する説明には要注意です。</p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl hover:bg-white/15 transition-colors">
                                <div className="mb-3"><Icon name="shield" className="text-orange-400 size-8" /></div>
                                <h4 className="text-lg font-bold text-white mb-2">4. 保証範囲（機器・施工）</h4>
                                <p className="text-sm text-gray-300">「15年保証」とあっても、それが「パネル出力」だけなのか「パワコン」も含むのか、「雨漏り等の施工保証」があるか確認必須。</p>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-[#003366] mb-8 pb-2 border-b-2 border-blue-100">よくある質問（費用・相見積もり）</h2>
                    <div className="space-y-4">
                        <details className="bg-white rounded-lg shadow-sm border border-gray-200 group">
                            <summary className="font-bold p-5 cursor-pointer text-gray-800 list-none flex justify-between items-center pr-10 relative">
                                <span className="text-blue-600 mr-3">Q.</span> 他社と相見積もりをした方がいいですか？
                                <Icon name="chevronDown" className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 group-open:rotate-180 transition-transform size-5" />
                            </summary>
                            <div className="p-5 pt-0 text-gray-600 text-sm md:text-base border-t border-gray-100 mt-2 pt-4 leading-relaxed">
                                基本的に相見積もりは推奨されます。ただし、比較する際は<strong className="text-gray-800">「パネルのメーカー」「蓄電池の容量」「保証年数」「足場代の有無」などを同条件に揃えて</strong>比較しないと、安かろう悪かろうの業者を選んでしまうリスクがあります。価格だけでなく、アフターサポートの安心感（東京ガスという看板の強みなど）も含めて総合的に判断してください。
                            </div>
                        </details>

                        <details className="bg-white rounded-lg shadow-sm border border-gray-200 group">
                            <summary className="font-bold p-5 cursor-pointer text-gray-800 list-none flex justify-between items-center pr-10 relative">
                                <span className="text-blue-600 mr-3">Q.</span> 初期費用0円のプランもあると聞きましたが？
                                <Icon name="chevronDown" className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 group-open:rotate-180 transition-transform size-5" />
                            </summary>
                            <div className="p-5 pt-0 text-gray-600 text-sm md:text-base border-t border-gray-100 mt-2 pt-4 leading-relaxed">
                                いわゆる「PPAモデル（第三者所有モデル）」やリース契約のことです。初期費用がかからない分、契約期間中は売電収入が得られなかったり、長期的には一括購入より総支払額が高くなるケースがあります。本サイトでは、補助金を活用した「購入」をご案内しています。
                            </div>
                        </details>
                    </div>
                </section>
            </div>

            <FinalCTA />

        </PageTemplate>
    );
};
