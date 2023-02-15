import { FC } from 'react';

import { StyledSpinner } from './Spinner.styled';

interface ISpinner {
  className?: string;
}

const Spinner: FC<ISpinner> = ({ className }) => {
  return (
    <StyledSpinner
      className={`sending-spinner${className ? ' ' + className : ''}`}
    />
  );
};

export default Spinner;
