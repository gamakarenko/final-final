import { FC } from 'react';

import { IUsersOrder } from 'store/Orders/Orders';

import { StyledShortOrderCard } from './ShortOrderCard.styles';

const ShortOrderCard: FC<Partial<IUsersOrder>> = ({
  id,
  direction,
  airport,
  location,
  tripDate,
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
          {tripDate!.slice(0, 10)}
        </span>
      </p>
      <p className="short-order-card__item">
        Время:{' '}
        <span className="short-order-card__item-data">
          {tripDate!.slice(-5)}
        </span>
      </p>
    </StyledShortOrderCard>
  );
};

export default ShortOrderCard;
