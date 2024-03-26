import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        inter: ["inter"],
      },
      fontSize: {
        "app-title": [
          "32px",
          {
            fontWeight: "700",
            lineHeight: "38.73px",
          },
        ],
        "app-nav-link": [
          "16px",
          {
            fontWeight: "600",
            lineHeight: "19.36px",
          },
        ],
        "app-form-title": [
          "32px",
          {
            fontWeight: "600",
            lineHeight: "38.73px",
          },
        ],
        "app-form-sub-title": [
          "24px",
          {
            fontWeight: "500",
            lineHeight: "29.05px",
          },
        ],
        "app-form-sub-text-1": [
          "16px",
          {
            fontWeight: "400",
            lineHeight: "19.36px",
          },
        ],
        "app-form-sub-text-2": [
          "16px",
          {
            fontWeight: "400",
            lineHeight: "26px",
          },
        ],
        "app-form-sub-text-3": [
          "20px",
          {
            fontWeight: "500",
            lineHeight: "26px",
          },
        ],
        "app-form-footer-label": [
          "16px",
          {
            fontWeight: "400",
            lineHeight: "19.36px",
          },
        ],
        "app-form-footer-cta": [
          "16px",
          {
            fontWeight: "500",
            lineHeight: "19.36px",
            letterSpacing: "0.07em",
          },
        ],
        "app-toolbar-link": [
          "12px",
          {
            fontWeight: "400",
            lineHeight: "14.52px",
          },
        ],
        "app-nav-banner": [
          "14px",
          {
            fontWeight: "500",
            lineHeight: "16.94px",
          },
        ],
      },
      colors: {
        charcoal: "#333333",
        silver: "#F4F4F4",
        customGray: "#848484",
        customLightGray: "#C1C1C1",
        customSilverGray: "#CCCCCC",
        customSteelGray: "#ACACAC",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
} satisfies Config;
