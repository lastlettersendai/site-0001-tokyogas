import React from 'react';
import { Link } from 'react-router-dom';

export const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50 font-sans text-gray-800">
            {/* Header */}
            <header className="bg-white shadow-sm sticky top-0 z-50 border-b-[3px] border-[#003366]">
                {/* 司令官の必須指示: PR表記と更新日 */}
                <div className="bg-gray-100 text-center py-1.5 border-b border-gray-200">
                    <p className="text-[10px] md:text-xs text-gray-500 font-bold tracking-wide">
                        <span className="bg-gray-200 px-2 py-0.5 rounded text-gray-600 mr-2">PR</span>
                        アフィリエイト広告を利用しています | 2026年2月26日時点の情報です
                    </p>
                </div>

                <div className="py-3 px-4 md:px-6 flex justify-between items-center max-w-6xl mx-auto w-full">
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 bg-[#003366] flex items-center justify-center text-white font-black rounded-sm text-lg tracking-widest shadow-inner group-hover:bg-[#004080] transition-colors">
                            TG
                        </div>
                        <span className="text-[#003366] font-black text-xl md:text-2xl tracking-tight hidden sm:inline-block">太陽光・蓄電池相談所</span>
                    </Link>
                    <div>
                        <span className="text-[10px] md:text-xs text-[#003366] font-bold bg-blue-50 py-1 px-2 md:py-1.5 md:px-3 rounded-full border border-blue-100">東京ガス公式パートナー</span>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow">
                {children}
            </main>

            {/* Global Footer */}
            <footer className="bg-[#003366] text-white py-12 px-6 mt-20">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-8 bg-white flex items-center justify-center text-[#003366] font-black rounded-sm text-sm tracking-widest">
                                TG
                            </div>
                            <span className="font-black text-xl tracking-tight">太陽光・蓄電池相談所</span>
                        </div>
                        <p className="text-sm text-blue-200 mb-4 leading-relaxed">
                            当サイトは、東京ガスの「太陽光・蓄電池パッケージ」に関するメリットや注意点、よくある質問を整理し、後悔しない導入をサポートする情報サイトです。
                        </p>
                        {/* 司令官指示: 免責事項 */}
                        <p className="text-xs text-blue-300 leading-relaxed bg-blue-900/50 p-3 rounded border border-blue-800">
                            【免責事項】<br />
                            ・光熱費の削減効果や補助金の受給金額は、ご自宅の条件（屋根の向き、容量、お住まいの地域、予算枠など）により変動します。<br />
                            ・最新の条件や正確な金額は、必ずリンク先の東京ガス公式サイト（無料シミュレーション）にてご確認ください。
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <h4 className="font-bold text-lg mb-4 text-blue-100 border-b border-blue-800 pb-2">導入前の確認</h4>
                            <ul className="space-y-2 text-sm text-blue-200">
                                <li><Link to="/eligible" className="hover:text-white transition-colors">対象条件チェック</Link></li>
                                <li><Link to="/cost" className="hover:text-white transition-colors">費用の決まり方</Link></li>
                                <li><Link to="/cancellation" className="hover:text-white transition-colors">途中解約・引越し</Link></li>
                                <li><Link to="/outage" className="hover:text-white transition-colors">停電時の仕様</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-4 text-blue-100 border-b border-blue-800 pb-2">制度と運営</h4>
                            <ul className="space-y-2 text-sm text-blue-200">
                                <li><Link to="/subsidy-tokyo" className="hover:text-white transition-colors">東京都の補助金</Link></li>
                                <li><Link to="/subsidy-payment" className="hover:text-white transition-colors">補助金の入金時期</Link></li>
                                <li><Link to="/installation" className="hover:text-white transition-colors">工事・施工について</Link></li>
                                <li><Link to="/faq" className="hover:text-white transition-colors">よくある質問</Link></li>
                                <li className="pt-2 mt-2 border-t border-blue-800"><Link to="/operator" className="hover:text-white transition-colors">運営者・プライバシーポリシー</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-blue-800 text-center text-xs text-blue-400">
                    &copy; 2026 太陽光・蓄電池相談所 All Rights Reserved.
                </div>
            </footer>
        </div>
    );
};
