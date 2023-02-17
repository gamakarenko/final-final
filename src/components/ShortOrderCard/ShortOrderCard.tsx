import { FC } from 'react';

import { IOrder } from 'types/order';

import { StyledShortOrderCard } from './ShortOrderCard.styles';

const ShortOrderCard: FC<Partial<IOrder>> = ({
  id,
  direction,
  airport,
  location,
  transferTime,
  transferDate,
}) => {
  return (
    <StyledShortOrderCard className="short-order-card">
      <p className="short-order-card__heading">Забронированная поездка #{id}</p>

      <p className="short-order-card__item">
        Откуда:{' '}
        <span className="short-order-card__item-data">
          {direction === 'fromAirport' ? airport : location}
        </span>
      </p>
      <p className="short-order-card__item">
        Куда:{' '}
        <span className="short-order-card__item-data">
          {direction === 'toAirport' ? airport : location}
        </span>
      </p>
      <p className="short-order-card__item">
        Дата:{' '}
        <span className="short-order-card__item-data">
          {transferDate}
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
