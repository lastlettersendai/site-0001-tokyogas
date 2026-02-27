import React from 'react';
import { SEOHead } from '../components/SEOHead.jsx';
import { Layout } from '../components/Layout.jsx';
import { Link } from 'react-router-dom';

export const Outage = () => {
    return (
        <Layout>
            <SEOHead
                title="太陽光と蓄電池は停電時にどう動く？「全部の家電は使えない」という事実"
                description="「蓄電池があれば停電してもいつも通り暮らせる」は半分間違いです。全負荷型と特定負荷型の違いや、エコキュート・IHにおける注意点を正しく理解して後悔を防ぎましょう。"
                path="/outage"
            />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-20">
                <div className="text-center mb-16 border-b border-gray-200 pb-10">
                    <span className="inline-block bg-yellow-100 text-yellow-800 font-bold px-4 py-1.5 rounded-full text-sm mb-4 border border-yellow-300 tracking-wider">防災目的で導入する方へ</span>
                    <h1 className="text-3xl md:text-4xl font-black text-[#003366] leading-tight mb-6">
                        停電時は「いつも通り」<br className="hidden md:inline" />ではない？<br />
                        <span className="text-2xl md:text-3xl text-gray-700 mt-2 block">蓄電池のリアルな限界</span>
                    </h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                        「台風で停電しても、太陽光と蓄電池があれば普段通りに生活できる」という営業トークを信じてはいけません。契約前に知っておくべき「制限」について解説します。
                    </p>
                </div>

                <div className="bg-white p-6 md:p-10 rounded-xl shadow-sm border border-gray-200 mb-16">
                    <h2 className="text-2xl font-bold text-gray-800 mb-8 border-b-2 border-[#003366] pb-2 inline-block">
                        一番の落とし穴：「全負荷」と「特定負荷」の違い
                    </h2>

                    <p className="text-gray-700 mb-6 leading-relaxed">
                        停電した時に、家中のコンセントが使えるようになるわけではありません。選ぶ蓄電池のタイプによって動作が変わります。ここを間違えると「停電したのにリビングのエアコンが動かない！」という悲劇が起きます。
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-red-50 p-6 rounded-lg border border-red-100 relative pt-8">
                            <span className="bg-red-500 text-white font-bold text-xs px-3 py-1 rounded-full absolute -top-3 left-6">スタンダードだが注意</span>
                            <h3 className="font-bold text-red-900 mb-3 text-lg flex items-center gap-2"><span className="text-xl">🔌</span> 特定負荷タイプ</h3>
                            <p className="text-sm text-gray-700 leading-relaxed mb-4">停電時に電気が使えるのは、あらかじめ配線しておいた「特定の回路（1〜2部屋分のコンセントや照明など）」のみです。</p>
                            <ul className="text-sm text-red-800 space-y-2 font-medium">
                                <li>・家中の家電が使えるわけではない</li>
                                <li>・200V機器（大型エアコンやIH）は動かないことが多い</li>
                                <li>・システム費用は比較的安い</li>
                            </ul>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 relative pt-8">
                            <span className="bg-blue-500 text-white font-bold text-xs px-3 py-1 rounded-full absolute -top-3 left-6">理想的だが高額</span>
                            <h3 className="font-bold text-[#003366] mb-3 text-lg flex items-center gap-2"><span className="text-xl">⚡</span> 全負荷タイプ</h3>
                            <p className="text-sm text-gray-700 leading-relaxed mb-4">停電時に家中のすべてのコンセントに電気が供給されます。200Vにも対応している機種が多く、普段に近い生活が可能です。</p>
                            <ul className="text-sm text-blue-800 space-y-2 font-medium">
                                <li>・大型エアコンやエコキュートも一応動かせる</li>
                                <li>・調子に乗って使いすぎるとすぐに電気が枯渇する（要注意）</li>
                                <li>・システム費用は高額になる</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Case Study Block (Principle 3) */}
                <div className="bg-white border-2 border-blue-100 rounded-2xl p-8 mb-16 shadow-md relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-blue-100 text-[#003366] font-bold px-4 py-1 rounded-bl-xl text-sm">
                        モデルケース・能力早見表
                    </div>
                    <h3 className="text-xl font-bold text-[#003366] mb-6 flex items-center gap-2">
                        <span className="text-2xl">⚡️</span>
                        【実例】夏場の台風で「丸1日停電」した場合の生活シミュレーション
                    </h3>

                    <p className="text-gray-600 mb-6 text-sm">
                        標準的な蓄電池（容量5〜7kWh）を導入した場合、「どれくらいの家電が同時に使えるのか？」の現実的なラインです。
                    </p>

                    <div className="bg-blue-50 rounded-xl overflow-hidden border border-blue-200">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-[#003366] text-white">
                                <tr>
                                    <th className="p-3">状況</th>
                                    <th className="p-3">使用できる主な家電（同時使用）</th>
                                    <th className="p-3">消費電力の目安</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-blue-100">
                                <tr className="bg-white">
                                    <td className="p-3 font-bold text-blue-800">昼間（晴れ）</td>
                                    <td className="p-3 text-gray-700">冷蔵庫 ＋ LDKの照明 ＋ <strong className="text-orange-600">エアコン1台</strong> ＋ スマホ充電</td>
                                    <td className="p-3 text-gray-500">太陽光の発電でまかなえる（蓄電池は充電へ）</td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="p-3 font-bold text-blue-800">夜間（蓄電池駆動）</td>
                                    <td className="p-3 text-gray-700">冷蔵庫 ＋ 一部の照明 ＋ 扇風機 ＋ スマホ充電</td>
                                    <td className="p-3 text-gray-500">約300〜500W（一晩持たせるための節約モード）</td>
                                </tr>
                                <tr className="bg-red-50">
                                    <td className="p-3 font-bold text-red-800">❌ 使えない（NG）</td>
                                    <td className="p-3 text-gray-700">IHクッキングヒーター、電子レンジ、ドライヤー</td>
                                    <td className="p-3 text-red-500">瞬間的に1000Wを超えるため、保護機能が働き停止する恐れ</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-4 text-xs text-gray-500 text-right">
                        ※上記は特定負荷型の標準的な蓄電池を想定。全負荷型の場合はこの限りではありません。
                    </div>
                </div>

                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-[#003366] mb-8 pb-2 border-b-2 border-blue-100">
                        オール電化住宅（エコキュート・IH）の注意点
                    </h2>

                    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                        <p className="mb-4 text-gray-700">
                            全負荷タイプの蓄電池であっても、停電時に「エコキュートでお湯を沸かす」や「IHクッキングヒーターを使う」ことは推奨されません。
                        </p>
                        <div className="bg-white p-4 border-l-4 border-orange-500 shadow-sm rounded">
                            <h3 className="font-bold text-orange-700 mb-2">なぜ推奨されないのか？</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                この2つの機器は「電気の消費量」が異常に大きいためです。停電時にこれらを使うと、せっかく蓄電池に貯めていた電気が瞬速で空っぽになります。<br /><br />
                                停電時は、冷蔵庫・スマホの充電・最低限の照明など、命を守るための「省エネ生活」を数日間維持することが本来の目的です。あくまで「非常時のタンク」であるという認識を持ってください。
                            </p>
                        </div>
                    </div>
                </div>

                {/* Call to action */}
                <div className="text-center relative">
                    <h3 className="text-2xl font-black text-gray-800 mb-6">我が家に必要なタイプを相談する</h3>
                    <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                        「要介護のご家族がいるから全負荷必須」「停電リスクが少ない地域だから特定負荷で十分」など、ご家庭によって正解は分かれます。<br />
                        無駄に高額な設備を買わされないためにも、プロにご相談ください。
                    </p>
                    <a href="https://home.tokyo-gas.co.jp/power/solar/index.html" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#003366] text-white font-bold text-lg md:text-xl py-4 px-10 rounded-full hover:bg-blue-800 transition-colors shadow-xl transform hover:-translate-y-1 w-full sm:w-auto">
                        東京ガスで防災の備えをシミュレーション
                    </a>
                </div>

                {/* Internal Links Navigation */}
                <div className="border-t-2 border-gray-100 pt-10 mt-16 text-center">
                    <Link to="/" className="inline-block bg-gray-100 text-gray-700 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow font-bold">
                        トップページへ戻る
                    </Link>
                </div>

            </div>
        </Layout>
    );
};
