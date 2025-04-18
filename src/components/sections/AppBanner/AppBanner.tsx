import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.section`
  background: ${({ theme }) => theme.colors.primary};
  padding: 2rem;
  margin: 2rem 0;
`;

const BannerContent = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.desktop};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;

const QRCodeContainer = styled.div`
  width: 120px;
  height: 120px;
  background: ${({ theme }) => theme.colors.white};
  padding: 0.5rem;
  border-radius: 8px;
  
  img {
    width: 100%;
    height: 100%;
  }
`;

const TextContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const AppIcon = styled.div`
  width: 48px;
  height: 48px;
  
  img {
    width: 100%;
    height: 100%;
  }
`;

const AppText = styled.div`
  h3 {
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 0.5rem;
  }
  
  p {
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text};
  }
`;

const StoreButtons = styled.div`
  display: flex;
  gap: 1rem;
  
  a {
    display: block;
    width: 140px;
    
    img {
      width: 100%;
      height: auto;
    }
  }
`;

export const AppBanner: React.FC = () => {
  return (
    <BannerContainer>
      <BannerContent>
        <QRCodeContainer>
          <img src="/src/assets/imagens/qr-code.png" alt="QR Code para download do app" />
        </QRCodeContainer>
        <TextContent>
          <AppIcon>
            <img src="/src/assets/imagens/app-icon.png" alt="Ícone do app UOL" />
          </AppIcon>
          <AppText>
            <h3>Baixe agora o App Meu UOL</h3>
            <p>e facilite seu dia a dia!</p>
          </AppText>
        </TextContent>
        <StoreButtons>
          <a href="https://play.google.com/store/apps/details?id=br.com.uol.uolapp" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/imagens/google-play-badge.png" alt="Disponível no Google Play" />
          </a>
          <a href="https://apps.apple.com/br/app/uol-notícias-em-tempo-real/id325038469" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/imagens/app-store-badge.png" alt="Baixar na App Store" />
          </a>
        </StoreButtons>
      </BannerContent>
    </BannerContainer>
  );
}; 