/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                tokyoNavy: '#003366',
                energyOrange: '#FF6600',
                surfaceWhite: '#FFFFFF',
                surfaceGray: '#F8F9FA'
            },
            fontFamily: {
                sans: ['"Noto Sans JP"', '"Hiragino Kaku Gothic ProN"', 'Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
