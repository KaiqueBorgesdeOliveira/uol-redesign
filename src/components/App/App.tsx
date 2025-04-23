import React from 'react';
import { Header } from '../sections/Header';
import { HelpSection } from '../sections/HelpSection';
import { ServicesGrid } from '../sections/ServicesGrid';
import { Footer } from '../common/Footer';
import * as S from './App.styles';

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
      <S.MainContainer role="main">
        <ServicesGrid services={services} />
        <HelpSection />
      </S.MainContainer>
      <Footer />
    </>
  );
};

export default App;