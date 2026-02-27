import React from 'react';
import { SEOHead } from '../components/SEOHead.jsx';
import { Layout } from '../components/Layout.jsx';
import { Link } from 'react-router-dom';
import { StructuredData } from '../components/StructuredData.jsx';

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
        <Layout>
            <SEOHead
                title="運営者情報・免責事項・プライバシーポリシー | 東京ガス 太陽光・蓄電池相談所"
                description="当サイトの運営方針、広告掲載（PR）に関する表記、免責事項、およびプライバシーポリシーについて記載しています。"
                path="/operator"
            />
            <StructuredData data={orgData} />
            <StructuredData data={breadcrumbData} />

            <div className="max-w-3xl mx-auto px-6 py-12 md:py-20">
                <h1 className="text-3xl md:text-4xl font-black text-[#003366] mb-10 pb-4 border-b-4 border-blue-100">運営者情報・免責事項</h1>

                <section className="mb-12">
                    <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#003366] text-white flex items-center justify-center text-sm">1</span>
                        サイト運営方針・PR表記について
                    </h2>
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-gray-600 leading-relaxed text-sm md:text-base space-y-4">
                        <p>当サイト「東京ガス 太陽光・蓄電池相談所」は、太陽光発電および蓄電池システムの導入を検討されている方へ向けた情報提供を目的としています。</p>
                        <p>当サイトはアフィリエイトプログラムにより商品等をご紹介致しております。記事内の一部リンクにはアフィリエイト広告（PR）が含まれており、当サイト経由での無料見積もり等のお申し込みに対して紹介料が発生する場合があります。</p>
                        <p>ただし、情報の中立性と客観性を保つため、過度なメリットの強調や、確定していない補助金金額の保証、他社商材との根拠のない比較・ランキング付けは一切行いません。</p>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#003366] text-white flex items-center justify-center text-sm">2</span>
                        情報の更新と免責事項
                    </h2>
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-gray-600 leading-relaxed text-sm md:text-base space-y-4">
                        <p className="font-bold text-red-600 bg-red-50 p-3 rounded">【重要】効果や補助金に関する免責事項</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>記事内の情報は執筆・更新時点（各ページ上部に記載）のものであり、予告なく変更される場合があります。</li>
                            <li>太陽光発電による光熱費の削減効果や、蓄電池による停電時の動作可能時間は、設置環境（屋根の向き、角度、日照条件）、生活スタイル、ご契約の電力プランにより大きく変動します。サイト内のシミュレーション例はあくまで目安であり、効果を保証するものではありません。</li>
                            <li><strong>国や自治体（東京都など）の補助金制度は、予算の上限に達し次第、期限前でも予告なく早期終了する場合があります。最新の申請要件や予算の残枠については、必ず「クール・ネット東京」等の各公式機関の最新発表、または無料相談時に直接担当者へご確認ください。</strong></li>
                            <li>当サイトの情報を利用したことによるいかなる損害・損失についても、当サイト管理人は一切の責任を負いかねます。</li>
                        </ul>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#003366] text-white flex items-center justify-center text-sm">3</span>
                        お問い合わせ
                    </h2>
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-600 text-sm md:text-base">
                        <p className="mb-4">商品の詳細な仕様や、ご自宅が設置対象になるかどうかの確認、正式な見積もり依頼につきましては、リンク先の<strong className="text-[#003366]">東京ガス公式サイトより直接お問い合わせ</strong>いただきますようお願いいたします。</p>
                        <div className="text-center mt-6">
                            <a href="https://home.tokyo-gas.co.jp/power/solar/index.html" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#003366] text-white font-bold py-3 px-8 rounded-full hover:bg-blue-800 transition-colors shadow-md">
                                公式サイトへ進む
                            </a>
                        </div>
                    </div>
                </section>

                <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row gap-4 justify-between">
                    <Link to="/" className="text-[#003366] font-bold hover:underline flex items-center gap-1">
                        &larr; トップページへ戻る
                    </Link>
                    <Link to="/eligible" className="text-[#003366] font-bold hover:underline flex items-center gap-1">
                        対象条件をチェックする &rarr;
                    </Link>
                </div>
            </div>
        </Layout>
    );
};
