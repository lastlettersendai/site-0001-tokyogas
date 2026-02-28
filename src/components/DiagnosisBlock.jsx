import React, { useState } from 'react';
import { Icon } from './Icon';
import { Link } from 'react-router-dom';

const QUESTIONS = [
    {
        id: 1,
        text: "毎月の電気代は平均して15,000円を超えますか？",
        type: "boolean"
    },
    {
        id: 2,
        text: "日中の在宅時間が多い、またはペットのためにエアコンを常時使用していますか？",
        type: "boolean"
    },
    {
        id: 3,
        text: "停電時に「冷蔵庫」や「エアコン1台」だけでも動く環境を確保したいですか？",
        type: "boolean"
    }
];

export const DiagnosisBlock = () => {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [result, setResult] = useState(null);

    const handleAnswer = (val) => {
        const newAnswers = [...answers, val];
        setAnswers(newAnswers);

        if (step < QUESTIONS.length - 1) {
            setStep(step + 1);
        } else {
            calculateResult(newAnswers);
        }
    };

    const calculateResult = (finalAnswers) => {
        const yesCount = finalAnswers.filter(a => a === true).length;

        if (yesCount === 3) {
            setResult({
                type: "【太陽光 ＋ 大容量蓄電池】併用型",
                reason: "自家消費効率が非常に高く、電気代削減効果と防災性能を最大化できるためです。0円設置モデルのメリットを最も享受できるタイプです。",
                link: "/cost",
                linkText: "セット導入の見積もり・費用を確認"
            });
        } else if (yesCount === 2) {
            setResult({
                type: "【太陽光 ＋ 特定負荷蓄電池】バランス型",
                reason: "日常の電気代カットを主目的としつつ、停電時も最低限の生活インフラを守れるためです。コストパフォーマンスに優れた選択肢です。",
                link: "/outage",
                linkText: "停電時に動く範囲の詳細を確認"
            });
        } else {
            setResult({
                type: "【まずは太陽光のみ】スモールスタート型",
                reason: "初期投資を抑えつつ、まずは日中の高い電気代を太陽光で相殺するのが賢明な判断となるためです。後から蓄電池を追加できる拡張性も保持できます。",
                link: "/eligible",
                linkText: "補助金込みの対象判定を詳しく見る"
            });
        }
    };

    return (
        <section className="py-20 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <span className="text-orange-600 font-bold tracking-widest text-sm mb-2 block uppercase">Decision Support</span>
                    <h2 className="text-3xl md:text-4xl font-black text-slate-800">
                        10秒で完結：あなたに最適な<br />
                        <span className="text-blue-600">「導入タイプ」診断</span>
                    </h2>
                </div>

                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-200">
                    {!result ? (
                        <div className="max-w-2xl mx-auto">
                            <div className="mb-8">
                                <div className="flex justify-between text-xs font-bold text-slate-400 mb-2">
                                    <span>QUESTION {step + 1} / {QUESTIONS.length}</span>
                                    <span>{Math.round(((step + 1) / QUESTIONS.length) * 100)}%</span>
                                </div>
                                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                                    <div
                                        className="bg-blue-600 h-full transition-all duration-500"
                                        style={{ width: `${((step + 1) / QUESTIONS.length) * 100}%` }}
                                    ></div>
                                </div>
                            </div>

                            <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-10 text-center leading-relaxed">
                                {QUESTIONS[step].text}
                            </h3>

                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    onClick={() => handleAnswer(true)}
                                    className="flex flex-col items-center justify-center py-6 px-4 bg-blue-50 hover:bg-blue-600 group rounded-2xl border-2 border-blue-100 hover:border-blue-600 transition-all"
                                >
                                    <span className="text-blue-600 group-hover:text-white font-black text-2xl mb-1">はい</span>
                                    <span className="text-blue-400 group-hover:text-blue-100 text-xs">当てはまる</span>
                                </button>
                                <button
                                    onClick={() => handleAnswer(false)}
                                    className="flex flex-col items-center justify-center py-6 px-4 bg-slate-50 hover:bg-slate-600 group rounded-2xl border-2 border-slate-100 hover:border-slate-600 transition-all"
                                >
                                    <span className="text-slate-600 group-hover:text-white font-black text-2xl mb-1">いいえ</span>
                                    <span className="text-slate-400 group-hover:text-slate-100 text-xs">当てはまらない</span>
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="max-w-2xl mx-auto text-center animate-in fade-in duration-700">
                            <div className="bg-green-100 text-green-600 size-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Icon name="check" className="size-10" />
                            </div>
                            <p className="text-sm font-bold text-slate-500 mb-2">診断結果</p>
                            <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">
                                あなたは <span className="text-blue-600">{result.type}</span> です
                            </h3>
                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8 text-left">
                                <p className="text-slate-700 leading-relaxed font-medium">
                                    <span className="text-blue-600 font-black mr-2">理由：</span>
                                    {result.reason}
                                </p>
                            </div>
                            <Link
                                to={result.link}
                                className="inline-flex items-center justify-center gap-2 w-full bg-blue-600 text-white font-black py-5 rounded-2xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
                            >
                                <Icon name="arrowRight" className="size-6" />
                                {result.linkText}
                            </Link>
                            <button
                                onClick={() => { setStep(0); setAnswers([]); setResult(null); }}
                                className="mt-6 text-slate-400 font-bold text-sm border-b border-transparent hover:border-slate-400 transition-all"
                            >
                                もう一度診断する
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};
