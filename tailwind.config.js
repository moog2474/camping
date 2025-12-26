/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0e7490', // Ocean Blue (cyan-700)
                secondary: '#d4a373', // Sand
                accent: '#f97316', // Orange
                dark: '#0f172a',
                light: '#f8fafc',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Montserrat', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
