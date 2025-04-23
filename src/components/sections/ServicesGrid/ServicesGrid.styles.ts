import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;
  max-width: 1280px;
  margin: 48px auto;
  padding: 0 16px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 24px;
  background: #FFFFFF;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFC72C;

  svg {
    width: 32px;
    height: 32px;
  }
`;

export const ServiceTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: #1A1A1A;
  text-align: center;
  margin: 0;
`;

export const ServiceDescription = styled.p`
  font-size: 14px;
  color: #666666;
  text-align: center;
  margin: 0;
  line-height: 1.4;
`; 