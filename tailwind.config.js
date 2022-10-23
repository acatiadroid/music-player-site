/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                main: "#f24646",
                bg: "#2c2c2c",
                dark: "#202020",
            },
            fontFamily: {
                sans: ["Cascadia Mono"],
            },
        },
    },
    plugins: [],
};
