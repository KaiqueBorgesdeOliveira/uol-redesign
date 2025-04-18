import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    primary: '#0060B1',
    secondary: '#FF4B4B',
    background: '#F5F5F5',
    text: '#333333',
    white: '#FFFFFF',
    black: '#000000',
    gray: {
      light: '#E5E5E5',
      medium: '#999999',
      dark: '#666666',
    },
  },
  fonts: {
    primary: "'Inter', sans-serif",
  },
  breakpoints: {
    xs: '320px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    mobile: '320px',
    tablet: '768px',
    desktop: '1200px',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    small: '0.5rem',
    medium: '1rem',
    large: '2rem',
    xlarge: '4rem',
  },
};