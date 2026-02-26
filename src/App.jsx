import React from 'react';

function App() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50 font-sans text-gray-800">
            {/* Header */}
            <header className="bg-white shadow-sm py-4 px-6 sticky top-0 z-50 flex justify-between items-center border-b-[3px] border-[#003366]">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#003366] flex items-center justify-center text-white font-black rounded-sm text-lg tracking-widest shadow-inner">
                        TG
                    </div>
                    <span className="text-[#003366] font-black text-2xl tracking-tight">東京ガス</span>
                </div>
                <div>
                    <span className="text-xs text-[#003366] font-bold bg-blue-50 py-1.5 px-3 rounded-full border border-blue-100">公式パートナー</span>
                </div>
            </header>

            {/* Hero Section (FV) */}
            <main className="flex-grow">
                <section className="bg-[#003366] text-white py-16 px-6 sm:py-24 lg:px-8 text-center relative overflow-hidden">
                    {/* Abstract Background Elements */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
                        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-400 blur-3xl mix-blend-screen"></div>
                        <div className="absolute top-1/2 right-10 w-72 h-72 rounded-full bg-blue-300 blur-3xl mix-blend-screen"></div>
                    </div>

                    <div className="relative z-10 max-w-4xl mx-auto">
                        <div className="inline-block mb-6 border border-blue-300/30 bg-blue-900/50 backdrop-blur-sm rounded-full px-4 py-1.5 shadow-sm">
                            <h2 className="text-sm md:text-base font-bold tracking-widest text-blue-100 uppercase flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#FF6600] animate-pulse"></span>
                                電気代高騰・災害対策の決定版
                            </h2>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8 leading-[1.15]">
                            初期費用 <span className="text-[#FF6600] text-6xl md:text-8xl inline-block drop-shadow-md">0</span><span className="text-[#FF6600] text-3xl md:text-5xl ml-1">円</span> で始める<br />
                            <span className="mt-2 inline-block">太陽光 ＋ 蓄電池</span>
                        </h1>
                        <p className="mt-6 text-lg md:text-2xl text-blue-50 max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
                            長年地域のインフラを支え続けてきた東京ガスの圧倒的な安心感。<br className="hidden md:block" />
                            面倒な業者比較やしつこい営業電話は一切ありません。
                        </p>

                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-10 border border-white/20 shadow-2xl mb-8">
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/20 text-center">
                                <div className="py-4 sm:py-0">
                                    <div className="text-4xl md:text-5xl font-black text-[#FF6600] mb-2 drop-shadow-sm">無料</div>
                                    <div className="text-sm md:text-base font-bold text-blue-100 tracking-wide">初期費用・工事費</div>
                                </div>
                                <div className="py-4 sm:py-0">
                                    <div className="text-4xl md:text-5xl font-black text-[#FF6600] mb-2 drop-shadow-sm">保証</div>
                                    <div className="text-sm md:text-base font-bold text-blue-100 tracking-wide">充実の長期サポート</div>
                                </div>
                                <div className="py-4 sm:py-0">
                                    <div className="text-4xl md:text-5xl font-black text-[#FF6600] mb-2 drop-shadow-sm">0<span className="text-2xl">回</span></div>
                                    <div className="text-sm md:text-base font-bold text-blue-100 tracking-wide">しつこい営業電話</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Problem Section (PASONA - Problem/Agitation) */}
                <section className="py-20 md:py-32 px-6 bg-[#F8F9FA] text-center">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-[#003366] font-bold tracking-widest mb-4">PROBLEMS</div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#003366] mb-16 leading-tight">このような「不安」や「悩み」<br className="md:hidden" />はありませんか？</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                            {/* Card 1 */}
                            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                <div className="text-5xl mb-6 bg-red-50 w-20 h-20 flex items-center justify-center rounded-2xl">📈</div>
                                <h3 className="text-2xl font-black text-[#003366] mb-4 leading-snug">電気代が年々<br />高騰している...</h3>
                                <p className="text-gray-600 font-medium leading-relaxed">毎月の明細を見るのが怖い。これ以上節約するのは限界がある状況。</p>
                            </div>
                            {/* Card 2 */}
                            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                <div className="text-5xl mb-6 bg-yellow-50 w-20 h-20 flex items-center justify-center rounded-2xl">🌪️</div>
                                <h3 className="text-2xl font-black text-[#003366] mb-4 leading-snug">災害による停電が<br />とても心配...</h3>
                                <p className="text-gray-600 font-medium leading-relaxed">もしもの時、冷蔵庫の食材やスマホの充電、照明はどうなってしまうのか。</p>
                            </div>
                            {/* Card 3 */}
                            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                <div className="text-5xl mb-6 bg-gray-50 w-20 h-20 flex items-center justify-center rounded-2xl">📞</div>
                                <h3 className="text-2xl font-black text-[#003366] mb-4 leading-snug">相見積もりサイトに<br />疲弊している...</h3>
                                <p className="text-gray-600 font-medium leading-relaxed">安い業者を探そうとしたら、夜間や早朝問わず大量の営業電話がかかってきた。</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Solution Section */}
                <section className="py-20 md:py-32 px-6 bg-white text-center relative">
                    {/* Accent decoration */}
                    <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-transparent via-[#003366]/20 to-transparent"></div>

                    <div className="max-w-4xl mx-auto">
                        <div className="inline-block bg-blue-50 text-[#003366] px-6 py-2 rounded-full font-black text-sm md:text-base mb-8 shadow-sm">
                            そのお悩み、すべて東京ガスが解決します
                        </div>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#003366] mb-10 leading-tight">
                            圧倒的な安心感と実績で、<br />
                            賢く快適なエネルギー生活を。
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed font-medium">
                            東京ガスの「太陽光＋蓄電池パッケージ」なら、しつこい営業電話に悩まされることなく、初期費用0円からあなたに最適なご提案をいたします。
                        </p>

                        <div className="bg-gradient-to-br from-[#F8F9FA] to-white rounded-[2.5rem] p-10 md:p-16 border border-gray-100 shadow-2xl relative overflow-hidden">
                            <div className="absolute -right-10 -bottom-10 opacity-5">
                                <svg width="200" height="200" viewBox="0 0 24 24" fill="#003366"><path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13.5h-13L12 6.5z" /></svg>
                            </div>
                            <p className="text-2xl md:text-3xl font-black text-[#003366] mb-6 relative z-10">まずは、ご自宅の条件で<span className="text-[#FF6600]">どれくらいおトクになるか</span><br className="hidden md:block" />確認しませんか？</p>
                            <p className="text-gray-600 mb-8 font-medium text-lg relative z-10">お住まいの地域や屋根の形状によってシミュレーション結果は変わります。<br className="hidden md:block" />無理な勧誘は一切行いませんので、お気軽にお試しください。</p>

                            {/* Internal CTA Button (matches sticky footer) */}
                            <button className="relative z-10 w-full md:w-auto mx-auto bg-[#FF6600] hover:bg-[#E65C00] text-white font-black py-5 px-10 rounded-2xl text-xl shadow-[0_8px_30px_rgb(255,102,0,0.3)] transform transition hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-3 group">
                                <span>無料シミュレーションを始める</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform transition group-hover:translate-x-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </section>

                {/* Footer padding */}
                <div className="h-28 md:h-36 bg-white"></div>
            </main>

            {/* Sticky Footer CTA */}
            <div className="fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur border-t border-gray-200 p-4 md:p-5 drop-shadow-[0_-4px_20px_rgba(0,0,0,0.08)] z-50">
                <div className="max-w-2xl mx-auto flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6">
                    <div className="text-center md:text-left hidden md:block">
                        <div className="text-[#003366] font-black text-sm">東京ガス公式代理店</div>
                        <div className="text-gray-500 text-xs font-bold leading-tight">まずは無料シミュレーション</div>
                    </div>
                    <button className="w-full md:w-auto flex-grow bg-[#FF6600] hover:bg-[#E65C00] text-white font-black py-4 px-6 md:px-8 rounded-xl text-lg md:text-xl shadow-[0_8px_20px_rgb(255,102,0,0.25)] transform transition hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2 group">
                        <span>無料シミュレーションを始める</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform transition group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
                <p className="text-center text-[10px] md:text-xs text-gray-500 mt-2 font-bold tracking-wider">※面倒な業者比較やしつこい営業電話は一切ございません</p>
            </div>
        </div>
    );
}

export default App;
