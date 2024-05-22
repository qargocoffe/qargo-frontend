import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        beige: '#B7AA8C',
        beigeStrong: '#917360',
        beigeLight: '#EEECE0',
        lavazzaBlue: '#00377A',
        gray: '#919191',
        grayLight: '#B8B8B8',
        grayBackground: '#D8D4D0',
        ceramic: '#FEFFFA',
        coffeStrong: '#1C0602',
        whiteBackground: '#FCFBF6',
      }
    },
  },
  plugins: [],
};
export default config;
