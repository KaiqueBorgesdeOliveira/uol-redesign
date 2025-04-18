import styled from 'styled-components';

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const CardTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 1rem;
`;

export const CardContent = styled.div`
  color: ${({ theme }) => theme.colors.text};
`;
