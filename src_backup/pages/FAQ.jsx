import React from 'react';
import { PageTemplate } from '../components/PageTemplate.jsx';
import { Link } from 'react-router-dom';
import { StructuredData } from '../components/StructuredData.jsx';
import { CTALink } from '../components/CTALink.jsx';
import { FinalCTA } from '../components/FinalCTA.jsx';
import { Icon } from '../components/Icon.jsx';
import { ConstitutionFAQ } from '../components/ConstitutionFAQ.jsx';

export const FAQ = () => {
    const faqData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "相談やシミュレーションだけで、契約しなくても本当にお金はかかりませんか？",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "はい、一切かかりません。ご自宅の図面をもとにした発電シミュレーションや、現地での屋根の確認、お見積もりの提示までは完全無料です。提案内容（費用対効果）に納得ができなければ、お断りいただいて全く問題ありませんし、しつこい営業もありません。"
                }
            },
            {
                "@type": "Question",
                "name": "メンテナンスは必要ですか？ランニングコストはどれくらい？",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "太陽光パネル自体は基本的に日常のメンテナンスは不要ですが、長期間安全に使うために「4年に1回の定期点検（数万円程度）」が推奨されています。また、パワーコンディショナという機械が10〜15年程度で故障・寿命を迎えるため、将来的にその交換費用（15万〜30万円程度）を見込んでおく必要があります。"
                }
            },
            {
                "@type": "Question",
                "name": "築年数が古い家でも設置できますか？",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "屋根の強度や劣化の状況によります。一般的に1981年（昭和56年）以前の旧耐震基準の建物や、屋根裏の構造が重さに耐えられないと判断された場合は、安全を最優先とし、設置をお断りするケースがあります。現地調査でプロがしっかりと診断します。"
                }
            },
            {
                "@type": "Question",
                "name": "今、他の電力会社（東電など）を使っているのですが、東京ガスと契約しないとダメですか？",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "いいえ。現在のご家庭の「電気の契約先」が東京電力など他の会社であっても、設備の導入・契約は可能です。（※ただし、機器の契約とは別に、売電等の手続きが発生します）"
                }
            }
        ]
    };

    const breadcrumbData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "ホーム",
                "item": "https://site-0001-tokyogas.vercel.app/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "よくある質問",
                "item": "https://site-0001-tokyogas.vercel.app/faq"
            }
        ]
    };

    return (
        <PageTemplate
            title="東京ガスの太陽光・蓄電池｜よくある質問と導入の最終確認"
            description="保証内容、メンテナンス費用、契約の流れなど、太陽光・蓄電池の導入に関する細かな疑問を一問一答形式でまとめました。"
            path="/faq"
        >
            <StructuredData data={faqData} />
            <StructuredData data={breadcrumbData} />

            <div className="w-full py-12 md:py-20">

                {/* Hero Section with Support Agent Image */}
                <div className="mb-16 border-b border-gray-100 pb-12 w-full">
                    <div className="px-4 sm:px-6 max-w-4xl mx-auto mb-8">
                        <span className="inline-block bg-blue-100 text-[#003366] font-bold px-4 py-1.5 rounded-full text-sm mb-4 border border-blue-200 tracking-wider shadow-sm">FAQ & DECISION</span>
                        <h1 className="text-3xl md:text-5xl font-black text-[#003366] leading-tight mb-8">
                            「知らなかった」で後悔しないための<br className="hidden md:inline" />最終確認リスト
                        </h1>

                        {/* Block 3: 前提条件 (3行以内) */}
                        <div className="bg-slate-50 p-6 rounded-none sm:rounded-2xl border border-slate-200 inline-block w-full max-w-2xl text-left mb-8 md:mx-auto lg:ml-[calc(50vw-24rem)]">
                            <p className="text-xs font-black text-[#003366] mb-2 tracking-widest uppercase">Prerequisite for FAQ</p>
                            <ul className="text-sm font-bold text-slate-700 space-y-1">
                                <li className="flex items-center gap-2"><Icon name="check" className="size-4 text-blue-600" /> 基本的な仕組みや費用の知識はある</li>
                                <li className="flex items-center gap-2"><Icon name="check" className="size-4 text-blue-600" /> 契約直前の「最後の不安」を消したい</li>
                                <li className="flex items-center gap-2"><Icon name="check" className="size-4 text-blue-600" /> メリットだけでなくデメリットも知りたい</li>
                            </ul>
                        </div>

                        <p className="text-gray-700 text-lg leading-relaxed max-w-2xl md:mx-auto lg:mx-0">
                            導入に向けた、最後の気になる疑問を解消します。契約前にクリアにしておきたいポイントをまとめました。
                        </p>
                    </div>

                    <div className="w-full relative overflow-hidden">
                        <img
                            src="/images/faq_support.png"
                            alt="カスタマーサポート担当者"
                            className="w-full object-cover aspect-video block"
                            loading="lazy"
                        />
                    </div>
                </div>

                {/* Block 4: 誤解の解体 (Misconception) */}
                <div className="bg-red-50 p-8 rounded-none sm:rounded-3xl border border-red-100 mb-20 mt-16 max-w-4xl mx-auto px-4 sm:px-6">
                    <div className="flex items-center gap-3 mb-4 text-red-600">
                        <Icon name="x" className="size-8" />
                        <h2 className="text-xl font-black">よくある誤解：「質問するとしつこく営業される」</h2>
                    </div>
                    <p className="font-bold text-red-800 mb-4 leading-relaxed">
                        「見積もりや相談をしたら最後、契約するまで帰ってくれない」というのは、<span className="underline decoration-red-500 decoration-2">昔の訪問販売のイメージです。</span>
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                        東京ガスでは、強引な押し売りやしつこい電話営業はコンプライアンス上固く禁じられています。あくまで「お客様の課題解決」が目的であり、費用対効果にメリットが出ないご家庭には、正直に「今回は見送った方が良いです」とご案内する場合も多々あります。
                    </p>
                </div>

                {/* Block 5: 判断基準 (Criteria) */}
                <div className="mb-20 max-w-4xl mx-auto px-4 sm:px-6">
                    <h2 className="text-2xl font-black text-[#003366] mb-8 border-l-4 border-blue-600 pl-4">無料シミュレーションに進むべき基準</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-2xl border border-slate-200">
                            <h3 className="font-bold mb-4">こんな方は今すぐ相談へ</h3>
                            <ul className="text-sm space-y-2 text-slate-600">
                                <li>・補助金がなくなる前に「枠」だけでも確保したい</li>
                                <li>・光熱費の高騰に毎月ストレスを感じている</li>
                                <li>・数年内に屋根のメンテナンス時期が来ない新築〜築浅</li>
                            </ul>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
                            <h3 className="font-bold mb-4 text-blue-900">こんな方は見送り推奨</h3>
                            <ul className="text-sm space-y-2 text-blue-800">
                                <li>・数年以内に家の売却や取り壊しが決まっている</li>
                                <li>・日陰が多く、1日中全く日が当たらない</li>
                                <li>・屋根の劣化が激しく、雨漏りなどの修繕が最優先</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Block 6: 実例 (Case Study) */}
                <div className="mb-20 max-w-4xl mx-auto px-4 sm:px-6">
                    <h2 className="text-2xl font-black text-center text-[#003366] mb-12">
                        導入判断シミュレーション
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                            <p className="text-xs font-black text-blue-600 mb-1 uppercase tracking-tighter">1. 前提</p>
                            <p className="font-bold text-slate-800 mb-4">「本当に安くなるの？」と半信半疑だったBさん</p>
                            <div className="bg-blue-50 p-4 rounded-xl mb-4">
                                <p className="text-xs font-black text-blue-600 mb-1 uppercase tracking-tighter">2. 結論</p>
                                <p className="text-lg font-black text-blue-900">月額3,000円の実質負担減を確認し、即契約</p>
                            </div>
                            <p className="text-xs font-black text-blue-600 mb-1 uppercase tracking-tighter">3. 理由</p>
                            <p className="text-sm text-slate-600 leading-relaxed mb-6">
                                無料の発電シミュレーションを依頼したところ、ご自宅の屋根の形が太陽光に非常に適していることが判明。ローン支払いを含めても今の電気代よりトータルの出費が減る明確な数字が出たため、迷いなく決断できました。
                            </p>
                            <div className="pt-4 border-t border-slate-100">
                                <p className="text-xs font-black text-orange-600 mb-1 uppercase tracking-tighter">4. 次の質問</p>
                                <Link to="/subsidy-tokyo" className="text-sm font-bold text-slate-800 hover:text-blue-600 flex items-center gap-2">
                                    「東京都の補助金はまだ間に合う？」<Icon name="arrowRight" className="size-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Top 3 Priority FAQ Cards */}
                <div className="mb-16 max-w-4xl mx-auto px-4 sm:px-6">
                    <h2 className="text-2xl font-black text-[#003366] mb-8 flex items-center gap-2 border-b-2 border-blue-100 pb-3">
                        <Icon name="star" className="text-orange-500 size-8 fill-orange-500" />
                        必ずご確認いただきたい、重要項目<span className="mx-1">3</span>選
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* FAQ Card 1 */}
                        <div className="bg-white rounded-xl shadow-md border-t-4 border-t-[#003366] p-6 hover:-translate-y-1 transition-transform cursor-pointer relative group">
                            <div className="absolute top-0 right-0 bg-[#003366] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">TOP 1</div>
                            <h3 className="font-bold text-gray-800 text-lg mb-4 mt-2 pr-8 leading-snug">
                                <span className="text-[#003366] font-black mr-1 text-xl">Q.</span>
                                相談や見積もりだけでも、後から営業されたりお金がかかったりしませんか？
                            </h3>
                            <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700 leading-relaxed border border-gray-100">
                                <strong className="text-red-600 text-base mb-1 block">A. 一切かかりません。</strong>
                                発電シミュレーションや現地調査、お見積り提示までは完全無料です。納得できなければお断りいただいて大丈夫です。
                            </div>
                        </div>

                        {/* FAQ Card 2 */}
                        <div className="bg-white rounded-xl shadow-md border-t-4 border-t-blue-500 p-6 hover:-translate-y-1 transition-transform cursor-pointer relative group">
                            <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">TOP 2</div>
                            <h3 className="font-bold text-gray-800 text-lg mb-4 mt-2 pr-8 leading-snug">
                                <span className="text-blue-500 font-black mr-1 text-xl">Q.</span>
                                導入後、メンテナンスやランニングコストはどれくらい掛かる？
                            </h3>
                            <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700 leading-relaxed border border-gray-100">
                                <strong className="text-[#003366] text-base mb-1 block">A. 日常メンテは基本不要です。</strong>
                                ただし「4年に1回の点検（数万円）」や、10〜15年後の「パワコン交換（15万〜30万円）」は見込んでおく必要があります。
                            </div>
                        </div>

                        {/* FAQ Card 3 */}
                        <div className="bg-white rounded-xl shadow-md border-t-4 border-t-blue-400 p-6 hover:-translate-y-1 transition-transform cursor-pointer relative group">
                            <div className="absolute top-0 right-0 bg-blue-400 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">TOP 3</div>
                            <h3 className="font-bold text-gray-800 text-lg mb-4 mt-2 pr-8 leading-snug">
                                <span className="text-blue-400 font-black mr-1 text-xl">Q.</span>
                                現在「東京電力」ですが、東京ガスに切り替えないとダメですか？
                            </h3>
                            <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700 leading-relaxed border border-gray-100">
                                <strong className="text-[#003366] text-base mb-1 block">A. 今のままでも設置可能です。</strong>
                                電気の契約先が他社であっても、設備の導入は可能です。もちろん東京ガスにまとめることも可能です。
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stylized Accordions for other FAQs */}
                <div className="mb-16 max-w-4xl mx-auto px-4 sm:px-6">
                    <h2 className="text-2xl font-black text-[#003366] mb-8 pb-3 border-b border-gray-200">
                        その他のご質問
                    </h2>

                    <div className="space-y-4">
                        <details className="bg-white rounded-xl shadow-sm border border-gray-200 group overflow-hidden open:ring-2 open:ring-blue-100 transition-all">
                            <summary className="font-bold p-6 cursor-pointer text-gray-800 list-none flex justify-between items-center pr-14 relative text-lg hover:bg-gray-50 transition-colors">
                                <span className="flex items-start gap-4">
                                    <span className="bg-[#003366] text-white rounded-full w-8 h-8 flex items-center justify-center font-black shrink-0">Q</span>
                                    <span>築年数が古い家でも設置できますか？</span>
                                </span>
                                <span className="absolute right-6 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-open:-rotate-180 transition-transform"><Icon name="chevronDown" className="size-5" /></span>
                            </summary>
                            <div className="p-6 pt-0 bg-gray-50">
                                <div className="border-t border-gray-200 pt-6 mt-2 flex items-start gap-4">
                                    <span className="text-orange-500 font-black text-2xl shrink-0 mt-1">A.</span>
                                    <div className="text-gray-700 leading-relaxed">
                                        屋根の強度や劣化の状況によります。一般的に1981年（昭和56年）以前の旧耐震基準の建物や、屋根裏の構造が重さに耐えられないと判断された場合は、安全を最優先とし、設置をお断りするケースがあります。現地調査でプロがしっかりと診断します。
                                        <div className="mt-4"><Link to="/eligible" className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors bg-white px-4 py-2 rounded-none sm:rounded-lg border border-blue-100 shadow-sm">▶ ご自宅が対象かどうか1分チェックする</Link></div>
                                    </div>
                                </div>
                            </div>
                        </details>

                        <details className="bg-white rounded-xl shadow-sm border border-gray-200 group overflow-hidden open:ring-2 open:ring-blue-100 transition-all">
                            <summary className="font-bold p-6 cursor-pointer text-gray-800 list-none flex justify-between items-center pr-14 relative text-lg hover:bg-gray-50 transition-colors">
                                <span className="flex items-start gap-4">
                                    <span className="bg-[#003366] text-white rounded-full w-8 h-8 flex items-center justify-center font-black shrink-0">Q</span>
                                    <span>補助金の手続きは自分で行う必要がありますか？</span>
                                </span>
                                <span className="absolute right-6 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-open:-rotate-180 transition-transform"><Icon name="chevronDown" className="size-5" /></span>
                            </summary>
                            <div className="p-6 pt-0 bg-gray-50">
                                <div className="border-t border-gray-200 pt-6 mt-2 flex items-start gap-4">
                                    <span className="text-orange-500 font-black text-2xl shrink-0 mt-1">A.</span>
                                    <div className="text-gray-700 leading-relaxed">
                                        基本的には、東京ガスが提携する販売施工会社が補助金の申請を「代行」いたします。お客様自身で複雑な書類の準備をメインで行う必要はありませんが、印鑑証明書などのご用意をお願いする場合がございます。
                                        <div className="mt-4"><Link to="/subsidy-tokyo" className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors bg-white px-4 py-2 rounded-none sm:rounded-lg border border-blue-100 shadow-sm">▶ 補助金の手続きの流れを確認する</Link></div>
                                    </div>
                                </div>
                            </div>
                        </details>

                        <details className="bg-white rounded-xl shadow-sm border border-gray-200 group overflow-hidden open:ring-2 open:ring-blue-100 transition-all">
                            <summary className="font-bold p-6 cursor-pointer text-gray-800 list-none flex justify-between items-center pr-14 relative text-lg hover:bg-gray-50 transition-colors">
                                <span className="flex items-start gap-4">
                                    <span className="bg-[#003366] text-white rounded-full w-8 h-8 flex items-center justify-center font-black shrink-0">Q</span>
                                    <span>契約後、やむを得ない理由（転勤など）で解約することはできますか？</span>
                                </span>
                                <span className="absolute right-6 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-open:-rotate-180 transition-transform"><Icon name="chevronDown" className="size-5" /></span>
                            </summary>
                            <div className="p-6 pt-0 bg-gray-50">
                                <div className="border-t border-gray-200 pt-6 mt-2 flex items-start gap-4">
                                    <span className="text-orange-500 font-black text-2xl shrink-0 mt-1">A.</span>
                                    <div className="text-gray-700 leading-relaxed">
                                        設置前であれば契約の解除が可能ですが、クーリングオフ期間経過後や、すでに工事が着工している段階でのキャンセルには費用（違約金等）が発生する場合があります。また、設置後に家を売却・引っ越しされる場合は、新しい所有者への名義変更や、ご自身での設備の買い取り（ローンの一括返済）等の手続きが必要になります。
                                        <div className="mt-4"><Link to="/cancellation" className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors bg-white px-4 py-2 rounded-none sm:rounded-lg border border-blue-100 shadow-sm">▶ 途中解約・引っ越しのリスクを確認する</Link></div>
                                    </div>
                                </div>
                            </div>
                        </details>
                    </div>
                </div>

                {/* Block 7: 申込直前FAQ */}
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    <ConstitutionFAQ />
                    <FinalCTA />
                </div>

                {/* Internal Links Navigation */}
                <div className="max-w-4xl mx-auto px-4 sm:px-6 border-t-2 border-gray-100 pt-10 mt-16 pb-12">
                    <h3 className="font-bold text-lg text-gray-700 mb-6 text-center">次はこちらも確認してください</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Link to="/subsidy-tokyo" className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 text-center flex items-center justify-between group">
                            <div className="text-left w-full">
                                <div className="text-xs text-orange-500 font-bold mb-1 tracking-wider uppercase">Money</div>
                                <div className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors text-lg">東京都の補助金と罠</div>
                            </div>
                            <Icon name="arrowRight" className="size-6 text-gray-300 group-hover:text-blue-600 transition-transform group-hover:translate-x-2" />
                        </Link>
                        <Link to="/" className="bg-[#003366] p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-[#003366] text-center flex items-center justify-between group">
                            <div className="text-left w-full">
                                <div className="text-xs text-blue-200 font-bold mb-1 tracking-wider uppercase">Home</div>
                                <div className="font-bold text-white transition-colors text-lg">トップページへ戻る</div>
                            </div>
                            <Icon name="arrowRight" className="size-6 text-blue-300 transition-transform group-hover:translate-x-2" />
                        </Link>
                    </div>
                </div>
            </div>
        </PageTemplate>
    );
};
