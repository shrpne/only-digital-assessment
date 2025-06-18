import { createGlobalStyle } from 'styled-components';

export const breakpoints = {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
} as const;

const GlobalStyle = createGlobalStyle`
    :root {
        --main-color: #42567A;
        --body-bg-color: #F4F5F9;
        --border-color: color-mix(in srgb, var(--main-color) 10%, transparent);
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: PT Sans, system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: var(--main-color);
        background: var(--body-bg-color);
    }


    @media (width >= ${breakpoints.md}) {
        .md\\:hidden {
            display: none !important;
        }
    }

    @media (width < ${breakpoints.md}) {
        .max-md\\:hidden {
            display: none !important;
        }
    }
`;

export default GlobalStyle;
