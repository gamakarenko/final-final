import { FC, TextareaHTMLAttributes } from 'react';

import { StyledAppTextArea } from './AppTextArea.styled';

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
    <StyledAppTextArea
      className={`app-input${className ? ' ' + className : ''}`}
    >
      {label || children}
      <textarea
        className="app-input__input app-input__input_text-area"
        {...rest}
      />
    </StyledAppTextArea>
  );
};

export default AppTextArea;
