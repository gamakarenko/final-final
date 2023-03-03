import { FC } from 'react';

import InfoCell from '../InfoCell/InfoCell';

import { IUser } from 'types/order';
import { convertDateFormat } from 'utils/convertDateFormat';

import { StyledPassengerSummary } from './PassengerSummary.styled';

interface PassengerSummaryProps extends IUser {
  index: number;
}

const PassengerSummary: FC<PassengerSummaryProps> = ({ index, ...user }) => {
  return (
    <StyledPassengerSummary className="passenger-summary">
      <p className="passenger-summary__heading">Пассажир {index}</p>
      <InfoCell
        className="passenger-summary__info"
        heading="ФИО"
        data={user.name}
      />
      <InfoCell
        className="passenger-summary__info"
        heading="Номер загранпаспорта"
        data={user.passport}
      />
      <InfoCell
        className="passenger-summary__info"
        heading="Дата и время прилёта"
        data={`${convertDateFormat(user.arrivalDate)}; ${user.arrivalTime}`}
      />
      <InfoCell
        className="passenger-summary__info"
        heading="Номер рейса"
        data={user.flightNumber || ''}
      />
      <InfoCell
        className="passenger-summary__info"
        heading="Номер телефона"
        data={user.phoneNumber}
      />
      <InfoCell
        className="passenger-summary__info"
        heading="Логин в телеграмме"
        data={user.telegramLogin}
      />
      <InfoCell
        className="passenger-summary__info"
        heading="Комментарий"
        data={user.tripComment}
      />
    </StyledPassengerSummary>
  );
};

export default PassengerSummary;
