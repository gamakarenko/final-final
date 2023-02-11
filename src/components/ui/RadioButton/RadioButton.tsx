import { FC, InputHTMLAttributes } from 'react';

import { StyledAppRadioBtn } from './RadioButton.styles';

interface IAppRadioBtn extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const AppRadioButton: FC<IAppRadioBtn> = ({ children, ...rest }) => {
  return (
    <StyledAppRadioBtn className='app-radio-btn'>
      <input type="radio" className="radio-btn__input" {...rest} />
      {children}
    </StyledAppRadioBtn>
  );
};

export default AppRadioButton;
