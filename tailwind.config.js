/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
        extend: {},
    },
    daisyui: {
        themes: ["synthwave"],
    },
    plugins: [
        require('daisyui'),
    ],
}