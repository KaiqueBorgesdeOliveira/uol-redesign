import React from 'react';
import styled from 'styled-components';
import { UOLLogo } from '../../common/UOLLogo';

const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem;
`;

const HeaderContent = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.desktop};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Navigation = styled.nav`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1rem;
  
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <UOLLogo />
        <Navigation>
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#atendimento">Atendimento</NavLink>
          <NavLink href="#financeiro">Financeiro</NavLink>
          <NavLink href="#minha-conta">Minha conta</NavLink>
        </Navigation>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;