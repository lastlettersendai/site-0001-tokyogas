import React from 'react';
import { Icon } from './Icon';

const FAQ_ITEMS = [
    {
        id: 'prep',
        q: '準備物がない/不明な場合はどうすればいい？',
        a: '現時点で書類が揃っていなくても問題ありません。東京ガスの担当者が現地調査時に、検針票の読み方や設置に必要な図面の確認を代行・サポートいたします。まずは「何が必要かを知る」ことから始められます。'
    },
    {
        id: 'judge',
        q: 'このページだけで判断できない時は？',
        a: '以下のチェックリストをご確認ください：\n1. 築年数は判定基準内か？\n2. 月の電気代は1.5万円を超えているか？\n3. 屋根の形状に障害物はないか？\nこれらが不明な場合は、無理に判断せず無料のシミュレーション診断を活用し、専門家の回答を得るのが最短ルートです。'
    },
    {
        id: 'money',
        q: 'お金が発生するタイミングはいつ？',
        a: 'シミュレーション、現地調査、お見積もりまでは完全に無料です。正式な契約書に署名し、受理されるまでは一切の費用は発生しません。納得がいかない場合は、見積もり段階でお断りいただいて構いません。'
    },
    {
        id: 'cancel',
        q: 'キャンセル・解約の条件は？',
        a: '契約後であっても、工事着工前であればクーリングオフ期間を含め規定に沿ったキャンセルが可能です。万が一の引っ越しや解体時も、契約プラン（買取/0円設置）に応じた明確な精算ルールが定義されています。詳細は見積もり時に「重要事項説明」として書面で提示されます。'
    },
    {
        id: 'flow',
        q: '申し込み後の流れは？',
        a: '1. Webから無料診断・問い合わせ\n2. 専門スタッフによるヒアリングと現地詳細調査\n3. 正式な見積もりとシミュレーション提示\n4. ご契約・補助金申請代行\n5. 施工完了・運転開始\n（最短1ヶ月〜3ヶ月程度が目安です）'
    }
];

export const ConstitutionFAQ = () => {
    return (
        <section className="py-20 bg-white border-t border-gray-100">
            <div className="max-w-3xl mx-auto px-6">
                <div className="text-center mb-12">
                    <span className="text-blue-600 font-bold tracking-widest text-sm mb-2 block uppercase">Last Confirmation</span>
                    <h2 className="text-3xl font-black text-slate-800">申込直前に解消すべき「5つの疑問」</h2>
                </div>

                <div className="space-y-6">
                    {FAQ_ITEMS.map((item) => (
                        <div key={item.id} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <h3 className="font-bold text-slate-900 text-lg mb-3 flex items-start gap-3">
                                <span className="flex-shrink-0 bg-blue-600 text-white size-6 rounded-full flex items-center justify-center text-xs font-black mt-0.5">Q</span>
                                {item.q}
                            </h3>
                            <div className="pl-9 text-slate-600 leading-relaxed whitespace-pre-wrap">
                                {item.a}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 p-6 bg-blue-50 rounded-2xl border border-blue-100 text-center">
                    <p className="text-sm font-bold text-blue-800 flex items-center justify-center gap-2">
                        <Icon name="info" className="size-5" />
                        上記以外に不明点がある場合は、お見積もり時の「担当者ヒアリング」にてすべて解消可能です。
                    </p>
                </div>
            </div>
        </section>
    );
};
