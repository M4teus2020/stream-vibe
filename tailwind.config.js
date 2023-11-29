/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                red: {
                    450: `#E50000`,
                    500: `#FF0000`,
                    550: `#FF1A1A`,
                    600: `#FF3333`,
                    800: `#FF9999`,
                    900: `#FFCCCC`,
                    950: `#FFE5E5`,
                    990: `#FFFAFA`,
                },
                black: {
                    60: `#0F0F0F`,
                    80: `#0F0F0F`,
                    100: `#1A1A1A`,
                    120: `#1F1F1F`,
                    150: `#262626`,
                    200: `#333333`,
                    250: `#404040`,
                    300: `#4D4D4D`,
                },
                grey: {
                    600: `#999999`,
                    650: `#A6A6A6`,
                    700: `#B3B3B3`,
                    750: `#BFBFBF`,
                    900: `#E4E4E7`,
                    950: `#F1F1F3`,
                    970: `#F7F7F8`,
                    990: `#FCFCFD`,
                },
            },
        },
    },
    plugins: [],
};
