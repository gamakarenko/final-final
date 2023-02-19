import { FC } from 'react';

import { IOrder } from 'types/order';
import { convertDateFormat } from 'utils/convertDateFormat';

import { StyledShortOrderCard } from './ShortOrderCard.styles';

const ShortOrderCard: FC<Partial<IOrder>> = ({
  id,
  startLocation,
  endLocation,
  transferTime,
  transferDate,
}) => {
  return (
    <StyledShortOrderCard className="short-order-card">
      <p className="short-order-card__heading">Забронированная поездка #{id}</p>

      <p className="short-order-card__item">
        Откуда:{' '}
        <span className="short-order-card__item-data">
          {startLocation}
        </span>
      </p>
      <p className="short-order-card__item">
        Куда:{' '}
        <span className="short-order-card__item-data">
          {endLocation}
        </span>
      </p>
      <p className="short-order-card__item">
        Дата:{' '}
        <span className="short-order-card__item-data">
          {convertDateFormat(transferDate)}
        </span>
      </p>
      <p className="short-order-card__item">
        Время:{' '}
        <span className="short-order-card__item-data">
          {transferTime}
        </span>
      </p>
    </StyledShortOrderCard>
  );
};

export default ShortOrderCard;
