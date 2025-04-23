import styled from 'styled-components';

interface IconButtonProps {
  isTopBar?: boolean;
}

export const HeaderContainer = styled.header`
  width: 100%;
  background: #1A1A1A;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  max-width: 1280px;
  margin: 0 auto;
  height: 36px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  max-width: 1280px;
  margin: 0 auto;
  background: #1A1A1A;

  @media (max-width: 768px) {
    padding: 12px;
  }
`;

export const Logo = styled.a`
  svg {
    height: 24px;
    width: auto;
    path {
      fill: #FFFFFF;
    }
  }

  @media (max-width: 768px) {
    svg {
      height: 20px;
    }
  }
`;

export const TopBarNav = styled.nav`
  display: flex;
  gap: 24px;
  align-items: center;

  @media (max-width: 1024px) {
    gap: 16px;
  }
`;

export const TopBarActions = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`;

export const TopBarLink = styled.a`
  color: #FFFFFF;
  text-decoration: none;
  font-size: 13px;
  font-weight: 500;
  transition: all 0.2s;
  font-family: 'UOLText', sans-serif;
  text-transform: uppercase;

  &:hover {
    opacity: 0.8;
  }
`;

export const MainNav = styled.nav`
  display: flex;
  gap: 32px;
  align-items: center;

  @media (max-width: 1024px) {
    gap: 16px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MainNavLink = styled.a`
  color: #FFFFFF;
  text-decoration: none;
  font-size: 14px;
  font-family: 'UOLText', sans-serif;
  position: relative;
  transition: all 0.2s;
  
  &[aria-current="page"] {
    font-weight: 600;

    &:after {
      width: 100%;
    }
  }

  &:hover {
    opacity: 0.8;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  @media (max-width: 768px) {
    gap: 16px;
  }
`;

export const IconButton = styled.button<IconButtonProps>`
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-family: 'UOLText', sans-serif;
  text-transform: uppercase;
  font-weight: 500;

  svg {
    width: 20px;
    height: 20px;
    path {
      fill: currentColor;
    }
  }

  span {
    @media (max-width: 1024px) {
      display: none;
    }
  }

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    padding: 6px;
    
    svg {
      width: 18px;
      height: 18px;
    }
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

export const AccessibilityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 16px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const FontSizeButton = styled.button`
  background: none;
  border: 1px solid #E5E5E5;
  border-radius: 4px;
  padding: 4px 8px;
  color: #333333;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #F5F5F5;
    border-color: #CCCCCC;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  }
`;