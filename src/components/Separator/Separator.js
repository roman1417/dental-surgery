import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTooth } from '@fortawesome/free-solid-svg-icons';

import { SeparatorWrapper, SeparatorLine, SeparatorIcon } from './Separator.css';

const Separator = () => {
  return (
    <SeparatorWrapper>
      <SeparatorLine />
      <SeparatorIcon>
        <FontAwesomeIcon icon={faTooth} />
      </SeparatorIcon>
      <SeparatorLine />
    </SeparatorWrapper>
  );
}

export default React.memo(Separator);