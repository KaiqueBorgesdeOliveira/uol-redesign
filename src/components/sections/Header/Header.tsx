import React from 'react';
import * as S from './Header.styles';
import { ReactComponent as LogoUOL } from '../../../assets/images/logo-uol.svg';
import { ReactComponent as IconSearch } from '../../../assets/images/Icone search.svg';
import { ReactComponent as IconMenu } from '../../../assets/images/Icon dropdown menu.svg';
import { ReactComponent as IconEmail } from '../../../assets/images/Icone atendimento.svg';
import { ReactComponent as IconProfile } from '../../../assets/images/Icone perfil.svg';

export const Header: React.FC = () => {
  return (
    <S.HeaderContainer role="banner">
      <S.TopBar>
        <S.TopBarNav aria-label="Links rápidos">
          <S.TopBarLink href="https://www.ingresso.com/" target="_blank" rel="noopener noreferrer">INGRESSO.COM</S.TopBarLink>
          <S.TopBarLink href="https://uolhost.uol.com.br/" target="_blank" rel="noopener noreferrer">UOL HOST</S.TopBarLink>
          <S.TopBarLink href="https://www.pagbank.com.br/" target="_blank" rel="noopener noreferrer">PAGBANK</S.TopBarLink>
          <S.TopBarLink href="https://www.cursoslivres.com.br/" target="_blank" rel="noopener noreferrer">CURSOS</S.TopBarLink>
          <S.TopBarLink href="https://www.uolplay.com.br/" target="_blank" rel="noopener noreferrer">UOL PLAY</S.TopBarLink>
          <S.TopBarLink href="https://www.uolads.com.br/" target="_blank" rel="noopener noreferrer">UOL ADS</S.TopBarLink>
        </S.TopBarNav>

        <S.TopBarActions>
          <S.IconButton aria-label="Buscar no site" isTopBar>
            <IconSearch />
            <span>BUSCA</span>
          </S.IconButton>
          <S.IconButton aria-label="Acessar bate-papo" isTopBar>
            <IconEmail />
            <span>BATE-PAPO</span>
          </S.IconButton>
          <S.IconButton aria-label="Acessar email" isTopBar>
            <IconProfile />
            <span>EMAIL</span>
          </S.IconButton>
        </S.TopBarActions>
      </S.TopBar>

      <S.MainHeader>
        <S.Logo href="/">
          <LogoUOL title="UOL - O melhor conteúdo" />
        </S.Logo>

        <S.MainNav aria-label="Menu principal">
          <S.MainNavLink href="#" aria-current="page">Notícias</S.MainNavLink>
          <S.MainNavLink href="#">Economia</S.MainNavLink>
          <S.MainNavLink href="#">Esporte</S.MainNavLink>
          <S.MainNavLink href="#">Entretenimento</S.MainNavLink>
          <S.MainNavLink href="#">Universa</S.MainNavLink>
          <S.MainNavLink href="#">Folha</S.MainNavLink>
        </S.MainNav>

        <S.ButtonsContainer>
          <S.IconButton aria-label="Buscar no site">
            <IconSearch />
          </S.IconButton>
          <S.IconButton aria-label="Abrir menu">
            <IconMenu />
          </S.IconButton>
        </S.ButtonsContainer>
      </S.MainHeader>
    </S.HeaderContainer>
  );
};