import { FC, InputHTMLAttributes } from 'react';

import { StyledAppCheckbox } from './AppCheckbox.styles';

interface IAppCheckbox extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const AppCheckbox: FC<IAppCheckbox> = ({ children, ...rest }) => {
  return (
    <StyledAppCheckbox className="app-checkbox">
      <input type="checkbox" className="app-checkbox__input" {...rest} />
      {children}
    </StyledAppCheckbox>
  );
};

export default AppCheckbox;
