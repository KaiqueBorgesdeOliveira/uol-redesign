import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoText = styled.span`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondary};
  margin-left: 0.5rem;
`;

export const UOLLogo: React.FC = () => {
  return (
    <LogoContainer>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 0C7.163 0 0 7.163 0 16C0 24.837 7.163 32 16 32C24.837 32 32 24.837 32 16C32 7.163 24.837 0 16 0Z" fill="#FF7F00"/>
        <path d="M22.4 8H9.6C8.72 8 8 8.72 8 9.6V22.4C8 23.28 8.72 24 9.6 24H22.4C23.28 24 24 23.28 24 22.4V9.6C24 8.72 23.28 8 22.4 8ZM16 20C13.79 20 12 18.21 12 16C12 13.79 13.79 12 16 12C18.21 12 20 13.79 20 16C20 18.21 18.21 20 16 20Z" fill="white"/>
      </svg>
      <LogoText>SAC</LogoText>
    </LogoContainer>
  );
}; 