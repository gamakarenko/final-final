import { FC } from 'react';
import { IPassenger } from '../../types/order';
import InfoCell from '../InfoCell/InfoCell';
import { StyledPassengerSummary } from './PassengerSummary.styled';

interface PassengerSummaryProps extends IPassenger {
  index: number;
}

const PassengerSummary: FC<PassengerSummaryProps> = ({
  index,
  ...passenger
}) => {
  return (
    <StyledPassengerSummary className="passenger-summary">
      <p className="passenger-summary__heading">Пассажир {index}</p>
      <InfoCell className="passenger-summary__info" heading="ФИО" data={passenger.fullName} />
      <InfoCell className="passenger-summary__info" heading="Номер загранпаспорта" data={passenger.passportId} />
      <InfoCell className="passenger-summary__info" heading="Логин в телеграмме" data={passenger.telegramId} />
      <InfoCell className="passenger-summary__info" heading="Номер телефона" data={passenger.phoneNumber} />
      <InfoCell className="passenger-summary__info" heading="Комментарий" data={passenger.transferComment} />
    </StyledPassengerSummary>
  );
};

export default PassengerSummary;
