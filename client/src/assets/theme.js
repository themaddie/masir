import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
/* FONTS */
@font-face {
  font-family: "Dana";
  font-weight: 500;
  src: url("./fonts/Dana-FaNum-Medium.ttf");
}
@font-face {
  font-family: "Dana-Light";
  font-weight: 300;
  src: url("./fonts/Dana-FaNum-Light.ttf");
}
@font-face {
  font-family: "Dana-Reg";
  font-weight: normal;
  src: url("./fonts/Dana-FaNum-Regular.ttf");
}
@font-face {
  font-family: "Dana-Demi";
  font-weight: 600;
  src: url("./fonts/Dana-FaNum-DemiBold.ttf");
}
@font-face {
  font-family: "Dana-Bold";
  font-weight: bold;
  src: url("./fonts/Dana-FaNum-Bold.ttf");
}

/* GLOBAL STYLE */
* {
  margin: 0;
  padding: 0;
  direction: rtl;
  font-family: "Dana";
  box-sizing: border-box;
}
`;

export const theme = {
  palette: {
    primary: "#FFDC99",
    secondary: "#FFF8EB",
    neutral: "#F1F1F1",
    alt: "#D9D9D9",
    black: "#000000",
    white: "#FFFFFF",
    roads: {
      yellow: "#FCA311",
      pink: "#FC1157",
      purple: "#B111FC",
      green: "#7EBA94",
      blue: "#116FFC",
      gray: "#727272",
    },
  },
  fontSize: {
    ultra: 2.5 /* 40px */,
    demi: 2 /* 32px */,
    bold: 1.75 /* 28px */,
    medium: 1.5 /* 24px */,
    regular: 1.25 /* 20px */,
    light: 1 /* 16px */,
    lighter: 0.75 /* 12px */
  },
};
