export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    white: string;
    black: string;
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
    mobile: string;
    tablet: string;
    desktop: string;
  };
  spacing: {
    small: string;
    medium: string;
    large: string;
    xlarge: string;
  };
} 