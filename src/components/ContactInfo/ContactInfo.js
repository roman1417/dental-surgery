import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import { ContactInfoWrapper, ContactText, ContactIcon } from './ContactInfo.css';

const ContactInfo = () => {
  return (
    <ContactInfoWrapper>
      <ContactText>
        <ContactIcon><FontAwesomeIcon icon={faPhone} /></ContactIcon>
        +48 123 456 789
      </ContactText>
      <ContactText>
        <ContactIcon><FontAwesomeIcon icon={faEnvelope} /></ContactIcon>
        artdent@company.com
      </ContactText>
      <ContactText>
        <ContactIcon><FontAwesomeIcon icon={faMapMarkerAlt} /></ContactIcon>
        Bydgoszcz ul. Prosta 57
      </ContactText>
    </ContactInfoWrapper>
  );
}

export default React.memo(ContactInfo);