import React from 'react';
import { CTALink } from './CTALink.jsx';

export const FinalCTA = () => {
    return (
        <section className="py-20 px-6 bg-gradient-to-b from-[#003366] to-[#001a33] text-white text-center rounded-t-3xl mt-16 shadow-2xl relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 opacity-10 rounded-full -mt-20 -mr-20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500 opacity-10 rounded-full -mb-32 -ml-32 blur-3xl"></div>

            <div className="max-w-3xl mx-auto relative z-10">
                <div className="inline-block bg-blue-900 border border-blue-700 text-blue-200 font-bold px-5 py-2 rounded-full mb-8 text-sm shadow-inner uppercase tracking-widest">
                    Conclusion & Decision
                </div>

                <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight tracking-tight">
                    ネットで悩むのは、<br className="md:hidden" />今日で終わりにしませんか？
                </h2>

                {/* Block 8: Decision Logic (決断ロジック5行) */}
                <div className="bg-white/10 p-6 md:p-8 rounded-2xl backdrop-blur-md border border-white/20 mb-10 text-left md:text-center text-blue-50 max-w-2xl mx-auto shadow-lg shadow-black/20">
                    <p className="text-lg font-bold leading-relaxed">
                        導入できるか、いくらかかるか。すべては「図面の正確な判定」から始まります。<br />
                        今この瞬間も高い電気代を払い続けるより、まずは東京ガスの無料診断で我が家の「現実的な数字」を手に入れるのが、最も賢明でリスクのない第一歩です。
                    </p>
                </div>

                {/* Primary CTA (1つ限定) */}
                <div className="relative inline-block w-full sm:w-auto group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                    <CTALink href="https://home.tokyo-gas.co.jp/power/solar/index.html" eventName="generate_lead" className="relative inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-orange-600 text-white font-black text-xl md:text-2xl py-6 px-12 rounded-full hover:from-orange-400 hover:to-orange-500 transition-all shadow-2xl transform hover:-translate-y-1 w-full sm:w-auto border border-orange-400/50">
                        無料でシミュレーション・見積もりをする
                    </CTALink>
                </div>

                {/* Sub Links (最大2つまで) */}
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
                    <a href="/eligible" className="text-blue-200 hover:text-white font-bold border-b border-blue-400/50 hover:border-white transition-all text-sm flex items-center gap-1">
                        <span>我が家が対象か再確認する</span>
                    </a>
                    <a href="/operator" className="text-blue-200 hover:text-white font-bold border-b border-blue-400/50 hover:border-white transition-all text-sm flex items-center gap-1">
                        <span>運営会社・サポート体制について</span>
                    </a>
                </div>

                <p className="mt-8 text-xs text-blue-300 font-bold opacity-70">
                    ※公式サイトへのリンクです。診断後に強引な勧誘をすることはありません。
                </p>
            </div>
        </section>
    );
};
