import React from 'react';
import { PageTemplate } from '../components/PageTemplate.jsx';
import { Link } from 'react-router-dom';
import { FinalCTA } from '../components/FinalCTA.jsx';
import { Icon } from '../components/Icon.jsx';

export const Installation = () => {
    return (
        <PageTemplate
            title="太陽光パネル設置の工事トラブル・雨漏りリスクと東京ガスを選ぶ理由"
            description="「屋根に穴をあけたら雨漏りしない？」「悪徳業者に施工されたらどうしよう」という最大の不安。太陽光設置工事によくあるトラブルと、インフラ大手に頼むべき理由を解説します。"
            path="/installation"
        >

            <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-20">
                {/* Intro & Hero Area */}
                <div className="text-center mb-16 border-b border-gray-100 pb-12">
                    <span className="inline-block bg-orange-100 text-orange-800 font-bold px-4 py-1.5 rounded-full text-sm mb-4 tracking-wider uppercase">Installation Quality</span>
                    <h1 className="text-3xl md:text-5xl font-black text-[#003366] leading-tight mb-6">
                        工事は下請けに丸投げ？<br className="hidden md:inline" />雨漏りは大丈夫？
                    </h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
                        太陽光パネルの設置について、「屋根に穴をあけるから雨漏りするのでは」と心配される方は非常に多いです。施工不良のリスクと、業者の選び方について解説します。
                    </p>

                    {/* Timeline Flow */}
                    <div className="max-w-3xl mx-auto bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-gray-200 text-left">
                        <h3 className="font-bold text-gray-800 mb-6 text-center text-lg">一般的な導入までの流れ</h3>
                        <div className="relative border-l-4 border-blue-200 ml-4 md:ml-6 space-y-6 pb-4">
                            <div className="relative pl-6">
                                <span className="absolute -left-[30px] top-1 w-11 h-11 bg-white border-4 border-[#003366] rounded-full flex items-center justify-center font-bold text-[#003366]">1</span>
                                <h4 className="font-bold text-gray-800 text-lg">無料相談・現地調査</h4>
                                <p className="text-sm text-gray-600 mt-1">プロが屋根の形状や設備の劣化状況を詳細に確認します。</p>
                            </div>
                            <div className="relative pl-6">
                                <span className="absolute -left-[30px] top-1 w-11 h-11 bg-white border-4 border-[#003366] rounded-full flex items-center justify-center font-bold text-[#003366]">2</span>
                                <h4 className="font-bold text-gray-800 text-lg">正式見積もり・ご契約</h4>
                                <p className="text-sm text-gray-600 mt-1">調査結果に基づき正確な見積もりを提示。納得の上で契約となります。</p>
                            </div>
                            <div className="relative pl-6">
                                <span className="absolute -left-[30px] top-1 w-11 h-11 bg-white border-4 border-orange-500 rounded-full flex items-center justify-center font-bold text-orange-500">3</span>
                                <div className="bg-orange-50 p-4 rounded-lg border border-orange-100 mt-1">
                                    <h4 className="font-bold text-orange-800 text-lg flex items-center gap-2">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path></svg>
                                        施工（約1〜3日）
                                    </h4>
                                    <p className="text-sm text-gray-700 mt-1">ここで業者の「品質」が問われます。近隣への挨拶や丁寧な施工が必須です。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Risk Cards */}
                <div className="mb-20">
                    <div className="text-center mb-10">
                        <span className="text-red-500 font-bold tracking-widest text-sm mb-2 block uppercase">Danger</span>
                        <h2 className="text-2xl md:text-3xl font-black text-gray-800 mb-4">実際に起きている<br className="md:hidden" />「ずさんな工事」の事例</h2>
                        <p className="text-gray-600">安さだけで業者を選ぶと、後から数百万円規模の修繕費がかかる恐れがあります。</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white border-t-4 border-red-500 p-6 rounded-b-xl shadow-[0_4px_20px_rgb(0,0,0,0.05)] hover:-translate-y-1 transition-transform">
                            <div className="mb-4 flex items-center justify-center"><Icon name="droplet" className="text-blue-500 size-8" /></div>
                            <h3 className="font-bold text-gray-800 text-lg mb-3">雨漏りの発生</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">屋根材（瓦やスレートなど）の特性を無視したビス打ちや、防水処理の手抜きにより、数年後に天井から雨水が染み出してくるケースがあります。</p>
                        </div>
                        <div className="bg-white border-t-4 border-red-500 p-6 rounded-b-xl shadow-[0_4px_20px_rgb(0,0,0,0.05)] hover:-translate-y-1 transition-transform">
                            <div className="mb-4 flex items-center justify-center"><Icon name="wind" className="text-gray-500 size-8" /></div>
                            <h3 className="font-bold text-gray-800 text-lg mb-3">強風でパネルが飛散</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">ボルトの締め付け不足や、メーカー規定の強度計算を無視した施工により、台風の際にパネルが剥がれ飛び、近隣家屋を破壊する大事故に繋がります。</p>
                        </div>
                        <div className="bg-white border-t-4 border-red-500 p-6 rounded-b-xl shadow-[0_4px_20px_rgb(0,0,0,0.05)] hover:-translate-y-1 transition-transform">
                            <div className="mb-4 flex items-center justify-center"><Icon name="phoneOff" className="text-red-500 size-8" /></div>
                            <h3 className="font-bold text-gray-800 text-lg mb-3">業者が倒産し音信不通</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">格安で施工したものの、トラブルが起きたときには「販売会社」も「下請け施工会社」も倒産しており、保証が紙切れになる悲劇が後を絶ちません。</p>
                        </div>
                    </div>
                </div>

                {/* Split Layout: Workers Image & Warranty Cards */}
                <div className="bg-[#001a33] rounded-3xl overflow-hidden shadow-2xl mb-20">
                    <div className="flex flex-col lg:flex-row">
                        <div className="w-full lg:w-5/12 relative">
                            <img
                                src="/images/installation_workers.png"
                                alt="信頼できるプロの施工スタッフ"
                                className="w-full h-full object-cover min-h-[400px]"
                                loading="lazy"
                            />
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#001a33] to-transparent h-32"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl text-white">
                                    <p className="font-bold flex items-center gap-2">
                                        <span className="text-orange-400">✓</span> 徹底した安全管理
                                    </p>
                                    <p className="font-bold flex items-center gap-2 mt-1">
                                        <span className="text-orange-400">✓</span> 熟練の施工技術
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-7/12 p-8 md:p-12 text-white">
                            <h2 className="text-2xl md:text-3xl font-black mb-6">
                                「東京ガス」を窓口にすることの<br className="hidden md:block" />
                                圧倒的な強み
                            </h2>
                            <p className="text-gray-300 mb-8 leading-relaxed">
                                東京ガスの社員が現場でトンカチを持つわけではありません。作業を行うのは提携する施工会社です。しかし、「どこに依頼するか」において、東京ガスという元請けの存在が絶対的な安全性をもたらします。
                            </p>

                            <div className="space-y-4">
                                <div className="bg-white/5 border border-white/10 p-5 rounded-xl hover:bg-white/10 transition-colors">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-blue-500/20 w-12 h-12 rounded-lg flex items-center justify-center shrink-0"><Icon name="shield" className="text-blue-300 size-6" /></div>
                                        <div>
                                            <h3 className="font-bold text-lg mb-1">厳しい施工基準と業者の選定</h3>
                                            <p className="text-sm text-gray-400">東京ガスの看板を背負うため、提携会社には厳格な施工品質が求められます。クレームが多発する悪質な下請けは参入できません。</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white/5 border border-white/10 p-5 rounded-xl hover:bg-white/10 transition-colors">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-orange-500/20 w-12 h-12 rounded-lg flex items-center justify-center shrink-0"><Icon name="building" className="text-orange-300 size-6" /></div>
                                        <div>
                                            <h3 className="font-bold text-lg mb-1">「倒産しない」最大の保証</h3>
                                            <p className="text-sm text-gray-400">太陽光の保証は10年〜15年と長期です。万が一施工会社が倒産しても、窓口の「東京ガス」が存在する限りアフターサポートは継続されます。</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Comparison Table */}
                <div className="mb-20">
                    <div className="text-center mb-10">
                        <h3 className="text-2xl font-black text-gray-800 mb-4">安さよりも「安心」を選ぶ方へ</h3>
                        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
                            「格安」をアピールして訪問してくる業者の中には、施工を孫請けに丸投げし十分な防水処理を行わないケースがあります。
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                        <div className="flex flex-col md:flex-row border-b border-gray-100 bg-gray-50">
                            <div className="p-4 md:p-6 w-full md:w-1/3 flex items-center font-bold text-gray-500 border-r border-gray-100">比較ポイント</div>
                            <div className="p-4 md:p-6 w-full md:w-1/3 text-center bg-red-50 border-r border-gray-100 flex flex-col justify-center">
                                <span className="text-xs font-bold text-red-500 mb-1">Risk</span>
                                <span className="font-black text-gray-800 text-lg">名もなき訪問販売業者</span>
                            </div>
                            <div className="p-4 md:p-6 w-full md:w-1/3 text-center bg-[#003366] text-white flex flex-col justify-center">
                                <span className="text-xs font-bold text-blue-300 mb-1">Safe</span>
                                <span className="font-black text-lg">東京ガス（大手インフラ）</span>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row border-b border-gray-100">
                            <div className="p-4 md:p-6 w-full md:w-1/3 font-bold text-gray-700 bg-gray-50 md:bg-white border-r border-gray-100 flex items-center">施工の品質担保</div>
                            <div className="p-4 md:p-6 w-full md:w-1/3 text-center text-gray-600 border-r border-gray-100">下請け丸投げでバラツキあり</div>
                            <div className="p-4 md:p-6 w-full md:w-1/3 text-center text-blue-800 font-bold bg-blue-50">独自の厳格な施工基準あり</div>
                        </div>

                        <div className="flex flex-col md:flex-row border-b border-gray-100">
                            <div className="p-4 md:p-6 w-full md:w-1/3 font-bold text-gray-700 bg-gray-50 md:bg-white border-r border-gray-100 flex items-center">倒産（逃亡）リスク</div>
                            <div className="p-4 md:p-6 w-full md:w-1/3 text-center text-red-600 font-bold border-r border-gray-100 bg-red-50/50">数年で計画倒産するリスク大</div>
                            <div className="p-4 md:p-6 w-full md:w-1/3 text-center text-blue-800 font-bold bg-blue-50">圧倒的な経営基盤で安心</div>
                        </div>

                        <div className="flex flex-col md:flex-row">
                            <div className="p-4 md:p-6 w-full md:w-1/3 font-bold text-gray-700 bg-gray-50 md:bg-white border-r border-gray-100 flex items-center">アフターフォロー</div>
                            <div className="p-4 md:p-6 w-full md:w-1/3 text-center text-gray-600 border-r border-gray-100">トラブル時に連絡がつかない</div>
                            <div className="p-4 md:p-6 w-full md:w-1/3 text-center text-blue-800 font-bold bg-blue-50">専用窓口で長期にわたり対応</div>
                        </div>
                    </div>
                </div>

            </div>

            <FinalCTA />
        </PageTemplate>
    );
};
