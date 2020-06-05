import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import ScrollIntoView from 'react-scroll-into-view'

import { NavigationWrapper, NavigationContainer } from './Navigation.css';
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
      <NavigationContainer>
        <ScrollIntoView selector='#header'>
          <Link to='/' onClick={handleMobileMenuOpen}>
            <Logo />
          </Link>
        </ScrollIntoView>
        <ContactInfo variant='navigation' />
        <Burger
          isMobileMenuOpen={isMobileMenuOpen}
          handleMobileMenuOpen={handleMobileMenuOpen}
        />
        <MenuList
          isMobileMenuOpen={isMobileMenuOpen}
          handleMobileMenuOpen={handleMobileMenuOpen}
        />
      </NavigationContainer>
    </NavigationWrapper>
  );
}

export default React.memo(Navigation);