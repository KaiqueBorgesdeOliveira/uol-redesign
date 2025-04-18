import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
      white: string;
      black: string;
      uolBlack: string;
      uolYellow: string;
      gray: {
        light: string;
        medium: string;
        dark: string;
      };
    };
    fonts: {
      primary: string;
    };
    breakpoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      mobile: string;
      tablet: string;
      desktop: string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      small: string;
      medium: string;
      large: string;
      xlarge: string;
    };
  }
}