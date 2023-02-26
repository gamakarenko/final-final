import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { AppIconBtnProps } from './AppIconBtn';

type StyledAppIconBtnProps = Pick<
  AppIconBtnProps,
  'size' | 'withSeparator' | 'fill'
>;

export const StyledAppIconBtn = styled.button<StyledAppIconBtnProps>`
  padding: 8px;
  background-color: transparent;
  display: grid;
  place-content: center;
  -webkit-tap-highlight-color: transparent;

  ${({ withSeparator }) => {
    switch (withSeparator) {
      case undefined:
        return 'border-radius: 50%';
      case 'left-lined':
        return 'border-left: 1px solid var(--line-color)';
      case 'right-lined':
        return 'border-right: 1px solid var(--line-color)';
    }
  }};

  &:active {
    .app-icon-btn__icon * {
      fill: var(--primary-color-lighter);
    }
  }

  .app-icon-btn {
    &__icon {
      ${({ size }) => css`
        width: ${size}px;
        height: ${size}px;
      `}

      display: block;
    }
    &__icon * {
      fill: ${({ fill }) => (fill ? fill : 'var(--primary-color)')};
    }
  }
`;
