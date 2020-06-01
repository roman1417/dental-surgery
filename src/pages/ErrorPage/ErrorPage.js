import React from 'react';

import { ErrorText } from './ErrorPage.css';
import { Emoji } from 'components';

const ErrorPage = () => {
  return (
    <ErrorText>
      Nie ma takiej strony&nbsp;
      <Emoji label='astonished face' symbol='😲' />
    </ErrorText>
  );
}

export default React.memo(ErrorPage);