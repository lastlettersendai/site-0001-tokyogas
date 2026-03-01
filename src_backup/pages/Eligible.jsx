import React, { useState } from 'react';
import { PageTemplate } from '../components/PageTemplate.jsx';
import { Link } from 'react-router-dom';
import { Icon } from '../components/Icon.jsx';
import { ConstitutionFAQ } from '../components/ConstitutionFAQ.jsx';
import { FinalCTA } from '../components/FinalCTA.jsx';

export const Eligible = () => {
    // Interactive checklist states
    const [steps, setSteps] = useState({ 1: null, 2: null, 3: null });

    const getResult = () => {
        if (steps[1] === null || steps[2] === null || steps[3] === null) return null;
        if (steps[1] === 'yes' && steps[2] === 'yes' && steps[3] === 'yes') return 'A';
        if (steps[1] === 'yes' && steps[2] === 'yes' && steps[3] === 'unknown') return 'B';
        return 'C';
    };

    const result = getResult();

    return (
        <PageTemplate
            title="東京ガスの太陽光・蓄電池は対象？関東1都6県・戸建て・1981年以降の1分チェック"
            description="あなたのご自宅が東京ガスの太陽光・蓄電池パッケージの導入対象になるかを1分で診断。築年数や地域などの公式条件に基づき、申し込み前に事前確認ができます。"
            path="/eligible"
        >

            <div className="w-full py-12 md:py-20">
                {/* Block 1: 冒頭3行 (Who/What) */}
                <div className="mb-8 text-left px-4 sm:px-6 max-w-4xl mx-auto">
                    <span className="inline-block bg-blue-100 text-blue-800 font-bold px-4 py-1.5 rounded-full text-xs mb-4 border border-blue-300 tracking-wider">ELIGIBILITY CHECK</span>
                    <p className="text-gray-600 text-sm font-bold leading-relaxed">
                        「我が家には太陽光を置けないのではないか」という不安。<br />
                        実は、設置基準は驚くほどシンプルに決まっています。<br />
                        無駄な見積もりで時間を浪費する前に、ここで結論を出しましょう。
                    </p>
                </div>

                <h1 className="text-3xl md:text-5xl font-black text-[#003366] leading-tight mb-8 px-4 sm:px-6">
                    設置可否は「地域」「築年数」「戸建て」の<span className="mx-1">3</span>点で決まります。
                </h1>

                {/* Block 3: 前提条件 (3行以内) */}
                <div className="px-4 sm:px-6 md:px-0">
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 inline-block w-full max-w-2xl text-left mb-12 mx-4 sm:mx-6">
                        <p className="text-xs font-black text-blue-600 mb-2 tracking-widest uppercase">Prerequisite for Check</p>
                        <ul className="text-sm font-bold text-slate-700 space-y-1">
                            <li className="flex items-center gap-2"><Icon name="check" className="size-4 text-blue-600" /> 手回しですぐに確認したい</li>
                            <li className="flex items-center gap-2"><Icon name="check" className="size-4 text-blue-600" /> 営業マンと話す前に「目星」をつけておきたい</li>
                            <li className="flex items-center gap-2"><Icon name="check" className="size-4 text-blue-600" /> 公式な導入基準を明確に知りたい</li>
                        </ul>
                    </div>
                </div>

                <div className="text-center mb-12 border-b border-gray-100 pb-12 w-full">
                    <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-10 px-4 sm:px-6">
                        すべての家に太陽光や蓄電池が設置できるわけではありません。申し込んだ後に「対象外でした」と断られる手間を完全に省くため、公式条件に基づいた1分チェックをご用意しました。
                    </p>
                    <div className="w-full relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full p-3 bg-gradient-to-b from-black/60 to-transparent z-10 flex text-white font-bold text-sm px-4 sm:px-6">
                            <span><Icon name="check" className="text-blue-400 size-4 mr-1 align-middle" /> 設置対象</span>
                        </div>
                        <img
                            src="/images/eligible_roof.png"
                            alt="太陽光パネル設置に向いている屋根と向いていない屋根の比較画像"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    <div className="bg-white p-4 text-left max-w-4xl mx-auto px-4 sm:px-6">
                        <p className="text-sm text-gray-700 font-bold flex items-center gap-2 mt-4">
                            <span className="text-blue-600 text-xl"><Icon name="idea" className="text-blue-600 size-6" /></span>
                            診断基準は「地域」「築年数」「家のタイプ」の3つだけです。
                        </p>
                    </div>
                </div>

                {/* Interactive Diagnostic */}
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-16 relative mx-4 sm:mx-6">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-[#003366] to-orange-400"></div>
                    <div className="bg-gray-50/50 py-6 px-6 border-b border-gray-100">
                        <h2 className="text-[#003366] font-black text-xl md:text-2xl text-center flex items-center justify-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-orange-500 text-white text-base flex items-center justify-center shadow-md">?</span>
                            以下の3つの質問にお答えください
                        </h2>
                    </div>

                    <div className="p-6 md:p-10 space-y-8" style={{ backgroundImage: 'url("/assets/pattern-grid.svg")' }}>
                        {/* Question 1 */}
                        <div className={`bg-white rounded-2xl p-6 md:p-8 border-2 transition-all duration-300 shadow-sm ${steps[1] ? 'border-green-400 bg-green-50/20' : 'border-blue-100 hover:border-blue-300 hover:shadow-md'}`}>
                            <div className="flex items-start gap-4 mb-6">
                                <div className="bg-[#003366] text-white font-black text-xl w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-md">Q1</div>
                                <div>
                                    <h3 className="font-bold text-gray-800 text-lg md:text-xl leading-snug">お住まいの地域は以下のいずれかですか？</h3>
                                    <p className="text-sm text-gray-500 mt-2 font-medium">東京都・神奈川県・千葉県・埼玉県・茨城県・栃木県・群馬県</p>
                                </div>
                            </div>
                            <div className="flex gap-4 md:pl-16">
                                <button onClick={() => setSteps({ ...steps, 1: 'yes' })} className={`flex-1 py-4 rounded-xl font-bold text-lg transition-all border-2 ${steps[1] === 'yes' ? 'bg-[#003366] text-white border-[#003366] shadow-lg scale-[1.02]' : 'bg-white text-gray-600 border-gray-200 hover:border-[#003366] hover:text-[#003366]'}`}>はい</button>
                                <button onClick={() => setSteps({ ...steps, 1: 'no' })} className={`flex-1 py-4 rounded-xl font-bold text-lg transition-all border-2 ${steps[1] === 'no' ? 'bg-orange-500 text-white border-orange-500 shadow-lg scale-[1.02]' : 'bg-white text-gray-600 border-gray-200 hover:border-orange-500 hover:text-orange-500'}`}>いいえ</button>
                            </div>
                        </div>

                        {/* Question 2 */}
                        <div className={`bg-white rounded-2xl p-6 md:p-8 border-2 transition-all duration-300 shadow-sm ${steps[2] ? 'border-green-400 bg-green-50/20' : 'border-blue-100 hover:border-blue-300 hover:shadow-md'}`}>
                            <div className="flex items-start gap-4 mb-6">
                                <div className="bg-[#003366] text-white font-black text-xl w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-md">Q2</div>
                                <div>
                                    <h3 className="font-bold text-gray-800 text-lg md:text-xl leading-snug">お住まいは「戸建て」の自己所有物件ですか？</h3>
                                    <p className="text-sm text-gray-500 mt-2 font-medium">マンションやアパート等の集合住宅、または賃貸物件は対象外となります。</p>
                                </div>
                            </div>
                            <div className="flex gap-4 md:pl-16">
                                <button onClick={() => setSteps({ ...steps, 2: 'yes' })} className={`flex-1 py-4 rounded-xl font-bold text-lg transition-all border-2 ${steps[2] === 'yes' ? 'bg-[#003366] text-white border-[#003366] shadow-lg scale-[1.02]' : 'bg-white text-gray-600 border-gray-200 hover:border-[#003366] hover:text-[#003366]'}`}>はい</button>
                                <button onClick={() => setSteps({ ...steps, 2: 'no' })} className={`flex-1 py-4 rounded-xl font-bold text-lg transition-all border-2 ${steps[2] === 'no' ? 'bg-orange-500 text-white border-orange-500 shadow-lg scale-[1.02]' : 'bg-white text-gray-600 border-gray-200 hover:border-orange-500 hover:text-orange-500'}`}>いいえ</button>
                            </div>
                        </div>

                        {/* Question 3 */}
                        <div className={`bg-white rounded-2xl p-6 md:p-8 border-2 transition-all duration-300 shadow-sm ${steps[3] ? 'border-green-400 bg-green-50/20' : 'border-blue-100 hover:border-blue-300 hover:shadow-md'}`}>
                            <div className="flex items-start gap-4 mb-6">
                                <div className="bg-[#003366] text-white font-black text-xl w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-md">Q3</div>
                                <div>
                                    <h3 className="font-bold text-gray-800 text-lg md:text-xl leading-snug">建築確認日は「1981年（昭和56年）6月1日以降」ですか？</h3>
                                    <p className="text-sm text-gray-500 mt-2 font-medium">新耐震基準を満たしているかどうかの確認です。よくわからない場合は「わからない」を選択してください。</p>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3 md:pl-16">
                                <button onClick={() => setSteps({ ...steps, 3: 'yes' })} className={`flex-1 py-4 rounded-xl font-bold text-base md:text-lg transition-all border-2 ${steps[3] === 'yes' ? 'bg-[#003366] text-white border-[#003366] shadow-lg scale-[1.02]' : 'bg-white text-gray-600 border-gray-200 hover:border-[#003366] hover:text-[#003366]'}`}>はい</button>
                                <button onClick={() => setSteps({ ...steps, 3: 'no' })} className={`flex-1 py-4 rounded-xl font-bold text-base md:text-lg transition-all border-2 ${steps[3] === 'no' ? 'bg-orange-500 text-white border-orange-500 shadow-lg scale-[1.02]' : 'bg-white text-gray-600 border-gray-200 hover:border-orange-500 hover:text-orange-500'}`}>いいえ</button>
                                <button onClick={() => setSteps({ ...steps, 3: 'unknown' })} className={`flex-1 py-4 rounded-xl font-bold text-base md:text-lg transition-all border-2 ${steps[3] === 'unknown' ? 'bg-blue-500 text-white border-blue-500 shadow-lg scale-[1.02]' : 'bg-white text-gray-600 border-gray-200 hover:border-blue-500 hover:text-blue-500'}`}>わからない</button>
                            </div>
                        </div>

                        {/* Result Area Premium Card */}
                        {result && (
                            <div className="mt-12 relative animate-[fade-in-up_0.5s_ease-out]">
                                <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-blue-500 to-orange-400 rounded-3xl blur opacity-40 animate-pulse"></div>
                                <div className="relative bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-2xl backdrop-blur-sm bg-white/90">
                                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#003366] to-blue-600 text-white font-bold px-6 py-2 rounded-full shadow-lg border border-white/50 text-sm tracking-widest uppercase">
                                        診断結果
                                    </div>

                                    {result === 'A' && (
                                        <div className="text-center mt-4">
                                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 text-green-600 text-4xl mb-6 shadow-sm border-4 border-white ring-2 ring-green-100"><Icon name="party" className="text-green-600 size-10" /></div>
                                            <h3 className="text-green-600 text-2xl md:text-3xl font-black mb-6 tracking-tight">対象の可能性が非常に高いです！</h3>
                                            <p className="text-gray-600 mb-8 max-w-lg mx-auto leading-relaxed text-lg">基本条件をすべてクリアしています。屋根の形状等による最終判断が必要なため、まずは<strong className="text-gray-800">無料のWebお見積もり</strong>へお進みください。</p>
                                            <a href="#cta" className="inline-block bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold text-lg py-4 px-12 rounded-full hover:from-orange-500 hover:to-orange-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 w-full sm:w-auto">
                                                無料見積もりへ進む
                                            </a>
                                        </div>
                                    )}

                                    {result === 'B' && (
                                        <div className="text-center mt-4">
                                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 text-blue-600 text-4xl mb-6 shadow-sm border-4 border-white ring-2 ring-blue-100"><Icon name="clipboard" className="text-blue-600 size-10" /></div>
                                            <h3 className="text-blue-600 text-2xl md:text-3xl font-black mb-6 tracking-tight">図面での確認が必要です</h3>
                                            <p className="text-gray-600 mb-8 max-w-lg mx-auto leading-relaxed text-lg">地域と戸建ての条件はクリア。築年数が不明な場合でも、<strong className="text-gray-800">設計図書</strong>を用意して無料相談に申し込むことで、プロが設置可能か判断してくれます。</p>
                                            <a href="#cta" className="inline-block bg-gradient-to-r from-[#003366] to-blue-800 text-white font-bold text-lg py-4 px-12 rounded-full hover:brightness-110 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 w-full sm:w-auto">
                                                図面を準備して相談する
                                            </a>
                                        </div>
                                    )}

                                    {result === 'C' && (
                                        <div className="text-center mt-4">
                                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 text-gray-400 text-4xl mb-6 shadow-sm border-4 border-white ring-2 ring-gray-100"><Icon name="pray" className="text-gray-400 size-10" /></div>
                                            <h3 className="text-gray-600 text-xl md:text-2xl font-black mb-6">申し訳ありません。<br className="sm:hidden" />対象外の可能性が高いです。</h3>
                                            <div className="bg-red-50 border border-red-100 p-6 rounded-none sm:rounded-2xl text-left max-w-lg mx-auto">
                                                <p className="text-gray-600 text-sm leading-relaxed">東京ガスの本パッケージは、<strong className="text-red-600">関東1都6県の戸建て（新耐震基準クリア）</strong>に限定されております。条件に合わず残念ですが、本サイトの利用による無駄な申し込みの手間が省けましたら幸いです。</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Block 4: 誤解の解体 (Misconception) */}
                <div className="bg-red-50 p-8 rounded-none sm:rounded-3xl border border-red-100 mb-20 mt-16 max-w-4xl mx-auto px-4 sm:px-6">
                    <div className="flex items-center gap-3 mb-4 text-red-600">
                        <Icon name="x" className="size-8" />
                        <h2 className="text-xl font-black">よくある誤解：「屋根が狭いから無理」</h2>
                    </div>
                    <p className="font-bold text-red-800 mb-4 leading-relaxed">
                        「うちの屋根じゃパネルが少ししか載らない」という理由で諦めるのは、<span className="underline decoration-red-500 decoration-2">補助金額の巨大さを見落としています。</span>
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                        最新のパネルは小型化・高効率化が進んでおり、狭小住宅でも十分な発電量が期待できるケースが増えています。特に東京都などでは、ごく少量の設置でも補助金によって「十分にモトが取れる」状態になっています。自己判断で諦めるのが一番の損失です。
                    </p>
                </div>

                {/* Block 5: 判断基準 (Criteria) */}
                <div className="mb-20 max-w-4xl mx-auto px-4 sm:px-6">
                    <h2 className="text-2xl font-black text-[#003366] mb-8 border-l-4 border-blue-600 pl-4">プロが見ている「最終判断の境界線」</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-2xl border border-slate-200">
                            <h3 className="font-bold mb-4">クリア必須な絶対条件</h3>
                            <ul className="text-sm space-y-2 text-slate-600">
                                <li>・対象の関東1都6県に該当していること</li>
                                <li>・「戸建て」の自己所有物件であること</li>
                                <li>・1981年（昭和56年）6月以降の「新耐震基準」</li>
                            </ul>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
                            <h3 className="font-bold mb-4 text-blue-900">見積もり時に発覚するNG例</h3>
                            <ul className="text-sm space-y-2 text-blue-800">
                                <li>・屋根の劣化が激しく「改修工事」が先になる</li>
                                <li>・北向きの急勾配で、発電効率が著しく悪い</li>
                                <li>・蓄電池を置くための「基礎スペース」が全くない</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Block 6: 実例 (Case Study) - Format Fixed: Premise -> Conclusion -> Reason -> Next Q */}
                <div className="mb-20 max-w-4xl mx-auto px-4 sm:px-6">
                    <h2 className="text-2xl font-black text-center text-[#003366] mb-12">
                        診断後の行動シミュレーション
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                            <p className="text-xs font-black text-blue-600 mb-1 uppercase tracking-tighter">1. 前提</p>
                            <p className="font-bold text-slate-800 mb-4">築年数が微妙（1980年頃）で「わからない」となったAさん</p>
                            <div className="bg-blue-50 p-4 rounded-xl mb-4">
                                <p className="text-xs font-black text-blue-600 mb-1 uppercase tracking-tighter">2. 結論</p>
                                <p className="text-lg font-black text-blue-900">図面提出により「設置可」の正式判定を獲得</p>
                            </div>
                            <p className="text-xs font-black text-blue-600 mb-1 uppercase tracking-tighter">3. 理由</p>
                            <p className="text-sm text-slate-600 leading-relaxed mb-6">
                                ご自身では判断できなくても、東京ガスの無料見積もりに「設計図（または検査済証）」の写真をアップロードするだけで、専門スタッフが「新耐震基準」に該当するかを代行判定してくれました。
                            </p>
                            <div className="pt-4 border-t border-slate-100">
                                <p className="text-xs font-black text-orange-600 mb-1 uppercase tracking-tighter">4. 次の質問</p>
                                <Link to="/installation" className="text-sm font-bold text-slate-800 hover:text-blue-600 flex items-center gap-2">
                                    「実際の工事日数はどれくらいかかる？」<Icon name="arrowRight" className="size-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Block 7: 申込直前FAQ */}
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    <ConstitutionFAQ />
                    <div className="space-y-4">
                        <details className="bg-white rounded-lg shadow-sm border border-gray-200 group">
                            <summary className="font-bold p-5 cursor-pointer text-gray-800 list-none flex items-center pr-14 relative">
                                <span className="flex items-center gap-2"><span className="text-blue-600 font-bold">Q.</span> <span>築年数が古い家でも設置できますか？</span></span>
                                <Icon name="chevronDown" className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 group-open:rotate-180 transition-transform size-5" />
                            </summary>
                            <div className="p-5 pt-0 text-gray-600 text-sm md:text-base border-t border-gray-100 mt-2 pt-4">
                                ご自宅を建てた際の「建築確認済証」または「検査済証」の日付をご確認ください。（※建物の完成日や引き渡し日ではありません）。手元に資料がない場合でも、無料相談の際に担当者に「資料がない」旨を伝えて確認してもらうことが可能です。
                            </div>
                        </details>

                        <details className="bg-white rounded-lg shadow-sm border border-gray-200 group">
                            <summary className="font-bold p-5 cursor-pointer text-gray-800 list-none flex items-center pr-14 relative">
                                <span className="flex items-center gap-2"><span className="text-blue-600 font-bold">Q.</span> <span>現在建築中の家でも申し込みできますか？</span></span>
                                <Icon name="chevronDown" className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 group-open:rotate-180 transition-transform size-5" />
                            </summary>
                            <div className="p-5 pt-0 text-gray-600 text-sm md:text-base border-t border-gray-100 mt-2 pt-4">
                                基本的に既築（すでに建っている）住宅への「後付け」を想定したパッケージとなっています。新築建築中の場合は、まずはハウスメーカーや工務店へ「東京ガスのシステムを導入できるか」ご自身で相談・調整していただく必要があります。
                            </div>
                        </details>

                        <details className="bg-white rounded-lg shadow-sm border border-gray-200 group">
                            <summary className="font-bold p-5 cursor-pointer text-gray-800 list-none flex justify-between items-center pr-14 relative">
                                <span className="text-blue-600 mr-3">Q.</span> 東京ガスとガスや電気の契約をしていなくても申し込めますか？
                                <Icon name="chevronDown" className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 group-open:rotate-180 transition-transform size-5" />
                            </summary>
                            <div className="p-5 pt-0 text-gray-600 text-sm md:text-base border-t border-gray-100 mt-2 pt-4">
                                はい、可能です。現在のガスや電気の契約会社が他社であっても、対象エリア等その他の条件を満たしていれば申し込み・契約ができます。
                            </div>
                        </details>
                    </div>
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-16">
                        <FinalCTA />
                    </div>
                </div>
            </div>
        </PageTemplate>
    );
};
