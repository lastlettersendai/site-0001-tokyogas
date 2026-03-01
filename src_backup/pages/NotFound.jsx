import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-9xl font-black text-[#003366] mb-4 tracking-tighter drop-shadow-sm">
                <span className="mx-1">404</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                ページが見つかりません
            </h2>
            <p className="text-gray-500 mb-10 max-w-md mx-auto leading-relaxed">
                お探しのページは、移動または削除されたか、URLが間違っている可能性があります。
            </p>
            <Link
                to="/"
                className="bg-[#FF6600] hover:bg-[#E65C00] text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition hover:-translate-y-1 flex items-center gap-2"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                トップページへ戻る
            </Link>
        </div>
    );
}

export default NotFound;
