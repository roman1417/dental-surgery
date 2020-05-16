import React from 'react';

import { Container, Box, Element } from './Burger.css';

const Burger = ({ isMobileMenuOpen, handleMobileMenuOpen }) => {
  return (
    <Container onClick={handleMobileMenuOpen}>
      <Box>
        <Element />
      </Box>
    </Container>
  );
}

export default Burger;