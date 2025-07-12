import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(accordion|divider).js",
  ],
  darkMode: "selector",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        md: "1.2rem",
        lg: "1.5rem",
        xl: "3rem",
        "2xl": "5rem",
      },
    },
    extend: {
      screens: {
        xs: "475px",
      },
      // colors will be fixed
      backgroundImage: {},
      colors: {
        primary: {
          "100": "#FFE8F0",
          DEFAULT: "#008080",
        },
        secondary: "#FBE843",
        black: {
          "100": "#333333",
          "200": "#141413",
          "300": "#7D8087",
          DEFAULT: "#000000",
        },
        white: {
          "100": "#F7F7F7",
          DEFAULT: "#FFFFFF",
        },
        gray: {
          main: "#9ca3af",
        },
        red: {
          main: "#ff0000",
        },
        blue: {
          dark: "#212D4A",
        },
        error: {
          main: "#C50000",
        },
        boxShadow: {
          100: "2px 2px 0px 0px rgb(0, 0, 0)",
          200: "2px 2px 0px 2px rgb(0, 0, 0)",
          300: "2px 2px 0px 2px rgb(2, 43, 80)",
        },
      },
    },
  },
  plugins: [daisyui, nextui()],
} satisfies Config;
