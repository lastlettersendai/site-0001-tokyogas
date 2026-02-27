import React from 'react';
import { PageTemplate } from '../components/PageTemplate.jsx';
import { Link } from 'react-router-dom';
import { StructuredData } from '../components/StructuredData.jsx';
import { CTALink } from '../components/CTALink.jsx';
import { FinalCTA } from '../components/FinalCTA.jsx';
import { Icon } from '../components/Icon.jsx';

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

            <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-20">

                {/* Hero Section with Support Agent Image */}
                <div className="mb-16">
                    <div className="bg-gradient-to-br from-blue-50 to-[#e6f0fa] rounded-3xl overflow-hidden shadow-lg border border-blue-100 flex flex-col md:flex-row items-center">
                        <div className="p-8 md:p-12 md:w-3/5 text-center md:text-left z-10 relative">
                            <span className="inline-block bg-white text-[#003366] font-bold px-4 py-1.5 rounded-full text-sm mb-4 border border-blue-200 tracking-wider shadow-sm">疑問や不安を解消</span>
                            <h1 className="text-3xl md:text-4xl font-black text-[#003366] leading-tight mb-4">
                                よくある質問<br className="hidden md:block" />（FAQ）
                            </h1>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                導入に向けた、最後の気になる疑問を解消します。契約前にクリアにしておきたいポイントをまとめました。
                            </p>
                        </div>
                        <div className="w-full md:w-2/5 h-64 md:h-auto relative">
                            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-transparent to-[#e6f0fa] z-10"></div>
                            <img
                                src="/images/faq_support.png"
                                alt="カスタマーサポート担当者"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                    </div>
                </div>

                {/* Top 3 Priority FAQ Cards */}
                <div className="mb-16">
                    <h2 className="text-2xl font-black text-[#003366] mb-8 flex items-center gap-2 border-b-2 border-blue-100 pb-3">
                        <Icon name="star" className="text-orange-500 size-8 fill-orange-500" />
                        必ずご確認いただきたい、重要項目3選
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
                <div className="mb-16">
                    <h2 className="text-2xl font-black text-[#003366] mb-8 pb-3 border-b border-gray-200">
                        その他のご質問
                    </h2>

                    <div className="space-y-4">
                        <details className="bg-white rounded-xl shadow-sm border border-gray-200 group overflow-hidden open:ring-2 open:ring-blue-100 transition-all">
                            <summary className="font-bold p-6 cursor-pointer text-gray-800 list-none flex justify-between items-center pr-10 relative text-lg hover:bg-gray-50 transition-colors">
                                <span className="flex items-start gap-4 line-clamp-2 md:line-clamp-none">
                                    <span className="bg-[#003366] text-white rounded-full w-8 h-8 flex items-center justify-center font-black shrink-0">Q</span>
                                    <span>築年数が古い家でも設置できますか？</span>
                                </span>
                                <span className="absolute right-6 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-open:-rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="p-6 pt-0 bg-gray-50">
                                <div className="border-t border-gray-200 pt-6 mt-2 flex items-start gap-4">
                                    <span className="text-orange-500 font-black text-2xl shrink-0 mt-1">A.</span>
                                    <div className="text-gray-700 leading-relaxed">
                                        屋根の強度や劣化の状況によります。一般的に1981年（昭和56年）以前の旧耐震基準の建物や、屋根裏の構造が重さに耐えられないと判断された場合は、安全を最優先とし、設置をお断りするケースがあります。現地調査でプロがしっかりと診断します。
                                        <div className="mt-4"><Link to="/eligible" className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors bg-white px-4 py-2 rounded-lg border border-blue-100 shadow-sm">▶ ご自宅が対象かどうか1分チェックする</Link></div>
                                    </div>
                                </div>
                            </div>
                        </details>

                        <details className="bg-white rounded-xl shadow-sm border border-gray-200 group overflow-hidden open:ring-2 open:ring-blue-100 transition-all">
                            <summary className="font-bold p-6 cursor-pointer text-gray-800 list-none flex justify-between items-center pr-10 relative text-lg hover:bg-gray-50 transition-colors">
                                <span className="flex items-start gap-4 line-clamp-2 md:line-clamp-none">
                                    <span className="bg-[#003366] text-white rounded-full w-8 h-8 flex items-center justify-center font-black shrink-0">Q</span>
                                    <span>補助金の手続きは自分で行う必要がありますか？</span>
                                </span>
                                <span className="absolute right-6 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-open:-rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="p-6 pt-0 bg-gray-50">
                                <div className="border-t border-gray-200 pt-6 mt-2 flex items-start gap-4">
                                    <span className="text-orange-500 font-black text-2xl shrink-0 mt-1">A.</span>
                                    <div className="text-gray-700 leading-relaxed">
                                        基本的には、東京ガスが提携する販売施工会社が補助金の申請を「代行」いたします。お客様自身で複雑な書類の準備をメインで行う必要はありませんが、印鑑証明書などのご用意をお願いする場合がございます。
                                        <div className="mt-4"><Link to="/subsidy-tokyo" className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors bg-white px-4 py-2 rounded-lg border border-blue-100 shadow-sm">▶ 補助金の手続きの流れを確認する</Link></div>
                                    </div>
                                </div>
                            </div>
                        </details>

                        <details className="bg-white rounded-xl shadow-sm border border-gray-200 group overflow-hidden open:ring-2 open:ring-blue-100 transition-all">
                            <summary className="font-bold p-6 cursor-pointer text-gray-800 list-none flex justify-between items-center pr-10 relative text-lg hover:bg-gray-50 transition-colors">
                                <span className="flex items-start gap-4 line-clamp-2 md:line-clamp-none">
                                    <span className="bg-[#003366] text-white rounded-full w-8 h-8 flex items-center justify-center font-black shrink-0">Q</span>
                                    <span>契約後、やむを得ない理由（転勤など）で解約することはできますか？</span>
                                </span>
                                <span className="absolute right-6 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-open:-rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="p-6 pt-0 bg-gray-50">
                                <div className="border-t border-gray-200 pt-6 mt-2 flex items-start gap-4">
                                    <span className="text-orange-500 font-black text-2xl shrink-0 mt-1">A.</span>
                                    <div className="text-gray-700 leading-relaxed">
                                        設置前であれば契約の解除が可能ですが、クーリングオフ期間経過後や、すでに工事が着工している段階でのキャンセルには費用（違約金等）が発生する場合があります。また、設置後に家を売却・引っ越しされる場合は、新しい所有者への名義変更や、ご自身での設備の買い取り（ローンの一括返済）等の手続きが必要になります。
                                        <div className="mt-4"><Link to="/cancellation" className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors bg-white px-4 py-2 rounded-lg border border-blue-100 shadow-sm">▶ 途中解約・引っ越しのリスクを確認する</Link></div>
                                    </div>
                                </div>
                            </div>
                        </details>
                    </div>
                </div>

                <div className="mt-20">
                    <FinalCTA />
                </div>
            </div>
        </PageTemplate>
    );
};
