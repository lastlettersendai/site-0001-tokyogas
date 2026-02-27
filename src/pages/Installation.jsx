import React from 'react';
import { SEOHead } from '../components/SEOHead.jsx';
import { Layout } from '../components/Layout.jsx';
import { Link } from 'react-router-dom';

export const Installation = () => {
    return (
        <Layout>
            <SEOHead
                title="太陽光パネル設置の工事トラブル・雨漏りリスクと東京ガスを選ぶ理由"
                description="「屋根に穴をあけたら雨漏りしない？」「悪徳業者に施工されたらどうしよう」という最大の不安。太陽光設置工事によくあるトラブルと、インフラ大手に頼むべき理由を解説します。"
                path="/installation"
            />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-20">
                <div className="text-center mb-16 border-b border-gray-200 pb-10">
                    <span className="inline-block bg-gray-200 text-gray-800 font-bold px-4 py-1.5 rounded-full text-sm mb-4 tracking-wider">施工品質について</span>
                    <h1 className="text-3xl md:text-5xl font-black text-[#003366] leading-tight mb-6">
                        工事は下請けに丸投げ？<br className="hidden md:inline" />雨漏りは大丈夫？
                    </h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                        太陽光パネルの設置について、「屋根に穴をあけるから雨漏りするのでは」と心配される方は非常に多いです。施工不良のリスクと、業者の選び方について解説します。
                    </p>
                </div>

                <div className="bg-white p-6 md:p-10 rounded-xl shadow-sm border border-gray-200 mb-16">
                    <h2 className="text-2xl font-bold text-gray-800 mb-8 border-b-2 border-red-200 pb-2">
                        実際に起きている「ずさんな工事」の事例
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-5 border border-red-100 bg-red-50 rounded-lg">
                            <h3 className="font-bold text-red-800 mb-2">💧 雨漏りの発生</h3>
                            <p className="text-sm text-gray-700">屋根材（瓦やスレートなど）の特性を無視したビス打ちや、防水処理コーキングの手抜きにより、数年後に天井から雨水が染み出してくるケースがあります。</p>
                        </div>
                        <div className="p-5 border border-red-100 bg-red-50 rounded-lg">
                            <h3 className="font-bold text-red-800 mb-2">💨 強風でパネルが飛散</h3>
                            <p className="text-sm text-gray-700">ボルトの締め付け不足や、メーカー規定の強度計算を無視した施工により、台風の際にパネルが剥がれ飛び、近隣の家屋を破壊する大事故に繋がります。</p>
                        </div>
                        <div className="p-5 border border-red-100 bg-red-50 rounded-lg">
                            <h3 className="font-bold text-red-800 mb-2">📞 業者が倒産し音信不通</h3>
                            <p className="text-sm text-gray-700">格安で施工したものの、数年後にトラブルが起きたときには「販売会社」も「下請け施工会社」も倒産しており、保証が紙切れになる悲劇が後を絶ちません。</p>
                        </div>
                    </div>
                </div>

                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-[#003366] mb-8 pb-2 border-b-2 border-blue-100">
                        「東京ガス」を窓口にすることの強み
                    </h2>
                    <p className="text-gray-600 mb-6">
                        もちろん、東京ガスの社員が自ら現場でトンカチを持って工事をするわけではありません。実際に作業を行うのは提携する施工会社です。<br />
                        しかし、「どこに工事を依頼するか」において、東京ガスという元請けの存在が圧倒的な安全性をもたらします。
                    </p>

                    <ul className="space-y-6">
                        <li className="bg-blue-50 p-6 rounded-lg border border-blue-100 flex gap-4">
                            <span className="text-3xl">🛡️</span>
                            <div>
                                <h3 className="font-bold text-[#003366] text-lg mb-2">厳しい施工基準と業者の選定</h3>
                                <p className="text-sm text-gray-700">東京ガスの看板を背負って工事をするため、提携する施工会社には厳格な施工品質が求められます。クレームが多発するような悪質な下請けはそもそも参入できません。</p>
                            </div>
                        </li>
                        <li className="bg-blue-50 p-6 rounded-lg border border-blue-100 flex gap-4">
                            <span className="text-3xl">🏛️</span>
                            <div>
                                <h3 className="font-bold text-[#003366] text-lg mb-2">「倒産しない」という最大の保証</h3>
                                <p className="text-sm text-gray-700">太陽光の保証は10年〜15年と長期間に及びます。万が一、施工した会社が倒産しても、契約の窓口である「東京ガス」が存在し続ける限り、アフターサポートが宙に浮くリスクを大幅に回避できます。</p>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Call to action */}
                <div className="text-center relative">
                    <h3 className="text-2xl font-black text-gray-800 mb-6">安さよりも「安心」を選ぶ方へ</h3>
                    <a href="https://home.tokyo-gas.co.jp/power/solar/index.html" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#003366] text-white font-bold text-lg md:text-xl py-4 px-10 rounded-full hover:bg-blue-800 transition-colors shadow-xl transform hover:-translate-y-1 w-full sm:w-auto">
                        東京ガスに無料相談をする
                    </a>
                </div>

                <div className="border-t-2 border-gray-100 pt-10 mt-16 text-center">
                    <Link to="/" className="inline-block bg-gray-100 text-gray-700 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow font-bold">
                        トップページへ戻る
                    </Link>
                </div>
            </div>
        </Layout>
    );
};
