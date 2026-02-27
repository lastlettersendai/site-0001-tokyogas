import React, { useState } from 'react';
import { PageTemplate } from '../components/PageTemplate.jsx';
import { Link } from 'react-router-dom';
import { Icon } from '../components/Icon.jsx';

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

            <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-20">
                <div className="text-center mb-12">
                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-black text-[#003366] leading-tight mb-6">
                        <span className="block text-lg md:text-2xl text-blue-600 mb-2 font-bold tracking-widest">お申し込み前の必須確認</span>
                        我が家は導入の<span className="text-orange-500">対象外</span>？<br />
                        1分セルフ・チェック
                    </h1>
                    <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-10">
                        実は、すべての家で太陽光や蓄電池が設置できるわけではありません。申し込んだ後に「対象外でした」と断られる手間を省くため、まずは公式の条件に基づいた簡易チェックをお試しください。
                    </p>

                    {/* Roof Image Block */}
                    <div className="max-w-3xl mx-auto relative rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                        <div className="absolute top-0 left-0 w-full p-3 bg-gradient-to-b from-black/60 to-transparent z-10 flex justify-between text-white font-bold text-sm">
                            <span><Icon name="check" className="text-blue-400 size-4 mr-1 align-middle" /> 設置向いている家</span>
                            <span><Icon name="x" className="text-red-400 size-4 mr-1 align-middle" /> 設置が難しい家</span>
                        </div>
                        <img
                            src="/images/eligible_roof.png"
                            alt="太陽光パネル設置に向いている屋根と向いていない屋根の比較画像"
                            className="w-full h-auto object-cover"
                            loading="lazy"
                        />
                        <div className="bg-white p-4 text-left">
                            <p className="text-sm text-gray-700 font-bold flex items-center gap-2">
                                <span className="text-blue-600 text-xl"><Icon name="idea" className="text-blue-600 size-6" /></span>
                                診断基準は「地域」「築年数」「家のタイプ」の3つだけです。
                            </p>
                        </div>
                    </div>
                </div>

                {/* Interactive Diagnostic */}
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-16 relative">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-[#003366] to-orange-400"></div>
                    <div className="bg-gray-50/50 py-6 px-6 border-b border-gray-100">
                        <h2 className="text-[#003366] font-black text-xl md:text-2xl text-center flex items-center justify-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-orange-500 text-white text-base flex items-center justify-center shadow-md">?</span>
                            以下の3つの質問にお答えください
                        </h2>
                    </div>

                    <div className="p-6 md:p-10 space-y-8" style={{ backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgMjBoNDBNMjAgMHY0MCIgc3Ryb2tlPSJyZ2JhKDAsMCwwLDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9zdmc+")` }}>
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
                                            <div className="bg-red-50 border border-red-100 p-6 rounded-2xl text-left max-w-lg mx-auto">
                                                <p className="text-gray-600 text-sm leading-relaxed">東京ガスの本パッケージは、<strong className="text-red-600">関東1都6県の戸建て（新耐震基準クリア）</strong>に限定されております。条件に合わず残念ですが、本サイトの利用による無駄な申し込みの手間が省けましたら幸いです。</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Target Conditions Q&A */}
                <section className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-black text-[#003366] text-center mb-10">対象条件に関するよくある質問</h2>
                    <div className="space-y-4">
                        <details className="bg-white rounded-lg shadow-sm border border-gray-200 group">
                            <summary className="font-bold p-5 cursor-pointer text-gray-800 list-none flex justify-between items-center pr-10 relative">
                                <span className="text-blue-600 mr-3">Q.</span> 建築確認日（1981年以降）って何を見ればわかりますか？
                                <span className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="p-5 pt-0 text-gray-600 text-sm md:text-base border-t border-gray-100 mt-2 pt-4">
                                ご自宅を建てた際の「建築確認済証」または「検査済証」の日付をご確認ください。（※建物の完成日や引き渡し日ではありません）。手元に資料がない場合でも、無料相談の際に担当者に「資料がない」旨を伝えて確認してもらうことが可能です。
                            </div>
                        </details>

                        <details className="bg-white rounded-lg shadow-sm border border-gray-200 group">
                            <summary className="font-bold p-5 cursor-pointer text-gray-800 list-none flex justify-between items-center pr-10 relative">
                                <span className="text-blue-600 mr-3">Q.</span> 現在建築中の家でも申し込みできますか？
                                <span className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="p-5 pt-0 text-gray-600 text-sm md:text-base border-t border-gray-100 mt-2 pt-4">
                                基本的に既築（すでに建っている）住宅への「後付け」を想定したパッケージとなっています。新築建築中の場合は、まずはハウスメーカーや工務店へ「東京ガスのシステムを導入できるか」ご自身で相談・調整していただく必要があります。
                            </div>
                        </details>

                        <details className="bg-white rounded-lg shadow-sm border border-gray-200 group">
                            <summary className="font-bold p-5 cursor-pointer text-gray-800 list-none flex justify-between items-center pr-10 relative">
                                <span className="text-blue-600 mr-3">Q.</span> 東京ガスとガスや電気の契約をしていなくても申し込めますか？
                                <span className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="p-5 pt-0 text-gray-600 text-sm md:text-base border-t border-gray-100 mt-2 pt-4">
                                はい、可能です。現在のガスや電気の契約会社が他社であっても、対象エリア等その他の条件を満たしていれば申し込み・契約ができます。
                            </div>
                        </details>
                    </div>
                    <div className="text-right mt-4">
                        <Link to="/faq" className="text-sm text-blue-600 hover:underline">もっと質問を見る &rarr;</Link>
                    </div>
                </section>

                <div className="bg-blue-50 p-6 md:p-8 rounded-xl border border-blue-100 mb-12">
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                        ※上記は基本的な条件です。この他に「屋根の面積・形状（急勾配など）」「劣化状況」「設置スペース（蓄電池を置く場所）」などにより、現地調査後に設置不可となるケースもございます。
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        ※最新の対象条件については、<a href="https://support.tokyo-gas.co.jp/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">東京ガス公式FAQサイト</a>等もあわせてご確認ください。
                    </p>
                </div>

                {/* Internal Links Navigation */}
                <div className="border-t-2 border-blue-100 pt-10 mt-10">
                    <h3 className="font-bold text-lg text-[#003366] mb-6 text-center">次に読むべき重要なポイント</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Link to="/cost" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 text-center group">
                            <div className="mb-2 flex justify-center"><Icon name="money" className="text-gray-800 size-6 group-hover:text-blue-600 transition-colors" /></div>
                            <div className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors">費用の決まり方</div>
                            <div className="text-xs text-gray-500 mt-2">見積もりの見方と変動要因</div>
                        </Link>
                        <Link to="/cancellation" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 text-center group">
                            <div className="mb-2 flex justify-center"><Icon name="alert" className="text-gray-800 size-6 group-hover:text-blue-600 transition-colors" /></div>
                            <div className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors">解約・引越しの注意</div>
                            <div className="text-xs text-gray-500 mt-2">契約前に知るべき解約金リスク</div>
                        </Link>
                        <Link to="/" className="bg-[#003366] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[#003366] text-center group">
                            <div className="mb-2 flex justify-center"><Icon name="home" className="text-white size-6" /></div>
                            <div className="font-bold text-white transition-colors">トップページへ</div>
                            <div className="text-xs text-blue-200 mt-2">すべての不安を解消する</div>
                        </Link>
                    </div>
                </div>

            </div>
        </PageTemplate>
    );
};
