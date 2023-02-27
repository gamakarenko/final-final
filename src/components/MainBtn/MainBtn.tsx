import { ButtonHTMLAttributes, FC } from 'react';

import { StyledMainBtn } from './MainBtn.styled';

interface MainButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  icon: React.ReactNode;
}

const MainButton: FC<MainButtonProps> = ({ icon, title, ...rest }) => {
  return (
    <StyledMainBtn className="main-btn" {...rest}>
      <div className="main-btn__icon-box">{icon}</div>
      <h2 className="main-btn__text">{title}</h2>
    </StyledMainBtn>
  );
};

export default MainButton;
