import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #FF6600; /* Laranja UOL */
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const Logo = styled.img`
  height: 40px;
  width: auto;
`;

export const Title = styled.h1`
  color: white;
  margin-left: 1rem;
  font-size: 1.5rem;
  font-weight: 500;
`;