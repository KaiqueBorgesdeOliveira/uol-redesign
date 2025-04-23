import styled from 'styled-components';

export const Container = styled.section`
  background: #FFC72C;
  padding: 32px 16px;
`;

export const Content = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 32px;
  padding: 16px;
  background: #FFD75E;
  border-radius: 8px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const IconWrapper = styled.div`
  svg {
    width: 48px;
    height: 48px;
    color: #1A1A1A;
  }
`;

export const TextContent = styled.div`
  flex: 1;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 500;
  color: #1A1A1A;
  margin-bottom: 4px;
`;

export const Highlight = styled.span`
  font-weight: 700;
`;

export const Subtitle = styled.p`
  font-size: 16px;
  color: #1A1A1A;
`;

export const StoreButtons = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StoreButton = styled.a`
  display: block;
  
  img {
    height: 40px;
    width: auto;
  }

  &:hover {
    opacity: 0.9;
  }
`; 