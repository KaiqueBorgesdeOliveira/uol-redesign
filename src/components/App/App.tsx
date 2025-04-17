import Header from '../sections/Header/Header';  // Importação default
import { HelpSection } from '../sections/HelpSection/HelpSection';
import { ServicesGrid } from '../sections/ServicesGrid/ServiceGrid';
import styled from 'styled-components';

const MainContainer = styled.main`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background: ${({ theme }) => theme?.colors?.background || '#F5F5F5'};
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

function App() {
  return (
    <>
      <Header />
      <MainContainer role="main">
        <HelpSection />
        <ServicesGrid />
      </MainContainer>
    </>
  );
}

export default App;