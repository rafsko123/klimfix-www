export const MainTheme = {
  colors:          {
    primary:      "#00C9FF",
    primaryHue:   "#1db1dc",
    secondary:    "#003370",
    secondaryHue: "#002148",

    black: "#000000",
    white: "#ffffff",
    pink:  "#E71C89;",
  },
  fontFamily: {
    primary: 'Poppins, sans-serif',
    secondary: 'Mitr, sans-serif',
  },
  fonts:           {
    desktop: {
      xl: "96px",
      lg: "48px",
      md: "40px",
      sm: "20px",
      xs: "16px",
    },
  },
  weights:         {
    light:    300,
    normal:   400,
    medium:   500,
    semiBold: 600,
    bold:     700,
    extra:    900,
  },
  breakpoints:     {
    laptopBig:   "1601px",
    laptop:      "1481px",
    laptopSmall: "1281px",
    tabletBig:   "1081px",
    tablet:      "861px",
    tabletSmall: "769px",
    phoneBig:    "601px",
    phone:       "430px",
    phoneSmall:  "330px",
  },
  layoutPartSizes: {
    wrapper: {
      xl: "1408px",
      lg: "",
      md: "",
      sm: "",
    },
  },
};

// export type MainThemeType = typeof MainTheme;
export default MainTheme;

