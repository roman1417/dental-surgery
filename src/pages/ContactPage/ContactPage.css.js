import styled, { css } from 'styled-components';
import { lighten } from 'polished';

const inputMargin = css`
margin: ${({ theme: { spacing } }) => `${spacing.main / 4}px 0`};
`;
const inputPadding = css`
padding: ${({ theme: { spacing } }) => `${spacing.main / 4}px ${spacing.main / 8}px`};
`;

export const FormTitle = styled.h2`
  margin-bottom: ${({ theme: { spacing } }) => spacing.main}px;
`;

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme: { spacing } }) => `${spacing.main / 2}px`};
  & > input, & > textarea, & > select {
    ${inputMargin}
    ${inputPadding}
    width: 90%;
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