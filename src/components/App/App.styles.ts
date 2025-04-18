import styled from 'styled-components';
import { DefaultTheme } from 'styled-components';

// Tipagem para as props do container
interface MainContainerProps {
  role?: string;
}

export const MainContainer = styled.main<MainContainerProps>`
  padding: ${({ theme }) => theme.spacing.xl};
  max-width: ${({ theme }) => theme.breakpoints.xl};
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.background};
  min-height: calc(100vh - 6rem); /* Altura mínima considerando header */

  /* Responsividade */
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: ${({ theme }) => theme.spacing.lg};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.md};
    max-width: 100%;
  }
`;