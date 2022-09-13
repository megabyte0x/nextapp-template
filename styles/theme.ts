import { extendTheme } from "@chakra-ui/react";
import { theme as chakraTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = {
  ...chakraTheme.fonts,
};

const fontsWeights = {
  ...chakraTheme.fontWeights,
  normal: 400,
  medium: 500,
  bold: 700,
};

const fontsSizes = {
  ...chakraTheme.fontSizes,
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "1.875rem",
  "4xl": "2.25rem",
  "5xl": "3rem",
  "6xl": "4rem",
};

const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
});

//* Overriding properties
const overrides = {
  ...chakraTheme,
  fonts,
  breakpoints,
  fontsWeights,
  fontsSizes,
};

//* This helps to override more than one property in the default theme.
const customTheme = extendTheme(overrides);

export default customTheme;
