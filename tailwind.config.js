module.exports = {
  purge: {
    content: [
      "./src/**/*.js",
      "./src/**/*.jsx",
      "./src/**/*.ts",
      "./src/**/*.tsx",
    ],
    options: {
      whitelist: [
        "items-start",
        "items-center",
        "items-end",
        "self-start",
        "self-center",
        "self-end",
        "bg-yellow",
        "bg-blue",
        "bg-red",
        "bg-purple",
      ],
    },
  },
  theme: {
    extend: {},
    colors: {
      blue: "#0094FF",
      yellow: "#FFE81D",
      green: "#56E6A1",
      purple: "#C738B8",
      lightPurple: "#DD6EE7",
      red: "#FF5858",
      black: "#1D1D1D",
      white: "#FFFFFF",
    },
    spacing: {
      0: "0",
      1: "8px",
      2: "20px",
      3: "40px",
      4: "80px",
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
      9: "38px",
    },
    lineHeight: {
      none: 1,
      tight: 1.15,
      normal: 1.2,
      larger: 1.4,
    },
    fontSize: {
      small: "12px",
      base: "18px",
      sm: "24px",
      md: "32px",
      lg: "38px",
      xl: "48px",
    },
    cursor: {
      auto: "auto",
      default: "default",
      pointer: "pointer",
      move: "move",
    },
    fontFamily: {
      sans: "TT Norms Pro",
      serif: "Kapra Neue",
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    container: {
      center: true,
      padding: {
        default: "0.8rem",
        sm: "1rem",
        lg: "2rem",
        xl: "3rem",
      },
    },
  },
  variants: {
    margin: ["last"],
  },
  options: { important: true },
};
