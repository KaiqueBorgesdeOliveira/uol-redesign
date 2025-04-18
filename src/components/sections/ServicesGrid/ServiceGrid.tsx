// src/components/sections/ServicesGrid.tsx
import React from 'react';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem;
`;

const ServiceCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const IconWrapper = styled.div`
  width: 64px;
  height: 64px;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.5rem;
`;

const Title = styled.h3`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 0.5rem;
`;

const Description = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.gray.dark};
  margin: 0;
`;

interface Service {
  icon: string;
  title: string;
  description: string;
}

interface ServicesGridProps {
  services: Service[];
}

const ServicesGrid: React.FC<ServicesGridProps> = ({ services }) => {
  return (
    <Grid>
      {services.map((service, index) => (
        <ServiceCard key={index}>
          <IconWrapper>
            <span>{service.icon}</span>
          </IconWrapper>
          <Title>{service.title}</Title>
          <Description>{service.description}</Description>
        </ServiceCard>
      ))}
    </Grid>
  );
};

export default ServicesGrid;