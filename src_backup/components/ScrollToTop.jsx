import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // hashがある場合はブラウザの標準挙動（アンカー遷移）を優先するため、scrollToを実行しない
        if (hash) {
            return;
        }

        // pathnameが変わった時のみトップへスクロール
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'auto'
        });
    }, [pathname, hash]);

    return null;
};

export default ScrollToTop;
