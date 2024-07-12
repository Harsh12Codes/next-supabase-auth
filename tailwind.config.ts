import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        darkMode: "class",
        borderColor: ({ theme }) => ({
            ...theme("colors"),
            DEFAULT: "#f0f2f5",
            // note: default border not working
            // temp workaround is to use variations below
            lightmode: "#f0f2f5",
            darkmode: theme("colors.gray.600", "currentColor"),
        }),
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            typography: {
                DEFAULT: {
                    css: {
                        "code::before": {
                            content: '""',
                        },
                        "code::after": {
                            content: '""',
                        },
                    },
                },
            },
            colors: {
                transparent: "transparent",
                current: "currentColor",

                black: "#000",
                white: "#fff",

                gray: {
                    100: "var(--gray-100)",
                    200: "var(--gray-200)",
                    300: "var(--gray-300)",
                    400: "var(--gray-400)",
                    500: "var(--gray-500)",
                    600: "var(--gray-600)",
                    650: "var(--gray-650)",
                    700: "var(--gray-700)",
                    800: "var(--gray-800)",
                    900: "var(--gray-900)",
                },
                brand: {
                    100: "var(--brand-100)",
                    200: "var(--brand-200)",
                    300: "var(--brand-300)",
                    400: "var(--brand-400)",
                    500: "var(--brand-500)",
                    600: "var(--brand-600)",
                    700: "var(--brand-700)",
                    800: "var(--brand-800)",
                    900: "var(--brand-900)",
                },
                blueGray: {
                    50: "var(--blue-gray-50)",
                    100: "var(--blue-gray-100)",
                    200: "var(--blue-gray-200)",
                    300: "var(--blue-gray-300)",
                    400: "var(--blue-gray-400)",
                    500: "var(--blue-gray-500)",
                    600: "var(--blue-gray-600)",
                    700: "var(--blue-gray-700)",
                    800: "var(--blue-gray-800)",
                    900: "var(--blue-gray-900)",
                },
                coolGray: {
                    50: "var(--cool-gray-50)",
                    100: "var(--cool-gray-100)",
                    200: "var(--cool-gray-200)",
                    300: "var(--cool-gray-300)",
                    400: "var(--cool-gray-400)",
                    500: "var(--cool-gray-500)",
                    600: "var(--cool-gray-600)",
                    700: "var(--cool-gray-700)",
                    800: "var(--cool-gray-800)",
                    900: "var(--cool-gray-900)",
                },

                dark: {
                    100: "var(--gray-100)",
                    200: "var(--gray-200)",
                    300: "var(--gray-300)",
                    400: "var(--gray-400)",
                    500: "var(--gray-500)",
                    600: "var(--gray-600)",
                    700: "var(--gray-700)",
                    800: "var(--gray-800)",
                    900: "var(--gray-900)",
                },

                "secondary-text": {
                    light: "#71767F",
                    dark: "#878787",
                },
                /* 
          typography
        */
                "typography-body": {
                    light: "var(--cool-gray-600)",
                    dark: "var(--gray-100)",
                },
                "typography-body-secondary": {
                    light: "var(--cool-gray-500)",
                    dark: "var(--gray-300)",
                },
                "typography-body-strong": {
                    light: "var(--cool-gray-100)",
                    dark: "white",
                },
                "typography-body-faded": {
                    light: "var(--cool-gray-400)",
                    dark: "var(--gray-400)",
                },

                /* 
          app backgrounds
        */
                "bg-primary": {
                    light: "white",
                    dark: "var(--gray-800)",
                },
                "bg-secondary": {
                    light: "var(--blue-gray-100)",
                    dark: "var(--gray-700)",
                },
                "bg-alt": {
                    light: "var(--blue-gray-50)", // gray[100],
                    dark: "var(--gray-600)",
                },

                /* 
          Forms
        */
                "input-value": {
                    light: "var(--cool-gray-600)",
                    dark: "var(--gray-200)",
                },
                "input-placeholder": {
                    light: "var(--cool-gray-300)",
                    dark: "var(--gray-400)",
                },
                "input-border": {
                    light: "var(--cool-gray-300)",
                    dark: "var(--gray-500)",
                },
                "input-label": {
                    light: "var(--cool-gray-600)",
                    dark: "var(--gray-200)",
                },
                "input-border-hover": {
                    light: "var(--cool-gray-400)",
                    dark: "var(--gray-400)",
                },
                "input-border-focus": {
                    light: "var(--brand-300)",
                    dark: "var(--brand-300)",
                },
            },
        },
    },
    plugins: [],
};
export default config;
