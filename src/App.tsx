import React from 'react';
import { Header } from './components/sections/Header';
import { ServicesGrid } from './components/sections/ServicesGrid';
import { SearchHelp } from './components/sections/SearchHelp';
import { AppBanner } from './components/sections/AppBanner';
import { Footer } from './components/common/Footer';
import * as S from './App.styles';

const services = [
  {
    icon: '📱',
    title: 'Meu extrato',
    description: 'Consulte seu extrato e histórico de transações'
  },
  {
    icon: '💳',
    title: '2ª via de boleto',
    description: 'Gere a segunda via do seu boleto'
  },
  {
    icon: '🔑',
    title: 'Recuperação de senha',
    description: 'Recupere sua senha de acesso'
  },
  {
    icon: '📧',
    title: 'E-mail',
    description: 'Acesse sua conta de e-mail'
  },
  {
    icon: '💬',
    title: 'Bate-papo',
    description: 'Converse com nossos atendentes'
  },
  {
    icon: '📞',
    title: 'Telefone',
    description: 'Fale com nossa central de atendimento'
  }
];

const App: React.FC = () => {
  return (
    <S.AppContainer>
      <Header />
      <main>
        <ServicesGrid services={services} />
        <SearchHelp />
        <AppBanner />
      </main>
      <Footer />
    </S.AppContainer>
  );
};

export default App; 