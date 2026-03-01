import React from 'react';
import { PageTemplate } from '../components/PageTemplate.jsx';
import { Link } from 'react-router-dom';
import { FinalCTA } from '../components/FinalCTA.jsx';
import { Icon } from '../components/Icon.jsx';
import { ConstitutionFAQ } from '../components/ConstitutionFAQ.jsx';

export const Outage = () => {
    return (
        <PageTemplate
            title="太陽光と蓄電池は停電時にどう動く？「全部の家電は使えない」という事実"
            description="「蓄電池があれば停電してもいつも通り暮らせる」は半分間違いです。全負荷型と特定負荷型の違いや、エコキュート・IHにおける注意点を正しく理解して後悔を防ぎましょう。"
            path="/outage"
        >

            <div className="w-full py-12 md:py-20">
                {/* Block 1: 冒頭3行 (Who/What) */}
                <div className="mb-8 px-4 sm:px-6 max-w-4xl mx-auto">
                    <span className="inline-block bg-yellow-100 text-yellow-800 font-bold px-4 py-1.5 rounded-full text-xs mb-4 border border-yellow-300 tracking-wider">OUTAGE SURVIVAL GUIDE</span>
                    <p className="text-gray-600 text-sm font-bold leading-relaxed">
                        「蓄電池があれば停電してもいつも通り」は半分間違いです。<br />
                        何が使えて味方は誰か。防災目的で導入を検討している方の迷いを、<br />
                        この1ページで終わらせます。
                    </p>
                </div>

                {/* Block 2: 結論1行 */}
                <h1 className="text-3xl md:text-5xl font-black text-[#003366] leading-tight mb-8 px-4 sm:px-6 max-w-4xl mx-auto">
                    「全負荷型」を選び、生活家電を絞るのが正解です
                </h1>

                {/* Block 3: 前提条件 (3行以内) */}
                <div className="px-4 sm:px-6 md:px-0">
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 inline-block w-full max-w-2xl text-left mb-12 lg:ml-[calc(50vw-24rem)]">
                        <p className="text-xs font-black text-blue-600 mb-2 tracking-widest uppercase">Prerequisite for Survival</p>
                        <ul className="text-sm font-bold text-slate-700 space-y-1">
                            <li className="flex items-center gap-2"><Icon name="check" className="size-4 text-blue-600" /> 停電時にリビングのエアコンやIHを使いたい</li>
                            <li className="flex items-center gap-2"><Icon name="check" className="size-4 text-blue-600" /> 瞬間的な停電ではなく、数日間の断続的な停電を想定している</li>
                            <li className="flex items-center gap-2"><Icon name="check" className="size-4 text-blue-600" /> 予算よりも「家族の安心感」を優先したい</li>
                        </ul>
                    </div>
                </div>

                <div className="w-full relative overflow-hidden bg-[#0a1128] mb-16">
                    <img
                        src="/images/outage_window.png"
                        alt="停電時の夜間に蓄電池で最低限の電力を確保する家の窓"
                        className="w-full object-cover aspect-video block opacity-80"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128] via-transparent to-transparent opacity-90"></div>
                    <div className="absolute bottom-6 left-0 right-0 text-center px-4 sm:px-6">
                        <Icon name="idea" className="text-yellow-100 size-5 mr-1 align-middle" /> <span className="text-yellow-100 font-bold tracking-wide">停電の暗闇の中で、本当に「最低限」必要な電力とは？</span>
                    </div>
                </div>

                {/* Block 4: 誤解の解体 (Misconception) */}
                <div className="bg-red-50 p-8 rounded-none sm:rounded-3xl border border-red-100 mb-20 max-w-4xl mx-auto px-4 sm:px-6">
                    <div className="flex items-center gap-3 mb-4 text-red-600">
                        <Icon name="x" className="size-8" />
                        <h2 className="text-xl font-black">よくある誤解：「蓄電池があればお風呂も沸かせる」</h2>
                    </div>
                    <p className="font-bold text-red-800 mb-4 leading-relaxed">
                        技術的に「全負荷型」なら可能ですが、実用的には<span className="underline decoration-red-500 decoration-2">絶対にお勧めしません。</span>
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                        エコキュートがお湯を沸かす電力は膨大で、蓄電池の電気をたった1〜2時間で食いつぶします。停電時に最も大切なのは、冷蔵庫の中身とスマホの充電を数日間維持することです。
                    </p>
                </div>

                {/* Block 5: 判断基準 (Criteria) */}
                <div className="mb-20 max-w-4xl mx-auto px-4 sm:px-6">
                    <h2 className="text-2xl font-black text-[#003366] mb-8 border-l-4 border-blue-600 pl-4">どちらのタイプを選ぶべきか？</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-2xl border border-slate-200">
                            <h3 className="font-bold mb-4">特定負荷（Standard）を選ぶ基準</h3>
                            <ul className="text-sm space-y-2 text-slate-600">
                                <li>・導入コストを10万円単位で抑えたい</li>
                                <li>・停電時は「1部屋」に家族が集まれば十分</li>
                                <li>・夜間は照明とスマホ充電があれば耐えられる</li>
                            </ul>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
                            <h3 className="font-bold mb-4 text-blue-900">全負荷（Premium）を選ぶ基準</h3>
                            <ul className="text-sm space-y-2 text-blue-800">
                                <li>・停電中も「各個室」で冷暖房を使いたい</li>
                                <li>・オール電化でIHやエコキュートを（一応）動かしたい</li>
                                <li>・切り替えの手間をなくし、家中どこでも電気を使いたい</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Block 6: 実例 (Case Study) - Format Fixed: Premise -> Conclusion -> Reason -> Next Q */}
                <div className="mb-20 max-w-4xl mx-auto px-4 sm:px-6">
                    <h2 className="text-2xl font-black text-center text-[#003366] mb-12">
                        停電時シミュレーション
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                            <p className="text-xs font-black text-blue-600 mb-1 uppercase tracking-tighter">1. 前提</p>
                            <p className="font-bold text-slate-800 mb-4">容量7kWh・夜間に停電開始</p>
                            <div className="bg-blue-50 p-4 rounded-xl mb-4">
                                <p className="text-xs font-black text-blue-600 mb-1 uppercase tracking-tighter">2. 結論</p>
                                <p className="text-lg font-black text-blue-900">約12時間の継続利用が可能</p>
                            </div>
                            <p className="text-xs font-black text-blue-600 mb-1 uppercase tracking-tighter">3. 理由</p>
                            <p className="text-sm text-slate-600 leading-relaxed mb-6">
                                冷蔵庫（100W）＋照明（50W）＋テレビ・スマホ（50W）の計200W運用を徹底。翌朝の太陽光発電による充電まで電力を繋げました。
                            </p>
                            <div className="pt-4 border-t border-slate-100">
                                <p className="text-xs font-black text-orange-600 mb-1 uppercase tracking-tighter">4. 次の質問</p>
                                <Link to="/cost" className="text-sm font-bold text-slate-800 hover:text-blue-600 flex items-center gap-2">
                                    「この容量の蓄電池はいくら？」<Icon name="arrowRight" className="size-4" />
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
        </PageTemplate >
    );
};
