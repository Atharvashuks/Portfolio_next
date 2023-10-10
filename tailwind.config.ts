import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-dark": "#03045e",
        "primary-light": "#023e8a",
        "primary-extralight": "#0077b6",
        "secondary-dark": "#0096c7",
        "secondary-light": "#00b4d8",
        "secondary-extralight": "#48cae4",
        "light-1": "#90e0ef",
        "light-2": "#ade8f4",
        "light-3": "#caf0f8",
      },
      fontsize: {
        xxs: "12px",
      },
    },
  },
  plugins: [],
};
export default config;
