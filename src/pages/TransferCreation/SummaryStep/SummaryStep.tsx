import { useAppSelector } from '../../../store/store';

import InfoCell from '../../../components/InfoCell/InfoCell';
import PageParagraph from '../../../components/ui/PageParagraph/PageParagraph';
import PassengerSummary from '../../../components/PassengerSummary/PassengerSummary';

import { convertDateFormat } from '../../../utils/convertDateFormat';

import { StyledTwoColumnBox } from '../../../styles/StyledTwoColumnBox';
import { StyledSummaryStep } from './SummaryStep.styled';

const SummaryStep = () => {
  const { order } = useAppSelector(({ order }) => order);

  return (
    <StyledSummaryStep className="summary-step">
      <PageParagraph underlined>
        Подтверждение введённой информации
      </PageParagraph>
      <div className="summary-step__info-box summary-step__info-box_bottom-lined">
        <StyledTwoColumnBox>
          <InfoCell
            heading="Дата поездки"
            data={convertDateFormat(order.transferDate)}
          />
          <InfoCell heading="Время поездки" data={order.transferTime} />
        </StyledTwoColumnBox>
        <InfoCell
          heading="Откуда тебя забрать"
          data={
            order.direction === 'fromAirport'
              ? 'Аэропорт ' + order.airport
              : order.location
          }
        />
        <InfoCell
          heading="Куда привезти"
          data={
            order.direction === 'toAirport'
              ? 'Аэропорт ' + order.airport
              : order.location
          }
        />
        {/* TODO сделать описание типа автомобиля, подумать откуда брать */}
        <InfoCell
          heading="Тип автомобиля"
          data={order.carType === 'sedan' ? 'Седан' : 'Vito'}
          caption={order.carType === 'sedan' ? 'до 4 человек' : 'до 8 человек'}
        />
        <StyledTwoColumnBox>
          <InfoCell heading="Количество взрослых" data={String(order.adults)} />
          <InfoCell
            heading="Количество детей"
            data={String(order.childrenUnder5 + order.childrenAbove5)}
          />
        </StyledTwoColumnBox>
      </div>

      <div className="summary-step__info-box">
        {order.passengers.map((passenger, i) => (
          <PassengerSummary index={i + 1} {...passenger} />
        ))}
      </div>
    </StyledSummaryStep>
  );
};

export default SummaryStep;
