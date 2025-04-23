import React from 'react';
import * as S from './SearchHelp.styles';
import { FiSearch } from 'react-icons/fi';

const SearchHelp: React.FC = () => {
  return (
    <S.Container>
      <S.Title>Olá, como podemos te ajudar?</S.Title>
      <S.SearchWrapper>
        <S.SearchInput 
          type="text" 
          placeholder="Digite aqui a sua dúvida."
        />
        <S.SearchButton>
          <FiSearch />
        </S.SearchButton>
      </S.SearchWrapper>
    </S.Container>
  );
};

export default SearchHelp; 