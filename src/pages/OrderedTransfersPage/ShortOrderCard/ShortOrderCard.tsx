import { FC } from 'react';

import PageParagraph from 'components/ui/PageParagraph/PageParagraph';

import { IUsersOrder } from 'store/usersOrders/usersOrders';

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
      <PageParagraph>Забронированная поездка #{id} </PageParagraph>

      <PageParagraph>
        Откуда: {direction === 'fromAirport' ? airport : location}
      </PageParagraph>
      <PageParagraph>
        Куда: {direction === 'toAirport' ? airport : location}
      </PageParagraph>

      <PageParagraph>Дата: {tripDate!.slice(0, 10)}</PageParagraph>
      <PageParagraph>Время: {tripDate!.slice(-5)}</PageParagraph>
    </StyledShortOrderCard>
  );
};

export default ShortOrderCard;
