import { FC, TextareaHTMLAttributes } from 'react';

import { joinClasses } from 'utils/joinClasses';

import { StyledAppInput } from '../StyledAppInput';

interface IAppTextArea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

const AppTextArea: FC<IAppTextArea> = ({
  label,
  children,
  className,
  ...rest
}) => {
  return (
    <StyledAppInput className={joinClasses('app-input', className)}>
      {label || children}
      <textarea
        className="app-input__input app-input__input_text-area"
        {...rest}
      />
    </StyledAppInput>
  );
};

export default AppTextArea;
