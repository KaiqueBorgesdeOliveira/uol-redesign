import React from 'react';
import * as S from './HelpSection.styles';
import { HelpSectionProps } from '../../../types/sections';

export const HelpSection: React.FC<HelpSectionProps> = ({
  title = 'Precisa de ajuda?',
  description = 'Nossa equipe está pronta para te ajudar com qualquer dúvida ou problema.'
}) => {
  return (
    <S.Container>
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <S.HelpButton>
          Fale conosco
        </S.HelpButton>
      </S.Content>
    </S.Container>
  );
};