import React from 'react';
import { PageTemplate } from '../components/PageTemplate.jsx';
import { Link } from 'react-router-dom';
import { FinalCTA } from '../components/FinalCTA.jsx';
import { Icon } from '../components/Icon.jsx';

export const SubsidyTokyo = () => {
    return (
        <PageTemplate
            title="東京都の太陽光・蓄電池補助金（令和6年度/2024年）の注意点とスケジュール"
            description="東京都は全国トップクラスの補助金が出ますが、「予算上限」「完了報告の期限」など厳しい罠もあります。東京ガスの担当者に丸投げできる部分と、自分で用意すべき書類を解説します。"
            path="/subsidy-tokyo"
        >

            <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-20">
                {/* Hero Section */}
                <div className="text-center mb-16 border-b border-gray-100 pb-12">
                    <span className="inline-block bg-blue-100 text-blue-800 font-bold px-4 py-1.5 rounded-full text-sm mb-4 border border-blue-200 tracking-wider">費用を下げる最大のカギ</span>
                    <h1 className="text-3xl md:text-5xl font-black text-[#003366] leading-tight mb-6">
                        東京都の強力な補助金と<br className="hidden md:inline" />申請の「罠」
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed text-lg">
                        東京都は全国トップクラスの手厚い補助金を用意していますが、<strong className="text-red-600">最大の敵は「複雑な申請手続き」と「書類不備による審査落ち」です。</strong>
                    </p>

                    <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl relative border border-gray-200">
                        <div className="absolute top-0 right-0 bg-[#003366] text-white font-bold px-6 py-2 rounded-bl-2xl text-sm z-10 shadow-lg">※令和6年度（2024年度）時点</div>
                        <img
                            src="/images/subsidy_tokyo.png"
                            alt="東京都の太陽光・蓄電池に対する圧倒的な補助金"
                            className="w-full h-auto object-cover max-h-[500px]"
                            loading="lazy"
                        />
                    </div>
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

                {/* DIY vs Proxy Diagram */}
                <div className="mb-20">
                    <div className="text-center mb-10">
                        <span className="text-[#003366] font-bold tracking-widest text-sm mb-2 block uppercase">Easy & Safe</span>
                        <h2 className="text-2xl md:text-3xl font-black text-gray-800 mb-4">なぜ「東京ガスにお任せ」が最適なのか？</h2>
                        <p className="text-gray-600">大量の書類作成や不慣れな役所とのやり取りはプロに任せ、<br className="hidden md:block" />お客様は最低限の公的書類を用意するだけの手軽な流れです。</p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 lg:gap-10 items-stretch">
                        {/* Self / Bad Flow */}
                        <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-3xl p-6 md:p-8 flex-1 relative opacity-80">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gray-500 text-white font-bold px-6 py-2 rounded-full text-sm w-[80%] text-center">激安業者・自力申請の場合</div>

                            <div className="mt-8 space-y-4">
                                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 text-gray-500">
                                    <span className="text-red-500 font-bold mr-2">苦労1</span>各省庁・都庁の複雑な要綱を解読
                                </div>
                                <div className="text-center text-gray-300"><Icon name="arrowDown" className="size-6 inline-block" /></div>
                                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 text-gray-500">
                                    <span className="text-red-500 font-bold mr-2">苦労2</span>専門的な図面（結線図等）を自作
                                </div>
                                <div className="text-center text-gray-300"><Icon name="arrowDown" className="size-6 inline-block" /></div>
                                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 border-l-4 border-l-red-500">
                                    <p className="text-red-600 font-bold mb-1">少しでも不備があると…</p>
                                    <p className="text-sm text-gray-600">差し戻しで期限切れになり補助金ゼロの悲劇に。</p>
                                </div>
                            </div>
                        </div>

                        {/* VS Badge */}
                        <div className="flex items-center justify-center shrink-0">
                            <div className="w-12 h-12 md:w-16 md:h-16 bg-white border-4 border-gray-100 rounded-full flex items-center justify-center font-black text-gray-300 text-xl md:text-2xl z-10 relative">VS</div>
                        </div>

                        {/* Tokyo Gas Flow */}
                        <div className="bg-gradient-to-b from-blue-50 to-white border-2 border-[#003366] rounded-3xl p-6 md:p-8 flex-1 relative shadow-xl transform md:-translate-y-4">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#003366] text-white font-black px-8 py-2 rounded-full shadow-lg border border-blue-400 w-[90%] text-center">東京ガス（おまかせ）</div>

                            <div className="mt-8">
                                <h4 className="font-bold text-center text-[#003366] mb-4 border-b border-blue-200 pb-2">お客様の作業はこれだけ</h4>
                                <div className="space-y-4">
                                    <div className="bg-white p-4 rounded-xl shadow-sm border border-blue-100 flex items-center gap-3">
                                        <Icon name="building" className="text-blue-900 size-6 shrink-0" />
                                        <p className="font-bold text-gray-700 text-sm">「公的書類」の取得（住民票など）</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-xl shadow-sm border border-blue-100 flex items-center gap-3">
                                        <Icon name="file" className="text-blue-900 size-6 shrink-0" />
                                        <p className="font-bold text-gray-700 text-sm">建物の「登記簿謄本」を用意</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-xl shadow-sm border border-blue-100 flex items-center gap-3">
                                        <Icon name="pen" className="text-blue-900 size-6 shrink-0" />
                                        <p className="font-bold text-gray-700 text-sm">申請書類へ「署名・捺印」</p>
                                    </div>
                                </div>

                                <div className="mt-6 bg-orange-100 p-4 rounded-xl border border-orange-200 text-center relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-2 h-full bg-orange-500"></div>
                                    <p className="text-orange-900 font-bold flex items-center justify-center gap-2 text-sm">
                                        <Icon name="handshake" className="text-orange-900 size-5" /> 面倒な専門書類や図面はすべて代行！
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-[#003366] mb-8 pb-2 border-b-2 border-blue-100">
                        プロへの見積もり依頼時の「必須確認事項」
                    </h2>

                    <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100 shadow-sm">
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <Icon name="message" className="text-blue-600 size-8 shrink-0" />
                                <div>
                                    <strong className="text-gray-800 block text-lg mb-2">今の時期、東京都の予算はまだ余っていますか？</strong>
                                    <p className="text-sm text-gray-600 leading-relaxed">これを聞かずに契約するのは危険です。今から動いて間に合うのか、担当者に率直なスケジュールの見立てを確認してください。</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <Icon name="message" className="text-blue-600 size-8 shrink-0" />
                                <div>
                                    <strong className="text-gray-800 block text-lg mb-2">国や市区町村の補助金と「併用」した総額を出して下さい</strong>
                                    <p className="text-sm text-gray-600 leading-relaxed">東京都の補助金は、国の補助金や、お住まいの市区町村（区市）の補助金と併用できる「二重取り、三重取り」が可能なケースがあります。「実質負担額」での見積もりを必ず依頼してください。</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <FinalCTA />

                {/* Internal Links Navigation */}
                <div className="border-t-2 border-gray-100 pt-10 mt-16">
                    <h3 className="font-bold text-lg text-gray-700 mb-6 text-center">お金に関する次の疑問はこちら</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Link to="/subsidy-payment" className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 text-center flex items-center justify-between group">
                            <div className="text-left w-full">
                                <div className="text-xs text-orange-500 font-bold mb-1 tracking-wider uppercase">Timing</div>
                                <div className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors text-lg">補助金はいつ振り込まれる？</div>
                            </div>
                            <Icon name="arrowRight" className="size-6 text-gray-300 group-hover:text-blue-600 transition-transform group-hover:translate-x-2" />
                        </Link>
                        <Link to="/" className="bg-[#003366] p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-[#003366] text-center flex items-center justify-between group">
                            <div className="text-left w-full">
                                <div className="text-xs text-blue-200 font-bold mb-1 tracking-wider uppercase">Home</div>
                                <div className="font-bold text-white transition-colors text-lg">トップページへ戻る</div>
                            </div>
                            <Icon name="arrowRight" className="size-6 text-blue-300 transition-transform group-hover:-translate-x-1" />
                        </Link>
                    </div>
                </div>

            </div>
        </PageTemplate>
    );
};
