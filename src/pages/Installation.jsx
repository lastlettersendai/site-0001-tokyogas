import React from 'react';
import { PageTemplate } from '../components/PageTemplate.jsx';
import { Link } from 'react-router-dom';
import { FinalCTA } from '../components/FinalCTA.jsx';
import { Icon } from '../components/Icon.jsx';
import { ConstitutionFAQ } from '../components/ConstitutionFAQ.jsx';

export const Installation = () => {
    return (
        <PageTemplate
            title="太陽光パネル設置の工事トラブル・雨漏りリスクと東京ガスを選ぶ理由"
            description="「屋根に穴をあけたら雨漏りしない？」「悪徳業者に施工されたらどうしよう」という最大の不安。太陽光設置工事によくあるトラブルと、インフラ大手に頼むべき理由を解説します。"
            path="/installation"
        >

            <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-20">
                {/* Block 1: 冒頭3行 (Who/What) */}
                <div className="mb-8">
                    <span className="inline-block bg-blue-100 text-blue-800 font-bold px-4 py-1.5 rounded-full text-xs mb-4 border border-blue-300 tracking-wider uppercase">INSTALLATION QUALITY</span>
                    <p className="text-gray-600 text-sm font-bold leading-relaxed">
                        「どこが工事しても同じ」は大間違いです。<br />
                        屋根に穴をあけるという重大な作業において、誰が責任を負うのか。<br />
                        後悔しないための「施工の真実」をここに記します。
                    </p>
                </div>

                {/* Block 2: 結論1行 */}
                <h1 className="text-3xl md:text-5xl font-black text-[#003366] leading-tight mb-8">
                    「元請け」が逃げない大手を選ぶのが正解です
                </h1>

                {/* Block 3: 前提条件 (3行以内) */}
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 inline-block w-full max-w-2xl text-left mb-12">
                    <p className="text-xs font-black text-blue-600 mb-2 tracking-widest uppercase">Prerequisite for Safety</p>
                    <ul className="text-sm font-bold text-slate-700 space-y-1">
                        <li className="flex items-center gap-2"><Icon name="check" className="size-4 text-blue-600" /> 屋根の寿命（20〜30年）を全うさせたい</li>
                        <li className="flex items-center gap-2"><Icon name="check" className="size-4 text-blue-600" /> 万が一の雨漏り時に、電話一本で駆けつけてほしい</li>
                        <li className="flex items-center gap-2"><Icon name="check" className="size-4 text-blue-600" /> 訪問販売などの「安さ重視」の施工に不安がある</li>
                    </ul>
                </div>

                <div className="text-center mb-16 border-b border-gray-100 pb-12">
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
                        太陽光パネルの設置について、「屋根に穴をあけるから雨漏りするのでは」と心配される方は非常に多いです。施工不良のリスクと、業者の選び方について解説します。
                    </p>
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

                {/* Block 4: 誤解の解体 (Misconception) */}
                <div className="bg-red-50 p-8 rounded-3xl border border-red-100 mb-20">
                    <div className="flex items-center gap-3 mb-4 text-red-600">
                        <Icon name="x" className="size-8" />
                        <h2 className="text-xl font-black">よくある誤解：「自社施工の会社が一番安心」</h2>
                    </div>
                    <p className="font-bold text-red-800 mb-4 leading-relaxed">
                        「中間マージンがないから安い」という言葉の裏には、<span className="underline decoration-red-500 decoration-2">会社が倒産したら保証も終わる</span>という致命的なリスクが隠れています。
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                        太陽光発電は15年以上の長期運用が前提です。自社施工を謳う小さな会社は、経営が悪化すれば保証義務を果たすことができません。インフラ大手の東京ガスが元請けであることは、「15年後も確実に会社が存在している」という、何物にも代えがたい保証です。
                    </p>
                </div>

                {/* Block 5: 判断基準 (Criteria) */}
                <div className="mb-20">
                    <h2 className="text-2xl font-black text-[#003366] mb-8 border-l-4 border-blue-600 pl-4">良い施工業者を見分ける「3つの基準」</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-2xl border border-slate-200">
                            <h3 className="font-bold mb-4">チェックすべきポイント</h3>
                            <ul className="text-sm space-y-2 text-slate-600">
                                <li>・屋根の「現地調査」に1時間以上かけているか</li>
                                <li>・雨漏り保証が「メーカー保証」とは別に存在するか</li>
                                <li>・近隣住民への配慮（挨拶・清掃）が徹底されているか</li>
                            </ul>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
                            <h3 className="font-bold mb-4 text-blue-900">東京ガスならどうなる？</h3>
                            <ul className="text-sm space-y-2 text-blue-800 italic">
                                <li>・提携店への抜き打ち検査と厳格な施工マニュアルあり</li>
                                <li>・万が一の不具合時も、東京ガスが責任を持って対応</li>
                                <li>・地域密着のネットワークで迅速な駆けつけが可能</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Split Layout: Workers Image & Warranty Cards */}
                <div className="bg-[#001a33] rounded-3xl overflow-hidden shadow-2xl mb-20">
                    <div className="flex flex-col lg:flex-row">
                        <div className="w-full lg:w-5/12 relative">
                            <img
                                src="/images/installation_workers.webp"
                                alt="信頼できるプロの施工スタッフ"
                                className="w-full h-full object-cover min-h-[400px]"
                                loading="lazy"
                            />
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#001a33] to-transparent h-32"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl text-white">
                                    <p className="font-bold flex items-center gap-2">
                                        <Icon name="check" className="text-orange-400 size-5" /> 徹底した安全管理
                                    </p>
                                    <p className="font-bold flex items-center gap-2 mt-1">
                                        <Icon name="check" className="text-orange-400 size-5" /> 熟練の施工技術
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

                {/* Block 6: 実例 (Case Study) - Format Fixed: Premise -> Conclusion -> Reason -> Next Q */}
                <div className="mb-20">
                    <h2 className="text-2xl font-black text-center text-[#003366] mb-12">
                        施工品質シミュレーション
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                            <p className="text-xs font-black text-blue-600 mb-1 uppercase tracking-tighter">1. 前提</p>
                            <p className="font-bold text-slate-800 mb-4">築18年・瓦屋根・他社で「屋根の状態不良」と断られたケース</p>
                            <div className="bg-blue-50 p-4 rounded-xl mb-4">
                                <p className="text-xs font-black text-blue-600 mb-1 uppercase tracking-tighter">2. 結論</p>
                                <p className="text-lg font-black text-blue-900">適切な補強工事とセットで安全に設置完了</p>
                            </div>
                            <p className="text-xs font-black text-blue-600 mb-1 uppercase tracking-tighter">3. 理由</p>
                            <p className="text-sm text-slate-600 leading-relaxed mb-6">
                                東京ガスの調査チームが構造から再計算。無理な設置を勧めるのではなく、現状に合わせた最適な工法を提案し、長期保証を付帯させました。
                            </p>
                            <div className="pt-4 border-t border-slate-100">
                                <p className="text-xs font-black text-orange-600 mb-1 uppercase tracking-tighter">4. 次の質問</p>
                                <Link to="/faq" className="text-sm font-bold text-slate-800 hover:text-blue-600 flex items-center gap-2">
                                    「自分の家が設置できるか今すぐ聞きたい」<Icon name="arrowRight" className="size-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Block 7: 申込直前FAQ */}
                <ConstitutionFAQ />
            </div>
        </PageTemplate>
    );
};
