import React from 'react';

import logoImg from 'images/logo.png'

import { LogoWrapper, ImageContainer } from './Logo.css';

const Logo = () => {
  return (
    <LogoWrapper>
      <ImageContainer src={logoImg} alt="Logo firmy - ząb" />
    </LogoWrapper>
  );
}

export default React.memo(Logo);