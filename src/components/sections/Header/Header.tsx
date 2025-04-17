import React from 'react';
import { 
  HeaderContainer, 
  Logo, 
  Title 
} from './Header.styles';
import uolLogo from '../../../assets/images/uol-logo.png';

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title = 'SAC UOL' }) => {
  return (
    <HeaderContainer>
      <Logo 
        src={uolLogo} 
        alt="Logo UOL" 
        aria-label="Logo UOL"
      />
      <Title>{title}</Title>
    </HeaderContainer>
  );
};

export default Header;