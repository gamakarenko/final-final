import { FC, InputHTMLAttributes } from 'react';

import { StyledAppInput } from './AppInput.styled';

interface IAppInput extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const AppInput: FC<IAppInput> = ({ label, children, className, ...rest }) => {
  return (
    <StyledAppInput className={`app-input${className ? ' ' + className : ''}`}>
      {label || children}
      <input className="app-input__input" {...rest} />
    </StyledAppInput>
  );
};

export default AppInput;
