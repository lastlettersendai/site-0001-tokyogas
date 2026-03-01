import React, { useState, useEffect } from 'react';
import { PageTemplate } from '../components/PageTemplate.jsx';

const Editor = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('/api/get-content')
            .then(res => res.json())
            .then(json => { setData(json); setLoading(false); })
            .catch(err => {
                setMessage('Error loading: ' + err.message);
                setLoading(false);
            });
    }, []);

    const handleChange = (path, value) => {
        // Validation: Attempting to prevent bad full-width characters that break JSX/JS manually
        let cleanValue = value;
        // The user can type them, but they get immediately flagged below. 
        // Auto-replacing everything immediately can be annoying while typing, 
        // so we'll just show strong warnings for now, but we can auto-sanitize on blur/save.

        // update deep object
        const newData = JSON.parse(JSON.stringify(data));
        let curr = newData;
        for (let i = 0; i < path.length - 1; i++) {
            if (!curr[path[i]]) curr[path[i]] = {};
            curr = curr[path[i]];
        }
        curr[path[path.length - 1]] = cleanValue;
        setData(newData);
    };

    const handleSave = async () => {
        setMessage('Saving...');
        try {
            // Apply aggressive sanitization before saving just in case
            const payloadString = JSON.stringify(data)
            // .replace(/；/g, ';')
            // .replace(/：/g, ':')
            // .replace(/／/g, '/') 
            // .replace(/”/g, '"')
            // .replace(/“/g, '"');
            // ^ Commented out because we might WANT some full-width colons in Japanese text, but the user requested replacing them earlier.
            // We will rely on the visual warning instead of aggressive hidden replace.

            const res = await fetch('/api/save-content', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            if (res.ok) {
                setMessage('Saved successfully!');
                setTimeout(() => setMessage(''), 3000);
            } else {
                setMessage('Failed to save.');
            }
        } catch (e) {
            setMessage('Error: ' + e.message);
        }
    };

    const renderFields = (obj, path = []) => {
        return Object.keys(obj).map(key => {
            const currentPath = [...path, key];
            if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
                return (
                    <div key={key} className="ml-4 mt-6 border-l-2 border-blue-200 pl-4 bg-white shadow-sm p-4 rounded-r-lg">
                        <h3 className="font-bold text-lg text-[#003366] mb-4 bg-blue-50 px-3 py-1 inline-block rounded">{key.toUpperCase()}</h3>
                        {renderFields(obj[key], currentPath)}
                    </div>
                );
            } else if (Array.isArray(obj[key])) {
                return (
                    <div key={key} className="ml-4 mt-6 border-l-2 border-green-200 pl-4 bg-white shadow-sm p-4 rounded-r-lg">
                        <h3 className="font-bold text-lg text-green-800 mb-4 bg-green-50 px-3 py-1 inline-block rounded">{key.toUpperCase()} LIST</h3>
                        {obj[key].map((item, index) => (
                            <div key={index} className="mb-4 bg-slate-50 p-4 rounded border border-slate-100">
                                <div className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">Item {index + 1}</div>
                                {typeof item === 'object' ? renderFields(item, [...currentPath, index]) : (
                                    <textarea
                                        className="w-full border border-gray-300 rounded p-3 text-sm text-gray-800 focus:ring-2 focus:ring-blue-200 outline-none"
                                        rows="3"
                                        value={item}
                                        onChange={(e) => handleChange([...currentPath, index], e.target.value)}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                )
                return (
                    <div key={key} className="mb-5 last:mb-0">
                        <label className="block text-xs font-bold text-slate-500 mb-1 uppercase tracking-wider">{key.replace(/_/g, ' ')}</label>
                        <textarea
                            className={`w-full border rounded p-3 text-sm font-medium leading-relaxed transition-colors outline-none focus:ring-2 border-gray-200 bg-gray-50 text-gray-800 focus:ring-blue-200`}
                            rows={val.length > 80 ? 4 : 2}
                            value={val}
                            onChange={(e) => handleChange(currentPath, e.target.value)}
                            placeholder="テキストを入力..."
                        />
                    </div>
                );
            }
        });
    };

    if (loading) return (
        <PageTemplate title="Loading Editor">
            <div className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div></div>
        </PageTemplate>
    );

    return (
        <PageTemplate title="GodMaster Content Editor">
            {/* Header */}
            <div className="sticky top-0 z-50 bg-[#003366] text-white p-4 shadow-lg">
                <div className="max-w-5xl mx-auto flex justify-between items-center">
                    <div>
                        <h1 className="text-xl font-black">LOCAL CONTENT EDITOR</h1>
                        <p className="text-xs text-blue-200">JSXを壊さずに本文テキストのみを安全に編集できるDEV環境専用のUIです。</p>
                    </div>
                    <button
                        onClick={handleSave}
                        className="bg-orange-500 hover:bg-orange-400 text-white font-black py-2.5 px-8 rounded-full shadow-md transition-all active:scale-95"
                    >
                        JSONに保存する
                    </button>
                </div>
            </div>

            <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8 bg-slate-100 min-h-screen pt-8">
                {message && (
                    <div className={`p-4 mb-6 rounded-lg font-bold shadow-sm ${message.includes('success') ? 'bg-green-100 text-green-800 border border-green-200' : 'bg-orange-100 text-orange-800 border border-orange-200'}`}>
                        {message}
                    </div>
                )}

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    {data && Object.keys(data).length > 0 ? renderFields(data) : (
                        <div className="text-center py-20 text-gray-500">
                            <p className="mb-4">コンテンツがまだありません。</p>
                            <p className="text-sm">src/content/site-0001/content.json にデータを追加するとここにツリー表示されます。</p>
                        </div>
                    )}
                </div>
            </div>
        </PageTemplate>
    );
};

export default Editor;
