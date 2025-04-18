import React from 'react';
import styled from 'styled-components';

interface IconProps {
  name: string;
  size?: number;
  color?: string;
}

const IconWrapper = styled.div<{ size: number }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const Icon: React.FC<IconProps> = ({ name, size = 24, color }) => {
  return (
    <IconWrapper size={size}>
      <img 
        src={`/src/assets/imagens/${name}.svg`} 
        alt={`Ícone ${name}`}
        style={color ? { filter: `color(${color})` } : undefined}
      />
    </IconWrapper>
  );
}; 