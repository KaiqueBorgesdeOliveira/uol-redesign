import React from 'react';
import * as S from './Footer.styles';
import UOLLogo from '../../../assets/images/avatar_UOL_final_amarela_logo_horizontal/avatar_UOL_final_amarela_logo_horizontal.png';
import SearchIcon from '../../../assets/images/Search.svg';
import ChatIcon from '../../../assets/images/Icone-atendimento-28x28px.svg';
import EmailIcon from '../../../assets/images/Icone-meios-de-pagamento-60x60px.svg';

export const Footer: React.FC = () => {
  return (
    <S.FooterContainer>
      <S.FooterContent>
        <S.FooterSection>
          <S.SectionTitle>Atendimento</S.SectionTitle>
          <S.LinkList>
            <S.LinkItem>
              <S.Link href="#">Fale conosco</S.Link>
            </S.LinkItem>
            <S.LinkItem>
              <S.Link href="#">Ouvidoria Produtos Digitais</S.Link>
            </S.LinkItem>
            <S.LinkItem>
              <S.Link href="#">Ouvidoria UOL Host</S.Link>
            </S.LinkItem>
            <S.LinkItem>
              <S.Link href="#">Perguntas frequentes</S.Link>
            </S.LinkItem>
          </S.LinkList>
        </S.FooterSection>

        <S.FooterSection>
          <S.SectionTitle>Financeiro</S.SectionTitle>
          <S.LinkList>
            <S.LinkItem>
              <S.Link href="#">Meus débitos</S.Link>
            </S.LinkItem>
            <S.LinkItem>
              <S.Link href="#">Meu extrato</S.Link>
            </S.LinkItem>
            <S.LinkItem>
              <S.Link href="#">2ª Via de boleto a vencer</S.Link>
            </S.LinkItem>
            <S.LinkItem>
              <S.Link href="#">Meios de pagamento</S.Link>
            </S.LinkItem>
          </S.LinkList>
        </S.FooterSection>

        <S.FooterSection>
          <S.SectionTitle>Minha conta</S.SectionTitle>
          <S.LinkList>
            <S.LinkItem>
              <S.Link href="#">Recuperar senha</S.Link>
            </S.LinkItem>
            <S.LinkItem>
              <S.Link href="#">Meus dados</S.Link>
            </S.LinkItem>
            <S.LinkItem>
              <S.Link href="#">Meus produtos</S.Link>
            </S.LinkItem>
            <S.LinkItem>
              <S.Link href="#">Central de segurança</S.Link>
            </S.LinkItem>
          </S.LinkList>
        </S.FooterSection>
      </S.FooterContent>

      <S.FooterBottom>
        <S.Copyright>
          © 1996 - 2024 - UOL - O melhor conteúdo. Todos os direitos reservados.
        </S.Copyright>
        <S.LegalLinks>
          <S.LegalLink href="#">Regras de uso</S.LegalLink>
          <S.LegalLink href="#">Política anti-spam</S.LegalLink>
          <S.LegalLink href="#">Crimes virtuais: denuncie</S.LegalLink>
          <S.LegalLink href="#">Normas de Segurança e privacidade</S.LegalLink>
        </S.LegalLinks>
      </S.FooterBottom>
    </S.FooterContainer>
  );
}; 