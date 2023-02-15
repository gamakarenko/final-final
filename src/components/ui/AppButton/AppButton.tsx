import { ButtonHTMLAttributes, FC } from 'react';

import { StyledAppButton } from './AppButton.styled';

export interface IAppButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  isFilled?: boolean;
  isUppercase?: boolean;
  className?: string;
  textAlign?: 'left' | 'center';
  size?: 'normal' | 'big'; 
}

const AppButton: FC<IAppButton> = ({
  children,
  isFilled = true,
  className = '',
  isUppercase = false,
  textAlign = 'center',
  size = 'normal',
  ...rest
}) => {
  return (
    <StyledAppButton
      isFilled={isFilled}
      isUppercase={isUppercase}
      className={`app-button${className ? ' ' + className : ''}`}
      type="button"
      textAlign={textAlign}
      size={size}
      {...rest}
    >
      {children}
    </StyledAppButton>
  );
};

export default AppButton;
