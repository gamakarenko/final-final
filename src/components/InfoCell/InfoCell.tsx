import { FC } from 'react';
import { StyledInfoCell } from './InfoCell.styled';

interface InfoCellProps {
  heading: string;
  data: string;
  caption?: string;
  className?: string;
}

const InfoCell: FC<InfoCellProps> = ({ heading, data, caption, className }) => {
  return (
    <StyledInfoCell className={`info-cell${className ? ' ' + className : ''}`}>
      <p className="info-cell__heading">{heading}</p>
      <p className="info-cell__data">{data}</p>
      <p className="info-cell__caption">{caption}</p>
    </StyledInfoCell>
  );
};

export default InfoCell;
