import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'

const SectionContainer = styled.section`
  margin: 2rem 0;
`

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  background: white;
  border-radius: 8px;
  padding: 0.8rem;
  margin-top: 1rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);

  input {
    border: none;
    flex: 1;
    padding: 0.5rem;
    outline: none;
    font-size: 1rem;
  }
`

export const HelpSection = () => (
  <SectionContainer>
    <h2>Olá, como podemos te ajudar?</h2>
    <SearchBox>
      <input type="text" placeholder="Digite aqui a sua dúvida" />
      <FaSearch color="var(--uol-orange)" size={20} />
    </SearchBox>
  </SectionContainer>
)