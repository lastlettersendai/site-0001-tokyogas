import React from 'react';
import { PageTemplate } from '../components/PageTemplate.jsx';
import { Link } from 'react-router-dom';
import { FinalCTA } from '../components/FinalCTA.jsx';
import { Icon } from '../components/Icon.jsx';

export const Outage = () => {
    return (
        <PageTemplate
            title="太陽光と蓄電池は停電時にどう動く？「全部の家電は使えない」という事実"
            description="「蓄電池があれば停電してもいつも通り暮らせる」は半分間違いです。全負荷型と特定負荷型の違いや、エコキュート・IHにおける注意点を正しく理解して後悔を防ぎましょう。"
            path="/outage"
        >

            <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-20">
                {/* Hero Section */}
                <div className="text-center mb-16 border-b border-gray-100 pb-12">
                    <span className="inline-block bg-yellow-100 text-yellow-800 font-bold px-4 py-1.5 rounded-full text-sm mb-4 border border-yellow-300 tracking-wider">防災目的で導入する方へ</span>
                    <h1 className="text-3xl md:text-5xl font-black text-[#003366] leading-tight mb-6">
                        停電時は「いつも通り」<br className="hidden md:inline" />ではない？
                    </h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
                        「台風で停電しても、太陽光と蓄電池があれば平時と同じように生活できる」という営業トークを信じてはいけません。契約前に知っておくべき<strong className="text-red-500">「リアルな限界」</strong>について解説します。
                    </p>

                    <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl relative border border-gray-800 bg-[#0a1128]">
                        <img
                            src="/images/outage_window.png"
                            alt="停電時の夜間に蓄電池で最低限の電力を確保する家の窓"
                            className="w-full h-auto object-cover max-h-[450px]"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128] via-transparent to-transparent opacity-80"></div>
                        <div className="absolute bottom-6 left-0 right-0 text-center px-4">
                            <Icon name="idea" className="text-yellow-100 size-5 mr-1 align-middle" /> <span className="text-yellow-100 font-bold tracking-wide">停電の暗闇の中で、本当に「最低限」必要な電力とは？</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Essential Power Stat Card (Specific vs Full Load) */}
            <div className="mb-20">
                <div className="text-center mb-10">
                    <span className="text-[#003366] font-bold tracking-widest text-sm mb-2 block uppercase">Battery Types</span>
                    <h2 className="text-3xl font-black text-gray-800 border-b-2 border-blue-100 pb-4 inline-block">
                        一番の落とし穴：「全負荷」と「特定負荷」
                    </h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        選ぶ蓄電池のタイプによって、停電時に使えるコンセントの範囲が全く異なります。ここを間違えると「停電したのにリビングのエアコンが動かない！」という悲劇が起きます。
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                    <div className="hidden md:block absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gray-100 rounded-full border-4 border-white flex items-center justify-center font-bold text-gray-400 z-10 shadow-sm">VS</div>

                    {/* Specific Load */}
                    <div className="bg-gradient-to-b from-red-50 to-white rounded-2xl border-2 border-red-100 overflow-hidden shadow-md flex flex-col group hover:shadow-xl hover:-translate-y-1 transition-all">
                        <div className="bg-red-500 text-white p-4 text-center">
                            <span className="text-xs font-bold uppercase tracking-wider opacity-80 block mb-1">Standard Option</span>
                            <h3 className="font-bold text-lg flex items-center justify-center gap-2"><Icon name="plug" className="text-white size-6" /> 特定負荷タイプ</h3>
                        </div>
                        <div className="p-6 md:p-8 flex flex-col flex-1">
                            <div className="text-center mb-6">
                                <div className="inline-block bg-red-100 text-red-800 font-bold px-4 py-2 rounded-lg text-sm mb-2 border border-red-200">
                                    一部の部屋・コンセントのみ
                                </div>
                                <p className="text-sm text-gray-600 mt-2">あらかじめ指定した1〜2部屋のコンセントと照明だけが使えます。</p>
                            </div>
                            <ul className="space-y-4 text-sm text-gray-700 flex-1">
                                <li className="flex items-start gap-3">
                                    <Icon name="x" className="text-red-500 shrink-0 mt-0.5 size-5" />
                                    家中の家電が使えるわけではない
                                </li>
                                <li className="flex items-start gap-3">
                                    <Icon name="x" className="text-red-500 shrink-0 mt-0.5 size-5" />
                                    200V機器（大型エアコンやIH）は動かないことが多い
                                </li>
                                <li className="flex items-start gap-3">
                                    <Icon name="check" className="text-green-500 shrink-0 mt-0.5 size-5" />
                                    <span className="font-bold">システム費用は比較的安く抑えられる</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Full Load */}
                    <div className="bg-gradient-to-b from-blue-50 to-white rounded-2xl border-2 border-blue-200 overflow-hidden shadow-md flex flex-col group hover:shadow-xl hover:-translate-y-1 transition-all">
                        <div className="bg-[#003366] text-white p-4 text-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-30 -mr-10 -mt-10"></div>
                            <span className="text-xs font-bold uppercase tracking-wider text-yellow-300 block mb-1">Premium Option</span>
                            <h3 className="font-bold text-lg flex items-center justify-center gap-2"><Icon name="zap" className="text-white size-6" /> 全負荷タイプ</h3>
                        </div>
                        <div className="p-6 md:p-8 flex flex-col flex-1">
                            <div className="text-center mb-6">
                                <div className="inline-block bg-blue-100 text-[#003366] font-bold px-4 py-2 rounded-lg text-sm mb-2 border border-blue-200">
                                    家中のすべてのコンセント
                                </div>
                                <p className="text-sm text-gray-600 mt-2">停電時でも分電盤全体に電気を送り、家中のどこでも電気が使えます。</p>
                            </div>
                            <ul className="space-y-4 text-sm text-gray-700 flex-1">
                                <li className="flex items-start gap-3">
                                    <Icon name="check" className="text-green-500 shrink-0 mt-0.5 size-5" />
                                    200V対応機なら大型エアコンやエコキュートも一応動かせる
                                </li>
                                <li className="flex items-start gap-3">
                                    <Icon name="alert" className="text-orange-500 size-5 mr-2 mt-0.5" />
                                    <span className="font-bold text-orange-700">調子に乗って使いすぎるとすぐに電気が枯渇する（要注意）</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Icon name="x" className="text-red-500 shrink-0 mt-0.5 size-5" />
                                    システム費用が高額になる
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Appliance Usage Chart */}
            <div className="mb-20">
                <h2 className="text-2xl md:text-3xl font-black text-center text-[#003366] mb-8">
                    モデルケース：停電時のリアルな生活水準
                </h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-center">
                    標準的な蓄電池（容量5〜7kWh前後・特定負荷）を導入した場合、「どれくらいの家電が同時に使えるのか？」の現実的なラインをご紹介します。
                </p>

                <div className="space-y-6 max-w-3xl mx-auto">
                    {/* Daytime Card */}
                    <div className="bg-white rounded-2xl shadow-sm border-l-8 border-l-yellow-400 border border-gray-100 flex flex-col md:flex-row overflow-hidden group hover:shadow-md transition-shadow">
                        <div className="p-6 md:w-1/3 bg-yellow-50 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-gray-100">
                            <Icon name="sun" className="text-yellow-500 size-10 mb-2" />
                            <h3 className="font-black text-yellow-800 text-xl">昼間（晴れ）</h3>
                            <div className="mt-2 text-xs font-bold text-yellow-600 bg-yellow-100 px-2 py-1 rounded-full">太陽光 発電中</div>
                        </div>
                        <div className="p-6 md:w-2/3 flex flex-col justify-center">
                            <p className="font-bold text-gray-800 text-lg mb-3 flex items-center flex-wrap gap-2">
                                冷蔵庫 <span className="text-gray-300">+</span> LDKの照明 <span className="text-gray-300">+</span> <strong className="text-red-500 bg-red-50 px-2 py-0.5 rounded">エアコン1台</strong> <span className="text-gray-300">+</span> スマホ充電
                            </p>
                            <p className="text-sm text-gray-600">
                                昼間は太陽光が発電しているため比較的余裕があります。余った電力は蓄電池の充電に回されます。
                            </p>
                        </div>
                    </div>

                    {/* Nighttime Card */}
                    <div className="bg-white rounded-2xl shadow-sm border-l-8 border-l-[#003366] border border-gray-100 flex flex-col md:flex-row overflow-hidden group hover:shadow-md transition-shadow">
                        <div className="p-6 md:w-1/3 bg-blue-50 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-gray-100">
                            <Icon name="moon" className="text-blue-800 size-10 mb-2" />
                            <h3 className="font-black text-[#003366] text-xl">夜間（雨天）</h3>
                            <div className="mt-2 text-xs font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded-full">蓄電池のみで駆動</div>
                        </div>
                        <div className="p-6 md:w-2/3 flex flex-col justify-center">
                            <p className="font-bold text-gray-800 text-lg mb-3 flex items-center flex-wrap gap-2">
                                冷蔵庫 <span className="text-gray-300">+</span> 一部の照明 <span className="text-gray-300">+</span> 扇風機 <span className="text-gray-300">+</span> スマホ充電
                            </p>
                            <p className="text-sm text-gray-600">
                                <strong className="text-blue-800">節約モードが鉄則です。</strong>エアコンは我慢し、一晩持たせるために消費電力を300〜500W程度に抑えます。
                            </p>
                        </div>
                    </div>

                    {/* Danger Card */}
                    <div className="bg-white rounded-2xl shadow-sm border-l-8 border-l-red-500 border border-gray-100 flex flex-col md:flex-row overflow-hidden group hover:shadow-md transition-shadow">
                        <div className="p-6 md:w-1/3 bg-red-50 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-gray-100">
                            <Icon name="x" className="text-red-500 size-10 mb-2" />
                            <h3 className="font-black text-red-800 text-xl">非推奨・使えない</h3>
                            <div className="mt-2 text-xs font-bold text-red-600 bg-red-100 px-2 py-1 rounded-full">高圧・大容量家電</div>
                        </div>
                        <div className="p-6 md:w-2/3 flex flex-col justify-center">
                            <p className="font-bold text-gray-800 text-lg mb-3 flex items-center flex-wrap gap-2">
                                <span className="line-through text-gray-400">エコキュート</span>・<span className="line-through text-gray-400">IHコンロ</span>・<span className="line-through text-gray-400">電子レンジ</span>・<span className="line-through text-gray-400">ドライヤー</span>
                            </p>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                瞬間的に1000〜2000Wを超えるため、保護機能が働き蓄電池が停止する恐れがあります（特定負荷の場合）。
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Warning about All-Electric Homes */}
            <div className="mb-20">
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-8 md:p-10 border border-gray-200 shadow-inner">
                    <h2 className="text-2xl font-black text-gray-800 mb-6 flex items-center gap-2 border-l-4 border-orange-500 pl-4">
                        オール電化住宅の「エコキュートの罠」
                    </h2>

                    <p className="mb-6 text-gray-700 text-lg">
                        「全負荷タイプの蓄電池ならエコキュート（お湯を沸かす）も動かせるから安心！」と思っていませんか？
                    </p>

                    <div className="bg-white p-6 border-l-4 border-red-500 shadow-md rounded-xl mb-4">
                        <h3 className="font-bold text-red-700 mb-2 text-lg">技術的には可能でも、実用的ではありません</h3>
                        <p className="text-gray-600 leading-relaxed">
                            エコキュートがお湯を沸かす際の消費電力は凄まじく、<strong className="text-red-600">蓄電池に貯めていた大切な電気がたった数十分〜数時間で空っぽになります。</strong><br /><br />
                            停電時に一番大切なのは、冷蔵庫の中身を腐らせないこと、そして外部からの情報を得るためのスマホの充電です。「お風呂のお湯」より「最低限の生活を数日間維持すること」を優先するのが、本当の防災です。
                        </p>
                    </div>
                </div>
            </div>

            <FinalCTA />

            {/* Internal Links Navigation */}
            <div className="border-t-2 border-gray-100 pt-10 mt-16">
                <h3 className="font-bold text-lg text-gray-700 mb-6 text-center">次はこちらも確認してください</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link to="/installation" className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 text-center flex items-center justify-between group">
                        <div className="text-left w-full">
                            <div className="text-xs text-orange-500 font-bold mb-1 tracking-wider uppercase">Installation</div>
                            <div className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors text-lg">工事に関する不安</div>
                        </div>
                        <Icon name="arrowRight" className="size-6 text-gray-300 group-hover:text-blue-600 transition-transform group-hover:translate-x-2" />
                    </Link>
                    <Link to="/" className="bg-[#003366] p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-[#003366] text-center flex items-center justify-between group">
                        <div className="text-left w-full">
                            <div className="text-xs text-blue-200 font-bold mb-1 tracking-wider uppercase">Home</div>
                            <div className="font-bold text-white transition-colors text-lg">トップページへ戻る</div>
                        </div>
                        <Icon name="arrowRight" className="size-6 text-blue-300 transition-transform group-hover:-translate-x-1" />
                    </Link>
                </div>
            </div>
        </PageTemplate>
    );
};
