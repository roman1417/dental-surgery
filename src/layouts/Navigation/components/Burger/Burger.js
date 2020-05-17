import React from 'react';
import PropTypes from 'prop-types';

import { Container, Box, Element } from './Burger.css';

const Burger = ({ isMobileMenuOpen, handleMobileMenuOpen }) => {
  return (
    <Container onClick={handleMobileMenuOpen}>
      <Box>
        <Element isMobileMenuOpen={isMobileMenuOpen} />
      </Box>
    </Container>
  );
}

Burger.propTypes = {
  isMobileMenuOpen: PropTypes.bool.isRequired,
  handleMobileMenuOpen: PropTypes.func.isRequired,
}

export default React.memo(Burger);