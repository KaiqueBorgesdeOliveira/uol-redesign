import React from 'react';
import * as S from './NewsSection.styles';
import { FiChevronRight, FiClock } from 'react-icons/fi';

export const NewsSection: React.FC = () => {
  return (
    <S.NewsContainer>
      <S.MainNews>
        <S.MainNewsImage 
          src="https://picsum.photos/1200/500" 
          alt="Notícia principal" 
        />
        <S.MainNewsContent>
          <S.NewsCategory>POLÍTICA</S.NewsCategory>
          <S.MainNewsTitle>
            Governo anuncia novo pacote de medidas econômicas para impulsionar o crescimento
          </S.MainNewsTitle>
          <S.MainNewsDescription>
            Ministro da Economia detalha plano que inclui redução de impostos e investimentos em infraestrutura
          </S.MainNewsDescription>
          <S.NewsTime>
            <FiClock size={16} />
            Há 2 horas
          </S.NewsTime>
        </S.MainNewsContent>
      </S.MainNews>

      <S.SecondaryNews>
        <S.NewsCard>
          <S.NewsImage src="/noticia-1.jpg" alt="Notícia 1" />
          <S.NewsContent>
            <S.NewsCategory>ECONOMIA</S.NewsCategory>
            <S.NewsTitle>Título da notícia secundária 1</S.NewsTitle>
            <S.NewsTime>Há 3 horas</S.NewsTime>
          </S.NewsContent>
        </S.NewsCard>

        <S.NewsCard>
          <S.NewsImage src="/noticia-2.jpg" alt="Notícia 2" />
          <S.NewsContent>
            <S.NewsCategory>ESPORTES</S.NewsCategory>
            <S.NewsTitle>Título da notícia secundária 2</S.NewsTitle>
            <S.NewsTime>Há 4 horas</S.NewsTime>
          </S.NewsContent>
        </S.NewsCard>

        <S.NewsCard>
          <S.NewsImage src="/noticia-3.jpg" alt="Notícia 3" />
          <S.NewsContent>
            <S.NewsCategory>ENTRETENIMENTO</S.NewsCategory>
            <S.NewsTitle>Título da notícia secundária 3</S.NewsTitle>
            <S.NewsTime>Há 5 horas</S.NewsTime>
          </S.NewsContent>
        </S.NewsCard>
      </S.SecondaryNews>

      <S.SeeMoreButton>
        Ver mais notícias
        <FiChevronRight />
      </S.SeeMoreButton>
    </S.NewsContainer>
  );
};

export default NewsSection; 