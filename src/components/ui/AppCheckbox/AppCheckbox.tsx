import { FC, InputHTMLAttributes } from 'react';

import { joinClasses } from 'utils/joinClasses';

import { StyledAppCheckbox } from './AppCheckbox.styles';

interface IAppCheckbox extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const AppCheckbox: FC<IAppCheckbox> = ({ children, className, ...rest }) => {
  return (
    <StyledAppCheckbox className="app-checkbox">
      <input
        type="checkbox"
        className={joinClasses('app-checkbox__input', className)}
        {...rest}
      />
      {children}
    </StyledAppCheckbox>
  );
};

export default AppCheckbox;
