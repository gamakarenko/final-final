import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { IAppButton } from './AppButton';

export const StyledAppButton = styled.button<
  Pick<IAppButton, 'isFilled' | 'isUppercase' | 'textAlign' | 'size'>
>`
  width: 100%;
  display: block;
  padding: ${({ size }) => (size === 'normal' ? '11px 22px' : '15px')};
  border-radius: 5px;
  border: 1px var(--primary-color) solid;
  text-transform: ${({ isUppercase }) => (isUppercase ? 'uppercase' : 'none')};
  text-align: ${({ textAlign }) => textAlign};
  font-size: 15px;
  line-height: 1;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

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

          &:active {
            background-color: var(--primary-color-lighter);
            border: 1px var(--primary-color-lighter) solid;
          }
        `
      : css`
          background-color: transparent;
          color: var(--primary-color);

          &:disabled {
            border: 1px var(--disabled-color) solid;
            color: var(--disabled-color);
          }

          &:active {
            border: 1px var(--primary-color-lighter) solid;
            color: var(--primary-color-lighter);
          }
        `}
`;
