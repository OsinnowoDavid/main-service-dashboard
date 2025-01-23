import { KeyValuePair, ResolvableTo } from "tailwindcss/types/config";

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./styles/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "rgba(var(--primary))",
                secondary: "rgba(var(--secondary))",
                textcolor: "rgba(var(--textcolor))",
                error: "rgba(var(--error))",
                warning: "rgba(var(--warning))",
                success: "rgba(var(--success))",
                info: "rgba(var(--info))",
                dark: "rgba(var(--dark))",
                light: "rgba(var(--light))",
                "ghost-white": "rgba(var(--ghost-white))",
            },
            translate: ["group-hover", "hover"] as unknown as ResolvableTo<
                KeyValuePair<string, string>
            >,
        },
    },
    plugins: [],
};

