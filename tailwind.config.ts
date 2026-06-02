import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./registry/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          10:  "#F4F7FF",
          20:  "#E8EFFF",
          30:  "#CFDDFF",
          40:  "#A4BFFF",
          50:  "#82A6FE",
          60:  "#1C5EFE",
          70:  "#1545BB",
          80:  "#10358F",
          90:  "#0D2C79",
          100: "#081C4C",
          110: "#051130",
        },
        secondary: {
          10:  "#FDEDF1",
          20:  "#FDE3E9",
          30:  "#FBD1DB",
          40:  "#F7A3B7",
          50:  "#F37593",
          60:  "#EF476F",
          70:  "#A93450",
          80:  "#7B273B",
          90:  "#642131",
          100: "#35141C",
          110: "#170B0E",
        },
        grey: {
          10:  "#0D0D10",
          20:  "#191921",
          30:  "#303041",
          40:  "#474761",
          50:  "#636388",
          60:  "#737394",
          70:  "#A9A9BD",
          80:  "#C8C8D5",
          90:  "#D8D8E1",
          100: "#EFEFF3",
          110: "#F7F7F9",
        },
      },
      fontFamily: {
        base:   ["Noto Sans", "system-ui", "sans-serif"],
        accent: ["Michroma", "sans-serif"],
      },
      boxShadow: {
        "brand-sm": "0 1px 3px 0 rgba(28, 94, 254, 0.08)",
        "brand-md": "0 4px 12px 0 rgba(28, 94, 254, 0.12)",
        "brand-lg": "0 8px 24px 0 rgba(28, 94, 254, 0.16)",
        "brand-xl": "0 16px 40px 0 rgba(28, 94, 254, 0.20)",
      },
    },
  },
  plugins: [],
};

export default config;
