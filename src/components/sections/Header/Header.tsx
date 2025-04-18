import React from 'react';
import { FiSearch, FiHelpCircle } from 'react-icons/fi';
import * as S from './Header.styles';

export const Header: React.FC = () => {
  return (
    <S.HeaderContainer>
      <S.TopBar>
        <S.Logo src="/uol-logo.svg" alt="UOL" />
        
        <S.TopBarNav>
          <S.TopBarLink href="https://ingresso.com">INGRESSO.COM</S.TopBarLink>
          <S.TopBarLink href="https://uolhost.com.br">UOL HOST</S.TopBarLink>
          <S.TopBarLink href="https://pagbank.com.br">PAGBANK</S.TopBarLink>
          <S.TopBarLink href="https://cursos.uol.com.br">CURSOS</S.TopBarLink>
          <S.TopBarLink href="https://uolplay.com.br">UOL PLAY</S.TopBarLink>
          <S.TopBarLink href="https://uolads.com.br">UOL ADS</S.TopBarLink>
        </S.TopBarNav>

        <S.ButtonsContainer>
          <S.IconButton aria-label="Buscar" isTopBar>
            <FiSearch />
            <S.IconLabel>BUSCA</S.IconLabel>
          </S.IconButton>
          
          <S.IconButton aria-label="Bate-papo" isTopBar>
            <img src="/chat-icon.svg" alt="" />
            <S.IconLabel>BATE-PAPO</S.IconLabel>
          </S.IconButton>
          
          <S.IconButton aria-label="Email" isTopBar>
            <img src="/email-icon.svg" alt="" />
            <S.IconLabel>EMAIL</S.IconLabel>
          </S.IconButton>
        </S.ButtonsContainer>
      </S.TopBar>

      <S.MainHeader>
        <S.LogoSAC src="/sac-logo.svg" alt="SAC UOL" />
        
        <S.MainNav>
          <S.MainNavLink href="/home">Home</S.MainNavLink>
          <S.MainNavLink href="/atendimento">Atendimento</S.MainNavLink>
          <S.MainNavLink href="/financeiro">Financeiro</S.MainNavLink>
          <S.MainNavLink href="/minha-conta">Minha conta</S.MainNavLink>
        </S.MainNav>

        <S.RightNav>
          <S.NavButton>
            <FiHelpCircle />
            Ajuda
          </S.NavButton>
          <S.NavButton>
            Entrar
          </S.NavButton>
        </S.RightNav>
      </S.MainHeader>
    </S.HeaderContainer>
  );
};

export default Header;