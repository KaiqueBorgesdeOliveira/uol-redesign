import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.section`
  position: relative;
  width: 100%;
  height: 400px;
  background: ${({ theme }) => theme.colors.background};
  overflow: hidden;
`;

const BannerContent = styled.div`
  position: relative;
  max-width: ${({ theme }) => theme.breakpoints.desktop};
  margin: 0 auto;
  padding: 2rem;
  z-index: 2;
`;

const BannerImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 60%;
  height: 100%;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.9);
  }
`;

const BannerText = styled.div`
  position: relative;
  max-width: 500px;
  z-index: 2;
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 2rem;
`;

const DiscountList = styled.div`
  margin-bottom: 2rem;
  
  p {
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 0.5rem;
    
    strong {
      font-weight: bold;
    }
  }
`;

const Button = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1rem;
  font-weight: bold;
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;
  
  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;

const NavigationButtons = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  z-index: 2;
`;

const NavButton = styled.button<{ active?: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ theme, active }) => active ? theme.colors.primary : theme.colors.gray.light};
  border: none;
  padding: 0;
  cursor: pointer;
`;

export const Banner: React.FC = () => {
  return (
    <BannerContainer>
      <BannerContent>
        <BannerText>
          <Title>Com o Clube UOL</Title>
          <Subtitle>Viver é um barato</Subtitle>
          <DiscountList>
            <p>Desconto em bar? <strong>Quero!</strong></p>
            <p>Desconto em cinema? <strong>Quero também!</strong></p>
            <p>Desconto em cursos, shows e lojas? <strong>Quero Também</strong></p>
          </DiscountList>
          <Button>EU QUERO</Button>
        </BannerText>
      </BannerContent>
      <BannerImage>
        <img src="/src/assets/imagens/banner-clube-uol.jpg" alt="Pessoas felizes aproveitando descontos" />
      </BannerImage>
      <NavigationButtons>
        <NavButton active />
        <NavButton />
        <NavButton />
      </NavigationButtons>
    </BannerContainer>
  );
}; 