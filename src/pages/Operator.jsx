import React from 'react';
import { PageTemplate } from '../components/PageTemplate.jsx';
import { Link } from 'react-router-dom';
import { StructuredData } from '../components/StructuredData.jsx';
import { Icon } from '../components/Icon.jsx';

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
                {/* Hero / Header Section */}
                <div className="text-center mb-16 border-b border-gray-100 pb-12">
                    <span className="inline-block bg-gray-100 text-gray-600 font-bold px-4 py-1.5 rounded-full text-xs mb-4 tracking-widest uppercase">About Us</span>
                    <h1 className="text-3xl md:text-5xl font-black text-[#003366] leading-tight mb-8">
                        運営者情報・免責事項
                    </h1>

                    <div className="w-full h-48 md:h-72 lg:h-[400px] overflow-hidden rounded-3xl shadow-lg relative border-4 border-white ring-1 ring-gray-200">
                        <img
                            src="/images/operator_building.png"
                            alt="信頼と透明性を象徴するクリーンなオフィスビルのイメージ"
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#003366] via-transparent to-transparent opacity-60"></div>
                        <div className="absolute bottom-6 left-6 text-white text-left">
                            <p className="font-bold text-lg md:text-xl drop-shadow-md tracking-wider">東京ガス 太陽光・蓄電池相談所</p>
                            <p className="text-xs md:text-sm text-blue-100 drop-shadow flex items-center gap-2 mt-1">
                                <span className="inline-block w-2 h-2 rounded-full bg-green-400"></span>
                                情報の透明性と正確性を第一に運営しています
                            </p>
                        </div>
                    </div>
                </div>

                <div className="space-y-12 max-w-3xl mx-auto">
                    {/* Section 1: PR Statement */}
                    <section className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="bg-gray-50 border-b border-gray-100 px-8 py-5 flex items-center gap-4">
                            <span className="w-10 h-10 rounded-full bg-blue-100 text-[#003366] font-black flex items-center justify-center shrink-0">1</span>
                            <h2 className="text-xl md:text-2xl font-bold text-gray-800 tracking-tight">
                                サイト運営方針・PR表記について
                            </h2>
                        </div>
                        <div className="p-8 text-gray-600 leading-relaxed text-sm md:text-base space-y-5">
                            <p>当サイト「東京ガス 太陽光・蓄電池相談所」は、太陽光発電および蓄電池システムの導入を検討されている方へ向けた正確な情報提供を目的としています。</p>
                            <div className="bg-blue-50/50 p-5 rounded-lg border-l-4 border-blue-400">
                                <p className="font-bold text-gray-800 mb-2">アフィリエイトプログラムに関する表記</p>
                                <p>当サイトはアフィリエイトプログラムにより商品等をご紹介致しております。記事内の一部リンクにはアフィリエイト広告（<strong className="text-[#003366]">PR</strong>）が含まれており、当サイト経由での無料見積もり等のお申し込みに対して紹介料が発生する場合があります。</p>
                            </div>
                            <p>ただし、情報の中立性と客観性を保つため、<strong className="text-gray-800 border-b border-gray-300">過度なメリットの強調や、確定していない補助金金額の保証、他社商材との根拠のない比較・ランキング付けは一切行いません。</strong>公正な視点で、読者にとって有益な情報のみを厳選してお届けします。</p>
                        </div>
                    </section>

                    {/* Section 2: Disclaimer */}
                    <section className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="bg-gray-50 border-b border-gray-100 px-8 py-5 flex items-center gap-4">
                            <span className="w-10 h-10 rounded-full bg-blue-100 text-[#003366] font-black flex items-center justify-center shrink-0">2</span>
                            <h2 className="text-xl md:text-2xl font-bold text-gray-800 tracking-tight">
                                情報の更新と免責事項
                            </h2>
                        </div>
                        <div className="p-8 text-gray-600 leading-relaxed text-sm md:text-base">
                            <div className="bg-red-50 p-5 rounded-lg border border-red-100 mb-6">
                                <h3 className="font-black text-red-700 mb-3 flex items-center gap-2">
                                    <Icon name="alert" className="text-red-600 size-6" /> 【最重要】効果や補助金に関する免責事項
                                </h3>
                                <ul className="list-none space-y-4">
                                    <li className="flex items-start gap-3">
                                        <span className="text-red-400 mt-0.5 font-bold">・</span>
                                        <span>記事内の情報は執筆・更新時点（各ページに記載）のものであり、予告なく変更される場合があります。</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-red-400 mt-0.5 font-bold">・</span>
                                        <span>太陽光発電による光熱費の削減効果や、蓄電池による停電時の動作可能時間は、設置環境（屋根の向き、角度、日照条件）、生活スタイル、ご契約の電力プランにより大きく変動します。サイト内のシミュレーション例はあくまで目安であり、<strong className="text-red-800">絶対的な効果を保証するものではありません。</strong></span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-red-400 mt-0.5 font-bold">・</span>
                                        <span className="font-bold text-gray-800 border-b border-red-200">国や自治体（東京都など）の補助金制度は、予算の上限に達し次第、期限前でも予告なく早期終了する場合があります。最新の申請要件や予算の残枠については、必ず各公式機関の最新発表、または無料相談時に直接担当者へご確認ください。</span>
                                    </li>
                                </ul>
                            </div>
                            <p className="text-sm">当サイトの情報を利用したことによるいかなる損害・損失についても、当サイト管理人は一切の責任を負いかねます。最終的な導入判断は、ご自身の判断と責任において行っていただきますようお願い申し上げます。</p>
                        </div>
                    </section>

                    {/* Section 3: Contact */}
                    <section className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="bg-gray-50 border-b border-gray-100 px-8 py-5 flex items-center gap-4">
                            <span className="w-10 h-10 rounded-full bg-blue-100 text-[#003366] font-black flex items-center justify-center shrink-0">3</span>
                            <h2 className="text-xl md:text-2xl font-bold text-gray-800 tracking-tight">
                                お問い合わせ
                            </h2>
                        </div>
                        <div className="p-8 text-center text-gray-600 text-sm md:text-base">
                            <p className="mb-6 leading-relaxed">
                                商品の詳細な仕様や、ご自宅が設置対象になるかどうかの確認、正式な見積もり依頼につきましては、リンク先の<strong className="text-[#003366]">東京ガス公式サイトより直接お問い合わせ</strong>いただきますようお願いいたします。<br />
                                （当サイト管理人は販売元のスタッフではないため、個別のご家庭の図面に関するご相談や、見積価格の交渉等にはお答えできません。）
                            </p>
                            <a href="https://home.tokyo-gas.co.jp/power/solar/index.html" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#003366] text-white font-bold py-4 px-10 rounded-full hover:bg-blue-800 transition-colors shadow-lg transform hover:-translate-y-1">
                                東京ガス公式サイトへ進む
                            </a>
                        </div>
                    </section>
                </div>

                <div className="mt-20 pt-10 border-t border-gray-200 flex flex-col sm:flex-row gap-6 justify-between items-center text-center sm:text-left">
                    <Link to="/" className="text-gray-500 font-bold hover:text-[#003366] transition-colors flex items-center gap-2 group">
                        <span className="text-xl group-hover:-translate-x-1 transition-transform">&larr;</span> トップページへ戻る
                    </Link>
                    <Link to="/eligible" className="text-[#003366] font-bold hover:text-blue-800 transition-colors flex items-center gap-2 bg-blue-50 px-6 py-3 rounded-full group">
                        事前準備・対象条件をチェックする <span className="text-xl group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </Link>
                </div>
            </div>
        </PageTemplate>
    );
};
