import React from 'react';
import * as S from './ServicesGrid.styles';
import { FiCreditCard, FiShoppingCart, FiFileText, FiCode, FiLock } from 'react-icons/fi';
import { ServicesGridProps } from '../../../types/sections';

export const ServicesGrid: React.FC<ServicesGridProps> = ({ services }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'extrato':
        return <FiFileText />;
      case 'boleto':
        return <FiCode />;
      case 'senha':
        return <FiLock />;
      case 'produtos':
        return <FiShoppingCart />;
      case 'pagamento':
        return <FiCreditCard />;
      default:
        return <FiFileText />;
    }
  };

  return (
    <S.Container>
      {services.map((service, index) => (
        <S.ServiceCard key={index}>
          <S.IconWrapper>
            {getIcon(service.icon)}
          </S.IconWrapper>
          <S.ServiceTitle>{service.title}</S.ServiceTitle>
          <S.ServiceDescription>{service.description}</S.ServiceDescription>
        </S.ServiceCard>
      ))}
    </S.Container>
  );
}; 