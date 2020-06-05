import styled, { css } from 'styled-components';
import { lighten } from 'polished';

import { media } from 'utils/mixins';

const inputMargin = css`
margin: ${({ theme: { spacing } }) => `${spacing.main / 4}px 0`};
`;
const inputPadding = css`
padding: ${({ theme: { spacing } }) => `${spacing.main / 4}px ${spacing.main / 8}px`};
`;

export const FormWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  ${media.sm`
  width: 70%;
  `};
  ${media.md`
  width: 60%;
  `};
  ${media.lg`
  width: 50%;
  `};
`;

export const FormTitle = styled.h2`
  margin-bottom: ${({ theme: { spacing } }) => spacing.main * 2}px;
  text-align: center;
`;

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${({ theme: { spacing } }) => `${spacing.main / 2}px`};
  & > label {
    align-self: flex-start;
  }
  & > input, & > textarea, & > select {
    ${inputMargin}
    ${inputPadding}
    width: 100%;
    line-height: 1.6;
    &:focus {
      outline: none;
      border: 1px solid ${({ theme: { color: { primary } } }) =>
    lighten(.1, primary)};
    };
  };
  & > textarea {
    min-height: 15vh;
  };
  & > span {
    color: #800;
  }
`;