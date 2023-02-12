import { ButtonHTMLAttributes, FC } from 'react';

import { StyledAppButton } from './AppButton.styled';

export interface IAppButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  isFilled?: boolean;
  isUppercase?: boolean;
  className?: string;
}

const AppButton: FC<IAppButton> = ({ children, isFilled = true, className = '', isUppercase = false, ...rest }) => {
  return (
    <StyledAppButton
      isFilled={isFilled}
      isUppercase={isUppercase}
      className={`app-button${className ? ' ' + className : ''}`}
      type="button"
      {...rest}
    >
      {children}
    </StyledAppButton>
  );
};

export default AppButton;
