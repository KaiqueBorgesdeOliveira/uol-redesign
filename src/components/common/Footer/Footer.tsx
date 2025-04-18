import React from 'react';
import * as S from './Footer.styles';
import UOLLogo from '../../../assets/images/avatar_UOL_final_amarela_logo_horizontal/avatar_UOL_final_amarela_logo_horizontal.png';
import SearchIcon from '../../../assets/images/Search.svg';
import ChatIcon from '../../../assets/images/Icone-atendimento-28x28px.svg';
import EmailIcon from '../../../assets/images/Icone-meios-de-pagamento-60x60px.svg';

const Footer: React.FC = () => {
  return (
    <S.TopBar>
      <S.TopBarContent>
        <S.NavLinks>
          <S.NavLink href="https://www.uol.com.br">
            <S.Logo src={UOLLogo} alt="UOL" />
          </S.NavLink>
          <S.NavLink href="https://ingresso.com">INGRESSO.COM</S.NavLink>
          <S.NavLink href="https://uolhost.com.br">UOL HOST</S.NavLink>
          <S.NavLink href="https://pagseguro.uol.com.br">PAGSEGURO</S.NavLink>
          <S.NavLink href="https://cursos.uol.com.br">CURSOS</S.NavLink>
          <S.NavLink href="https://uolplay.com.br">UOL PLAY</S.NavLink>
        </S.NavLinks>

        <S.RightSection>
          <S.IconButton type="button" aria-label="Buscar">
            <img src={SearchIcon} alt="Buscar" />
            BUSCA
          </S.IconButton>
          <S.IconButton type="button" aria-label="Bate-papo">
            <img src={ChatIcon} alt="Bate-papo" />
            BATE-PAPO
          </S.IconButton>
          <S.IconButton type="button" aria-label="Email">
            <img src={EmailIcon} alt="Email" />
            EMAIL
          </S.IconButton>
        </S.RightSection>
      </S.TopBarContent>
    </S.TopBar>
  );
};

export default Footer; 