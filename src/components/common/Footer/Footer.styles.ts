import styled from 'styled-components';

export const TopBar = styled.div`
  background: ${({ theme }) => theme.colors.uolBlack};
  padding: 12px 0;
  display: flex;
  justify-content: center;
`;

export const TopBarContent = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.desktop};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacing.md};
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
  opacity: 0.8;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }

  img {
    width: 20px;
    height: 20px;
  }
`;

export const RightSection = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  font-weight: 500;
  opacity: 0.8;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }

  img {
    width: 20px;
    height: 20px;
  }
`;

export const Logo = styled.img`
  height: 24px;
  width: auto;
`; 