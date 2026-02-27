import React from 'react';
import { SEOHead } from '../components/SEOHead.jsx';
import { Layout } from '../components/Layout.jsx';
import { Link } from 'react-router-dom';
import { StructuredData } from '../components/StructuredData.jsx';
import { CTALink } from '../components/CTALink.jsx';

const Home = () => {
    const articleData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "太陽光・蓄電池で後悔しないための最後の確認ポイント",
        "description": "東京ガスの太陽光・蓄電池シミュレーション。導入前に確認すべき「途中解約リスク」「費用の決まり方」「補助金の事実」をまとめました。",
        "author": {
            "@type": "Organization",
            "name": "東京ガス 太陽光・蓄電池相談所",
            "url": "https://site-0001-tokyogas.vercel.app/"
        },
        "publisher": {
            "@type": "Organization",
            "name": "東京ガス 太陽光・蓄電池相談所",
            "logo": {
                "@type": "ImageObject",
                "url": "https://site-0001-tokyogas.vercel.app/vite.svg"
            }
        },
        "datePublished": "2026-02-26T08:00:00+09:00",
        "dateModified": new Date().toISOString()
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
            }
        ]
    };

    return (
        <Layout>
            <SEOHead
                title="東京ガスの太陽光・蓄電池｜後悔しないための確認ポイントと無料見積もり"
                description="あなたのご自宅に太陽光・蓄電池は本当に必要？東京ガスのシステム導入前に確認すべき「途中解約リスク」「費用の決まり方」「補助金の事実」をまとめました。まずは1分チェックから。"
                path="/"
            />
            <StructuredData data={articleData} />
            <StructuredData data={breadcrumbData} />

            {/* Hero Section */}
            <section className="bg-gradient-to-b from-[#003366] to-[#004080] text-white pt-16 pb-24 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mt-20 -mr-20 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500 opacity-20 rounded-full -mb-32 -ml-32 blur-3xl"></div>

                <div className="max-w-4xl mx-auto relative z-10 text-center">
                    <span className="inline-block bg-blue-800 text-blue-100 font-bold px-4 py-1.5 rounded-full text-xs md:text-sm mb-6 border border-blue-700 tracking-wider shadow-inner">ネットの口コミより、我が家の実数を</span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-8 tracking-tight">
                        太陽光・蓄電池で<br />
                        <span className="text-orange-400">後悔しない</span>ための<br />
                        <span className="underline decoration-orange-500 decoration-4 underline-offset-8">最後の確認ポイント</span>
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed max-w-2xl mx-auto">
                        高額な買い物だからこそ「途中解約の恐怖」や「補助金の不確実性」に直面します。でも、条件さえ合えば最大のメリットを生み出せるのが東京ガスのパッケージ。
                    </p>

                    <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20 inline-block max-w-xl w-full">
                        <p className="font-bold text-white mb-4 text-lg">検討中ですか？まずは『1分』で対象外判定を。</p>
                        <Link to="/eligible" className="block bg-orange-500 text-white font-black text-xl py-4 px-8 rounded-full hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full text-center">
                            我が家は対象？ 1分チェックへ
                        </Link>
                        <p className="text-xs text-blue-200 mt-3 font-medium">※関東1都6県・戸建て（1981年以降）の条件等を確認します</p>
                    </div>
                </div>
            </section>

            {/* Core Issues Section */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-black text-[#003366] mb-4">導入前に潰すべき「3つの不安」</h2>
                        <p className="text-gray-600">このポイントを曖昧にしたまま契約するのは危険です。各専門ページで対処法を確認してください。</p>
                    </div>

                    <div className="space-y-6">
                        {/* Issue 1: Exit strategy */}
                        <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-200 flex flex-col md:flex-row gap-6 items-center md:items-start group hover:border-red-200 transition-colors">
                            <div className="w-16 h-16 bg-red-50 text-red-500 flex items-center justify-center rounded-2xl text-3xl font-black shrink-0">1</div>
                            <div className="flex-grow text-center md:text-left">
                                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-red-600 transition-colors">「途中で家を手放したらどうなるの？」</h3>
                                <p className="text-gray-600 mb-4 text-sm leading-relaxed">引っ越しや解体時の「解約金・撤去費」トラブルが最大の恐怖です。契約形態による影響と、見積もり時に聞くべき必須の質問リストをまとめました。</p>
                                <Link to="/cancellation" className="text-[#003366] font-bold text-sm hover:underline flex items-center justify-center md:justify-start gap-1">
                                    途中解約・清算金のリスクを確認する &rarr;
                                </Link>
                            </div>
                        </div>

                        {/* Issue 2: Cost calculation */}
                        <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-200 flex flex-col md:flex-row gap-6 items-center md:items-start group hover:border-orange-200 transition-colors">
                            <div className="w-16 h-16 bg-orange-50 text-orange-500 flex items-center justify-center rounded-2xl text-3xl font-black shrink-0">2</div>
                            <div className="flex-grow text-center md:text-left">
                                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">「結局、我が家だったらいくらなの？」</h3>
                                <p className="text-gray-600 mb-4 text-sm leading-relaxed">屋根の形状、足場の面積、分電盤の古さで値段は大きく変わります。ネットの平均価格は役に立ちません。見積もりの「罠」と内訳の見方を解説します。</p>
                                <Link to="/cost" className="text-[#003366] font-bold text-sm hover:underline flex items-center justify-center md:justify-start gap-1">
                                    費用の決まり方と見積もりの見方へ &rarr;
                                </Link>
                            </div>
                        </div>

                        {/* Issue 3: Subsidies */}
                        <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-200 flex flex-col md:flex-row gap-6 items-center md:items-start group hover:border-blue-200 transition-colors">
                            <div className="w-16 h-16 bg-blue-50 text-blue-500 flex items-center justify-center rounded-2xl text-3xl font-black shrink-0">3</div>
                            <div className="flex-grow text-center md:text-left">
                                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#003366] transition-colors">「高額な補助金は本当に絶対もらえる？」</h3>
                                <p className="text-gray-600 mb-4 text-sm leading-relaxed">補助金は「予算上限」や「厳格な期限・書類」に縛られます。確定事項ではないからこそ、申請手続きの流れと、入金遅れによる資金繰りの注意点を知る必要があります。</p>
                                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                                    <Link to="/subsidy-tokyo" className="text-[#003366] font-bold text-sm hover:underline">東京都の補助金とは &rarr;</Link>
                                    <Link to="/subsidy-payment" className="text-[#003366] font-bold text-sm hover:underline">補助金はいつ入る？ &rarr;</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Tokyo Gas Section */}
            <section className="py-20 px-6 bg-white border-t border-gray-100">
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-3xl font-black text-[#003366] mb-6 leading-tight">
                                なぜ、あえて<br />「東京ガス」に相談するのか？
                            </h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                世の中には「初期費用0円」や「格安」を謳う販売代理店が星の数ほど存在します。しかし太陽光と蓄電池は、家の屋根に穴を開け、15年以上も使い続ける住宅インフラです。
                            </p>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                **「いざという時に会社が倒産していて連絡がつかない」「下請けの工事品質が悪くて雨漏りした」**。<br />
                                このようなリスクを極限まで下げるために、光熱費を知り尽くした日本最大級のインフラ企業である東京ガスのパッケージが選ばれています。
                            </p>
                            <Link to="/installation" className="text-blue-600 font-bold hover:underline">
                                工事・施工の不安について詳しく見る &rarr;
                            </Link>
                        </div>
                        <div className="w-full md:w-1/2 bg-blue-50 p-8 rounded-2xl border border-blue-100">
                            <h3 className="font-bold text-xl text-[#003366] mb-6">無料オンライン相談のメリット</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <span className="text-green-500 text-xl">✅</span>
                                    <span className="text-gray-700">プロの担当者が家の図面から「正確な発電量と費用」をシミュレーション</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-500 text-xl">✅</span>
                                    <span className="text-gray-700">「我が家は解約したらどうなるのか？」を直接確認できる</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-500 text-xl">✅</span>
                                    <span className="text-gray-700 font-bold text-red-600">※納得いかなければ契約する必要は一切なし（見積もり無料）</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-20 px-6 bg-[#003366] text-white text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-black mb-8 leading-tight">
                        モヤモヤ悩むより、プロに<br className="md:hidden" />直接聞くのが最短です。
                    </h2>
                    <p className="text-blue-200 mb-10 text-lg leading-relaxed">
                        導入できるかどうかも、いくらかかるかも、すべては図面次第です。<br />
                        「補助金の枠が残っているうちに」まずは専門家に現状を確認してもらいましょう。
                    </p>
                    <CTALink href="https://home.tokyo-gas.co.jp/power/solar/index.html" eventName="generate_lead" className="inline-block bg-orange-500 text-white font-black text-xl py-5 px-10 rounded-full hover:bg-orange-600 transition-colors shadow-2xl transform hover:-translate-y-1 w-full sm:w-auto">
                        無料相談・見積もりに申し込む
                    </CTALink>
                    <p className="mt-4 text-xs text-blue-300">※公式サイトへ移動します。相談後、導入を見送ることも可能です。</p>
                </div>
            </section>

        </Layout>
    );
};

export default Home;
