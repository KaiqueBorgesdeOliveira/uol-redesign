import styled from 'styled-components';

interface IconButtonProps {
  isTopBar?: boolean;
}

export const HeaderContainer = styled.header`
  width: 100%;
  background: #FFFFFF;
`;

export const TopBar = styled.div`
  background: #1A1A1A;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  max-width: 1280px;
  margin: 0 auto;
`;

export const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  max-width: 1280px;
  margin: 0 auto;
`;

export const Logo = styled.img`
  height: 24px;
`;

export const LogoSAC = styled.img`
  height: 32px;
`;

export const TopBarNav = styled.nav`
  display: flex;
  gap: 24px;
  align-items: center;
`;

export const TopBarLink = styled.a`
  color: #FFFFFF;
  text-decoration: none;
  font-size: 13px;
  transition: opacity 0.2s;
  font-family: 'UOLText', sans-serif;

  &:hover {
    opacity: 0.8;
  }
`;

export const MainNav = styled.nav`
  display: flex;
  gap: 32px;
  align-items: center;
`;

export const MainNavLink = styled.a`
  color: #333333;
  text-decoration: none;
  font-size: 14px;
  font-family: 'UOLText', sans-serif;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const IconButton = styled.button<IconButtonProps>`
  background: none;
  border: none;
  padding: 4px;
  cursor: pointer;
  color: ${props => props.isTopBar ? '#FFFFFF' : '#333333'};
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-family: 'UOLText', sans-serif;

  svg {
    width: 16px;
    height: 16px;
  }

  &:hover {
    opacity: 0.8;
  }
`;

export const IconLabel = styled.span`
  color: inherit;
`;

export const RightNav = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const NavButton = styled.button`
  background: none;
  border: none;
  color: #333333;
  font-size: 14px;
  font-family: 'UOLText', sans-serif;
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`;