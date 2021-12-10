import React from 'react';
import Logo from '../../assets/logo.svg';
import { Header } from './styles';

const HeaderComponent: React.FC = () => {
  return (
    <Header>
      <img alt="João Sass" src={Logo} />
    </Header>
  );
}

export default HeaderComponent;
