import styled from '@emotion/styled';

import { IAppButton } from './AppButton';

export const StyledAppButton = styled.button<Pick<IAppButton, 'isFilled' | 'isUppercase'>>`
  padding: 11px 22px;
  border-radius: 5px;
  border: 1px var(--primary-color) solid;
  background-color: ${(props) => (props.isFilled ? 'var(--primary-color)' : 'transparent')};
  color: ${(props) => (props.isFilled ? '#fff' : 'var(--primary-color)')};
  text-transform: ${(props) => (props.isUppercase ? 'uppercase' : 'none')};
  line-height: 1;
  cursor: pointer;

  &:disabled {
    background-color: var(--disabled-color);
    border: 1px var(--disabled-color) solid;
    color: #fff;
    pointer-events: none;
  }
`;
