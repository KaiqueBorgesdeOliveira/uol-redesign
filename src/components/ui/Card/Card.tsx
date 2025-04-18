import React from 'react';
import * as S from './Card.styles';

interface CardProps {
  title?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <S.Card>
      {title && <S.CardTitle>{title}</S.CardTitle>}
      <S.CardContent>{children}</S.CardContent>
    </S.Card>
  );
};

export default Card;
