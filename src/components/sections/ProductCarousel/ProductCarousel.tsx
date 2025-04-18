import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../common/Icons';

const CarouselContainer = styled.section`
  padding: 2rem 0;
  background: ${({ theme }) => theme.colors.white};
`;

const CarouselContent = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.desktop};
  margin: 0 auto;
  position: relative;
`;

const ProductsWrapper = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0 3rem;
  overflow: hidden;
`;

const ProductCard = styled.div`
  flex: 0 0 200px;
  padding: 1.5rem;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }
`;

const ProductLogo = styled.img`
  width: 120px;
  height: auto;
  margin-bottom: 1rem;
`;

const ProductName = styled.h3`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray.light};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;

  &:first-child {
    left: 0;
  }

  &:last-child {
    right: 0;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.gray.light};
  }
`;

const products = [
  { id: 1, name: 'UOL Mail', logo: 'uol-mail-logo.svg' },
  { id: 2, name: 'UOL Play', logo: 'uol-play-logo.svg' },
  { id: 3, name: 'UOL Assine', logo: 'uol-assine-logo.svg' },
  { id: 4, name: 'UOL Assistência Técnica', logo: 'uol-assistencia-logo.svg' },
  { id: 5, name: 'Clube UOL', logo: 'clube-uol-logo.svg' }
];

export const ProductCarousel: React.FC = () => {
  return (
    <CarouselContainer>
      <CarouselContent>
        <NavigationButton aria-label="Anterior">
          <Icon name="chevron-left" />
        </NavigationButton>
        <ProductsWrapper>
          {products.map((product) => (
            <ProductCard key={product.id}>
              <ProductLogo src={`/src/assets/imagens/${product.logo}`} alt={product.name} />
              <ProductName>{product.name}</ProductName>
            </ProductCard>
          ))}
        </ProductsWrapper>
        <NavigationButton aria-label="Próximo">
          <Icon name="chevron-right" />
        </NavigationButton>
      </CarouselContent>
    </CarouselContainer>
  );
}; 