import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import { ContactInfoWrapper, ContactText, ContactIcon } from './ContactInfo.css';

const ContactInfo = ({ variant }) => {
  return (
    <ContactInfoWrapper variant={variant}>
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

ContactInfo.propTypes = {
  variant: PropTypes.oneOf(['navigation', 'footer']).isRequired,
}

export default React.memo(ContactInfo);