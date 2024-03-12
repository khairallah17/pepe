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
        "primary": "#00a551",
        "secondary": "#efed79",
      },
      boxShadow: {
        "text-stroke": "-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black;"
      }
    },
  },
  plugins: [],
};
export default config;
