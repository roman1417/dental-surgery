import React, { useState, useCallback } from 'react';

import { NavigationWrapper } from './Navigation.css';
import { Logo, ContactInfo } from 'components';
import Burger from './components/Burger'

const Navigation = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuOpen = useCallback(
    () => setIsMobileMenuOpen(!isMobileMenuOpen),
    [isMobileMenuOpen]
  );

  return (
    <NavigationWrapper>
      <Logo />
      <ContactInfo />
      <Burger
        isMobileMenuOpen={isMobileMenuOpen}
        handleMobileMenuOpen={handleMobileMenuOpen}
      />
    </NavigationWrapper>
  );
}

export default React.memo(Navigation);