import React, { useMemo, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { HeaderButton, ArticleButton, FormButton } from './Button.css';

const Button = forwardRef(({ variant, children, ...props }, buttonRef) => {

  const { to, disabled } = props

  const Component = useMemo(() => {
    switch (variant) {
      case 'header':
        return HeaderButton
      case 'article':
        return ArticleButton
      case 'form':
        return FormButton
      default:
        return ArticleButton
    }
  }, [variant]);

  return (
    to ?
      <Link to={to}>
        <Component ref={buttonRef}>{children}</Component>
      </Link>
      :
      <Component disabled={disabled}>{children}</Component>
  );
})



Button.propTypes = {
  variant: PropTypes.oneOf(['header', 'article', 'form']).isRequired,
  to: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.string.isRequired,
}

export default React.memo(Button);