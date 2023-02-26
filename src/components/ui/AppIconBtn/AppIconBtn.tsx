import { ButtonHTMLAttributes, FC } from 'react';

import { ReactComponent as ArrowStart } from './icons/start.svg';
import { ReactComponent as Close } from './icons/close.svg';
import { ReactComponent as ArrowRight } from './icons/arrow-right.svg';
import { ReactComponent as ArrowLeft } from './icons/arrow-left.svg';

import { joinClasses } from 'utils/joinClasses';

import { StyledAppIconBtn } from './AppIconBtn.styles';

type IIcons = 'right-arrow' | 'arrow-right' | 'arrow-left' | 'close';

export interface AppIconBtnProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IIcons;
  size?: number;
  withSeparator?: 'left-lined' | 'right-lined';
  fill?: string;
}

const AppIconBtn: FC<AppIconBtnProps> = ({
  icon,
  size = 24,
  className,
  withSeparator,
  fill,
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
      case 'close':
        return <Close className="app-icon-btn__icon" />;
    }
  };

  return (
    <StyledAppIconBtn
      className={joinClasses('app-icon-btn', className)}
      size={size}
      withSeparator={withSeparator}
      fill={fill}
      type="button"
      {...rest}
    >
      {getIcon(icon)}
    </StyledAppIconBtn>
  );
};

export default AppIconBtn;
