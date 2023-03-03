import { FC } from 'react';

import PageParagraph from 'components/ui/PageParagraph/PageParagraph';
import AppInput from '../ui/AppInput/AppInput';
import AppTextArea from '../ui/AppTextArea/AppTextArea';

import { IUser } from 'types/order';

import { StyledPassengerFieldset } from './PassengerFieldset.styles';
import { StyledTwoColumnBox } from 'components/StyledTwoColumnBox';

interface PassengerFieldsetProps extends IUser {
  handleEditPassengerByUiKey: (uiKey: number, data: Partial<IUser>) => void;
  passengerNumber: number;
}

const PassengerFieldset: FC<PassengerFieldsetProps> = ({
  name,
  passport,
  arrivalDate,
  arrivalTime,
  flightNumber,
  phoneNumber,
  telegramLogin,
  tripComment,
  uiKey,
  handleEditPassengerByUiKey,
  passengerNumber,
}) => {
  return (
    <StyledPassengerFieldset className="passenger-field">
      <PageParagraph className="passenger-field__heading">{`Пассажир #${passengerNumber}`}</PageParagraph>
      <AppInput
        className="passenger-field__input-box"
        label="ФИО"
        autoComplete="name"
        required
        value={name}
        onChange={(e) =>
          handleEditPassengerByUiKey(uiKey, { name: e.target.value })
        }
      />
      <AppInput
        className="passenger-field__input-box"
        label="Номер загранпаспорта"
        value={passport}
        required
        onChange={(e) =>
          handleEditPassengerByUiKey(uiKey, { passport: e.target.value })
        }
      />
      <StyledTwoColumnBox className="passenger-field__two-column-box">
        <AppInput
          label="Дата вылета"
          type="date"
          value={arrivalDate || ''}
          onChange={(e) =>
            handleEditPassengerByUiKey(uiKey, { arrivalDate: e.target.value })
          }
        />
        <AppInput
          label="Время вылета"
          type="time"
          value={arrivalTime || ''}
          onChange={(e) =>
            handleEditPassengerByUiKey(uiKey, { arrivalTime: e.target.value })
          }
        />
      </StyledTwoColumnBox>
      {/* TODO тот самый инпут для правок */}
      <AppInput
        className="passenger-field__input-box"
        label="Номер рейса"
        value={flightNumber || ''}
        onChange={(e) =>
          handleEditPassengerByUiKey(uiKey, { flightNumber: e.target.value })
        }
      />
      <AppInput
        className="passenger-field__input-box"
        label="Номер телефона"
        autoComplete="tel"
        value={phoneNumber}
        onChange={(e) =>
          handleEditPassengerByUiKey(uiKey, { phoneNumber: e.target.value })
        }
      />
      <AppInput
        className="passenger-field__input-box"
        label="Логин в телеграмме"
        value={telegramLogin}
        onChange={(e) =>
          handleEditPassengerByUiKey(uiKey, { telegramLogin: e.target.value })
        }
      />
      <AppTextArea
        className="passenger-field__input-box"
        label="Комментарий к поездке"
        value={tripComment}
        onChange={(e) =>
          handleEditPassengerByUiKey(uiKey, { tripComment: e.target.value })
        }
      />
    </StyledPassengerFieldset>
  );
};

export default PassengerFieldset;
