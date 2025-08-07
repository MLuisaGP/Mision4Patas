/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#FF6B35',
                secondary: '#004E89',
                neutral: '#F7F7F7',
                dark: '#1A1A1A',
            },
        },
    },
    plugins: [],
}

