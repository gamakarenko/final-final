import { FC, InputHTMLAttributes } from 'react';

import { joinClasses } from 'utils/joinClasses';

import { StyledAppInput } from './AppInput.styled';

interface IAppInput extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const AppInput: FC<IAppInput> = ({ label, children, className, ...rest }) => {
  return (
    <StyledAppInput className={joinClasses('app-input', className)}>
      {label || children}
      <input className="app-input__input" {...rest} />
    </StyledAppInput>
  );
};

export default AppInput;
