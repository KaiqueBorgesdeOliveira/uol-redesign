import React from 'react';
import Header from '../sections/Header/Header';
import { HelpSection } from '../sections/HelpSection/HelpSection';
import ServicesGrid from '../sections/ServicesGrid/ServiceGrid';
import * as S from './App.styles';
import styled from 'styled-components';

const MainContainer = styled.main`
  padding: 2rem;
  max-width: ${({ theme }) => theme.breakpoints.desktop};
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.background};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 1rem;
  }
`;

const services = [
  {
    icon: '💳',
    title: 'Meu extrato',
    description: 'Visualize seu histórico de pagamentos',
  },
  {
    icon: '🔄',
    title: '2ª via de boleto',
    description: 'Gere a segunda via do seu boleto',
  },
  {
    icon: '🔒',
    title: 'Recuperação de senha',
    description: 'Recupere sua senha de acesso',
  },
];

const App: React.FC = () => {
  return (
    <>
      <Header />
      <MainContainer role="main">
        <ServicesGrid services={services} />
        <HelpSection />
      </MainContainer>
    </>
  );
};

export default App;