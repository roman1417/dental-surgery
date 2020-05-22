import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { NavigationWrapper } from './Navigation.css';
import { Logo, ContactInfo } from 'components';
import Burger from './components/Burger';
import MenuList from './components/MenuList';

const Navigation = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuOpen = useCallback(
    (e) => {
      if (e.target.tagName === 'IMG') {
        setIsMobileMenuOpen(false);
        return;
      }
      setIsMobileMenuOpen(!isMobileMenuOpen);
    },
    [isMobileMenuOpen]
  );

  return (
    <NavigationWrapper>
      <Link to='/' onClick={handleMobileMenuOpen}>
        <Logo />
      </Link>
      <ContactInfo variant='navigation' />
      <Burger
        isMobileMenuOpen={isMobileMenuOpen}
        handleMobileMenuOpen={handleMobileMenuOpen}
      />
      <MenuList
        isMobileMenuOpen={isMobileMenuOpen}
        handleMobileMenuOpen={handleMobileMenuOpen}
      />
    </NavigationWrapper>
  );
}

export default React.memo(Navigation);