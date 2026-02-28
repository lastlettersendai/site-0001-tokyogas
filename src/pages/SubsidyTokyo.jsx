import React from 'react';
import { PageTemplate } from '../components/PageTemplate.jsx';
import { Link } from 'react-router-dom';
import { FinalCTA } from '../components/FinalCTA.jsx';
import { Icon } from '../components/Icon.jsx';
import { ConstitutionFAQ } from '../components/ConstitutionFAQ.jsx';

export const SubsidyTokyo = () => {
    return (
        <PageTemplate
            title="東京都の太陽光・蓄電池補助金（令和6年度/2024年）の注意点とスケジュール"
            description="東京都は全国トップクラスの補助金が出ますが、「予算上限」「完了報告の期限」など厳しい罠もあります。東京ガスの担当者に丸投げできる部分と、自分で用意すべき書類を解説します。"
            path="/subsidy-tokyo"
        >

            <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-20">
                {/* Block 1: 冒頭3行 (Who/What) */}
                <div className="mb-8">
                    <span className="inline-block bg-blue-100 text-blue-800 font-bold px-4 py-1.5 rounded-full text-xs mb-4 border border-blue-300 tracking-wider">SUBSIDY STRATEGY</span>
                    <p className="text-gray-600 text-sm font-bold leading-relaxed">
                        「東京都の補助金はすごい」と誰もが言います。<br />
                        しかし、その裏にある複雑な申請ルールを知る人はわずかです。<br />
                        1円も無駄にしないための「確実な受給」への道筋を示します。
                    </p>
                </div>

                {/* Block 2: 結論1行 */}
                <h1 className="text-3xl md:text-5xl font-black text-[#003366] leading-tight mb-8">
                    「先着順」の枠をプロに確保させるのが正解です
                </h1>

                {/* Block 3: 前提条件 (3行以内) */}
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 inline-block w-full max-w-2xl text-left mb-12">
                    <p className="text-xs font-black text-blue-600 mb-2 tracking-widest uppercase">Prerequisite for Subsidy</p>
                    <ul className="text-sm font-bold text-slate-700 space-y-1">
                        <li className="flex items-center gap-2"><Icon name="check" className="size-4 text-blue-600" /> 東京都内に住宅を所有している</li>
                        <li className="flex items-center gap-2"><Icon name="check" className="size-4 text-blue-600" /> 予算が切れる前に「交付決定」を勝ち取りたい</li>
                        <li className="flex items-center gap-2"><Icon name="check" className="size-4 text-blue-600" /> 面倒な書類作成をすべて外部に丸投げしたい</li>
                    </ul>
                </div>

                <div className="text-center mb-16 border-b border-gray-100 pb-12">
                    <p className="text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed text-lg">
                        東京都は全国トップクラスの手厚い補助金を用意していますが、<strong className="text-red-600">最大の敵は「複雑な申請手続き」と「書類不備による審査落ち」です。</strong>
                    </p>
                </div>

                {/* Max Subsidy Cards */}
                <div className="mb-20">
                    <h2 className="text-2xl md:text-3xl font-black text-center text-gray-800 mb-8">
                        どれくらいお得になる？<br className="md:hidden" />東京都の驚異的な補助額
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                        {/* Glow Effect */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-yellow-200 via-orange-200 to-yellow-200 rounded-3xl blur-xl opacity-30 -z-10"></div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-yellow-200 relative overflow-hidden group hover:-translate-y-1 transition-transform">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-100 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
                            <div className="mb-4"><Icon name="sun" className="text-yellow-500 size-10" /></div>
                            <h3 className="font-bold text-gray-800 text-xl mb-2">太陽光パネルの補助金</h3>
                            <div className="flex items-baseline gap-2 mb-4">
                                <span className="text-sm text-gray-600 font-bold">1kWあたり 最大</span>
                                <span className="text-4xl md:text-5xl font-black text-orange-500 tracking-tighter">15<span className="text-2xl">万円</span></span>
                            </div>
                            <p className="text-sm text-gray-600 leading-relaxed p-3 bg-gray-50 rounded-xl border border-gray-100">
                                例: 平均的な5kWの屋根なら、<strong className="text-red-500 text-base">最大75万円</strong>もの助成が受けられる計算です。初期費用の大部分をカバーできます。
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-yellow-200 relative overflow-hidden group hover:-translate-y-1 transition-transform">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
                            <div className="mb-4"><Icon name="battery" className="text-blue-500 size-10" /></div>
                            <h3 className="font-bold text-gray-800 text-xl mb-2">家庭用蓄電池の補助金</h3>
                            <div className="flex items-baseline gap-2 mb-4">
                                <span className="text-sm text-gray-600 font-bold">機器代金等の</span>
                                <span className="text-4xl md:text-5xl font-black text-[#003366] tracking-tighter">3/4<span className="text-2xl ml-1">補助</span></span>
                            </div>
                            <p className="text-sm text-gray-600 leading-relaxed p-3 bg-gray-50 rounded-xl border border-gray-100">
                                または定額制（15万円/kWh上限等）など、非常に高額な助成率。高価な蓄電池を導入する最大のチャンスです。
                            </p>
                        </div>
                    </div>
                    <p className="text-center text-xs text-gray-500 mt-6 bg-gray-100 py-2 rounded-full inline-block px-4 mx-auto w-full md:w-auto">
                        ※助成額は条件（機器の仕様、設置者の属性など）により変動します。最新の詳細情報は公式公募要領をご確認ください。
                    </p>
                </div>

                {/* Important Warnings */}
                <div className="bg-gradient-to-br from-red-50 to-orange-50 border-l-8 border-red-500 p-8 rounded-r-2xl mb-20 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 text-red-100 opacity-30 text-9xl font-black -mt-4 -mr-4">!</div>
                    <h2 className="text-2xl font-black text-red-800 mb-6 flex items-center gap-3 relative z-10">
                        <Icon name="shieldAlert" className="size-8 text-red-600" />
                        補助金に関する「失敗できない」大前提
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-red-100">
                            <h3 className="font-bold text-red-700 mb-2 flex items-center gap-2"><Icon name="clock" className="text-red-700 size-5" /> 常に「先着順」である</h3>
                            <p className="text-sm text-gray-700">東京都の予算上限に達した時点でその年度の受付は即終了します。例年、年度末が近づくにつれて予算消化が加速するため、早めの決断が必要です。</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-red-100">
                            <h3 className="font-bold text-red-700 mb-2 flex items-center gap-2"><Icon name="ban" className="text-red-700 size-5" /> 事前申請なしの着工はNG</h3>
                            <p className="text-sm text-gray-700">「交付決定通知」を受け取る【前】に工事を開始してしまうと、原則として補助金は1円も支給されません。手続きの順序を間違えると致命傷になります。</p>
                        </div>
                    </div>
                </div>

                {/* Block 4: 誤解の解体 (Misconception) */}
                <div className="bg-red-50 p-8 rounded-3xl border border-red-100 mb-20">
                    <div className="flex items-center gap-3 mb-4 text-red-600">
                        <Icon name="x" className="size-8" />
                        <h2 className="text-xl font-black">よくある誤解：「後からでも申請できる」</h2>
                    </div>
                    <p className="font-bold text-red-800 mb-4 leading-relaxed">
                        「設置が終わってからゆっくり申請しよう」は大間違いです。<span className="underline decoration-red-500 decoration-2">工事を始めた後では、1円も受け取れません。</span>
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                        補助金の基本ルールは「着工前の事前申請」です。さらに、見積もり段階で補助金要件に合致した機器を選定しておく必要があります。後から「このパネルは補助金対象外だった」と判明しても手遅れです。東京ガスの担当者は、最初から「補助金ありき」で最適な提案を行います。
                    </p>
                </div>

                {/* Block 5: 判断基準 (Criteria) */}
                <div className="mb-20">
                    <h2 className="text-2xl font-black text-[#003366] mb-8 border-l-4 border-blue-600 pl-4">補助金を逃さないための「3つの絶対基準」</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-2xl border border-slate-200">
                            <h3 className="font-bold mb-4">必ず守るべきこと</h3>
                            <ul className="text-sm space-y-2 text-slate-600 italic">
                                <li>・契約前に「今の予算残高」を担当者に確認させる</li>
                                <li>・国の補助金との「併用」が可能か精査する</li>
                                <li>・完了報告の期限（工事後○日以内）を死守する</li>
                            </ul>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
                            <h3 className="font-bold mb-4 text-blue-900">東京ガスの申請サポート</h3>
                            <ul className="text-sm space-y-2 text-blue-800 italic">
                                <li>・都庁との膨大なやり取り、図面提出を完全網羅</li>
                                <li>・過去数千件のデータに基づく「落ちない」書類作成</li>
                                <li>・予算状況のリアルタイム把握と迅速な枠確保</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Block 6: 実例 (Case Study) - Format Fixed: Premise -> Conclusion -> Reason -> Next Q */}
                <div className="mb-20">
                    <h2 className="text-2xl font-black text-center text-[#003366] mb-12">
                        補助金受給シミュレーション
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                            <p className="text-xs font-black text-blue-600 mb-1 uppercase tracking-tighter">1. 前提</p>
                            <p className="font-bold text-slate-800 mb-4">世田谷区・太陽光4kW＋蓄電池・都と区の補助金を併用</p>
                            <div className="bg-blue-50 p-4 rounded-xl mb-4">
                                <p className="text-xs font-black text-blue-600 mb-1 uppercase tracking-tighter">2. 結論</p>
                                <p className="text-lg font-black text-blue-900">補助金総額：約115万円 の受給に成功</p>
                            </div>
                            <p className="text-xs font-black text-blue-600 mb-1 uppercase tracking-tighter">3. 理由</p>
                            <p className="text-sm text-slate-600 leading-relaxed mb-6">
                                都の補助金（約80万円）に加えて、区の独自助成（約35万円）を逃さず申請。東京ガスの担当店が両方の要件を熟知していたため可能になった事例です。
                            </p>
                            <div className="pt-4 border-t border-slate-100">
                                <p className="text-xs font-black text-orange-600 mb-1 uppercase tracking-tighter">4. 次の質問</p>
                                <Link to="/subsidy-payment" className="text-sm font-bold text-slate-800 hover:text-blue-600 flex items-center gap-2">
                                    「振込までの具体的なスケジュールは？」<Icon name="arrowRight" className="size-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Block 7: 申込直前FAQ */}
                <ConstitutionFAQ />

                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-[#003366] mb-8 pb-2 border-b-2 border-blue-100">
                        プロへの見積もり依頼時の「必須確認事項」
                    </h2>

                    <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100 shadow-sm">
                        <ul className="space-y-6 [&>li>svg]:size-5 [&>li>svg]:shrink-0 [&>li>svg]:align-middle [&>li>svg]:mt-0.5">
                            <li className="flex items-start gap-4">
                                <Icon name="message" className="text-blue-600" />
                                <div>
                                    <strong className="text-gray-800 block text-lg mb-2">今の時期、東京都の予算はまだ余っていますか？</strong>
                                    <p className="text-sm text-gray-600 leading-relaxed">これを聞かずに契約するのは危険です。今から動いて間に合うのか、担当者に率直なスケジュールの見立てを確認してください。</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <Icon name="message" className="text-blue-600" />
                                <div>
                                    <strong className="text-gray-800 block text-lg mb-2">国や市区町村の補助金と「併用」した総額を出して下さい</strong>
                                    <p className="text-sm text-gray-600 leading-relaxed">東京都の補助金は、国の補助金や、お住まいの市区町村（区市）の補助金と併用できる「二重取り、三重取り」が可能なケースがあります。「実質負担額」での見積もりを必ず依頼してください。</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <FinalCTA />


            </div>
        </PageTemplate>
    );
};
