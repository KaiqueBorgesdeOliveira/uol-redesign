import React from 'react';
import Header from '../sections/Header/Header';
import { HelpSection } from '../sections/HelpSection/HelpSection';
import ServicesGrid from '../sections/ServicesGrid/ServiceGrid';
import Footer from '../common/Footer';
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
    icon: 'extrato',
    title: 'Meu extrato',
    description: 'Visualize todo seu histórico de pagamentos e transações de forma detalhada',
  },
  {
    icon: 'boleto',
    title: '2ª via de boleto',
    description: 'Gere e baixe a segunda via dos seus boletos em poucos cliques',
  },
  {
    icon: 'senha',
    title: 'Recuperação de senha',
    description: 'Recupere seu acesso de forma rápida e segura',
  },
  {
    icon: 'produtos',
    title: 'Meus produtos',
    description: 'Gerencie todos os seus produtos e serviços UOL em um só lugar',
  },
  {
    icon: 'pagamento',
    title: 'Meios de pagamento',
    description: 'Configure suas formas de pagamento preferidas',
  }
];

const App: React.FC = () => {
  return (
    <>
      <Header />
      <MainContainer role="main">
        <ServicesGrid services={services} />
        <HelpSection />
      </MainContainer>
      <Footer />
    </>
  );
};

export default App;