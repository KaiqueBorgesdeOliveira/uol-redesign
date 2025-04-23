import styled from 'styled-components';

export const NewsContainer = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding: 32px 16px;
`;

export const MainNews = styled.article`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
  position: relative;
`;

export const MainNewsImage = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 4px;
`;

export const MainNewsContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 32px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  border-radius: 0 0 4px 4px;
`;

export const NewsCategory = styled.span`
  color: #FF0000;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 8px;
  display: inline-block;
  background: rgba(255, 255, 255, 0.9);
  padding: 4px 8px;
  border-radius: 4px;
`;

export const MainNewsTitle = styled.h1`
  font-size: 40px;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 16px;
  line-height: 1.2;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

export const MainNewsDescription = styled.p`
  font-size: 20px;
  color: #FFFFFF;
  margin-bottom: 16px;
  line-height: 1.5;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`;

export const NewsTime = styled.span`
  color: #FFFFFF;
  font-size: 14px;
  opacity: 0.9;
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: '';
    display: block;
    width: 4px;
    height: 4px;
    background: #FFFFFF;
    border-radius: 50%;
  }
`;

export const SecondaryNews = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const NewsCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const NewsImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;

export const NewsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const NewsTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #1A1A1A;
  line-height: 1.3;
`;

export const SeeMoreButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  color: #1A1A1A;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin: 0 auto;
  padding: 8px 16px;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #F5F5F5;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`; 