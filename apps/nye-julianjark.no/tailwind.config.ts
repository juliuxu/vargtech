import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "j-orange": {
          "50": "hsl(26, 78%, 96%)",
          "100": "hsl(25, 81%, 92%)",
          "200": "hsl(24, 77%, 83%)",
          "300": "hsl(22, 77%, 72%)",
          "400": "hsl(18, 76%, 61%)",
          "500": "hsl(16, 75%, 56%)",
          "600": "hsl(12, 72%, 48%)",
          "700": "hsl(9, 70%, 40%)",
          "800": "hsl(7, 63%, 34%)",
          "900": "hsl(6, 59%, 28%)",
          "950": "hsl(5, 65%, 15%)",
        },
        "j-pink": {
          "50": "#fef5fc",
          "100": "#fee9fd",
          "200": "#fcd2f9",
          "300": "#f8afed",
          "400": "#f280df",
          "500": "#e33bc7",
          "600": "#ca2fad",
          "700": "#a7248c",
          "800": "#891f72",
          "900": "#701f5c",
          "950": "#4a083a",
        },

        "j-gray": {
          "50": "hsl(0, 14%, 97%)",
          "100": "hsl(0, 13%, 94%)",
          "200": "hsl(0, 11%, 89%)",
          "300": "hsl(0, 12%, 82%)",
          "400": "hsl(0, 10%, 71%)",
          "500": "hsl(0, 10%, 56%)",
          "600": "hsl(0, 9%, 51%)",
          "700": "hsl(0, 9%, 42%)",
          "800": "hsl(0, 8%, 35%)",
          "900": "hsl(0, 8%, 31%)",
          "950": "hsl(0, 9%, 15%)",
        },

        "j-brown": {
          "50": "hsl(43, 75%, 95%)",
          "100": "hsl(46, 77%, 88%)",
          "200": "hsl(43, 76%, 77%)",
          "300": "hsl(42, 76%, 64%)",
          "400": "hsl(39, 75%, 56%)",
          "500": "hsl(36, 73%, 47%)",
          "600": "hsl(32, 75%, 40%)",
          "700": "hsl(27, 71%, 33%)",
          "800": "hsl(23, 63%, 29%)",
          "900": "hsl(20, 57%, 26%)",
          "950": "hsl(17, 64%, 14%)",
        },

        "j-yellow": {
          "50": "hsl(67, 75%, 95%)",
          "100": "hsl(66, 77%, 88%)",
          "200": "hsl(65, 76%, 77%)",
          "300": "hsl(63, 76%, 64%)",
          "400": "hsl(60, 75%, 56%)",
          "500": "hsl(57, 73%, 47%)",
          "600": "hsl(53, 75%, 40%)",
          "700": "hsl(48, 71%, 33%)",
          "800": "hsl(44, 63%, 29%)",
          "900": "hsl(41, 57%, 26%)",
          "950": "hsl(38, 64%, 14%)",
        },

        "j-green": {
          "50": "hsl(128, 88%, 97%)",
          "100": "hsl(131, 89%, 93%)",
          "200": "hsl(131, 87%, 85%)",
          "300": "hsl(132, 82%, 73%)",
          "400": "hsl(132, 75%, 56%)",
          "500": "hsl(132, 77%, 45%)",
          "600": "hsl(132, 83%, 36%)",
          "700": "hsl(132, 79%, 29%)",
          "800": "hsl(133, 69%, 24%)",
          "900": "hsl(133, 67%, 20%)",
          "950": "hsl(135, 88%, 10%)",
        },
        "j-blue": {
          "50": "#f0f7fe",
          "100": "#ddecfc",
          "200": "#c2defb",
          "300": "#98caf8",
          "400": "#68adf2",
          "500": "#448ced",
          "600": "#3b78e3",
          "700": "#265acf",
          "800": "#254ba8",
          "900": "#234285",
          "950": "#1a2a51",
        },
        "j-red": {
          "50": "hsl(0, 71%, 97%)",
          "100": "hsl(0, 80%, 94%)",
          "200": "hsl(0, 85%, 89%)",
          "300": "hsl(0, 83%, 82%)",
          "400": "hsl(0, 81%, 71%)",
          "500": "hsl(0, 75%, 56%)",
          "600": "hsl(0, 64%, 51%)",
          "700": "hsl(0, 65%, 42%)",
          "800": "hsl(0, 62%, 35%)",
          "900": "hsl(0, 56%, 31%)",
          "950": "hsl(0, 67%, 15%)",
        },
        "j-purple": {
          "50": "#fdf5fe",
          "100": "#f8e9fe",
          "200": "#f1d2fc",
          "300": "#eaaff8",
          "400": "#df80f2",
          "500": "#c73be3",
          "600": "#b32fca",
          "700": "#9624a7",
          "800": "#7d1f89",
          "900": "#691f70",
          "950": "#44084a",
        },
      },

      spacing: {
        container: "7.5vw",
      },
      fontSize: {
        body: ["18px", "1.4"],
        "body-lg": "1.6vw",

        lead: ["26px", "1.3"],
        "lead-lg": "2.5vw",

        h1: [
          "42px",
          {
            lineHeight: "1.2",
            fontWeight: "500",
          },
        ],
        "h1-lg": "4.5vw",

        h2: ["26px", "1.3"],
        "h2-lg": "2.5vw",

        h3: [
          "18px",
          {
            lineHeight: "1.4",
            fontWeight: "700",
          },
        ],
        "h3-lg": "1.6vw",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    logs: false,
    themes: [
      {
        mytheme: {
          ...require("daisyui/src/theming/themes")["[data-theme=bumblebee]"],
          primary: "#FFB4B4",
          secondary: "#E3673A",
        },
      },
    ],
  },
} satisfies Config;
