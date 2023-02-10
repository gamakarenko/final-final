import { FC, ReactNode } from 'react';

import { Radio, RadioProps } from '@mui/material';

import { StyledLabel } from './RadioButton.styles';

interface IRadioButton extends RadioProps {
  children?: ReactNode;
}

const RadioButton: FC<IRadioButton> = ({ children, className, ...rest }) => {
  return (
    <StyledLabel className={className}>
      <Radio {...rest} />
      {children}
    </StyledLabel>
  );
};

export default RadioButton;
