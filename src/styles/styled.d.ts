import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      primary: string;
    };
    spacing: Record<string, string>;
    breakpoints: Record<string, string>;
  }
}