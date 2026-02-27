import React from 'react';
import { CTALink } from './CTALink.jsx';

export const FinalCTA = () => {
    return (
        <section className="py-20 px-6 bg-gradient-to-b from-[#003366] to-[#001a33] text-white text-center rounded-t-3xl mt-16 shadow-2xl relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 opacity-10 rounded-full -mt-20 -mr-20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500 opacity-10 rounded-full -mb-32 -ml-32 blur-3xl"></div>

            <div className="max-w-3xl mx-auto relative z-10">
                <div className="inline-block bg-blue-900 border border-blue-700 text-blue-200 font-bold px-5 py-2 rounded-full mb-8 text-sm shadow-inner">
                    この記事の結論・まとめ
                </div>

                <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight tracking-tight">
                    ネットで悩むのは、<br className="md:hidden" />今日で終わりにしませんか？
                </h2>

                <div className="bg-white/10 p-6 md:p-8 rounded-2xl backdrop-blur-md border border-white/20 mb-10 text-left md:text-center text-blue-50 space-y-4 max-w-2xl mx-auto shadow-lg shadow-black/20">
                    <p className="flex items-start md:items-center md:justify-center gap-3">
                        <span className="text-orange-400 text-xl font-bold">1.</span>
                        <span>我が家の「確実な初期費用」は、図面を見せないと出ない。</span>
                    </p>
                    <p className="flex items-start md:items-center md:justify-center gap-3">
                        <span className="text-orange-400 text-xl font-bold">2.</span>
                        <span>解約リスクや雨漏りリスクは「大手の保証」で防ぐ。</span>
                    </p>
                    <p className="flex items-start md:items-center md:justify-center gap-3">
                        <span className="text-orange-400 text-xl font-bold">3.</span>
                        <span className="font-bold border-b border-orange-400 pb-1">補助金の予算が尽きる前に、まずは「無料診断」を済ませる。</span>
                    </p>
                </div>

                <p className="text-blue-200 mb-10 text-lg leading-relaxed font-medium">
                    導入できるかどうかも、いくらかかるかどうかも、すべては図面次第。<br className="hidden md:block" />
                    東京ガスの無料オンライン診断を受けて、まずは「我が家の現実的な数字」を手に入れてください。
                </p>

                <div className="relative inline-block w-full sm:w-auto mt-4 group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                    <CTALink href="https://home.tokyo-gas.co.jp/power/solar/index.html" eventName="generate_lead" className="relative inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-orange-600 text-white font-black text-xl md:text-2xl py-6 px-12 rounded-full hover:from-orange-400 hover:to-orange-500 transition-all shadow-2xl transform hover:-translate-y-1 w-full sm:w-auto border border-orange-400/50">
                        無料でシミュレーション・見積もりをする
                    </CTALink>
                </div>

                <p className="mt-6 text-sm text-blue-300 font-medium">※公式サイトへ移動します。相談後、導入を見送ることも可能です。</p>
            </div>
        </section>
    );
};
