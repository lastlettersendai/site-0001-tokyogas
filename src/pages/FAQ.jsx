import React from 'react';
import { SEOHead } from '../components/SEOHead.jsx';
import { Layout } from '../components/Layout.jsx';
import { Link } from 'react-router-dom';
import { StructuredData } from '../components/StructuredData.jsx';
import { CTALink } from '../components/CTALink.jsx';

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
        <Layout>
            <SEOHead
                title="東京ガスの太陽光・蓄電池｜よくある質問と導入の最終確認"
                description="保証内容、メンテナンス費用、契約の流れなど、太陽光・蓄電池の導入に関する細かな疑問を一問一答形式でまとめました。"
                path="/faq"
            />
            <StructuredData data={faqData} />
            <StructuredData data={breadcrumbData} />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-20">
                <div className="text-center mb-16 border-b border-gray-200 pb-10">
                    <h1 className="text-3xl md:text-5xl font-black text-[#003366] leading-tight mb-6">
                        よくある質問（FAQ）
                    </h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                        導入に向けた、最後の気になる疑問を解消します。
                    </p>
                </div>

                <div className="space-y-4 mb-16">
                    <details className="bg-white rounded-lg shadow-sm border border-gray-200 group">
                        <summary className="font-bold p-5 cursor-pointer text-gray-800 list-none flex justify-between items-center pr-10 relative text-lg">
                            <span className="flex items-center gap-3"><span className="text-blue-500 font-black">Q.</span> 相談やシミュレーションだけで、契約しなくても本当にお金はかかりませんか？</span>
                            <span className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <div className="p-5 pt-0 text-gray-600 border-t border-gray-100 mt-2 pt-4 leading-relaxed">
                            <strong className="text-red-600">はい、一切かかりません。</strong><br />
                            ご自宅の図面をもとにした発電シミュレーションや、現地での屋根の確認、お見積もりの提示までは完全無料です。提案内容（費用対効果）に納得ができなければ、お断りいただいて全く問題ありませんし、しつこい営業もありません。
                        </div>
                    </details>

                    <details className="bg-white rounded-lg shadow-sm border border-gray-200 group">
                        <summary className="font-bold p-5 cursor-pointer text-gray-800 list-none flex justify-between items-center pr-10 relative text-lg">
                            <span className="flex items-center gap-3"><span className="text-blue-500 font-black">Q.</span> メンテナンスは必要ですか？ランニングコストはどれくらい？</span>
                            <span className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <div className="p-5 pt-0 text-gray-600 border-t border-gray-100 mt-2 pt-4 leading-relaxed">
                            太陽光パネル自体は基本的に日常のメンテナンスは不要（雨水で汚れが落ちる）ですが、長期間安全に使うために「4年に1回の定期点検（数万円程度）」が推奨されています。また、電力を変換する「パワーコンディショナ」という機械が10〜15年程度で故障・寿命を迎えるため、将来的にその交換費用（15万〜30万円程度）を見込んでおく必要があります。
                        </div>
                    </details>

                    <details className="bg-white rounded-lg shadow-sm border border-gray-200 group">
                        <summary className="font-bold p-5 cursor-pointer text-gray-800 list-none flex justify-between items-center pr-10 relative text-lg">
                            <span className="flex items-center gap-3"><span className="text-blue-500 font-black">Q.</span> 築年数が古い家でも設置できますか？</span>
                            <span className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <div className="p-5 pt-0 text-gray-600 border-t border-gray-100 mt-2 pt-4 leading-relaxed">
                            屋根の強度や劣化の状況によります。一般的に1981年（昭和56年）以前の旧耐震基準の建物や、屋根裏の構造が重さに耐えられないと判断された場合は、安全を最優先とし、設置をお断りするケースがあります。現地調査でプロがしっかりと診断します。
                            <div className="mt-3"><Link to="/eligible" className="text-blue-600 hover:underline">▶ ご自宅が対象かどうか1分チェックする</Link></div>
                        </div>
                    </details>

                    <details className="bg-white rounded-lg shadow-sm border border-gray-200 group">
                        <summary className="font-bold p-5 cursor-pointer text-gray-800 list-none flex justify-between items-center pr-10 relative text-lg">
                            <span className="flex items-center gap-3"><span className="text-blue-500 font-black">Q.</span> 今、他の電力会社（東電など）を使っているのですが、東京ガスと契約しないとダメですか？</span>
                            <span className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <div className="p-5 pt-0 text-gray-600 border-t border-gray-100 mt-2 pt-4 leading-relaxed">
                            いいえ。現在のご家庭の「電気の契約先」が東京電力など他の会社であっても、設備の導入・契約は可能です。（※ただし、機器の契約とは別に、売電等の手続きが発生します）
                        </div>
                    </details>
                </div>

                {/* Call to action */}
                <div className="text-center relative bg-blue-50 p-8 md:p-12 rounded-2xl border border-blue-100">
                    <h3 className="text-2xl font-black text-[#003366] mb-4">迷っているなら、プロに計算させてみませんか？</h3>
                    <p className="text-gray-700 mb-8 max-w-xl mx-auto">
                        ネットの情報だけでは、1円単位の正確な答えは絶対に出ません。<br />
                        まずは、ご自宅の図面をもとに「実際のところ、いくらお得になるのか？」を東京ガスにシミュレーションしてもらいましょう。（完全無料です）
                    </p>
                    <CTALink href="https://home.tokyo-gas.co.jp/power/solar/index.html" eventName="click_cta_faq" className="inline-block bg-orange-500 text-white font-bold text-lg py-4 px-10 rounded-full hover:bg-orange-600 shadow-xl transform hover:-translate-y-1">
                        無料でシミュレーション・見積もりをする
                    </CTALink>
                </div>

                <div className="border-t-2 border-gray-100 pt-10 mt-16 text-center">
                    <Link to="/" className="inline-block bg-white text-gray-700 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 font-bold transition-colors">
                        トップページへ戻る
                    </Link>
                </div>

            </div>
        </Layout>
    );
};
