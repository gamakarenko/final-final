import { FC } from 'react';

import { joinClasses } from 'utils/joinClasses';

import { StyledSpinner } from './Spinner.styled';

interface ISpinner {
  className?: string;
}

const Spinner: FC<ISpinner> = ({ className }) => {
  return (
    <StyledSpinner className={joinClasses('sending-spinner', className)} />
  );
};

export default Spinner;
