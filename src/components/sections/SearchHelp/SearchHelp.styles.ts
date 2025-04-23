import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 48px 16px;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 500;
  color: #1A1A1A;
  margin-bottom: 24px;
`;

export const SearchWrapper = styled.div`
  display: flex;
  max-width: 800px;
  margin: 0 auto;
  border: 1px solid #E5E5E5;
  border-radius: 4px;
  overflow: hidden;
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 16px;
  border: none;
  font-size: 16px;
  color: #1A1A1A;
  outline: none;

  &::placeholder {
    color: #999999;
  }
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  background: #FFC72C;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;

  svg {
    width: 24px;
    height: 24px;
    color: #1A1A1A;
  }

  &:hover {
    background: #FFD75E;
  }
`; 