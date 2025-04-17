import styled from 'styled-components';
import { DefaultTheme } from 'styled-components';

// Tipagem para as props do container
interface MainContainerProps {
  theme?: DefaultTheme;
}

export const MainContainer = styled.main<MainContainerProps>`
  padding: ${({ theme }) => theme?.spacing?.xl || '2rem'};
  max-width: ${({ theme }) => theme?.breakpoints?.xl || '1200px'};
  margin: 0 auto;
  background-color: ${({ theme }) => theme?.colors?.background || '#F5F5F5'};
  min-height: calc(100vh - 6rem); /* Altura mínima considerando header */

  /* Responsividade */
  @media (max-width: ${({ theme }) => theme?.breakpoints?.lg || '992px'}) {
    padding: ${({ theme }) => theme?.spacing?.lg || '1.5rem'};
  }

  @media (max-width: ${({ theme }) => theme?.breakpoints?.md || '768px'}) {
    padding: ${({ theme }) => theme?.spacing?.md || '1rem'};
    max-width: 100%;
  }
`;