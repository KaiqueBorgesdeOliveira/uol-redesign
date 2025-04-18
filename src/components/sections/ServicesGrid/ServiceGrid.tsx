// src/components/sections/ServicesGrid.tsx
import React from 'react';
import * as S from './ServiceGrid.styles';
import IconExtrato from '../../../assets/images/Icone-extrato-60x60px.svg';
import IconBoleto from '../../../assets/images/Icone-boleto-60x60px.svg';
import IconSenha from '../../../assets/images/Icone Alterar senha.svg';
import IconProdutos from '../../../assets/images/Icone-meus-produtos-60x60px.svg';
import IconPagamento from '../../../assets/images/Icone-meios-de-pagamento-60x60px.svg';

interface Service {
  icon: string;
  title: string;
  description: string;
}

interface ServicesGridProps {
  services: Service[];
}

const serviceIcons: { [key: string]: string } = {
  'Meu extrato': IconExtrato,
  '2ª via de boleto': IconBoleto,
  'Recuperação de senha': IconSenha,
  'Meus produtos': IconProdutos,
  'Meios de pagamento': IconPagamento,
};

const ServicesGrid: React.FC<ServicesGridProps> = ({ services }) => {
  return (
    <S.Grid>
      {services.map((service, index) => (
        <S.ServiceCard key={index}>
          <S.IconWrapper>
            <img 
              src={serviceIcons[service.title] || serviceIcons['Meus produtos']} 
              alt={service.title}
            />
          </S.IconWrapper>
          <S.Title>{service.title}</S.Title>
          <S.Description>{service.description}</S.Description>
        </S.ServiceCard>
      ))}
    </S.Grid>
  );
};

export default ServicesGrid;