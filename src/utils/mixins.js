import { css } from 'styled-components';

const breakpoints = {
  smLandscape: '0px) and (orientation: landscape',
  sm: '768px',
  mdLandscape: '768px) and (orientation: landscape',
  md: '1024px',
  lg: '1200px',
};

export const media = Object.keys(breakpoints)
  .reduce((acc, breakpoint) => {
    acc[breakpoint] = (...args) => css`
		@media (min-width: ${breakpoints[breakpoint]}) {
			${css(...args)};
		}
	`;
    return acc;
  }, {});