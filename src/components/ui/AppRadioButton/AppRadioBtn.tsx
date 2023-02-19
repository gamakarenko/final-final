import { FC, InputHTMLAttributes } from 'react';

import { StyledAppRadioBtn } from './AppRadioBtn.styles';

interface IAppRadioBtn extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const AppRadioBtn: FC<IAppRadioBtn> = ({ children, ...rest }) => {
  return (
    <StyledAppRadioBtn className="app-radio-btn">
      <input type="radio" className="app-radio-btn__input" {...rest} />
      {children}
    </StyledAppRadioBtn>
  );
};

export default AppRadioBtn;
