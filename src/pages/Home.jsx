import React from 'react';
import { PageTemplate } from '../components/PageTemplate.jsx';
import { Link } from 'react-router-dom';
import { StructuredData } from '../components/StructuredData.jsx';
import { CTALink } from '../components/CTALink.jsx';
import { FinalCTA } from '../components/FinalCTA.jsx';
import { Icon } from '../components/Icon.jsx';

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
        <PageTemplate
            title="東京ガスの太陽光・蓄電池｜後悔しないための確認ポイントと無料見積もり"
            description="あなたのご自宅に太陽光・蓄電池は本当に必要？東京ガスのシステム導入前に確認すべき「途中解約リスク」「費用の決まり方」「補助金の事実」をまとめました。まずは1分チェックから。"
            path="/"
        >
            <StructuredData data={articleData} />
            <StructuredData data={breadcrumbData} />

            {/* Hero Section */}
            <section className="bg-gradient-to-b from-[#003366] to-[#004080] text-white pt-16 pb-24 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mt-20 -mr-20 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500 opacity-20 rounded-full -mb-32 -ml-32 blur-3xl"></div>

                <div className="max-w-6xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-12 text-center lg:text-left">
                    <div className="w-full lg:w-1/2">
                        <span className="inline-block bg-blue-800 text-blue-100 font-bold px-4 py-1.5 rounded-full text-xs md:text-sm mb-6 border border-blue-700 tracking-wider shadow-inner">ネットの口コミより、我が家の実数を</span>
                        <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black leading-tight mb-8 tracking-tight">
                            太陽光・蓄電池で<br />
                            <span className="text-orange-400">後悔しない</span>ための<br />
                            <span className="underline decoration-orange-500 decoration-4 underline-offset-8">最後の確認ポイント</span>
                        </h1>
                        <p className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            高額な買い物だからこそ「途中解約の恐怖」や「補助金の不確実性」に直面します。でも、条件さえ合えば最大のメリットを生み出せるのが東京ガスのパッケージ。
                        </p>

                        <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20 inline-block w-full max-w-md">
                            <p className="font-bold text-white mb-4 text-lg text-center lg:text-left">検討中ですか？まずは『1分』で対象外判定を。</p>
                            <Link to="/eligible" className="block bg-orange-500 text-white font-black text-xl py-4 px-8 rounded-full hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full text-center">
                                我が家は対象？ 1分チェックへ
                            </Link>
                            <p className="text-xs text-blue-200 mt-3 font-medium text-center lg:text-left">※関東1都6県・戸建て（1981年以降）の条件等を確認します</p>
                        </div>
                    </div>

                    {/* Hero Image Block */}
                    <div className="w-full lg:w-1/2 relative mt-10 lg:mt-0">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-blue-400 to-orange-400 rounded-2xl blur-lg opacity-40 animate-pulse"></div>
                        <img
                            src="/images/home_hero.png"
                            alt="東京ガスの太陽光・蓄電池が設置されたエコな住宅"
                            className="relative rounded-2xl shadow-2xl border-4 border-white/20 w-full object-cover aspect-[4/3]"
                            loading="lazy"
                        />
                        <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 hidden md:block animate-bounce z-20">
                            <div className="flex items-center gap-3">
                                <div className="bg-green-100 p-2 rounded-full">
                                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-bold">光熱費大幅カット</p>
                                    <p className="text-sm font-black text-[#003366]">初期費用0円モデルも</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Persona & Risk Declaration Section (Principles 4 & 7) */}
            <section className="py-12 bg-gray-50 border-b border-gray-200">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 relative">
                        {/* Red Banner Top */}
                        <div className="bg-red-600 text-white font-bold text-center py-3 text-lg">
                            【重要】このサイトの対象者について
                        </div>

                        <div className="p-8 md:p-10">
                            <p className="font-bold text-gray-800 text-lg mb-6 text-center">
                                当サイトは<span className="text-red-600 border-b-2 border-red-600">「すべての人に太陽光をすすめるサイト」ではありません。</span><br className="hidden md:block" />
                                まず、以下の条件に当てはまるかご確認ください。
                            </p>

                            <div className="grid md:grid-cols-2 gap-8 mt-8">
                                {/* Not For You Area */}
                                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                                    <div className="flex items-center gap-2 mb-4">
                                        <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        <h3 className="font-black text-red-800 text-lg">このような方には<br />おすすめしません</h3>
                                    </div>
                                    <ul className="space-y-3 text-sm text-gray-700 font-medium">
                                        <li className="flex gap-2"><span className="text-red-500">×</span> 対象エリア外（関東1都6県以外）にお住まいの方</li>
                                        <li className="flex gap-2"><span className="text-red-500">×</span> 1981年（昭和56年）以前に建てられた旧耐震基準の家屋</li>
                                        <li className="flex gap-2"><span className="text-red-500">×</span> 賃貸住宅や集合住宅（※戸建て専用のサービスです）</li>
                                        <li className="flex gap-2"><span className="text-red-500">×</span> 数年以内に確実に取り壊しや引越しの予定がある方</li>
                                    </ul>
                                </div>

                                {/* Target Persona Area */}
                                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                    <div className="flex items-center gap-2 mb-4">
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        <h3 className="font-black text-blue-800 text-lg">このような方に<br />「東京ガス」を推奨します</h3>
                                    </div>
                                    <ul className="space-y-3 text-sm text-gray-700 font-medium">
                                        <li className="flex gap-2"><span className="text-blue-500">○</span> <span className="font-bold underline">初期費用0円</span>で太陽光と蓄電池を導入したい方</li>
                                        <li className="flex gap-2"><span className="text-blue-500">○</span> 最近の電気代高騰に頭を悩ませている方</li>
                                        <li className="flex gap-2"><span className="text-blue-500">○</span> もしもの災害時（停電）に備えたインフラが欲しい方</li>
                                        <li className="flex gap-2"><span className="text-blue-500">○</span> 訪問販売などの怪しい業者ではなく、安心できる大手に頼みたい方</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-8 text-center text-sm text-gray-500 bg-gray-50 p-4 rounded-lg">
                                ※上記「おすすめしない条件」に1つでも該当する場合、審査や設置基準を通らない可能性が高いため、以降の記事を読んでいただいてもお時間を無駄にしてしまう可能性がございます。
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Issues Section - Number Cards UI */}
            <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white relative">
                {/* Background Decorators */}
                <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent top-0 left-0"></div>

                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16 relative z-10">
                        <span className="text-blue-600 font-black tracking-widest text-sm mb-2 block uppercase">Must Check</span>
                        <h2 className="text-3xl md:text-4xl font-black text-[#003366] mb-6">導入前に潰すべき「3つの不安」</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">このポイントを曖昧にしたまま契約するのは危険です。<br className="hidden md:block" />各専門ページで対処法を確認してください。</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Issue 1: Exit strategy */}
                        <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] border border-gray-100 flex flex-col items-center group transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-red-400 to-red-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                            <div className="w-20 h-20 bg-gradient-to-br from-red-50 to-red-100 text-red-600 flex items-center justify-center rounded-2xl text-4xl font-black shrink-0 mb-6 shadow-sm border border-red-100 group-hover:scale-110 transition-transform duration-300">
                                1
                            </div>
                            <div className="text-center flex-grow flex flex-col">
                                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-red-600 transition-colors">「途中で家を手放したらどうなるの？」</h3>
                                <p className="text-gray-600 mb-8 text-sm leading-relaxed flex-grow">引っ越しや解体時の「解約金・撤去費」トラブルが最大の恐怖です。契約形態による影響と、見積もり時に聞くべき必須の質問リストをまとめました。</p>
                                <Link to="/cancellation" className="inline-block bg-red-50 text-red-600 font-bold text-sm py-3 px-6 rounded-full hover:bg-red-100 transition-colors border border-red-100">
                                    清算金リスクを確認 &rarr;
                                </Link>
                            </div>
                        </div>

                        {/* Issue 2: Cost calculation */}
                        <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] border border-gray-100 flex flex-col items-center group transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden md:mt-8">
                            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-orange-400 to-orange-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                            <div className="w-20 h-20 bg-gradient-to-br from-orange-50 to-orange-100 text-orange-600 flex items-center justify-center rounded-2xl text-4xl font-black shrink-0 mb-6 shadow-sm border border-orange-100 group-hover:scale-110 transition-transform duration-300">
                                2
                            </div>
                            <div className="text-center flex-grow flex flex-col">
                                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-orange-600 transition-colors">「結局、我が家だったらいくらなの？」</h3>
                                <p className="text-gray-600 mb-8 text-sm leading-relaxed flex-grow">屋根形状、足場、分電盤の古さで値段は大きく変わります。ネットの平均価格は役に立ちません。見積もりの「罠」と内訳の見方を解説します。</p>
                                <Link to="/cost" className="inline-block bg-orange-50 text-orange-600 font-bold text-sm py-3 px-6 rounded-full hover:bg-orange-100 transition-colors border border-orange-100">
                                    見積もりの見方へ &rarr;
                                </Link>
                            </div>
                        </div>

                        {/* Issue 3: Subsidies */}
                        <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] border border-gray-100 flex flex-col items-center group transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden md:mt-16">
                            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-400 to-blue-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                            <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-blue-100 text-[#003366] flex items-center justify-center rounded-2xl text-4xl font-black shrink-0 mb-6 shadow-sm border border-blue-100 group-hover:scale-110 transition-transform duration-300">
                                3
                            </div>
                            <div className="text-center flex-grow flex flex-col">
                                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-[#003366] transition-colors">「高額な補助金は本当に絶対もらえる？」</h3>
                                <p className="text-gray-600 mb-8 text-sm leading-relaxed flex-grow">補助金は「予算上限」や「厳格な期限・書類」に縛られます。確定事項ではないからこそ、申請の事実と資金繰りの注意点を知る必要があります。</p>
                                <div className="flex flex-col gap-3 w-full">
                                    <Link to="/subsidy-tokyo" className="inline-block w-full bg-blue-50 text-[#003366] font-bold text-sm py-2 px-4 rounded-lg hover:bg-blue-100 transition-colors border border-blue-100">東京都の補助金とは &rarr;</Link>
                                    <Link to="/subsidy-payment" className="inline-block w-full bg-blue-50 text-[#003366] font-bold text-sm py-2 px-4 rounded-lg hover:bg-blue-100 transition-colors border border-blue-100">補助金はいつ入る？ &rarr;</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Tokyo Gas Section - Flowchart UI */}
            <section className="py-24 px-6 bg-[#001a33] text-white">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-orange-400 font-bold tracking-widest text-sm mb-2 block uppercase">Trust & Reliability</span>
                        <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                            なぜ、あえて<br className="md:hidden" />「東京ガス」を選ぶのか？
                        </h2>
                        <p className="text-blue-200 leading-relaxed max-w-2xl mx-auto text-lg">
                            世の中には「初期費用0円」や「格安」を謳う販売代理店が星の数ほど存在します。しかしインフラは15年以上使い続けるものです。
                        </p>
                    </div>

                    {/* Visual Flow / Comparison Block */}
                    <div className="flex flex-col md:flex-row items-center gap-6 justify-center">
                        {/* Bad Flow */}
                        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl w-full md:w-80 backdrop-blur-sm shadow-xl">
                            <p className="text-center font-bold text-red-400 mb-6 pb-2 border-b border-white/10"><Icon name="x" className="text-red-400 mr-2 size-5 align-middle" />名もなき代理店のリスク</p>
                            <div className="flex flex-col gap-4 relative">
                                <div className="bg-black/40 p-4 rounded-lg border border-red-500/30 text-center relative z-10">
                                    <p className="text-sm text-gray-300">格安で契約</p>
                                </div>
                                <div className="w-0.5 h-6 bg-red-500/30 mx-auto -my-4 relative z-0"></div>
                                <div className="bg-black/40 p-4 rounded-lg border border-red-500/30 text-center relative z-10 mt-2">
                                    <p className="text-sm text-gray-300">下請けの低品質な工事<br /><span className="text-xs text-red-300">(雨漏りの危険)</span></p>
                                </div>
                                <div className="w-0.5 h-6 bg-red-500/30 mx-auto -my-4 relative z-0"></div>
                                <div className="bg-black/40 p-4 rounded-lg border border-red-500/30 text-center relative z-10 mt-2">
                                    <p className="text-sm font-bold text-red-400">数年後、倒産して連絡不可<br /><span className="text-xs font-normal">保証が紙切れに…</span></p>
                                </div>
                            </div>
                        </div>

                        {/* Versus Divider */}
                        <div className="text-3xl font-black text-gray-500 md:-rotate-90 md:mx-4">VS</div>

                        {/* Good Flow (Tokyo Gas) */}
                        <div className="bg-gradient-to-b from-blue-900 to-blue-950 border border-blue-500/30 p-8 rounded-2xl w-full md:w-96 backdrop-blur-sm shadow-[0_0_50px_rgba(59,130,246,0.15)] relative transform md:scale-105">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs font-black px-4 py-1 rounded-full shadow-lg">安心の最適解</div>
                            <p className="text-center font-black text-blue-200 mb-6 pb-2 border-b border-blue-500/30 text-lg"><Icon name="check" className="text-blue-200 mr-2 size-6 align-middle" />東京ガスの品質</p>
                            <div className="flex flex-col gap-4 relative">
                                <div className="bg-blue-800/80 p-4 rounded-lg border border-blue-400 text-center relative z-10 shadow-lg">
                                    <p className="font-bold text-white">プロによる綿密な図面調査</p>
                                </div>
                                <div className="w-1 h-6 bg-blue-400 mx-auto -my-4 relative z-0"></div>
                                <div className="bg-blue-800/80 p-4 rounded-lg border border-blue-400 text-center relative z-10 mt-2 shadow-lg">
                                    <p className="font-bold text-white">大手水準の厳格な施工管理</p>
                                </div>
                                <div className="w-1 h-6 bg-blue-400 mx-auto -my-4 relative z-0"></div>
                                <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-5 rounded-lg border border-orange-400 text-center relative z-10 mt-2 shadow-xl">
                                    <p className="text-lg font-black text-white">15年後も確実に存在する<br /><span className="text-sm font-bold">圧倒的なアフターサポート体制</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <Link to="/installation" className="inline-flex items-center justify-center gap-2 text-blue-300 font-bold hover:text-white transition-colors bg-white/5 px-6 py-3 rounded-full hover:bg-white/10">
                            工事・施工の不安について詳しく見る <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </Link>
                    </div>
                </div>
            </section>

            <FinalCTA />

        </PageTemplate>
    );
};

export default Home;
