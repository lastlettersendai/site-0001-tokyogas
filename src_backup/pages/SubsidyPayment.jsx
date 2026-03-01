import React from 'react';
import { PageTemplate } from '../components/PageTemplate.jsx';
import { Link } from 'react-router-dom';
import { FinalCTA } from '../components/FinalCTA.jsx';
import { Icon } from '../components/Icon.jsx';
import { ConstitutionFAQ } from '../components/ConstitutionFAQ.jsx';

export const SubsidyPayment = () => {
    return (
        <PageTemplate
            title="太陽光・蓄電池の補助金はいつ入金される？立て替えによる資金繰りリスク"
            description="補助金で安くなると言われても、入金されるのは「工事が終わってから数ヶ月後」です。一時的に数百万円をどう立て替えるか、資金繰りの注意点を解説します。"
            path="/subsidy-payment"
        >

            <div className="w-full py-12 md:py-20">
                {/* Block 1: 冒頭3行 (Who/What) */}
                <div className="mb-8 text-left px-4 sm:px-6 max-w-4xl mx-auto">
                    <span className="inline-block bg-red-100 text-red-800 font-bold px-4 py-1.5 rounded-full text-xs mb-4 border border-red-300 tracking-wider">PAYMENT TIMING</span>
                    <p className="text-gray-600 text-sm font-bold leading-relaxed">
                        「補助金でお得」という言葉だけを信じてはいけません。<br />
                        いつお金が出ていき、いつ戻ってくるのか。<br />
                        家計を守るための「キャッシュフローの真実」を解説します。
                    </p>
                </div>

                {/* Block 2: 結論1行 */}
                <h1 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-8 px-4 sm:px-6 max-w-4xl mx-auto">
                    補助金は「完全な後払い」です。立て替えが必要です。
                </h1>

                {/* Block 3: 前提条件 (3行以内) */}
                <div className="px-4 sm:px-6 md:px-0">
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 inline-block w-full max-w-2xl text-left mb-12 lg:ml-[calc(50vw-24rem)]">
                        <p className="text-xs font-black text-red-600 mb-2 tracking-widest uppercase">Prerequisite for Cash Flow</p>
                        <ul className="text-sm font-bold text-slate-700 space-y-1">
                            <li className="flex items-center gap-2"><Icon name="check" className="size-4 text-red-600" /> 手元の現金を一時的に100万円以上動かせる</li>
                            <li className="flex items-center gap-2"><Icon name="check" className="size-4 text-red-600" /> 入金まで「半年」待てる余裕がある</li>
                            <li className="flex items-center gap-2"><Icon name="check" className="size-4 text-red-600" /> 補助金を「あてにしすぎない」資金計画を立てている</li>
                        </ul>
                    </div>
                </div>

                <div className="w-full relative overflow-hidden mb-16">
                    <img
                        src="/images/subsidy_payment.png"
                        alt="資金決済のイメージ"
                        className="w-full object-cover aspect-video block"
                        loading="lazy"
                    />
                </div>

                <div className="text-center mb-16 border-b border-gray-100 pb-12 px-4 sm:px-6 max-w-4xl mx-auto">
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
                        「補助金を使って実質100万円で導入できる！」という言葉には注意が必要です。<strong className="text-red-600">補助金は商品を買う時のレジでそのまま「値引き」されるわけではありません。</strong>
                    </p>
                </div>

                {/* Wait Time Card (Conclusion) */}
                <div className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 p-8 rounded-none sm:rounded-2xl mb-20 shadow-lg relative overflow-hidden group max-w-4xl mx-auto px-4 sm:px-6">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-red-100 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
                    <h2 className="text-2xl font-black text-red-800 mb-6 flex items-center gap-3">
                        <Icon name="alert" className="text-red-500 size-10 mr-3 align-middle" />
                        結論：補助金は「完全な後払い」です
                    </h2>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-red-100 mb-6">
                        <p className="text-gray-700 leading-relaxed font-bold text-lg mb-4">
                            太陽光・蓄電池の補助金は、<span className="text-red-600 border-b-2 border-red-200">工事がすべて完了し、役所の審査に合格した「数ヶ月後」</span>に、お客様の銀行口座に直接振り込まれます。
                        </p>
                        <ul className="space-y-3 text-sm text-gray-600 [&>li>svg]:size-4 [&>li>svg]:shrink-0 [&>li>svg]:align-middle [&>li>svg]:mt-0.5">
                            <li className="flex items-start gap-2">
                                <Icon name="x" className="text-red-500" />
                                契約時に見積もり金額から値引きされるわけではない
                            </li>
                            <li className="flex items-start gap-2">
                                <Icon name="x" className="text-red-500" />
                                工事の支払いタイミングには補助金の手続きは間に合わせられない
                            </li>
                        </ul>
                    </div>

                    <div className="bg-red-600 text-white p-4 rounded-xl shadow-md text-center">
                        <p className="font-bold text-lg">
                            つまり、販売会社への工事費用の支払いは、<br className="hidden md:block" />
                            <span className="text-yellow-300 text-xl mx-1 underline decoration-yellow-500 decoration-2">全額を先行して支払う（立て替える）</span>必要があります。
                        </p>
                    </div>
                </div>

                {/* Payment Timeline Flow */}
                <div className="mb-20 max-w-4xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-12">
                        <span className="text-[#003366] font-bold tracking-widest text-sm mb-2 block uppercase">Timeline</span>
                        <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-4">
                            契約から入金までの流れ
                        </h2>
                        <p className="text-gray-600">お金が出ていくタイミングと、入ってくるタイミングの<br className="hidden md:block" />「ズレ」を正確に把握してください。</p>
                    </div>

                    <div className="relative max-w-2xl mx-auto pl-4 md:pl-0">
                        {/* Connecting Line */}
                        <div className="absolute left-[39px] md:left-[50px] top-8 bottom-8 w-1 bg-gray-200 -z-10"></div>

                        <div className="space-y-12">
                            {/* Step 1 */}
                            <div className="relative flex items-start group">
                                <div className="w-16 h-16 bg-white border-4 border-gray-200 text-gray-400 rounded-full flex items-center justify-center font-black text-xl shrink-0 z-10 mr-6 shadow-sm group-hover:border-blue-300 transition-colors">1</div>
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex-1 group-hover:shadow-md transition-shadow">
                                    <h3 className="font-bold text-xl text-gray-800 mb-2">ご契約・交付申請</h3>
                                    <p className="text-gray-600 text-sm">東京ガスにて契約。役所へ「この内容で工事をして補助金をもらう予定です」という事前申請を提出します（東京ガス代行）。</p>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="relative flex items-start group">
                                <div className="w-16 h-16 bg-white border-4 border-gray-200 text-gray-400 rounded-full flex items-center justify-center font-black text-xl shrink-0 z-10 mr-6 shadow-sm group-hover:border-blue-300 transition-colors">2</div>
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex-1 group-hover:shadow-md transition-shadow">
                                    <h3 className="font-bold text-xl text-gray-800 mb-2 flex items-center gap-2">交付決定通知 <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded font-normal">約1〜2ヶ月後</span></h3>
                                    <p className="text-gray-600 text-sm">役所の審査が通り、予算枠が正式に確保されます。この決定が出て初めて着工が可能になります。</p>
                                </div>
                            </div>

                            {/* Step 3 (CRITICAL) */}
                            <div className="relative flex items-start group">
                                <div className="absolute left-[39px] md:left-[50px] top-8 bottom-[-48px] w-1 bg-gradient-to-b from-red-500 to-orange-500 -z-10"></div>
                                <div className="w-16 h-16 bg-red-500 border-4 border-red-100 text-white rounded-full flex items-center justify-center font-black text-2xl shrink-0 z-10 mr-6 shadow-lg animate-pulse"><Icon name="banknote" className="size-8 text-white" /></div>
                                <div className="bg-red-50 p-6 rounded-2xl shadow-md border-2 border-red-200 flex-1">
                                    <h3 className="font-black text-xl text-red-700 mb-3 border-b border-red-200 pb-2">工事開始 ＆ お支払い（出費！）</h3>
                                    <p className="text-red-900 text-sm font-bold mb-3">ここで販売会社へのお支払いが発生します。</p>
                                    <div className="bg-white p-3 rounded-xl border border-red-100 text-sm">
                                        <p className="font-bold text-gray-800 border-l-2 border-red-500 pl-2 mb-2">現金一括の場合:<span className="text-red-600">全額（数百万円）の出費</span></p>
                                        <p className="font-bold text-gray-800 border-l-2 border-blue-500 pl-2">ソーラーローンの場合:<span className="text-blue-600">月々の支払いがスタート</span></p>
                                    </div>
                                </div>
                            </div>

                            {/* Step 4 */}
                            <div className="relative flex items-start group">
                                <div className="w-16 h-16 bg-white border-4 border-orange-200 text-orange-400 rounded-full flex items-center justify-center font-black text-xl shrink-0 z-10 mr-6 shadow-sm group-hover:border-orange-400 transition-colors">4</div>
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex-1 group-hover:shadow-md transition-shadow">
                                    <h3 className="font-bold text-xl text-gray-800 mb-2">実績報告の提出</h3>
                                    <p className="text-gray-600 text-sm">工事完了後、施工写真や領収書などを役所へ提出し、「間違いなく設置され、支払いも終わった」ことを証明します。</p>
                                </div>
                            </div>

                            {/* Step 5 (REWARD) */}
                            <div className="relative flex items-start group">
                                <div className="w-16 h-16 bg-[#003366] border-4 border-blue-200 text-white rounded-full flex items-center justify-center font-black text-2xl shrink-0 z-10 mr-6 shadow-lg transform group-hover:scale-110 transition-transform"><Icon name="money" className="text-white size-8" /></div>
                                <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-2xl shadow-md border-2 border-[#003366] flex-1 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 rounded-bl-full -z-10 opacity-50"></div>
                                    <h3 className="font-black text-xl text-[#003366] mb-3">補助金の「入金」</h3>
                                    <p className="text-blue-900 text-sm font-bold bg-blue-100 p-3 rounded-lg border border-blue-200">
                                        工事完了から【約2〜4ヶ月後】に、お客様の口座へまとまった補助金が振り込まれます。<br />
                                        <span className="text-xs text-gray-600 font-normal mt-2 block">※役所の混み具合により半年近く待たされるケースもあります。気長に待ちましょう。</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Block 4: 誤解の解体 (Misconception) */}
                <div className="bg-red-50 p-8 rounded-none sm:rounded-3xl border border-red-100 mb-20 max-w-4xl mx-auto px-4 sm:px-6">
                    <div className="flex items-center gap-3 mb-4 text-red-600">
                        <Icon name="x" className="size-8" />
                        <h2 className="text-xl font-black">よくある誤解：「販売会社が立て替えてくれる」</h2>
                    </div>
                    <p className="font-bold text-red-800 mb-4 leading-relaxed">
                        「補助金を差し引いた残額だけ払えばいい」という業者は、<span className="underline decoration-red-500 decoration-2">補助金が不採択になった場合のリスクを説明していません。</span>
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                        原則として補助金は「申請者（お客様）」の口座に振り込まれます。販売会社が立て替える形式の契約は、万が一補助金が却下された際にトラブルになりやすく、東京都などの公的機関も推奨していません。東京ガスでは、不透明な値引きではなく、健全な支払い計画をサポートします。
                    </p>
                </div>

                {/* Block 5: 判断基準 (Criteria) */}
                <div className="mb-20 max-w-4xl mx-auto px-4 sm:px-6">
                    <h2 className="text-2xl font-black text-[#003366] mb-8 border-l-4 border-red-600 pl-4">あなたに合った「資金計画」の選び方</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-2xl border border-slate-200">
                            <h3 className="font-bold mb-4">「現金一括」を選ぶべき人</h3>
                            <ul className="text-sm space-y-2 text-slate-600">
                                <li>・手元に500万円以上の現預金余力がある</li>
                                <li>・金利（年利2〜3%）を1円も払いたくない</li>
                                <li>・複雑なローン審査の手続きを省きたい</li>
                            </ul>
                        </div>
                        <div className="bg-red-50 p-6 rounded-2xl border border-red-200">
                            <h3 className="font-bold mb-4 text-red-900">「ローン＋補助金返済」を選ぶべき人</h3>
                            <ul className="text-sm space-y-2 text-red-800">
                                <li>・教育費や住宅ローン用に現金を残しておきたい</li>
                                <li>・入ってきた補助金をそのまま「繰り上げ返済」に充てたい</li>
                                <li>・家計のキャッシュフローを一定に保ちたい</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Block 6: 実例 (Case Study) - Format Fixed: Premise -> Conclusion -> Reason -> Next Q */}
                <div className="mb-20 max-w-4xl mx-auto px-4 sm:px-6">
                    <h2 className="text-2xl font-black text-center text-[#003366] mb-12">
                        入金スケジュール実例
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                            <p className="text-xs font-black text-blue-600 mb-1 uppercase tracking-tighter">1. 前提</p>
                            <p className="font-bold text-slate-800 mb-4">1月契約・3月工事・東京都補助金を申請</p>
                            <div className="bg-blue-50 p-4 rounded-xl mb-4">
                                <p className="text-xs font-black text-blue-600 mb-1 uppercase tracking-tighter">2. 結論</p>
                                <p className="text-lg font-black text-blue-900">補助金（80万円）の入金:7月下旬</p>
                            </div>
                            <p className="text-xs font-black text-blue-600 mb-1 uppercase tracking-tighter">3. 理由</p>
                            <p className="text-sm text-slate-600 leading-relaxed mb-6">
                                工事完了（3月末）→ 実績報告提出（4月初旬）→ 都の審査（約3ヶ月）→ 入金決定。約4ヶ月間の立て替え期間が発生しました。
                            </p>
                            <div className="pt-4 border-t border-slate-100">
                                <p className="text-xs font-black text-orange-600 mb-1 uppercase tracking-tighter">4. 次の質問</p>
                                <Link to="/cancellation" className="text-sm font-bold text-slate-800 hover:text-blue-600 flex items-center gap-2">
                                    「もし入金前に家を売却したらどうなる？」<Icon name="arrowRight" className="size-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Block 7: 申込直前FAQ */}
                <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-16">
                    <ConstitutionFAQ />
                    <FinalCTA />
                </div>
            </div>

        </PageTemplate>
    );
};
