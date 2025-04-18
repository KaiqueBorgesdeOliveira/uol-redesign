import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  margin: 2rem 0;
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1.5rem;
`;

const SearchContainer = styled.div`
  position: relative;
  margin-bottom: 2rem;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1rem;
  padding-left: 2.5rem;
  border: 1px solid ${({ theme }) => theme.colors.gray.light};
  border-radius: 4px;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const SearchIcon = styled.span`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.gray.medium};
`;

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FAQItem = styled.div`
  padding: 1rem;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background: ${({ theme }) => theme.colors.gray.light};
  }
`;

const FAQQuestion = styled.h3`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

export const HelpSection: React.FC = () => {
  return (
    <Section>
      <Title>Como podemos ajudar?</Title>
      <SearchContainer>
        <SearchIcon>🔍</SearchIcon>
        <SearchInput 
          type="text" 
          placeholder="Digite aqui sua dúvida (Ex: Como recuperar a minha senha?)"
          aria-label="Campo de busca para dúvidas"
        />
      </SearchContainer>
      <FAQList>
        <FAQItem>
          <FAQQuestion>Como trocar a senha do meu e-mail?</FAQQuestion>
        </FAQItem>
        <FAQItem>
          <FAQQuestion>Esqueci minha senha de acesso. O que faço?</FAQQuestion>
        </FAQItem>
        <FAQItem>
          <FAQQuestion>Por que meus e-mails não estão sendo enviados?</FAQQuestion>
        </FAQItem>
        <FAQItem>
          <FAQQuestion>Como figurar filtros para os e-mails recebidos?</FAQQuestion>
        </FAQItem>
        <FAQItem>
          <FAQQuestion>Como configurar o redirecionamento de e-mails para outros endereços de e-mails?</FAQQuestion>
        </FAQItem>
      </FAQList>
    </Section>
  );
};