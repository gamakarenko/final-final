import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { IAppButton } from './AppButton';

export const StyledAppButton = styled.button<
  Pick<IAppButton, 'isFilled' | 'isUppercase'>
>`
  padding: 11px 22px;
  border-radius: 5px;
  border: 1px var(--primary-color) solid;
  text-transform: ${(props) => (props.isUppercase ? 'uppercase' : 'none')};
  line-height: 1;
  cursor: pointer;

  &:disabled {
    pointer-events: none;
  }

  ${({ isFilled }) =>
    isFilled
      ? css`
          background-color: var(--primary-color);
          color: #fff;

          &:disabled {
            background-color: var(--disabled-color);
            border: 1px var(--disabled-color) solid;
            color: #fff;
          }
        `
      : css`
          background-color: transparent;
          color: var(--primary-color);

          &:disabled {
            border: 1px var(--disabled-color) solid;
            color: var(--disabled-color);
          }
        `}
`;
