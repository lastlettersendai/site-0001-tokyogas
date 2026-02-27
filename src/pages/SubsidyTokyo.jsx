import React from 'react';
import { SEOHead } from '../components/SEOHead.jsx';
import { Layout } from '../components/Layout.jsx';
import { Link } from 'react-router-dom';

export const SubsidyTokyo = () => {
    return (
        <Layout>
            <SEOHead
                title="東京都の太陽光・蓄電池補助金（令和6年度/2024年）の注意点とスケジュール"
                description="東京都は全国トップクラスの補助金が出ますが、「予算上限」「完了報告の期限」など厳しい罠もあります。東京ガスの担当者に丸投げできる部分と、自分で用意すべき書類を解説します。"
                path="/subsidy-tokyo"
            />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-20">
                <div className="text-center mb-16 border-b border-gray-200 pb-10">
                    <span className="inline-block bg-blue-100 text-blue-800 font-bold px-4 py-1.5 rounded-full text-sm mb-4 border border-blue-200 tracking-wider">費用を下げる最大のカギ</span>
                    <h1 className="text-3xl md:text-5xl font-black text-[#003366] leading-tight mb-6">
                        東京都の強力な補助金と<br className="hidden md:inline" />申請の「罠」
                    </h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                        東京都（クール・ネット東京）の補助金は、全国の自治体の中でも群を抜いて高額です。しかし、申請には厳格なルールがあり、「うっかりもらい損ねる」ケースも存在します。
                    </p>
                </div>

                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border-l-4 border-orange-500 p-6 md:p-8 rounded-r-lg mb-16 shadow-sm">
                    <h2 className="text-xl font-bold text-orange-800 mb-4 flex items-center gap-2">
                        <span>⚠️</span> 補助金に関する最重要の前提
                    </h2>
                    <ul className="space-y-3 text-gray-700 font-bold">
                        <li className="flex items-start gap-2">
                            <span className="text-orange-500 mt-1">・</span>
                            <span>補助金は「先着順（予算上限あり）」です。予算が尽きた時点でその年度は終了します。</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-orange-500 mt-1">・</span>
                            <span>交付決定「前」に工事を開始してしまうと、原則として補助金は1円も出ません（事前申請必須）。</span>
                        </li>
                    </ul>
                </div>

                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-[#003366] mb-8 pb-2 border-b-2 border-blue-100">
                        東京ガスで契約するメリット：圧倒的な「手続きの代行力」
                    </h2>
                    <p className="text-gray-600 mb-6">役所とのやり取りや、図面・施工写真の提出など、補助金申請は「超」がつくほど煩雑です。東京ガスのような大手インフラ企業を選ぶ最大の隠れメリットがここにあります。</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                            <h3 className="text-center bg-gray-100 text-gray-500 font-bold py-2 rounded mb-4">お客様がやること</h3>
                            <ul className="space-y-4 text-sm text-gray-700">
                                <li className="flex gap-3">
                                    <span className="shrink-0 bg-blue-100 text-blue-600 w-6 h-6 flex items-center justify-center rounded-full font-bold">1</span>
                                    <span>住民票や印鑑証明書などの「公的書類」の取得</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="shrink-0 bg-blue-100 text-blue-600 w-6 h-6 flex items-center justify-center rounded-full font-bold">2</span>
                                    <span>建物の登記簿謄本（全部事項証明書）の用意</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="shrink-0 bg-blue-100 text-blue-600 w-6 h-6 flex items-center justify-center rounded-full font-bold">3</span>
                                    <span>東京ガスが作成した申請書類への「署名・捺印」</span>
                                </li>
                            </ul>
                            <div className="mt-4 p-3 bg-blue-50 text-blue-800 text-xs rounded border border-blue-100">基本的には「役所で証明書を取るだけ」でOKです。</div>
                        </div>

                        <div className="bg-[#003366] p-6 rounded-xl border border-blue-800 shadow-sm text-white">
                            <h3 className="text-center bg-blue-800 font-bold py-2 rounded mb-4">東京ガス（または施工店）がやること</h3>
                            <ul className="space-y-4 text-sm text-blue-100">
                                <li className="flex gap-3">
                                    <span className="shrink-0 bg-blue-500 text-white w-6 h-6 flex items-center justify-center rounded-full font-bold">1</span>
                                    <span>補助事業事務局への「事前審査提出」・「交付申請」</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="shrink-0 bg-blue-500 text-white w-6 h-6 flex items-center justify-center rounded-full font-bold">2</span>
                                    <span>設備の仕様書、配置図、結線図など「専門的な設計書」の作成</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="shrink-0 bg-blue-500 text-white w-6 h-6 flex items-center justify-center rounded-full font-bold">3</span>
                                    <span>工事中の「施工状況写真」の撮影と、「実績報告書」の提出（超重要）</span>
                                </li>
                            </ul>
                            <div className="mt-4 p-3 bg-orange-500 text-white font-bold text-xs rounded border border-orange-400">プロに任せることで書類不備による「審査落ち」リスクを無くします。</div>
                        </div>
                    </div>
                </div>

                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-[#003366] mb-8 pb-2 border-b-2 border-blue-100">
                        見積もり時に確認すべき「補助金のチェックポイント」
                    </h2>

                    <div className="bg-white rounded-lg p-6 border border-gray-200">
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4 pb-4 border-b border-gray-100">
                                <span className="text-3xl">🗣️</span>
                                <div>
                                    <strong className="text-gray-800 block text-lg mb-1">今の時期、予算枠はまだ余っていますか？</strong>
                                    <p className="text-sm text-gray-600">東京都の補助金は年度終盤（12月〜2月頃）になると予算上限に達し、受付が締め切られるリスクがあります。今から動いて間に合うのか、担当者にシビアに確認してください。</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 pb-4 border-b border-gray-100">
                                <span className="text-3xl">🗣️</span>
                                <div>
                                    <strong className="text-gray-800 block text-lg mb-1">国の補助金と市区町村の補助金は「併用」できますか？</strong>
                                    <p className="text-sm text-gray-600">東京都の補助金（都）は、国の補助金（国）や、お住まいの市区町村（区市）の補助金と併用できるケース（二重取り、三重取り）があります。これを見逃すと数十万円単位で損をします。必ず「我が家の住所で、今使えるすべての補助金を加味した見積もりをお願いします」と伝えてください。</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Call to action */}
                <div className="text-center relative">
                    <h3 className="text-2xl font-black text-gray-800 mb-6">ネットで調べるより、最新の予算状況をプロに聞く</h3>
                    <a href="https://home.tokyo-gas.co.jp/power/solar/index.html" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#003366] text-white font-bold text-lg md:text-xl py-4 px-10 rounded-full hover:bg-blue-800 transition-colors shadow-xl transform hover:-translate-y-1 w-full sm:w-auto">
                        無料相談で補助金の残枠を確認する
                    </a>
                </div>

                {/* Internal Links Navigation */}
                <div className="border-t-2 border-gray-100 pt-10 mt-16">
                    <h3 className="font-bold text-lg text-gray-700 mb-6 text-center">次はこちらも確認してください</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Link to="/subsidy-payment" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 text-center flex items-center justify-between group">
                            <div className="text-left w-full">
                                <div className="text-xs text-red-500 font-bold mb-1">資金繰りの不安</div>
                                <div className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors text-lg">補助金はいつ振り込まれる？</div>
                            </div>
                            <span className="text-xl text-gray-300 group-hover:text-blue-600 transition-colors">&rarr;</span>
                        </Link>
                        <Link to="/" className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 text-center flex items-center justify-between group">
                            <div className="text-left w-full">
                                <div className="font-bold text-gray-600 group-hover:text-blue-600 transition-colors">トップページへ戻る</div>
                            </div>
                        </Link>
                    </div>
                </div>

            </div>
        </Layout>
    );
};
