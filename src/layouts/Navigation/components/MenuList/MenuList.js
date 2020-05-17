import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { MenuContainer, MenuElemnet } from './MenuList.css';
import links from 'utils/links';

const MenuList = ({ isMobileMenuOpen, handleMobileMenuOpen }) => {

  const menu = useMemo(() => links.map(link => (
    <MenuElemnet key={link.name}>
      <NavLink
        to={link.path}
        exact={link.exact || false}
      >
        {link.name}
      </NavLink>
    </MenuElemnet>
  )), [])

  return (
    <MenuContainer
      isMobileMenuOpen={isMobileMenuOpen}
      onClick={handleMobileMenuOpen}
    >
      {menu}
    </MenuContainer>
  );
}

MenuList.propTypes = {
  isMobileMenuOpen: PropTypes.bool.isRequired,
  handleMobileMenuOpen: PropTypes.func.isRequired,
}

export default React.memo(MenuList);