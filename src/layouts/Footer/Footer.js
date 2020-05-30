import React, { useMemo } from 'react';

import {
  FooterWrapper,
  FooterAbout,
  FooterTitle,
  FooterDescription,
  HoursText,
} from './Footer.css';
import { ContactInfo } from 'components';
import hours from 'assets/openingHours';

const Footer = () => {

  const openingHours = useMemo(() => (hours.map(
    item => <HoursText key={item.text}>{item.text}</HoursText>
  )), []);

  return (
    <FooterWrapper>
      <FooterAbout>
        <FooterTitle>O naszej klinice</FooterTitle>
        <FooterDescription>
          Dbamy o uśmiech naszyh pacjentów wykorzystując najnowsze technologie. Leczymy bezboleśnie i precyzyjnie.
        </FooterDescription>
        <ContactInfo variant='footer' />
      </FooterAbout>
      <div>
        <FooterTitle>Godziny otwarcia</FooterTitle>
        {openingHours}
      </div>
    </FooterWrapper>
  );
}

export default React.memo(Footer);