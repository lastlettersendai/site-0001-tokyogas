import React from 'react';
import { PageTemplate } from '../components/PageTemplate.jsx';
import { Link } from 'react-router-dom';
import { StructuredData } from '../components/StructuredData.jsx';
import { Icon } from '../components/Icon.jsx';
import { ConstitutionFAQ } from '../components/ConstitutionFAQ.jsx';
import { FinalCTA } from '../components/FinalCTA.jsx';

export const Operator = () => {
    const orgData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "東京ガス 太陽光・蓄電池相談所",
        "url": "https://site-0001-tokyogas.vercel.app/",
        "logo": "https://site-0001-tokyogas.vercel.app/vite.svg",
        "description": "当サイトはアフィリエイトプログラムにより商品等をご紹介致しております。",
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer support",
            "url": "https://home.tokyo-gas.co.jp/power/solar/index.html"
        }
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
                "name": "運営者情報",
                "item": "https://site-0001-tokyogas.vercel.app/operator"
            }
        ]
    };

    return (
        <PageTemplate
            title="運営者情報・免責事項・プライバシーポリシー | 東京ガス 太陽光・蓄電池相談所"
            description="当サイトの運営方針、広告掲載（PR）に関する表記、免責事項、およびプライバシーポリシーについて記載しています。"
            path="/operator"
        >
            <StructuredData data={orgData} />
            <StructuredData data={breadcrumbData} />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-20">
                {/* Block 1: 冒頭3行 (Who/What) */}
                <div className="mb-8 text-left">
                    <span className="inline-block bg-gray-100 text-gray-800 font-bold px-4 py-1.5 rounded-full text-xs mb-4 border border-gray-300 tracking-wider">ABOUT US</span>
                    <p className="text-gray-600 text-sm font-bold leading-relaxed">
                        情報が溢れるネット社会において、何が真実か見極めるのは困難です。<br />
                        当サイトは、過度な煽りや不確かな情報を排除し、<br />
                        ユーザーが「後悔しない決断」を下すための客観的な羅針盤となります。
                    </p>
                </div>

                {/* Block 2: 結論1行 */}
                <h1 className="text-3xl md:text-5xl font-black text-[#003366] leading-tight mb-8">
                    透明性と正確性を第一に、客観的な情報のみを提供します
                </h1>

                {/* Block 3: 前提条件 (3行以内) */}
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 inline-block w-full max-w-2xl text-left mb-12">
                    <p className="text-xs font-black text-gray-600 mb-2 tracking-widest uppercase">Prerequisite for Information</p>
                    <ul className="text-sm font-bold text-slate-700 space-y-1">
                        <li className="flex items-center gap-2"><Icon name="check" className="size-4 text-gray-600" /> 情報の偏りを防ぐため、メリットとデメリットを併記します</li>
                        <li className="flex items-center gap-2"><Icon name="check" className="size-4 text-gray-600" /> 最新の公式情報（補助金等）に基づき内容を更新します</li>
                        <li className="flex items-center gap-2"><Icon name="check" className="size-4 text-gray-600" /> アフィリエイトプログラムによる適正な運営を行っています</li>
                    </ul>
                </div>

                <div className="text-center mb-16 border-b border-gray-100 pb-12">
                    <div className="w-full h-48 md:h-72 lg:h-[400px] overflow-hidden rounded-3xl shadow-lg relative border border-gray-200">
                        <img
                            src="/images/operator_building.webp"
                            alt="信頼と透明性を象徴するクリーンなオフィスビルのイメージ"
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/80 via-transparent to-transparent"></div>
                        <div className="absolute bottom-6 left-6 text-white text-left">
                            <p className="font-bold text-lg md:text-xl drop-shadow-md tracking-wider">東京ガス 太陽光・蓄電池相談所</p>
                            <p className="text-xs md:text-sm text-blue-100 drop-shadow flex items-center gap-2 mt-1">
                                <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                                情報の透明性と正確性を第一に運営しています
                            </p>
                        </div>
                    </div>
                </div>

                <div className="space-y-12 max-w-3xl mx-auto">
                    {/* Block 4: 誤解の解体 (Misconception) */}
                    <div className="bg-red-50 p-8 rounded-3xl border border-red-100 mb-20">
                        <div className="flex items-center gap-3 mb-4 text-red-600">
                            <Icon name="x" className="size-8" />
                            <h2 className="text-xl font-black">よくある誤解：「アフィリエイトサイトは嘘ばかりだ」</h2>
                        </div>
                        <p className="font-bold text-red-800 mb-4 leading-relaxed">
                            「報酬のために何でもおすすめする」というのは、<span className="underline decoration-red-500 decoration-2">悪質な一部のサイトのやり方であり、当サイトのポリシーとは真逆です。</span>
                        </p>
                        <p className="text-sm text-gray-700 leading-relaxed">
                            当サイトは、東京ガスの公式情報と事実に基づき、メリットだけでなくリスク（違約金、対象外条件など）も隠さずお伝えします。読者が正しい知識を持ち、「自分の家には合わない」と判断して見送ることも、一つの立派な「成果」であると考えています。
                        </p>
                    </div>

                    {/* Block 5: 判断基準 (Criteria) */}
                    <div className="mb-20">
                        <h2 className="text-2xl font-black text-[#003366] mb-8 border-l-4 border-gray-600 pl-4">当サイトのコンテンツ制作基準</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-2xl border border-slate-200">
                                <h3 className="font-bold mb-4">掲載する情報</h3>
                                <ul className="text-sm space-y-2 text-slate-600 italic">
                                    <li>・東京ガス公式サイトで発表されている事実</li>
                                    <li>・国や自治体が公表している補助金データ</li>
                                    <li>・契約前に知っておくべき解約等のリスク情報</li>
                                </ul>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                <h3 className="font-bold mb-4 text-gray-900">掲載しない情報</h3>
                                <ul className="text-sm space-y-2 text-gray-800 italic">
                                    <li>・根拠のない他社との優劣比較やランキング</li>
                                    <li>・「絶対に儲かる」等の過度なメリット表現</li>
                                    <li>・不確定な未来の補助金に関する断定的な予測</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Block 6: 実例 (Case Study) */}
                    <div className="mb-20">
                        <h2 className="text-2xl font-black text-center text-[#003366] mb-12">
                            情報更新の運用シミュレーション
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                                <p className="text-xs font-black text-blue-600 mb-1 uppercase tracking-tighter">1. 前提</p>
                                <p className="font-bold text-slate-800 mb-4">東京都の補助金予算が突然終了（または増額）した</p>
                                <div className="bg-blue-50 p-4 rounded-xl mb-4">
                                    <p className="text-xs font-black text-blue-600 mb-1 uppercase tracking-tighter">2. 結論</p>
                                    <p className="text-lg font-black text-blue-900">公式発表を確認後、速やかにサイト内の記載を修正</p>
                                </div>
                                <p className="text-xs font-black text-blue-600 mb-1 uppercase tracking-tighter">3. 理由</p>
                                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                                    誤った補助金情報でユーザーの損害を招かないよう、定期的に公的機関や東京ガスのリリースを確認し、常に「執筆・更新時点での最新情報」を維持する運用体制をとっています。
                                </p>
                                <div className="pt-4 border-t border-slate-100">
                                    <p className="text-xs font-black text-orange-600 mb-1 uppercase tracking-tighter">4. 次のアクション</p>
                                    <a href="https://home.tokyo-gas.co.jp/power/solar/index.html" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-slate-800 hover:text-blue-600 flex items-center gap-2">
                                        最終的な正確な情報は公式へお問い合わせください<Icon name="arrowRight" className="size-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-12 max-w-3xl mx-auto mb-20">
                        {/* Section 1: PR Statement (Preserved as required for an Operator page) */}
                        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="bg-gray-50 border-b border-gray-100 px-8 py-5 flex items-center gap-4">
                                <span className="w-10 h-10 rounded-full bg-blue-100 text-[#003366] font-black flex items-center justify-center shrink-0">1</span>
                                <h2 className="text-xl md:text-2xl font-bold text-gray-800 tracking-tight">
                                    アフィリエイトプログラムに関する表記
                                </h2>
                            </div>
                            <div className="p-8 text-gray-600 leading-relaxed text-sm md:text-base space-y-5">
                                <p>記事内の一部リンクにはアフィリエイト広告（<strong className="text-[#003366]">PR</strong>）が含まれており、当サイト経由での無料見積もり等のお申し込みに対して紹介料が発生する場合がありますが、情報の中立性と客観性を保った運営を行っております。</p>
                            </div>
                        </section>

                        {/* Section 2: Disclaimer (Preserved as required for an Operator page) */}
                        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="bg-gray-50 border-b border-gray-100 px-8 py-5 flex items-center gap-4">
                                <span className="w-10 h-10 rounded-full bg-blue-100 text-[#003366] font-black flex items-center justify-center shrink-0">2</span>
                                <h2 className="text-xl md:text-2xl font-bold text-gray-800 tracking-tight">
                                    免責事項
                                </h2>
                            </div>
                            <div className="p-8 text-gray-600 leading-relaxed text-sm md:text-base">
                                <div className="bg-red-50 p-5 rounded-lg border border-red-100 mb-6">
                                    <ul className="list-none space-y-4 font-bold text-red-800 text-xs">
                                        <li>・記事内の情報は執筆・更新時点のものであり、予告なく変更される場合があります。</li>
                                        <li>・太陽光発電による削減効果等は設置環境により大きく変動します。絶対的な効果を保証するものではありません。</li>
                                        <li>・補助金制度は予算上限に達し次第、予告なく早期終了する場合があります。最新情報は公式機関等へご確認ください。</li>
                                    </ul>
                                    <p className="text-sm">当サイトの情報を利用したことによるいかなる損害・損失についても、一切の責任を負いかねます。最終的な導入判断は、ご自身の責任において行っていただきますようお願い申し上げます。</p>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Block 7: 申込直前FAQ */}
                    <ConstitutionFAQ />

                    <FinalCTA />

                    {/* Internal Links Navigation */}
                    <div className="border-t-2 border-gray-100 pt-10 mt-16 pb-12">
                        <h3 className="font-bold text-lg text-gray-700 mb-6 text-center">サイトマップ・確認事項</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Link to="/eligible" className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 text-center flex items-center justify-between group">
                                <div className="text-left w-full">
                                    <div className="text-xs text-orange-500 font-bold mb-1 tracking-wider uppercase">Check</div>
                                    <div className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors text-lg">事前準備・対象条件</div>
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
            </div>
        </PageTemplate>
    );
};
