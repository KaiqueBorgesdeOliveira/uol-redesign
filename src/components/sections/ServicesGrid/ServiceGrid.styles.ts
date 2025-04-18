import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing.xl};
  animation: ${fadeIn} 0.6s ease-out;
`;

export const ServiceCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  padding: ${({ theme }) => theme.spacing.xl};
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);

    &::before {
      opacity: 1;
    }
  }
`;

export const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto ${({ theme }) => theme.spacing.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 20px;
  transition: all 0.3s ease;

  img {
    width: 40px;
    height: 40px;
    transition: transform 0.3s ease;
  }

  ${ServiceCard}:hover & {
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    
    img {
      transform: scale(1.1);
      filter: brightness(0) invert(1);
    }
  }
`;

export const Title = styled.h3`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 ${({ theme }) => theme.spacing.sm};
`;

export const Description = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.gray.medium};
  margin: 0;
  line-height: 1.6;
`;
