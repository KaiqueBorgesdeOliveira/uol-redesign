import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: #F5F5F5;
  padding: 48px 0 24px;
`;

export const FooterContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 16px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SectionTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #1A1A1A;
`;

export const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const LinkItem = styled.li``;

export const Link = styled.a`
  color: #666666;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s;

  &:hover {
    color: #1A1A1A;
  }
`;

export const FooterBottom = styled.div`
  max-width: 1280px;
  margin: 48px auto 0;
  padding: 24px 16px 0;
  border-top: 1px solid #E5E5E5;
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: center;
`;

export const Copyright = styled.p`
  color: #666666;
  font-size: 12px;
  margin: 0;
`;

export const LegalLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
`;

export const LegalLink = styled.a`
  color: #666666;
  text-decoration: none;
  font-size: 12px;
  position: relative;

  &:not(:last-child)::after {
    content: '|';
    position: absolute;
    right: -10px;
    color: #E5E5E5;
  }

  &:hover {
    text-decoration: underline;
  }
`; 