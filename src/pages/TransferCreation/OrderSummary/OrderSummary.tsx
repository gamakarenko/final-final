import { FC } from 'react';

import InfoCell from '../../../components/InfoCell/InfoCell';
import PageParagraph from '../../../components/ui/PageParagraph/PageParagraph';
import PassengerSummary from '../../../components/PassengerSummary/PassengerSummary';

import { convertDateFormat } from '../../../utils/convertDateFormat';
import { IOrder } from 'types/order';

import { StyledTwoColumnBox } from '../../../styles/StyledTwoColumnBox';
import { StyledOrderSummary } from './OrderSummary.styled';

interface OrderSummaryProps extends Pick<
  IOrder,
  | 'transferDate'
  | 'transferTime'
  | 'direction'
  | 'childrenAbove5'
  | 'childrenUnder5'
  | 'airport'
  | 'location'
  | 'carType'
  | 'adults'
  | 'passengers'
> {
  heading: string;
}

const OrderSummary: FC<OrderSummaryProps> = ({
  transferDate,
  transferTime,
  direction,
  childrenUnder5,
  childrenAbove5,
  airport,
  location,
  carType,
  adults,
  passengers,
  heading
}) => {
  const childrenNumber = Number(childrenUnder5) + Number(childrenAbove5);
  const childrenNumberString = childrenNumber ? String(childrenNumber) : '';

  return (
    <StyledOrderSummary className="summary-step">
      <PageParagraph underlined>
        {heading}
      </PageParagraph>
      <div className="summary-step__info-box summary-step__info-box_bottom-lined">
        <StyledTwoColumnBox>
          <InfoCell
            heading="Дата поездки"
            data={convertDateFormat(transferDate)}
          />
          <InfoCell heading="Время поездки" data={transferTime} />
        </StyledTwoColumnBox>
        <InfoCell
          heading="Откуда тебя забрать"
          data={direction === 'fromAirport' ? 'Аэропорт ' + airport : location}
        />
        <InfoCell
          heading="Куда привезти"
          data={direction === 'toAirport' ? 'Аэропорт ' + airport : location}
        />
        {/* TODO сделать описание типа автомобиля, подумать откуда брать */}
        <InfoCell
          heading="Тип автомобиля"
          data={carType === 'sedan' ? 'Седан' : 'Vito'}
          caption={carType === 'sedan' ? 'до 4 человек' : 'до 8 человек'}
        />
        <StyledTwoColumnBox>
          <InfoCell heading="Количество взрослых" data={String(adults)} />
          <InfoCell heading="Количество детей" data={childrenNumberString} />
        </StyledTwoColumnBox>
      </div>

      <div className="summary-step__info-box">
        {passengers.map((passenger, i) => (
          <PassengerSummary key={i} index={i + 1} {...passenger} />
        ))}
      </div>
    </StyledOrderSummary>
  );
};

export default OrderSummary;
