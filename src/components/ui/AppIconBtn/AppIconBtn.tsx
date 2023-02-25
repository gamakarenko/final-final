import { ButtonHTMLAttributes, FC } from 'react';

import { ReactComponent as ArrowStart } from './icons/icon-start.svg';
import { ReactComponent as ArrowRight } from './icons/arrow-right.svg';
import { ReactComponent as ArrowLeft } from './icons/arrow-left.svg';

import { joinClasses } from 'utils/joinClasses';

import { StyledAppIconBtn } from './AppIconBtn.styles';

type IIcons = 'right-arrow' | 'arrow-right' | 'arrow-left';

export interface AppIconBtnProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IIcons;
  size?: number;
  withSeparator?: 'left-lined' | 'right-lined';
}

const AppIconBtn: FC<AppIconBtnProps> = ({
  icon,
  size = 24,
  className,
  withSeparator,
  ...rest
}) => {
  const getIcon = (icon: IIcons) => {
    switch (icon) {
      case 'right-arrow':
        return <ArrowStart className="app-icon-btn__icon" />;
      case 'arrow-right':
        return <ArrowRight className="app-icon-btn__icon" />;
      case 'arrow-left':
        return <ArrowLeft className="app-icon-btn__icon" />;
    }
  };

  return (
    <StyledAppIconBtn
      className={joinClasses('app-icon-btn', className)}
      size={size}
      withSeparator={withSeparator}
      type="button"
      {...rest}
    >
      {getIcon(icon)}
    </StyledAppIconBtn>
  );
};

export default AppIconBtn;
