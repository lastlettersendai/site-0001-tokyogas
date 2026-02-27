import { jsxs, jsx } from "react/jsx-runtime";
import React, { createContext, useContext, useEffect, useState } from "react";
import { renderToString } from "react-dom/server";
import { Link, Routes, Route, StaticRouter } from "react-router-dom";
const SEOContext = createContext({});
const SEOHead = ({ title, description, path = "", imageUrl = "/ogp.jpg" }) => {
  const siteName = "東京ガスの太陽光・蓄電池 - 導入前シミュレーションと解説";
  const baseUrl = "https://site-0001-tokyogas.vercel.app";
  const fullUrl = `${baseUrl}${path}`;
  const fullImageUrl = imageUrl.startsWith("http") ? imageUrl : `${baseUrl}${imageUrl}`;
  const context = useContext(SEOContext);
  if (typeof window === "undefined" && context) {
    context.headHtml = `
            <title>${title}</title>
            <meta name="description" content="${description}" />
            <link rel="canonical" href="${fullUrl}" />
            <meta property="og:title" content="${title}" />
            <meta property="og:description" content="${description}" />
            <meta property="og:type" content="${path === "/" ? "website" : "article"}" />
            <meta property="og:url" content="${fullUrl}" />
            <meta property="og:image" content="${fullImageUrl}" />
            <meta property="og:site_name" content="${siteName}" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="${title}" />
            <meta name="twitter:description" content="${description}" />
            <meta name="twitter:image" content="${fullImageUrl}" />
            <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        `;
  }
  useEffect(() => {
    if (typeof window === "undefined") return;
    document.title = title;
    const updateTag = (selector, attribute, value, createFn) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = createFn();
        document.head.appendChild(el);
      }
      el.setAttribute(attribute, value);
    };
    updateTag('meta[name="description"]', "content", description, () => {
      const meta = document.createElement("meta");
      meta.name = "description";
      return meta;
    });
    updateTag('link[rel="canonical"]', "href", fullUrl, () => {
      const link = document.createElement("link");
      link.rel = "canonical";
      return link;
    });
  }, [title, description, fullUrl]);
  return null;
};
const Layout = ({ children }) => {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col min-h-screen bg-gray-50 font-sans text-gray-800", children: [
    /* @__PURE__ */ jsxs("header", { className: "bg-white shadow-sm sticky top-0 z-50 border-b-[3px] border-[#003366]", children: [
      /* @__PURE__ */ jsx("div", { className: "bg-gray-100 text-center py-1.5 border-b border-gray-200", children: /* @__PURE__ */ jsxs("p", { className: "text-[10px] md:text-xs text-gray-500 font-bold tracking-wide", children: [
        /* @__PURE__ */ jsx("span", { className: "bg-gray-200 px-2 py-0.5 rounded text-gray-600 mr-2", children: "PR" }),
        "アフィリエイト広告を利用しています | 2026年2月26日時点の情報です"
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "py-3 px-4 md:px-6 flex justify-between items-center max-w-6xl mx-auto w-full", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-3 group", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-[#003366] flex items-center justify-center text-white font-black rounded-sm text-lg tracking-widest shadow-inner group-hover:bg-[#004080] transition-colors", children: "TG" }),
          /* @__PURE__ */ jsx("span", { className: "text-[#003366] font-black text-xl md:text-2xl tracking-tight hidden sm:inline-block", children: "太陽光・蓄電池相談所" })
        ] }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("span", { className: "text-[10px] md:text-xs text-[#003366] font-bold bg-blue-50 py-1 px-2 md:py-1.5 md:px-3 rounded-full border border-blue-100", children: "東京ガス公式パートナー" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("main", { className: "flex-grow", children }),
    /* @__PURE__ */ jsxs("footer", { className: "bg-[#003366] text-white py-12 px-6 mt-20", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
            /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-white flex items-center justify-center text-[#003366] font-black rounded-sm text-sm tracking-widest", children: "TG" }),
            /* @__PURE__ */ jsx("span", { className: "font-black text-xl tracking-tight", children: "太陽光・蓄電池相談所" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-blue-200 mb-4 leading-relaxed", children: "当サイトは、東京ガスの「太陽光・蓄電池パッケージ」に関するメリットや注意点、よくある質問を整理し、後悔しない導入をサポートする情報サイトです。" }),
          /* @__PURE__ */ jsxs("p", { className: "text-xs text-blue-300 leading-relaxed bg-blue-900/50 p-3 rounded border border-blue-800", children: [
            "【免責事項】",
            /* @__PURE__ */ jsx("br", {}),
            "・光熱費の削減効果や補助金の受給金額は、ご自宅の条件（屋根の向き、容量、お住まいの地域、予算枠など）により変動します。",
            /* @__PURE__ */ jsx("br", {}),
            "・最新の条件や正確な金額は、必ずリンク先の東京ガス公式サイト（無料シミュレーション）にてご確認ください。"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "font-bold text-lg mb-4 text-blue-100 border-b border-blue-800 pb-2", children: "導入前の確認" }),
            /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-blue-200", children: [
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/eligible", className: "hover:text-white transition-colors", children: "対象条件チェック" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/cost", className: "hover:text-white transition-colors", children: "費用の決まり方" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/cancellation", className: "hover:text-white transition-colors", children: "途中解約・引越し" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/outage", className: "hover:text-white transition-colors", children: "停電時の仕様" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "font-bold text-lg mb-4 text-blue-100 border-b border-blue-800 pb-2", children: "制度と運営" }),
            /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-blue-200", children: [
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/subsidy-tokyo", className: "hover:text-white transition-colors", children: "東京都の補助金" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/subsidy-payment", className: "hover:text-white transition-colors", children: "補助金の入金時期" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/installation", className: "hover:text-white transition-colors", children: "工事・施工について" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/faq", className: "hover:text-white transition-colors", children: "よくある質問" }) }),
              /* @__PURE__ */ jsx("li", { className: "pt-2 mt-2 border-t border-blue-800", children: /* @__PURE__ */ jsx(Link, { to: "/operator", className: "hover:text-white transition-colors", children: "運営者・プライバシーポリシー" }) })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "max-w-6xl mx-auto mt-12 pt-6 border-t border-blue-800 text-center text-xs text-blue-400", children: "© 2026 太陽光・蓄電池相談所 All Rights Reserved." })
    ] })
  ] });
};
const StructuredData = ({ data }) => {
  return /* @__PURE__ */ jsx(
    "script",
    {
      type: "application/ld+json",
      dangerouslySetInnerHTML: { __html: JSON.stringify(data) }
    }
  );
};
const CTALink = ({ href, children, eventName = "click_cta", className = "" }) => {
  const handleClick = (e) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", eventName, {
        "event_category": "CTA",
        "event_label": children.toString().substring(0, 30),
        "value": 1
      });
    }
  };
  return /* @__PURE__ */ jsx(
    "a",
    {
      href,
      target: "_blank",
      rel: "noopener noreferrer",
      onClick: handleClick,
      className,
      children
    }
  );
};
const Home = () => {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "太陽光・蓄電池で後悔しないための最後の確認ポイント",
    "description": "東京ガスの太陽光・蓄電池シミュレーション。導入前に確認すべき「途中解約リスク」「費用の決まり方」「補助金の事実」をまとめました。",
    "author": {
      "@type": "Organization",
      "name": "東京ガス 太陽光・蓄電池相談所",
      "url": "https://site-0001-tokyogas.vercel.app/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "東京ガス 太陽光・蓄電池相談所",
      "logo": {
        "@type": "ImageObject",
        "url": "https://site-0001-tokyogas.vercel.app/vite.svg"
      }
    },
    "datePublished": "2026-02-26T08:00:00+09:00",
    "dateModified": (/* @__PURE__ */ new Date()).toISOString()
  };
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "ホーム",
        "item": "https://site-0001-tokyogas.vercel.app/"
      }
    ]
  };
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "東京ガスの太陽光・蓄電池｜後悔しないための確認ポイントと無料見積もり",
        description: "あなたのご自宅に太陽光・蓄電池は本当に必要？東京ガスのシステム導入前に確認すべき「途中解約リスク」「費用の決まり方」「補助金の事実」をまとめました。まずは1分チェックから。",
        path: "/"
      }
    ),
    /* @__PURE__ */ jsx(StructuredData, { data: articleData }),
    /* @__PURE__ */ jsx(StructuredData, { data: breadcrumbData }),
    /* @__PURE__ */ jsxs("section", { className: "bg-gradient-to-b from-[#003366] to-[#004080] text-white pt-16 pb-24 px-6 relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mt-20 -mr-20 blur-3xl" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 w-80 h-80 bg-blue-500 opacity-20 rounded-full -mb-32 -ml-32 blur-3xl" }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto relative z-10 text-center", children: [
        /* @__PURE__ */ jsx("span", { className: "inline-block bg-blue-800 text-blue-100 font-bold px-4 py-1.5 rounded-full text-xs md:text-sm mb-6 border border-blue-700 tracking-wider shadow-inner", children: "ネットの口コミより、我が家の実数を" }),
        /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-8 tracking-tight", children: [
          "太陽光・蓄電池で",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "text-orange-400", children: "後悔しない" }),
          "ための",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "underline decoration-orange-500 decoration-4 underline-offset-8", children: "最後の確認ポイント" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-blue-100 mb-10 leading-relaxed max-w-2xl mx-auto", children: "高額な買い物だからこそ「途中解約の恐怖」や「補助金の不確実性」に直面します。でも、条件さえ合えば最大のメリットを生み出せるのが東京ガスのパッケージ。" }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20 inline-block max-w-xl w-full", children: [
          /* @__PURE__ */ jsx("p", { className: "font-bold text-white mb-4 text-lg", children: "検討中ですか？まずは『1分』で対象外判定を。" }),
          /* @__PURE__ */ jsx(Link, { to: "/eligible", className: "block bg-orange-500 text-white font-black text-xl py-4 px-8 rounded-full hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full text-center", children: "我が家は対象？ 1分チェックへ" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-blue-200 mt-3 font-medium", children: "※関東1都6県・戸建て（1981年以降）の条件等を確認します" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-20 px-6 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-black text-[#003366] mb-4", children: "導入前に潰すべき「3つの不安」" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "このポイントを曖昧にしたまま契約するのは危険です。各専門ページで対処法を確認してください。" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-200 flex flex-col md:flex-row gap-6 items-center md:items-start group hover:border-red-200 transition-colors", children: [
          /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-red-50 text-red-500 flex items-center justify-center rounded-2xl text-3xl font-black shrink-0", children: "1" }),
          /* @__PURE__ */ jsxs("div", { className: "flex-grow text-center md:text-left", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-800 mb-2 group-hover:text-red-600 transition-colors", children: "「途中で家を手放したらどうなるの？」" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-4 text-sm leading-relaxed", children: "引っ越しや解体時の「解約金・撤去費」トラブルが最大の恐怖です。契約形態による影響と、見積もり時に聞くべき必須の質問リストをまとめました。" }),
            /* @__PURE__ */ jsx(Link, { to: "/cancellation", className: "text-[#003366] font-bold text-sm hover:underline flex items-center justify-center md:justify-start gap-1", children: "途中解約・清算金のリスクを確認する →" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-200 flex flex-col md:flex-row gap-6 items-center md:items-start group hover:border-orange-200 transition-colors", children: [
          /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-orange-50 text-orange-500 flex items-center justify-center rounded-2xl text-3xl font-black shrink-0", children: "2" }),
          /* @__PURE__ */ jsxs("div", { className: "flex-grow text-center md:text-left", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors", children: "「結局、我が家だったらいくらなの？」" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-4 text-sm leading-relaxed", children: "屋根の形状、足場の面積、分電盤の古さで値段は大きく変わります。ネットの平均価格は役に立ちません。見積もりの「罠」と内訳の見方を解説します。" }),
            /* @__PURE__ */ jsx(Link, { to: "/cost", className: "text-[#003366] font-bold text-sm hover:underline flex items-center justify-center md:justify-start gap-1", children: "費用の決まり方と見積もりの見方へ →" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-200 flex flex-col md:flex-row gap-6 items-center md:items-start group hover:border-blue-200 transition-colors", children: [
          /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-blue-50 text-blue-500 flex items-center justify-center rounded-2xl text-3xl font-black shrink-0", children: "3" }),
          /* @__PURE__ */ jsxs("div", { className: "flex-grow text-center md:text-left", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-800 mb-2 group-hover:text-[#003366] transition-colors", children: "「高額な補助金は本当に絶対もらえる？」" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-4 text-sm leading-relaxed", children: "補助金は「予算上限」や「厳格な期限・書類」に縛られます。確定事項ではないからこそ、申請手続きの流れと、入金遅れによる資金繰りの注意点を知る必要があります。" }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4 justify-center md:justify-start", children: [
              /* @__PURE__ */ jsx(Link, { to: "/subsidy-tokyo", className: "text-[#003366] font-bold text-sm hover:underline", children: "東京都の補助金とは →" }),
              /* @__PURE__ */ jsx(Link, { to: "/subsidy-payment", className: "text-[#003366] font-bold text-sm hover:underline", children: "補助金はいつ入る？ →" })
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 px-6 bg-white border-t border-gray-100", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center gap-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/2", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl font-black text-[#003366] mb-6 leading-tight", children: [
          "なぜ、あえて",
          /* @__PURE__ */ jsx("br", {}),
          "「東京ガス」に相談するのか？"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-6 leading-relaxed", children: "世の中には「初期費用0円」や「格安」を謳う販売代理店が星の数ほど存在します。しかし太陽光と蓄電池は、家の屋根に穴を開け、15年以上も使い続ける住宅インフラです。" }),
        /* @__PURE__ */ jsxs("p", { className: "text-gray-600 mb-6 leading-relaxed", children: [
          "**「いざという時に会社が倒産していて連絡がつかない」「下請けの工事品質が悪くて雨漏りした」**。",
          /* @__PURE__ */ jsx("br", {}),
          "このようなリスクを極限まで下げるために、光熱費を知り尽くした日本最大級のインフラ企業である東京ガスのパッケージが選ばれています。"
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/installation", className: "text-blue-600 font-bold hover:underline", children: "工事・施工の不安について詳しく見る →" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/2 bg-blue-50 p-8 rounded-2xl border border-blue-100", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-bold text-xl text-[#003366] mb-6", children: "無料オンライン相談のメリット" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "text-green-500 text-xl", children: "✅" }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: "プロの担当者が家の図面から「正確な発電量と費用」をシミュレーション" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "text-green-500 text-xl", children: "✅" }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: "「我が家は解約したらどうなるのか？」を直接確認できる" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "text-green-500 text-xl", children: "✅" }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-700 font-bold text-red-600", children: "※納得いかなければ契約する必要は一切なし（見積もり無料）" })
          ] })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 px-6 bg-[#003366] text-white text-center", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-black mb-8 leading-tight", children: [
        "モヤモヤ悩むより、プロに",
        /* @__PURE__ */ jsx("br", { className: "md:hidden" }),
        "直接聞くのが最短です。"
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-blue-200 mb-10 text-lg leading-relaxed", children: [
        "導入できるかどうかも、いくらかかるかも、すべては図面次第です。",
        /* @__PURE__ */ jsx("br", {}),
        "「補助金の枠が残っているうちに」まずは専門家に現状を確認してもらいましょう。"
      ] }),
      /* @__PURE__ */ jsx(CTALink, { href: "https://home.tokyo-gas.co.jp/power/solar/index.html", eventName: "generate_lead", className: "inline-block bg-orange-500 text-white font-black text-xl py-5 px-10 rounded-full hover:bg-orange-600 transition-colors shadow-2xl transform hover:-translate-y-1 w-full sm:w-auto", children: "無料相談・見積もりに申し込む" }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-xs text-blue-300", children: "※公式サイトへ移動します。相談後、導入を見送ることも可能です。" })
    ] }) })
  ] });
};
function NotFound() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gray-50 flex flex-col justify-center items-center text-center px-4", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-9xl font-black text-[#003366] mb-4 tracking-tighter drop-shadow-sm", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold text-gray-800 mb-6", children: "ページが見つかりません" }),
    /* @__PURE__ */ jsx("p", { className: "text-gray-500 mb-10 max-w-md mx-auto leading-relaxed", children: "お探しのページは、移動または削除されたか、URLが間違っている可能性があります。" }),
    /* @__PURE__ */ jsxs(
      Link,
      {
        to: "/",
        className: "bg-[#FF6600] hover:bg-[#E65C00] text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition hover:-translate-y-1 flex items-center gap-2",
        children: [
          /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z", clipRule: "evenodd" }) }),
          "トップページへ戻る"
        ]
      }
    )
  ] });
}
const Eligible = () => {
  const [steps, setSteps] = useState({ 1: null, 2: null, 3: null });
  const getResult = () => {
    if (steps[1] === null || steps[2] === null || steps[3] === null) return null;
    if (steps[1] === "yes" && steps[2] === "yes" && steps[3] === "yes") return "A";
    if (steps[1] === "yes" && steps[2] === "yes" && steps[3] === "unknown") return "B";
    return "C";
  };
  const result = getResult();
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "東京ガスの太陽光・蓄電池は対象？関東1都6県・戸建て・1981年以降の1分チェック",
        description: "あなたのご自宅が東京ガスの太陽光・蓄電池パッケージの導入対象になるかを1分で診断。築年数や地域などの公式条件に基づき、申し込み前に事前確認ができます。",
        path: "/eligible"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-20", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxs("h1", { className: "text-2xl sm:text-3xl md:text-5xl font-black text-[#003366] leading-tight mb-6", children: [
          /* @__PURE__ */ jsx("span", { className: "block text-lg md:text-2xl text-blue-600 mb-2 font-bold tracking-widest", children: "お申し込み前の必須確認" }),
          "我が家は導入の",
          /* @__PURE__ */ jsx("span", { className: "text-orange-500", children: "対象外" }),
          "？",
          /* @__PURE__ */ jsx("br", {}),
          "1分セルフ・チェック"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed", children: "実は、すべての家で太陽光や蓄電池が設置できるわけではありません。申し込んだ後に「対象外でした」と断られる手間を省くため、まずは公式の条件に基づいた簡易チェックをお試しください。" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl shadow-xl border border-blue-50 overflow-hidden mb-16", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-[#003366] py-4 px-6", children: /* @__PURE__ */ jsxs("h2", { className: "text-white font-bold text-lg md:text-xl text-center flex items-center justify-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "w-6 h-6 rounded-full bg-white text-[#003366] text-sm flex items-center justify-center", children: "?" }),
          "以下の3つの質問にお答えください"
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "p-6 md:p-10", children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-8 border-b border-gray-100 pb-8", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-bold text-gray-800 text-lg mb-4", children: "Q1: お住まいの地域は以下のいずれかですか？" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500 mb-4", children: "東京都・神奈川県・千葉県・埼玉県・茨城県・栃木県・群馬県" }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
              /* @__PURE__ */ jsx("button", { onClick: () => setSteps({ ...steps, 1: "yes" }), className: `flex-1 py-3 rounded-lg font-bold transition-all ${steps[1] === "yes" ? "bg-[#003366] text-white shadow-md" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`, children: "はい" }),
              /* @__PURE__ */ jsx("button", { onClick: () => setSteps({ ...steps, 1: "no" }), className: `flex-1 py-3 rounded-lg font-bold transition-all ${steps[1] === "no" ? "bg-orange-500 text-white shadow-md" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`, children: "いいえ" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mb-8 border-b border-gray-100 pb-8", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-bold text-gray-800 text-lg mb-4", children: "Q2: お住まいは「戸建て」の自己所有物件ですか？" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500 mb-4", children: "マンションやアパート等の集合住宅、または賃貸物件は対象外となります。" }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
              /* @__PURE__ */ jsx("button", { onClick: () => setSteps({ ...steps, 2: "yes" }), className: `flex-1 py-3 rounded-lg font-bold transition-all ${steps[2] === "yes" ? "bg-[#003366] text-white shadow-md" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`, children: "はい" }),
              /* @__PURE__ */ jsx("button", { onClick: () => setSteps({ ...steps, 2: "no" }), className: `flex-1 py-3 rounded-lg font-bold transition-all ${steps[2] === "no" ? "bg-orange-500 text-white shadow-md" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`, children: "いいえ" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-bold text-gray-800 text-lg mb-4", children: "Q3: お住まいの建築確認日は「1981年（昭和56年）6月1日以降」ですか？" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500 mb-4", children: "新耐震基準を満たしているかどうかの確認です。よくわからない場合は「わからない」を選択してください。" }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-2 sm:gap-4", children: [
              /* @__PURE__ */ jsx("button", { onClick: () => setSteps({ ...steps, 3: "yes" }), className: `flex-1 py-3 text-sm sm:text-base rounded-lg font-bold transition-all ${steps[3] === "yes" ? "bg-[#003366] text-white shadow-md" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`, children: "はい" }),
              /* @__PURE__ */ jsx("button", { onClick: () => setSteps({ ...steps, 3: "no" }), className: `flex-1 py-3 text-sm sm:text-base rounded-lg font-bold transition-all ${steps[3] === "no" ? "bg-orange-500 text-white shadow-md" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`, children: "いいえ" }),
              /* @__PURE__ */ jsx("button", { onClick: () => setSteps({ ...steps, 3: "unknown" }), className: `flex-1 py-3 text-sm sm:text-base rounded-lg font-bold transition-all ${steps[3] === "unknown" ? "bg-blue-500 text-white shadow-md" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`, children: "わからない" })
            ] })
          ] }),
          result && /* @__PURE__ */ jsxs("div", { className: "mt-10 p-6 md:p-8 rounded-xl animate-fade-in bg-gray-50 border-2 border-dashed border-gray-300", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-center font-black text-xl md:text-2xl mb-4 text-gray-800", children: "診断結果" }),
            result === "A" && /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "text-green-600 text-2xl md:text-3xl font-black mb-4", children: "対象の可能性が非常に高いです！" }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-6", children: "基本条件をすべてクリアしています。屋根の形状等による最終判断が必要なため、まずは無料のWebお見積もりへお進みください。" }),
              /* @__PURE__ */ jsx("a", { href: "#cta", className: "inline-block bg-orange-500 text-white font-bold text-lg py-4 px-10 rounded-full hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1", children: "無料見積もりで詳細を確認する" })
            ] }),
            result === "B" && /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "text-blue-600 text-2xl md:text-3xl font-black mb-4", children: "図面での確認が必要です" }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-6", children: "地域と戸建ての条件はクリアしています。築年数が不明な場合でも、設計図書を用意して無料相談に申し込むことで、プロが設置可能か判断してくれます。" }),
              /* @__PURE__ */ jsx("a", { href: "#cta", className: "inline-block bg-[#003366] text-white font-bold text-lg py-4 px-10 rounded-full hover:bg-blue-800 transition-colors shadow-lg", children: "図面を準備して相談する" })
            ] }),
            result === "C" && /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "text-gray-600 text-xl font-bold mb-4", children: "申し訳ありません。対象外の可能性が高いです。" }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-sm mb-6", children: "東京ガスの本パッケージは、関東1都6県の戸建て（新耐震基準クリア）に限定されております。条件に合わず残念ですが、本サイトの利用による無駄な申し込みの手間が省けましたら幸いです。" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-black text-[#003366] text-center mb-10", children: "対象条件に関するよくある質問" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("details", { className: "bg-white rounded-lg shadow-sm border border-gray-200 group", children: [
            /* @__PURE__ */ jsxs("summary", { className: "font-bold p-5 cursor-pointer text-gray-800 list-none flex justify-between items-center pr-10 relative", children: [
              /* @__PURE__ */ jsx("span", { className: "text-blue-600 mr-3", children: "Q." }),
              " 建築確認日（1981年以降）って何を見ればわかりますか？",
              /* @__PURE__ */ jsx("span", { className: "absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 group-open:rotate-180 transition-transform", children: "▼" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "p-5 pt-0 text-gray-600 text-sm md:text-base border-t border-gray-100 mt-2 pt-4", children: "ご自宅を建てた際の「建築確認済証」または「検査済証」の日付をご確認ください。（※建物の完成日や引き渡し日ではありません）。手元に資料がない場合でも、無料相談の際に担当者に「資料がない」旨を伝えて確認してもらうことが可能です。" })
          ] }),
          /* @__PURE__ */ jsxs("details", { className: "bg-white rounded-lg shadow-sm border border-gray-200 group", children: [
            /* @__PURE__ */ jsxs("summary", { className: "font-bold p-5 cursor-pointer text-gray-800 list-none flex justify-between items-center pr-10 relative", children: [
              /* @__PURE__ */ jsx("span", { className: "text-blue-600 mr-3", children: "Q." }),
              " 現在建築中の家でも申し込みできますか？",
              /* @__PURE__ */ jsx("span", { className: "absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 group-open:rotate-180 transition-transform", children: "▼" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "p-5 pt-0 text-gray-600 text-sm md:text-base border-t border-gray-100 mt-2 pt-4", children: "基本的に既築（すでに建っている）住宅への「後付け」を想定したパッケージとなっています。新築建築中の場合は、まずはハウスメーカーや工務店へ「東京ガスのシステムを導入できるか」ご自身で相談・調整していただく必要があります。" })
          ] }),
          /* @__PURE__ */ jsxs("details", { className: "bg-white rounded-lg shadow-sm border border-gray-200 group", children: [
            /* @__PURE__ */ jsxs("summary", { className: "font-bold p-5 cursor-pointer text-gray-800 list-none flex justify-between items-center pr-10 relative", children: [
              /* @__PURE__ */ jsx("span", { className: "text-blue-600 mr-3", children: "Q." }),
              " 東京ガスとガスや電気の契約をしていなくても申し込めますか？",
              /* @__PURE__ */ jsx("span", { className: "absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 group-open:rotate-180 transition-transform", children: "▼" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "p-5 pt-0 text-gray-600 text-sm md:text-base border-t border-gray-100 mt-2 pt-4", children: "はい、可能です。現在のガスや電気の契約会社が他社であっても、対象エリア等その他の条件を満たしていれば申し込み・契約ができます。" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-right mt-4", children: /* @__PURE__ */ jsx(Link, { to: "/faq", className: "text-sm text-blue-600 hover:underline", children: "もっと質問を見る →" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-6 md:p-8 rounded-xl border border-blue-100 mb-12", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 leading-relaxed mb-4", children: "※上記は基本的な条件です。この他に「屋根の面積・形状（急勾配など）」「劣化状況」「設置スペース（蓄電池を置く場所）」などにより、現地調査後に設置不可となるケースもございます。" }),
        /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-600 leading-relaxed", children: [
          "※最新の対象条件については、",
          /* @__PURE__ */ jsx("a", { href: "https://support.tokyo-gas.co.jp/", target: "_blank", rel: "noopener noreferrer", className: "text-blue-600 hover:underline", children: "東京ガス公式FAQサイト" }),
          "等もあわせてご確認ください。"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "border-t-2 border-blue-100 pt-10 mt-10", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg text-[#003366] mb-6 text-center", children: "次に読むべき重要なポイント" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
          /* @__PURE__ */ jsxs(Link, { to: "/cost", className: "bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 text-center group", children: [
            /* @__PURE__ */ jsx("div", { className: "text-2xl mb-2", children: "💰" }),
            /* @__PURE__ */ jsx("div", { className: "font-bold text-gray-800 group-hover:text-blue-600 transition-colors", children: "費用の決まり方" }),
            /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500 mt-2", children: "見積もりの見方と変動要因" })
          ] }),
          /* @__PURE__ */ jsxs(Link, { to: "/cancellation", className: "bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 text-center group", children: [
            /* @__PURE__ */ jsx("div", { className: "text-2xl mb-2", children: "⚠️" }),
            /* @__PURE__ */ jsx("div", { className: "font-bold text-gray-800 group-hover:text-blue-600 transition-colors", children: "解約・引越しの注意" }),
            /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500 mt-2", children: "契約前に知るべき解約金リスク" })
          ] }),
          /* @__PURE__ */ jsxs(Link, { to: "/", className: "bg-[#003366] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[#003366] text-center group", children: [
            /* @__PURE__ */ jsx("div", { className: "text-2xl mb-2", children: "🏠" }),
            /* @__PURE__ */ jsx("div", { className: "font-bold text-white transition-colors", children: "トップページへ" }),
            /* @__PURE__ */ jsx("div", { className: "text-xs text-blue-200 mt-2", children: "すべての不安を解消する" })
          ] })
        ] })
      ] })
    ] })
  ] });
};
const Cost = () => {
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "東京ガスの太陽光・蓄電池はいくら？費用が変わるポイントと見積もりの見方",
        description: "「我が家だといくらかかるの？」という疑問に対し、屋根の形状や設備の容量など、金額が変動する3つのポイントを解説。相見積もりの考え方も紹介します。",
        path: "/cost"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-20", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 border-b border-gray-200 pb-10", children: [
        /* @__PURE__ */ jsxs("h1", { className: "text-3xl md:text-4xl font-black text-[#003366] leading-tight mb-6", children: [
          "東京ガスの太陽光・蓄電池はいくら？",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "text-2xl md:text-3xl text-gray-700 mt-2 block", children: "費用が変わるポイントと見積もりの見方" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg font-bold text-orange-600 bg-orange-50 inline-block px-6 py-3 rounded-full border border-orange-200", children: "結論：金額は家ごとに完全に異なります。まずは「内訳つきの見積もり」を取ることが最短ルートです。" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 md:p-10 rounded-xl shadow-sm border border-gray-200 mb-16", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold text-gray-800 mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-4", children: [
          /* @__PURE__ */ jsx("span", { className: "bg-[#003366] text-white px-4 py-2 rounded-lg text-sm tracking-wider shadow-sm shrink-0", children: "POINT 1" }),
          /* @__PURE__ */ jsx("span", { children: "費用が変動する3つの大きな要因" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-6 rounded-lg border border-blue-100 relative pt-12", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl shadow-md border-4 border-blue-50", children: "🏠" }),
            /* @__PURE__ */ jsx("h3", { className: "font-bold text-center text-[#003366] mb-3 text-lg", children: "1. 屋根の広さと形状" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 leading-relaxed", children: "パネルを何枚載せられるかで基本料金が変わります。また、足場を組む面積や、特殊な屋根材（瓦など）の施工難易度によっても工事費が変動します。" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-6 rounded-lg border border-blue-100 relative pt-12", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl shadow-md border-4 border-blue-50", children: "⚡" }),
            /* @__PURE__ */ jsx("h3", { className: "font-bold text-center text-[#003366] mb-3 text-lg", children: "2. 設備の容量選び" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 leading-relaxed", children: "日中の電気使用量に合わせて、適切な蓄電池の容量（kWh）を選ぶ必要があります。容量が大きいほど高額になりますが、小さすぎると停電時や夜間に不足します。" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-6 rounded-lg border border-blue-100 relative pt-12", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl shadow-md border-4 border-blue-50", children: "🛠️" }),
            /* @__PURE__ */ jsx("h3", { className: "font-bold text-center text-[#003366] mb-3 text-lg", children: "3. 付帯工事・電気工事" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 leading-relaxed", children: "ご自宅の分電盤（ブレーカー）の古さや、配線を隠すための家の構造によって、追加の電気工事費が発生するケースがあります。" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-[#003366] mb-8 pb-2 border-b-2 border-blue-100", children: "絶対に確認すべき「見積もりチェックリスト」" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-6", children: "見積もりが出た際は、以下の項目が含まれているか、または金額が明記されているかを確認してください。トラブルを防ぐ防波堤になります。" }),
        /* @__PURE__ */ jsx("div", { className: "bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-inner", children: /* @__PURE__ */ jsxs("ul", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "text-green-600 text-xl font-bold mt-1", children: "☑️" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("strong", { className: "text-gray-800 block", children: "機器代と工事費が分かれているか" }),
              /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-500", children: "「一式」とだけ書かれている場合は内訳を求めましょう。" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "text-green-600 text-xl font-bold mt-1", children: "☑️" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("strong", { className: "text-gray-800 block", children: "足場代は含まれているか" }),
              /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-500", children: "後から「足場代は別でした」と言われないための確認項目です。" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "text-green-600 text-xl font-bold mt-1", children: "☑️" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("strong", { className: "text-gray-800 block", children: "補助金の「見込み額」と「適用後の実質負担額」" }),
              /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-500 text-red-500 font-bold", children: "※補助金は確定ではない旨の説明を担当者から必ず受けてください。" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "text-green-600 text-xl font-bold mt-1", children: "☑️" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("strong", { className: "text-gray-800 block", children: "保証内容（機器保証、施工保証、自然災害補償）が明記されているか" }),
              /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-500", children: "各保証の「年数」と「適用範囲」の見落としがないようにします。" })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-[#003366] mb-8 pb-2 border-b-2 border-blue-100", children: "よくある質問（費用・相見積もり）" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("details", { className: "bg-white rounded-lg shadow-sm border border-gray-200 group", children: [
            /* @__PURE__ */ jsxs("summary", { className: "font-bold p-5 cursor-pointer text-gray-800 list-none flex justify-between items-center pr-10 relative", children: [
              /* @__PURE__ */ jsx("span", { className: "text-blue-600 mr-3", children: "Q." }),
              " 他社と相見積もりをした方がいいですか？",
              /* @__PURE__ */ jsx("span", { className: "absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 group-open:rotate-180 transition-transform", children: "▼" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-5 pt-0 text-gray-600 text-sm md:text-base border-t border-gray-100 mt-2 pt-4 leading-relaxed", children: [
              "基本的に相見積もりは推奨されます。ただし、比較する際は",
              /* @__PURE__ */ jsx("strong", { className: "text-gray-800", children: "「パネルのメーカー」「蓄電池の容量」「保証年数」「足場代の有無」などを同条件に揃えて" }),
              "比較しないと、安かろう悪かろうの業者を選んでしまうリスクがあります。価格だけでなく、アフターサポートの安心感（東京ガスという看板の強みなど）も含めて総合的に判断してください。"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("details", { className: "bg-white rounded-lg shadow-sm border border-gray-200 group", children: [
            /* @__PURE__ */ jsxs("summary", { className: "font-bold p-5 cursor-pointer text-gray-800 list-none flex justify-between items-center pr-10 relative", children: [
              /* @__PURE__ */ jsx("span", { className: "text-blue-600 mr-3", children: "Q." }),
              " 初期費用0円のプランもあると聞きましたが？",
              /* @__PURE__ */ jsx("span", { className: "absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 group-open:rotate-180 transition-transform", children: "▼" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "p-5 pt-0 text-gray-600 text-sm md:text-base border-t border-gray-100 mt-2 pt-4 leading-relaxed", children: "いわゆる「PPAモデル（第三者所有モデル）」やリース契約のことです。初期費用がかからない分、契約期間中は売電収入が得られなかったり、長期的には一括購入より総支払額が高くなるケースがあります。本サイトでは、補助金を活用した「購入」をご案内しています。" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-[#003366] rounded-2xl p-8 md:p-12 text-center text-white shadow-xl relative overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-blue-500 rounded-full opacity-20 blur-2xl" }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-white rounded-full opacity-10 blur-2xl" }),
        /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-black mb-6 relative z-10", children: "ネットの口コミより、我が家の「実数」を。" }),
        /* @__PURE__ */ jsxs("p", { className: "mb-8 text-blue-100 leading-relaxed max-w-2xl mx-auto relative z-10", children: [
          "「うちは結局いくら？」という疑問は、ネットを何時間検索しても答えは出ません。",
          /* @__PURE__ */ jsx("br", { className: "hidden md:inline" }),
          "まずは東京ガスの無料シミュレーションで、ご自宅専用の見積もりを出してみましょう。"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
          /* @__PURE__ */ jsx(CTALink, { href: "https://home.tokyo-gas.co.jp/power/solar/index.html", eventName: "click_cta_cost", className: "inline-block bg-orange-500 text-white font-bold text-lg md:text-xl py-4 px-10 rounded-full hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto", children: "我が家の図面で無料見積もりをする" }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-xs text-blue-300", children: "※お見積もりは無料です。無理な営業等はございません。" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "border-t-2 border-gray-100 pt-10 mt-12", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg text-gray-700 mb-6 text-center", children: "費用と一緒に確認すべき重要項目" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxs(Link, { to: "/cancellation", className: "bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 text-center flex items-center justify-between group", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-left", children: [
              /* @__PURE__ */ jsx("div", { className: "text-xs text-red-500 font-bold mb-1", children: "最大の不安を解消" }),
              /* @__PURE__ */ jsx("div", { className: "font-bold text-gray-800 group-hover:text-blue-600 transition-colors text-lg", children: "解約・引越しの「清算金」リスク" })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-xl text-gray-300 group-hover:text-blue-600 transition-colors", children: "→" })
          ] }),
          /* @__PURE__ */ jsxs(Link, { to: "/subsidy-tokyo", className: "bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 text-center flex items-center justify-between group", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-left", children: [
              /* @__PURE__ */ jsx("div", { className: "text-xs text-blue-500 font-bold mb-1", children: "費用を下げるカギ" }),
              /* @__PURE__ */ jsx("div", { className: "font-bold text-gray-800 group-hover:text-blue-600 transition-colors text-lg", children: "東京都の補助金と注意点" })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-xl text-gray-300 group-hover:text-blue-600 transition-colors", children: "→" })
          ] })
        ] })
      ] })
    ] })
  ] });
};
const Cancellation = () => {
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "途中解約や引っ越しが不安な人へ｜東京ガス太陽光の契約前に確認するポイント",
        description: "「もし途中で引っ越すことになったらどうなる？」太陽光や蓄電池の長期契約における最大の不安である「途中解約・清算金・撤去費」に関する事前の確認ポイントをまとめました。",
        path: "/cancellation"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-20", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 border-b border-gray-200 pb-10", children: [
        /* @__PURE__ */ jsx("span", { className: "inline-block bg-red-100 text-red-700 font-bold px-4 py-1.5 rounded-full text-sm mb-4 border border-red-200 tracking-wider", children: "最大の不安要素" }),
        /* @__PURE__ */ jsx("h1", { className: "text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-6", children: "途中解約・引っ越しのリスク" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed", children: "太陽光・蓄電池は10年、15年と長く使うシステムです。「途中で家を手放すことになったら莫大な違約金がかかるのでは？」と不安に思うのは当然です。契約前に「出口戦略」を確認しておきましょう。" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-red-50 border-l-4 border-red-500 p-6 md:p-8 rounded-r-lg mb-16 shadow-sm", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-red-800 mb-4", children: "結論：金額を決めるのは「契約形態」です" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-700 leading-relaxed mb-4", children: "途中解約の条件や精算金は、どのようなプラン（一括購入、ローン、リース、定額サービス等）で契約したかにより完全に異なります。" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-700 leading-relaxed font-bold bg-white p-4 rounded border border-red-100", children: "ネット上の「〇〇万円請求された！」という口コミに怯えるのではなく、見積もりの段階で担当者に「我が家のプランの場合、5年後に引っ越すとしたらどうなりますか？」と直接確認し、書面で残すことが最大の防御策です。" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-[#003366] mb-8 pb-2 border-b-2 border-blue-100", children: "契約前に担当者に聞くべき「質問テンプレ」" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-6", children: "以下の項目をスマホにメモ（または印刷）して、無料相談・見積もりの際に担当者にそのまま質問してください。" }),
        /* @__PURE__ */ jsx("div", { className: "bg-white rounded-xl p-8 border border-gray-200 shadow-md", children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsx("div", { className: "border-b text-gray-700 uppercase tracking-widest text-xs font-bold pb-2 border-gray-100", children: "質問リスト（コピペ用）" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4 font-medium text-gray-800 text-lg", children: [
            /* @__PURE__ */ jsxs("p", { className: "flex items-start gap-3 p-3 bg-gray-50 rounded-lg", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[#003366] font-black", children: "Q1." }),
              /* @__PURE__ */ jsx("span", { children: "「もし途中で家を売却・解体することになった場合、解約手続き（中途解約）はどうなりますか？」" })
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "flex items-start gap-3 p-3 bg-gray-50 rounded-lg", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[#003366] font-black", children: "Q2." }),
              /* @__PURE__ */ jsx("span", { children: "「その際にかかる『清算金』や『違約金』は、どのように計算されますか？」" })
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "flex items-start gap-3 p-3 bg-gray-50 rounded-lg", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[#003366] font-black", children: "Q3." }),
              /* @__PURE__ */ jsx("span", { children: "「家を売る場合、次の持ち主に契約（残債や権利）をそのまま引き継ぐことは可能ですか？」" })
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "flex items-start gap-3 p-3 bg-gray-50 rounded-lg", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[#003366] font-black", children: "Q4." }),
              /* @__PURE__ */ jsx("span", { children: "「もし設備を撤去して更地にする場合、撤去費用はいくらくらい見積もっておけばいいですか？」" })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-[#003366] mb-8 pb-2 border-b-2 border-blue-100", children: "よくあるケースと解釈の考え方" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("details", { className: "bg-white rounded-lg shadow-sm border border-gray-200 group", children: [
            /* @__PURE__ */ jsxs("summary", { className: "font-bold p-5 cursor-pointer text-gray-800 list-none flex justify-between items-center pr-10 relative", children: [
              /* @__PURE__ */ jsx("span", { className: "text-blue-600 mr-3", children: "CASE 1." }),
              " 家を第三者に売却する場合（承継）",
              /* @__PURE__ */ jsx("span", { className: "absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 group-open:rotate-180 transition-transform", children: "▼" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "p-5 pt-0 text-gray-600 text-sm md:text-base border-t border-gray-100 mt-2 pt-4 leading-relaxed", children: "ご自宅の売却価格に「太陽光・蓄電池の価値（ローン残債分など）」を上乗せして販売し、買主に設備をそのまま使ってもらうことで違約金等を回避・相殺できるケースがあります。ただし、契約プランによって権利の移行（承継）ができるかどうかが異なります。" })
          ] }),
          /* @__PURE__ */ jsxs("details", { className: "bg-white rounded-lg shadow-sm border border-gray-200 group", children: [
            /* @__PURE__ */ jsxs("summary", { className: "font-bold p-5 cursor-pointer text-gray-800 list-none flex justify-between items-center pr-10 relative", children: [
              /* @__PURE__ */ jsx("span", { className: "text-blue-600 mr-3", children: "CASE 2." }),
              " 建物を壊して更地にする場合（撤去）",
              /* @__PURE__ */ jsx("span", { className: "absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 group-open:rotate-180 transition-transform", children: "▼" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "p-5 pt-0 text-gray-600 text-sm md:text-base border-t border-gray-100 mt-2 pt-4 leading-relaxed", children: "この場合は、設備の契約自体を中途解約し、残債等の「清算金」を一括で支払うのが一般的です。これに加え、屋根からソーラーパネルを取り外すための「足場代」「撤去工事費」「廃棄費用」が別途発生します。解体予定がある場合は、導入前に「本当に十分な費用対効果が出るか（元が取れるか）」を慎重に考える必要があります。" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-6 rounded-xl border border-blue-100 text-gray-700 leading-relaxed text-sm mb-16", children: [
        /* @__PURE__ */ jsx("p", { className: "mb-3 font-bold text-[#003366]", children: "なぜ「東京ガス」のような大手を選ぶべきか？" }),
        /* @__PURE__ */ jsx("p", { children: "無名の悪質な販売代理店の場合、解約に関する重要事項（清算金の計算方法や撤去時の負担）をわざと小さく記載し、契約を急がせるケースがあります。東京ガスのような長期間のインフラを提供する企業の場合、コンプライアンス上、こうしたリスクについて事前にしっかりと書面や対面で説明を行う責任を持ちます。" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-red-600 font-bold", children: "※それでも、説明を聞かずにサインするのは危険です。必ずご自身で上記の「質問テンプレ」をぶつけて、担当者の誠実さを確かめてください。" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-center relative", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-black text-gray-800 mb-6", children: "不安を潰す最初の一歩はプロに聞くこと" }),
        /* @__PURE__ */ jsx("a", { href: "https://home.tokyo-gas.co.jp/power/solar/index.html", target: "_blank", rel: "noopener noreferrer", className: "inline-block bg-[#003366] text-white font-bold text-lg md:text-xl py-4 px-10 rounded-full hover:bg-blue-800 transition-colors shadow-xl transform hover:-translate-y-1 w-full sm:w-auto", children: "無料相談で途中解約について聞く" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "border-t-2 border-gray-100 pt-10 mt-16", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg text-gray-700 mb-6 text-center", children: "疑問が残る方はこちらもチェック" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxs(Link, { to: "/cost", className: "bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 text-center flex items-center justify-between group", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xl text-gray-300 group-hover:text-blue-600 transition-colors", children: "←" }),
            /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
              /* @__PURE__ */ jsx("div", { className: "text-xs text-blue-500 font-bold mb-1", children: "費用が気になる" }),
              /* @__PURE__ */ jsx("div", { className: "font-bold text-gray-800 group-hover:text-blue-600 transition-colors text-lg", children: "費用の決まり方と見積もり" })
            ] })
          ] }),
          /* @__PURE__ */ jsx(Link, { to: "/", className: "bg-[#003366] text-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[#003366] text-center flex items-center justify-between group", children: /* @__PURE__ */ jsxs("div", { className: "text-left w-full", children: [
            /* @__PURE__ */ jsx("div", { className: "font-bold group-hover:text-blue-200 transition-colors text-lg mb-1", children: "トップページへ戻る" }),
            /* @__PURE__ */ jsx("div", { className: "text-xs text-blue-200", children: "すべての情報を総ざらいする" })
          ] }) })
        ] })
      ] })
    ] })
  ] });
};
const SubsidyTokyo = () => {
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "東京都の太陽光・蓄電池補助金（令和6年度/2024年）の注意点とスケジュール",
        description: "東京都は全国トップクラスの補助金が出ますが、「予算上限」「完了報告の期限」など厳しい罠もあります。東京ガスの担当者に丸投げできる部分と、自分で用意すべき書類を解説します。",
        path: "/subsidy-tokyo"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-20", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 border-b border-gray-200 pb-10", children: [
        /* @__PURE__ */ jsx("span", { className: "inline-block bg-blue-100 text-blue-800 font-bold px-4 py-1.5 rounded-full text-sm mb-4 border border-blue-200 tracking-wider", children: "費用を下げる最大のカギ" }),
        /* @__PURE__ */ jsxs("h1", { className: "text-3xl md:text-5xl font-black text-[#003366] leading-tight mb-6", children: [
          "東京都の強力な補助金と",
          /* @__PURE__ */ jsx("br", { className: "hidden md:inline" }),
          "申請の「罠」"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed", children: "東京都（クール・ネット東京）の補助金は、全国の自治体の中でも群を抜いて高額です。しかし、申請には厳格なルールがあり、「うっかりもらい損ねる」ケースも存在します。" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-yellow-50 to-orange-50 border-l-4 border-orange-500 p-6 md:p-8 rounded-r-lg mb-16 shadow-sm", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-xl font-bold text-orange-800 mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { children: "⚠️" }),
          " 補助金に関する最重要の前提"
        ] }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-gray-700 font-bold", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-orange-500 mt-1", children: "・" }),
            /* @__PURE__ */ jsx("span", { children: "補助金は「先着順（予算上限あり）」です。予算が尽きた時点でその年度は終了します。" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-orange-500 mt-1", children: "・" }),
            /* @__PURE__ */ jsx("span", { children: "交付決定「前」に工事を開始してしまうと、原則として補助金は1円も出ません（事前申請必須）。" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-[#003366] mb-8 pb-2 border-b-2 border-blue-100", children: "東京ガスで契約するメリット：圧倒的な「手続きの代行力」" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-6", children: "役所とのやり取りや、図面・施工写真の提出など、補助金申請は「超」がつくほど煩雑です。東京ガスのような大手インフラ企業を選ぶ最大の隠れメリットがここにあります。" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-xl border border-gray-200 shadow-sm", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-center bg-gray-100 text-gray-500 font-bold py-2 rounded mb-4", children: "お客様がやること" }),
            /* @__PURE__ */ jsxs("ul", { className: "space-y-4 text-sm text-gray-700", children: [
              /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
                /* @__PURE__ */ jsx("span", { className: "shrink-0 bg-blue-100 text-blue-600 w-6 h-6 flex items-center justify-center rounded-full font-bold", children: "1" }),
                /* @__PURE__ */ jsx("span", { children: "住民票や印鑑証明書などの「公的書類」の取得" })
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
                /* @__PURE__ */ jsx("span", { className: "shrink-0 bg-blue-100 text-blue-600 w-6 h-6 flex items-center justify-center rounded-full font-bold", children: "2" }),
                /* @__PURE__ */ jsx("span", { children: "建物の登記簿謄本（全部事項証明書）の用意" })
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
                /* @__PURE__ */ jsx("span", { className: "shrink-0 bg-blue-100 text-blue-600 w-6 h-6 flex items-center justify-center rounded-full font-bold", children: "3" }),
                /* @__PURE__ */ jsx("span", { children: "東京ガスが作成した申請書類への「署名・捺印」" })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "mt-4 p-3 bg-blue-50 text-blue-800 text-xs rounded border border-blue-100", children: "基本的には「役所で証明書を取るだけ」でOKです。" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-[#003366] p-6 rounded-xl border border-blue-800 shadow-sm text-white", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-center bg-blue-800 font-bold py-2 rounded mb-4", children: "東京ガス（または施工店）がやること" }),
            /* @__PURE__ */ jsxs("ul", { className: "space-y-4 text-sm text-blue-100", children: [
              /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
                /* @__PURE__ */ jsx("span", { className: "shrink-0 bg-blue-500 text-white w-6 h-6 flex items-center justify-center rounded-full font-bold", children: "1" }),
                /* @__PURE__ */ jsx("span", { children: "補助事業事務局への「事前審査提出」・「交付申請」" })
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
                /* @__PURE__ */ jsx("span", { className: "shrink-0 bg-blue-500 text-white w-6 h-6 flex items-center justify-center rounded-full font-bold", children: "2" }),
                /* @__PURE__ */ jsx("span", { children: "設備の仕様書、配置図、結線図など「専門的な設計書」の作成" })
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
                /* @__PURE__ */ jsx("span", { className: "shrink-0 bg-blue-500 text-white w-6 h-6 flex items-center justify-center rounded-full font-bold", children: "3" }),
                /* @__PURE__ */ jsx("span", { children: "工事中の「施工状況写真」の撮影と、「実績報告書」の提出（超重要）" })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "mt-4 p-3 bg-orange-500 text-white font-bold text-xs rounded border border-orange-400", children: "プロに任せることで書類不備による「審査落ち」リスクを無くします。" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-[#003366] mb-8 pb-2 border-b-2 border-blue-100", children: "見積もり時に確認すべき「補助金のチェックポイント」" }),
        /* @__PURE__ */ jsx("div", { className: "bg-white rounded-lg p-6 border border-gray-200", children: /* @__PURE__ */ jsxs("ul", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-4 pb-4 border-b border-gray-100", children: [
            /* @__PURE__ */ jsx("span", { className: "text-3xl", children: "🗣️" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("strong", { className: "text-gray-800 block text-lg mb-1", children: "今の時期、予算枠はまだ余っていますか？" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "東京都の補助金は年度終盤（12月〜2月頃）になると予算上限に達し、受付が締め切られるリスクがあります。今から動いて間に合うのか、担当者にシビアに確認してください。" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-4 pb-4 border-b border-gray-100", children: [
            /* @__PURE__ */ jsx("span", { className: "text-3xl", children: "🗣️" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("strong", { className: "text-gray-800 block text-lg mb-1", children: "国の補助金と市区町村の補助金は「併用」できますか？" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "東京都の補助金（都）は、国の補助金（国）や、お住まいの市区町村（区市）の補助金と併用できるケース（二重取り、三重取り）があります。これを見逃すと数十万円単位で損をします。必ず「我が家の住所で、今使えるすべての補助金を加味した見積もりをお願いします」と伝えてください。" })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-center relative", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-black text-gray-800 mb-6", children: "ネットで調べるより、最新の予算状況をプロに聞く" }),
        /* @__PURE__ */ jsx("a", { href: "https://home.tokyo-gas.co.jp/power/solar/index.html", target: "_blank", rel: "noopener noreferrer", className: "inline-block bg-[#003366] text-white font-bold text-lg md:text-xl py-4 px-10 rounded-full hover:bg-blue-800 transition-colors shadow-xl transform hover:-translate-y-1 w-full sm:w-auto", children: "無料相談で補助金の残枠を確認する" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "border-t-2 border-gray-100 pt-10 mt-16", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg text-gray-700 mb-6 text-center", children: "次はこちらも確認してください" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxs(Link, { to: "/subsidy-payment", className: "bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 text-center flex items-center justify-between group", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-left w-full", children: [
              /* @__PURE__ */ jsx("div", { className: "text-xs text-red-500 font-bold mb-1", children: "資金繰りの不安" }),
              /* @__PURE__ */ jsx("div", { className: "font-bold text-gray-800 group-hover:text-blue-600 transition-colors text-lg", children: "補助金はいつ振り込まれる？" })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-xl text-gray-300 group-hover:text-blue-600 transition-colors", children: "→" })
          ] }),
          /* @__PURE__ */ jsx(Link, { to: "/", className: "bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 text-center flex items-center justify-between group", children: /* @__PURE__ */ jsx("div", { className: "text-left w-full", children: /* @__PURE__ */ jsx("div", { className: "font-bold text-gray-600 group-hover:text-blue-600 transition-colors", children: "トップページへ戻る" }) }) })
        ] })
      ] })
    ] })
  ] });
};
const SubsidyPayment = () => {
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "太陽光・蓄電池の補助金はいつ入金される？立て替えによる資金繰りリスク",
        description: "補助金で安くなると言われても、入金されるのは「工事が終わってから数ヶ月後」です。一時的に数百万円をどう立て替えるか、資金繰りの注意点を解説します。",
        path: "/subsidy-payment"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-20", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 border-b border-gray-200 pb-10", children: [
        /* @__PURE__ */ jsx("span", { className: "inline-block bg-red-100 text-red-800 font-bold px-4 py-1.5 rounded-full text-sm mb-4 border border-red-200 tracking-wider", children: "見落としがちな資金繰りの罠" }),
        /* @__PURE__ */ jsxs("h1", { className: "text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-6", children: [
          "補助金は「いつ」",
          /* @__PURE__ */ jsx("br", { className: "hidden md:inline" }),
          "振り込まれるのか？"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed", children: "「補助金を使って実質100万円で導入できる！」という言葉には注意が必要です。補助金は商品を買う時のレジでそのまま「値引き」されるわけではありません。" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-red-50 border-l-4 border-red-500 p-6 md:p-8 rounded-r-lg mb-16 shadow-sm", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-red-800 mb-4", children: "結論：補助金は「後払い」です。一時的な立て替えが必要です。" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-700 leading-relaxed font-bold", children: "基本的に太陽光・蓄電池の補助金は、工事がすべて完了し、メーカーの保証書や設置前後の写真などの「実績報告」を役所に提出して、審査に合格した「後」に、指定した銀行口座に直接振り込まれます。" }),
        /* @__PURE__ */ jsxs("p", { className: "text-gray-700 leading-relaxed mt-4", children: [
          "つまり、販売会社への工事費用の支払いは、",
          /* @__PURE__ */ jsx("strong", { className: "text-black bg-yellow-200 px-1", children: "全額（または補助金を引く前の金額）を先行して支払う" }),
          "か、ローンを組む必要があるのが一般的です。"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-[#003366] mb-8 pb-2 border-b-2 border-blue-100", children: "契約から入金までのモデルスケジュール" }),
        /* @__PURE__ */ jsxs("div", { className: "relative border-l-4 border-blue-200 ml-4 md:ml-8 space-y-10 pl-8 py-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx("span", { className: "absolute -left-[45px] top-1 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-600 border-4 border-white shadow-sm", children: "1" }),
            /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg text-gray-800 mb-2", children: "ご契約・補助金の「交付申請」" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm", children: "東京ガスにて契約。その後、東京ガス側で役所へ「この内容で工事をして補助金をもらう予定です」という申請を出します。" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx("span", { className: "absolute -left-[45px] top-1 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-600 border-4 border-white shadow-sm", children: "2" }),
            /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg text-gray-800 mb-2", children: "役所からの「交付決定通知」" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm", children: "役所の審査が通り、「この金額の枠を確保しました」という通知が来ます。（※ここまで1〜2ヶ月かかることも）" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx("span", { className: "absolute -left-[45px] top-1 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center font-bold text-white border-4 border-white shadow-sm", children: "3" }),
            /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg text-blue-800 mb-2", children: "工事開始 ＆ お支払い（ローン開始）" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm", children: /* @__PURE__ */ jsx("strong", { className: "text-red-500", children: "ここで販売会社へのお支払いが発生します。現金一括の場合は数百万円の出費、ソーラーローンの場合は支払いがスタートします。" }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx("span", { className: "absolute -left-[45px] top-1 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-600 border-4 border-white shadow-sm", children: "4" }),
            /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg text-gray-800 mb-2", children: "実績報告の提出" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm", children: "工事完了後、施工写真や領収書などを役所へ提出します（東京ガスが代行）。" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx("span", { className: "absolute -left-[45px] top-1 w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center font-bold text-white border-4 border-white shadow-sm", children: "5" }),
            /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg text-orange-800 mb-2", children: "補助金の「確定通知」と「入金」" }),
            /* @__PURE__ */ jsxs("p", { className: "text-gray-600 text-sm font-bold bg-orange-50 p-2 rounded border border-orange-100 mt-2", children: [
              "工事完了から概ね【2〜4ヶ月後】に、お客様の口座へ補助金が直接振り込まれます。",
              /* @__PURE__ */ jsx("br", {}),
              "（※役所の混み具合により半年近く待たされるケースもあります）"
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-[#003366] mb-8 pb-2 border-b-2 border-blue-100", children: "「ソーラーローン」を使う場合のポイント" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-6", children: "数百万円の現金を手元から減らしたくない・用意できない場合、多くの人が専用のソーラーローンを活用します。この際、補助金の入金を見越したテクニックがあります。" }),
        /* @__PURE__ */ jsx("div", { className: "bg-white rounded-xl p-8 border border-gray-200 shadow-sm", children: /* @__PURE__ */ jsx("ul", { className: "space-y-6", children: /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-gray-800 border-l-4 border-[#003366] pl-3 mb-2", children: "補助金が入ったら「繰り上げ返済」をする" }),
          /* @__PURE__ */ jsxs("p", { className: "text-gray-600 text-sm", children: [
            "最初は全額でローンを組み、数ヶ月後に補助金が口座に振り込まれたら、その補助金をそのままローンの「一部繰り上げ返済」に充てることで、月々の支払い額を下げたり、返済期間を短縮することが可能です。",
            /* @__PURE__ */ jsx("br", {}),
            "※ただし、金融機関によって繰り上げ返済の手数料がかかる場合があるので、見積もり時に担当者に確認してください。"
          ] })
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-center relative", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-black text-gray-800 mb-6", children: "支払いのタイミングも、シミュレーションで可視化を" }),
        /* @__PURE__ */ jsx("a", { href: "https://home.tokyo-gas.co.jp/power/solar/index.html", target: "_blank", rel: "noopener noreferrer", className: "inline-block bg-[#003366] text-white font-bold text-lg md:text-xl py-4 px-10 rounded-full hover:bg-blue-800 transition-colors shadow-xl transform hover:-translate-y-1 w-full sm:w-auto", children: "無料相談で支払い計画を立てる" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "border-t-2 border-gray-100 pt-10 mt-16", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/subsidy-tokyo", className: "bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 text-center flex items-center justify-between group", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xl text-gray-300 group-hover:text-blue-600 transition-colors", children: "←" }),
          /* @__PURE__ */ jsx("div", { className: "text-right w-full", children: /* @__PURE__ */ jsx("div", { className: "font-bold text-gray-800 group-hover:text-blue-600 transition-colors text-lg", children: "東京都の補助金の仕組みへ" }) })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/", className: "bg-[#003366] text-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[#003366] flex flex-col items-center justify-center group", children: /* @__PURE__ */ jsx("div", { className: "font-bold group-hover:text-blue-200 transition-colors text-lg", children: "トップページへ戻る" }) })
      ] }) })
    ] })
  ] });
};
const Outage = () => {
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "太陽光と蓄電池は停電時にどう動く？「全部の家電は使えない」という事実",
        description: "「蓄電池があれば停電してもいつも通り暮らせる」は半分間違いです。全負荷型と特定負荷型の違いや、エコキュート・IHにおける注意点を正しく理解して後悔を防ぎましょう。",
        path: "/outage"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-20", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 border-b border-gray-200 pb-10", children: [
        /* @__PURE__ */ jsx("span", { className: "inline-block bg-yellow-100 text-yellow-800 font-bold px-4 py-1.5 rounded-full text-sm mb-4 border border-yellow-300 tracking-wider", children: "防災目的で導入する方へ" }),
        /* @__PURE__ */ jsxs("h1", { className: "text-3xl md:text-4xl font-black text-[#003366] leading-tight mb-6", children: [
          "停電時は「いつも通り」",
          /* @__PURE__ */ jsx("br", { className: "hidden md:inline" }),
          "ではない？",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "text-2xl md:text-3xl text-gray-700 mt-2 block", children: "蓄電池のリアルな限界" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed", children: "「台風で停電しても、太陽光と蓄電池があれば普段通りに生活できる」という営業トークを信じてはいけません。契約前に知っておくべき「制限」について解説します。" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 md:p-10 rounded-xl shadow-sm border border-gray-200 mb-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-800 mb-8 border-b-2 border-[#003366] pb-2 inline-block", children: "一番の落とし穴：「全負荷」と「特定負荷」の違い" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-700 mb-6 leading-relaxed", children: "停電した時に、家中のコンセントが使えるようになるわけではありません。選ぶ蓄電池のタイプによって動作が変わります。ここを間違えると「停電したのにリビングのエアコンが動かない！」という悲劇が起きます。" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-red-50 p-6 rounded-lg border border-red-100 relative pt-8", children: [
            /* @__PURE__ */ jsx("span", { className: "bg-red-500 text-white font-bold text-xs px-3 py-1 rounded-full absolute -top-3 left-6", children: "スタンダードだが注意" }),
            /* @__PURE__ */ jsxs("h3", { className: "font-bold text-red-900 mb-3 text-lg flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-xl", children: "🔌" }),
              " 特定負荷タイプ"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-700 leading-relaxed mb-4", children: "停電時に電気が使えるのは、あらかじめ配線しておいた「特定の回路（1〜2部屋分のコンセントや照明など）」のみです。" }),
            /* @__PURE__ */ jsxs("ul", { className: "text-sm text-red-800 space-y-2 font-medium", children: [
              /* @__PURE__ */ jsx("li", { children: "・家中の家電が使えるわけではない" }),
              /* @__PURE__ */ jsx("li", { children: "・200V機器（大型エアコンやIH）は動かないことが多い" }),
              /* @__PURE__ */ jsx("li", { children: "・システム費用は比較的安い" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-6 rounded-lg border border-blue-100 relative pt-8", children: [
            /* @__PURE__ */ jsx("span", { className: "bg-blue-500 text-white font-bold text-xs px-3 py-1 rounded-full absolute -top-3 left-6", children: "理想的だが高額" }),
            /* @__PURE__ */ jsxs("h3", { className: "font-bold text-[#003366] mb-3 text-lg flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-xl", children: "⚡" }),
              " 全負荷タイプ"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-700 leading-relaxed mb-4", children: "停電時に家中のすべてのコンセントに電気が供給されます。200Vにも対応している機種が多く、普段に近い生活が可能です。" }),
            /* @__PURE__ */ jsxs("ul", { className: "text-sm text-blue-800 space-y-2 font-medium", children: [
              /* @__PURE__ */ jsx("li", { children: "・大型エアコンやエコキュートも一応動かせる" }),
              /* @__PURE__ */ jsx("li", { children: "・調子に乗って使いすぎるとすぐに電気が枯渇する（要注意）" }),
              /* @__PURE__ */ jsx("li", { children: "・システム費用は高額になる" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-[#003366] mb-8 pb-2 border-b-2 border-blue-100", children: "オール電化住宅（エコキュート・IH）の注意点" }),
        /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 rounded-lg p-6 border border-gray-200", children: [
          /* @__PURE__ */ jsx("p", { className: "mb-4 text-gray-700", children: "全負荷タイプの蓄電池であっても、停電時に「エコキュートでお湯を沸かす」や「IHクッキングヒーターを使う」ことは推奨されません。" }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 border-l-4 border-orange-500 shadow-sm rounded", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-bold text-orange-700 mb-2", children: "なぜ推奨されないのか？" }),
            /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-600 leading-relaxed", children: [
              "この2つの機器は「電気の消費量」が異常に大きいためです。停電時にこれらを使うと、せっかく蓄電池に貯めていた電気が瞬速で空っぽになります。",
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("br", {}),
              "停電時は、冷蔵庫・スマホの充電・最低限の照明など、命を守るための「省エネ生活」を数日間維持することが本来の目的です。あくまで「非常時のタンク」であるという認識を持ってください。"
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-center relative", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-black text-gray-800 mb-6", children: "我が家に必要なタイプを相談する" }),
        /* @__PURE__ */ jsxs("p", { className: "text-gray-600 mb-8 max-w-xl mx-auto", children: [
          "「要介護のご家族がいるから全負荷必須」「停電リスクが少ない地域だから特定負荷で十分」など、ご家庭によって正解は分かれます。",
          /* @__PURE__ */ jsx("br", {}),
          "無駄に高額な設備を買わされないためにも、プロにご相談ください。"
        ] }),
        /* @__PURE__ */ jsx("a", { href: "https://home.tokyo-gas.co.jp/power/solar/index.html", target: "_blank", rel: "noopener noreferrer", className: "inline-block bg-[#003366] text-white font-bold text-lg md:text-xl py-4 px-10 rounded-full hover:bg-blue-800 transition-colors shadow-xl transform hover:-translate-y-1 w-full sm:w-auto", children: "東京ガスで防災の備えをシミュレーション" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "border-t-2 border-gray-100 pt-10 mt-16 text-center", children: /* @__PURE__ */ jsx(Link, { to: "/", className: "inline-block bg-gray-100 text-gray-700 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow font-bold", children: "トップページへ戻る" }) })
    ] })
  ] });
};
const Installation = () => {
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "太陽光パネル設置の工事トラブル・雨漏りリスクと東京ガスを選ぶ理由",
        description: "「屋根に穴をあけたら雨漏りしない？」「悪徳業者に施工されたらどうしよう」という最大の不安。太陽光設置工事によくあるトラブルと、インフラ大手に頼むべき理由を解説します。",
        path: "/installation"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-20", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 border-b border-gray-200 pb-10", children: [
        /* @__PURE__ */ jsx("span", { className: "inline-block bg-gray-200 text-gray-800 font-bold px-4 py-1.5 rounded-full text-sm mb-4 tracking-wider", children: "施工品質について" }),
        /* @__PURE__ */ jsxs("h1", { className: "text-3xl md:text-5xl font-black text-[#003366] leading-tight mb-6", children: [
          "工事は下請けに丸投げ？",
          /* @__PURE__ */ jsx("br", { className: "hidden md:inline" }),
          "雨漏りは大丈夫？"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed", children: "太陽光パネルの設置について、「屋根に穴をあけるから雨漏りするのでは」と心配される方は非常に多いです。施工不良のリスクと、業者の選び方について解説します。" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 md:p-10 rounded-xl shadow-sm border border-gray-200 mb-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-800 mb-8 border-b-2 border-red-200 pb-2", children: "実際に起きている「ずさんな工事」の事例" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "p-5 border border-red-100 bg-red-50 rounded-lg", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-bold text-red-800 mb-2", children: "💧 雨漏りの発生" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-700", children: "屋根材（瓦やスレートなど）の特性を無視したビス打ちや、防水処理コーキングの手抜きにより、数年後に天井から雨水が染み出してくるケースがあります。" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-5 border border-red-100 bg-red-50 rounded-lg", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-bold text-red-800 mb-2", children: "💨 強風でパネルが飛散" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-700", children: "ボルトの締め付け不足や、メーカー規定の強度計算を無視した施工により、台風の際にパネルが剥がれ飛び、近隣の家屋を破壊する大事故に繋がります。" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-5 border border-red-100 bg-red-50 rounded-lg", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-bold text-red-800 mb-2", children: "📞 業者が倒産し音信不通" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-700", children: "格安で施工したものの、数年後にトラブルが起きたときには「販売会社」も「下請け施工会社」も倒産しており、保証が紙切れになる悲劇が後を絶ちません。" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-[#003366] mb-8 pb-2 border-b-2 border-blue-100", children: "「東京ガス」を窓口にすることの強み" }),
        /* @__PURE__ */ jsxs("p", { className: "text-gray-600 mb-6", children: [
          "もちろん、東京ガスの社員が自ら現場でトンカチを持って工事をするわけではありません。実際に作業を行うのは提携する施工会社です。",
          /* @__PURE__ */ jsx("br", {}),
          "しかし、「どこに工事を依頼するか」において、東京ガスという元請けの存在が圧倒的な安全性をもたらします。"
        ] }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("li", { className: "bg-blue-50 p-6 rounded-lg border border-blue-100 flex gap-4", children: [
            /* @__PURE__ */ jsx("span", { className: "text-3xl", children: "🛡️" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "font-bold text-[#003366] text-lg mb-2", children: "厳しい施工基準と業者の選定" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-700", children: "東京ガスの看板を背負って工事をするため、提携する施工会社には厳格な施工品質が求められます。クレームが多発するような悪質な下請けはそもそも参入できません。" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "bg-blue-50 p-6 rounded-lg border border-blue-100 flex gap-4", children: [
            /* @__PURE__ */ jsx("span", { className: "text-3xl", children: "🏛️" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "font-bold text-[#003366] text-lg mb-2", children: "「倒産しない」という最大の保証" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-700", children: "太陽光の保証は10年〜15年と長期間に及びます。万が一、施工した会社が倒産しても、契約の窓口である「東京ガス」が存在し続ける限り、アフターサポートが宙に浮くリスクを大幅に回避できます。" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-center relative", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-black text-gray-800 mb-6", children: "安さよりも「安心」を選ぶ方へ" }),
        /* @__PURE__ */ jsx("a", { href: "https://home.tokyo-gas.co.jp/power/solar/index.html", target: "_blank", rel: "noopener noreferrer", className: "inline-block bg-[#003366] text-white font-bold text-lg md:text-xl py-4 px-10 rounded-full hover:bg-blue-800 transition-colors shadow-xl transform hover:-translate-y-1 w-full sm:w-auto", children: "東京ガスに無料相談をする" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "border-t-2 border-gray-100 pt-10 mt-16 text-center", children: /* @__PURE__ */ jsx(Link, { to: "/", className: "inline-block bg-gray-100 text-gray-700 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow font-bold", children: "トップページへ戻る" }) })
    ] })
  ] });
};
const FAQ = () => {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "相談やシミュレーションだけで、契約しなくても本当にお金はかかりませんか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "はい、一切かかりません。ご自宅の図面をもとにした発電シミュレーションや、現地での屋根の確認、お見積もりの提示までは完全無料です。提案内容（費用対効果）に納得ができなければ、お断りいただいて全く問題ありませんし、しつこい営業もありません。"
        }
      },
      {
        "@type": "Question",
        "name": "メンテナンスは必要ですか？ランニングコストはどれくらい？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "太陽光パネル自体は基本的に日常のメンテナンスは不要ですが、長期間安全に使うために「4年に1回の定期点検（数万円程度）」が推奨されています。また、パワーコンディショナという機械が10〜15年程度で故障・寿命を迎えるため、将来的にその交換費用（15万〜30万円程度）を見込んでおく必要があります。"
        }
      },
      {
        "@type": "Question",
        "name": "築年数が古い家でも設置できますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "屋根の強度や劣化の状況によります。一般的に1981年（昭和56年）以前の旧耐震基準の建物や、屋根裏の構造が重さに耐えられないと判断された場合は、安全を最優先とし、設置をお断りするケースがあります。現地調査でプロがしっかりと診断します。"
        }
      },
      {
        "@type": "Question",
        "name": "今、他の電力会社（東電など）を使っているのですが、東京ガスと契約しないとダメですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "いいえ。現在のご家庭の「電気の契約先」が東京電力など他の会社であっても、設備の導入・契約は可能です。（※ただし、機器の契約とは別に、売電等の手続きが発生します）"
        }
      }
    ]
  };
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "ホーム",
        "item": "https://site-0001-tokyogas.vercel.app/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "よくある質問",
        "item": "https://site-0001-tokyogas.vercel.app/faq"
      }
    ]
  };
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "東京ガスの太陽光・蓄電池｜よくある質問と導入の最終確認",
        description: "保証内容、メンテナンス費用、契約の流れなど、太陽光・蓄電池の導入に関する細かな疑問を一問一答形式でまとめました。",
        path: "/faq"
      }
    ),
    /* @__PURE__ */ jsx(StructuredData, { data: faqData }),
    /* @__PURE__ */ jsx(StructuredData, { data: breadcrumbData }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-20", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 border-b border-gray-200 pb-10", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-3xl md:text-5xl font-black text-[#003366] leading-tight mb-6", children: "よくある質問（FAQ）" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed", children: "導入に向けた、最後の気になる疑問を解消します。" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4 mb-16", children: [
        /* @__PURE__ */ jsxs("details", { className: "bg-white rounded-lg shadow-sm border border-gray-200 group", children: [
          /* @__PURE__ */ jsxs("summary", { className: "font-bold p-5 cursor-pointer text-gray-800 list-none flex justify-between items-center pr-10 relative text-lg", children: [
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("span", { className: "text-blue-500 font-black", children: "Q." }),
              " 相談やシミュレーションだけで、契約しなくても本当にお金はかかりませんか？"
            ] }),
            /* @__PURE__ */ jsx("span", { className: "absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 group-open:rotate-180 transition-transform", children: "▼" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-5 pt-0 text-gray-600 border-t border-gray-100 mt-2 pt-4 leading-relaxed", children: [
            /* @__PURE__ */ jsx("strong", { className: "text-red-600", children: "はい、一切かかりません。" }),
            /* @__PURE__ */ jsx("br", {}),
            "ご自宅の図面をもとにした発電シミュレーションや、現地での屋根の確認、お見積もりの提示までは完全無料です。提案内容（費用対効果）に納得ができなければ、お断りいただいて全く問題ありませんし、しつこい営業もありません。"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("details", { className: "bg-white rounded-lg shadow-sm border border-gray-200 group", children: [
          /* @__PURE__ */ jsxs("summary", { className: "font-bold p-5 cursor-pointer text-gray-800 list-none flex justify-between items-center pr-10 relative text-lg", children: [
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("span", { className: "text-blue-500 font-black", children: "Q." }),
              " メンテナンスは必要ですか？ランニングコストはどれくらい？"
            ] }),
            /* @__PURE__ */ jsx("span", { className: "absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 group-open:rotate-180 transition-transform", children: "▼" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "p-5 pt-0 text-gray-600 border-t border-gray-100 mt-2 pt-4 leading-relaxed", children: "太陽光パネル自体は基本的に日常のメンテナンスは不要（雨水で汚れが落ちる）ですが、長期間安全に使うために「4年に1回の定期点検（数万円程度）」が推奨されています。また、電力を変換する「パワーコンディショナ」という機械が10〜15年程度で故障・寿命を迎えるため、将来的にその交換費用（15万〜30万円程度）を見込んでおく必要があります。" })
        ] }),
        /* @__PURE__ */ jsxs("details", { className: "bg-white rounded-lg shadow-sm border border-gray-200 group", children: [
          /* @__PURE__ */ jsxs("summary", { className: "font-bold p-5 cursor-pointer text-gray-800 list-none flex justify-between items-center pr-10 relative text-lg", children: [
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("span", { className: "text-blue-500 font-black", children: "Q." }),
              " 築年数が古い家でも設置できますか？"
            ] }),
            /* @__PURE__ */ jsx("span", { className: "absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 group-open:rotate-180 transition-transform", children: "▼" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-5 pt-0 text-gray-600 border-t border-gray-100 mt-2 pt-4 leading-relaxed", children: [
            "屋根の強度や劣化の状況によります。一般的に1981年（昭和56年）以前の旧耐震基準の建物や、屋根裏の構造が重さに耐えられないと判断された場合は、安全を最優先とし、設置をお断りするケースがあります。現地調査でプロがしっかりと診断します。",
            /* @__PURE__ */ jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsx(Link, { to: "/eligible", className: "text-blue-600 hover:underline", children: "▶ ご自宅が対象かどうか1分チェックする" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("details", { className: "bg-white rounded-lg shadow-sm border border-gray-200 group", children: [
          /* @__PURE__ */ jsxs("summary", { className: "font-bold p-5 cursor-pointer text-gray-800 list-none flex justify-between items-center pr-10 relative text-lg", children: [
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("span", { className: "text-blue-500 font-black", children: "Q." }),
              " 今、他の電力会社（東電など）を使っているのですが、東京ガスと契約しないとダメですか？"
            ] }),
            /* @__PURE__ */ jsx("span", { className: "absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 group-open:rotate-180 transition-transform", children: "▼" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "p-5 pt-0 text-gray-600 border-t border-gray-100 mt-2 pt-4 leading-relaxed", children: "いいえ。現在のご家庭の「電気の契約先」が東京電力など他の会社であっても、設備の導入・契約は可能です。（※ただし、機器の契約とは別に、売電等の手続きが発生します）" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-center relative bg-blue-50 p-8 md:p-12 rounded-2xl border border-blue-100", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-black text-[#003366] mb-4", children: "迷っているなら、プロに計算させてみませんか？" }),
        /* @__PURE__ */ jsxs("p", { className: "text-gray-700 mb-8 max-w-xl mx-auto", children: [
          "ネットの情報だけでは、1円単位の正確な答えは絶対に出ません。",
          /* @__PURE__ */ jsx("br", {}),
          "まずは、ご自宅の図面をもとに「実際のところ、いくらお得になるのか？」を東京ガスにシミュレーションしてもらいましょう。（完全無料です）"
        ] }),
        /* @__PURE__ */ jsx(CTALink, { href: "https://home.tokyo-gas.co.jp/power/solar/index.html", eventName: "click_cta_faq", className: "inline-block bg-orange-500 text-white font-bold text-lg py-4 px-10 rounded-full hover:bg-orange-600 shadow-xl transform hover:-translate-y-1", children: "無料でシミュレーション・見積もりをする" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "border-t-2 border-gray-100 pt-10 mt-16 text-center", children: /* @__PURE__ */ jsx(Link, { to: "/", className: "inline-block bg-white text-gray-700 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 font-bold transition-colors", children: "トップページへ戻る" }) })
    ] })
  ] });
};
const Operator = () => {
  const orgData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "東京ガス 太陽光・蓄電池相談所",
    "url": "https://site-0001-tokyogas.vercel.app/",
    "logo": "https://site-0001-tokyogas.vercel.app/vite.svg",
    "description": "当サイトはアフィリエイトプログラムにより商品等をご紹介致しております。",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "url": "https://home.tokyo-gas.co.jp/power/solar/index.html"
    }
  };
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "ホーム",
        "item": "https://site-0001-tokyogas.vercel.app/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "運営者情報",
        "item": "https://site-0001-tokyogas.vercel.app/operator"
      }
    ]
  };
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "運営者情報・免責事項・プライバシーポリシー | 東京ガス 太陽光・蓄電池相談所",
        description: "当サイトの運営方針、広告掲載（PR）に関する表記、免責事項、およびプライバシーポリシーについて記載しています。",
        path: "/operator"
      }
    ),
    /* @__PURE__ */ jsx(StructuredData, { data: orgData }),
    /* @__PURE__ */ jsx(StructuredData, { data: breadcrumbData }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto px-6 py-12 md:py-20", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl md:text-4xl font-black text-[#003366] mb-10 pb-4 border-b-4 border-blue-100", children: "運営者情報・免責事項" }),
      /* @__PURE__ */ jsxs("section", { className: "mb-12", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-xl font-bold text-gray-800 mb-6 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "w-6 h-6 rounded-full bg-[#003366] text-white flex items-center justify-center text-sm", children: "1" }),
          "サイト運営方針・PR表記について"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-gray-600 leading-relaxed text-sm md:text-base space-y-4", children: [
          /* @__PURE__ */ jsx("p", { children: "当サイト「東京ガス 太陽光・蓄電池相談所」は、太陽光発電および蓄電池システムの導入を検討されている方へ向けた情報提供を目的としています。" }),
          /* @__PURE__ */ jsx("p", { children: "当サイトはアフィリエイトプログラムにより商品等をご紹介致しております。記事内の一部リンクにはアフィリエイト広告（PR）が含まれており、当サイト経由での無料見積もり等のお申し込みに対して紹介料が発生する場合があります。" }),
          /* @__PURE__ */ jsx("p", { children: "ただし、情報の中立性と客観性を保つため、過度なメリットの強調や、確定していない補助金金額の保証、他社商材との根拠のない比較・ランキング付けは一切行いません。" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-12", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-xl font-bold text-gray-800 mb-6 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "w-6 h-6 rounded-full bg-[#003366] text-white flex items-center justify-center text-sm", children: "2" }),
          "情報の更新と免責事項"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-gray-600 leading-relaxed text-sm md:text-base space-y-4", children: [
          /* @__PURE__ */ jsx("p", { className: "font-bold text-red-600 bg-red-50 p-3 rounded", children: "【重要】効果や補助金に関する免責事項" }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 space-y-2", children: [
            /* @__PURE__ */ jsx("li", { children: "記事内の情報は執筆・更新時点（各ページ上部に記載）のものであり、予告なく変更される場合があります。" }),
            /* @__PURE__ */ jsx("li", { children: "太陽光発電による光熱費の削減効果や、蓄電池による停電時の動作可能時間は、設置環境（屋根の向き、角度、日照条件）、生活スタイル、ご契約の電力プランにより大きく変動します。サイト内のシミュレーション例はあくまで目安であり、効果を保証するものではありません。" }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("strong", { children: "国や自治体（東京都など）の補助金制度は、予算の上限に達し次第、期限前でも予告なく早期終了する場合があります。最新の申請要件や予算の残枠については、必ず「クール・ネット東京」等の各公式機関の最新発表、または無料相談時に直接担当者へご確認ください。" }) }),
            /* @__PURE__ */ jsx("li", { children: "当サイトの情報を利用したことによるいかなる損害・損失についても、当サイト管理人は一切の責任を負いかねます。" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-12", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-xl font-bold text-gray-800 mb-6 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "w-6 h-6 rounded-full bg-[#003366] text-white flex items-center justify-center text-sm", children: "3" }),
          "お問い合わせ"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-600 text-sm md:text-base", children: [
          /* @__PURE__ */ jsxs("p", { className: "mb-4", children: [
            "商品の詳細な仕様や、ご自宅が設置対象になるかどうかの確認、正式な見積もり依頼につきましては、リンク先の",
            /* @__PURE__ */ jsx("strong", { className: "text-[#003366]", children: "東京ガス公式サイトより直接お問い合わせ" }),
            "いただきますようお願いいたします。"
          ] }),
          /* @__PURE__ */ jsx("div", { className: "text-center mt-6", children: /* @__PURE__ */ jsx("a", { href: "https://home.tokyo-gas.co.jp/power/solar/index.html", target: "_blank", rel: "noopener noreferrer", className: "inline-block bg-[#003366] text-white font-bold py-3 px-8 rounded-full hover:bg-blue-800 transition-colors shadow-md", children: "公式サイトへ進む" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row gap-4 justify-between", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "text-[#003366] font-bold hover:underline flex items-center gap-1", children: "← トップページへ戻る" }),
        /* @__PURE__ */ jsx(Link, { to: "/eligible", className: "text-[#003366] font-bold hover:underline flex items-center gap-1", children: "対象条件をチェックする →" })
      ] })
    ] })
  ] });
};
function App() {
  return /* @__PURE__ */ jsxs(Routes, { children: [
    /* @__PURE__ */ jsx(Route, { path: "/", element: /* @__PURE__ */ jsx(Home, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/eligible", element: /* @__PURE__ */ jsx(Eligible, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/cost", element: /* @__PURE__ */ jsx(Cost, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/cancellation", element: /* @__PURE__ */ jsx(Cancellation, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/subsidy-tokyo", element: /* @__PURE__ */ jsx(SubsidyTokyo, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/subsidy-payment", element: /* @__PURE__ */ jsx(SubsidyPayment, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/outage", element: /* @__PURE__ */ jsx(Outage, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/installation", element: /* @__PURE__ */ jsx(Installation, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/faq", element: /* @__PURE__ */ jsx(FAQ, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/operator", element: /* @__PURE__ */ jsx(Operator, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "*", element: /* @__PURE__ */ jsx(NotFound, {}) })
  ] });
}
function render(url) {
  const seoContext = {};
  const appHtml = renderToString(
    /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(SEOContext.Provider, { value: seoContext, children: /* @__PURE__ */ jsx(StaticRouter, { location: url, children: /* @__PURE__ */ jsx(App, {}) }) }) })
  );
  const headHtml = seoContext.headHtml || "";
  return { appHtml, headHtml };
}
export {
  render
};
