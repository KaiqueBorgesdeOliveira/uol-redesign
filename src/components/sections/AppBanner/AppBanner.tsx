import React from 'react';
import * as S from './AppBanner.styles';
import { FiSmartphone } from 'react-icons/fi';

const AppBanner: React.FC = () => {
  return (
    <S.Container>
      <S.Content>
        <S.IconWrapper>
          <FiSmartphone />
        </S.IconWrapper>
        <S.TextContent>
          <S.Title>Baixe agora o <S.Highlight>App Meu UOL</S.Highlight></S.Title>
          <S.Subtitle>e facilite seu dia a dia!</S.Subtitle>
        </S.TextContent>
        <S.StoreButtons>
          <S.StoreButton href="https://play.google.com/store" target="_blank">
            <img src="/google-play.png" alt="Disponível no Google Play" />
          </S.StoreButton>
          <S.StoreButton href="https://apps.apple.com" target="_blank">
            <img src="/app-store.png" alt="Download na App Store" />
          </S.StoreButton>
        </S.StoreButtons>
      </S.Content>
    </S.Container>
  );
};

export default AppBanner; 