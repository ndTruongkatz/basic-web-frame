module.exports = {
    mode: "jit",
    purge: [
        './*.html',
        './*.{js,jsx,ts,tsx,vue}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            spacing: {
                '13': '3.25rem',
                '15': '3.75rem',
                '128': '32rem',
                '144': '36rem',
                '35': '35px',
            },
            colors: {

                'color-text': "#0B132A",
                'primary': "#F53838 ",
                'greenV': "#2FAB73 ",
                'spanC': "#4F5665 ",

            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}