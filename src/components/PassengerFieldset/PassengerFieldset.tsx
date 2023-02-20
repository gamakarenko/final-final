import { FC } from 'react';
import { IUser } from 'types/order';

import PageParagraph from 'components/ui/PageParagraph/PageParagraph';
import AppInput from '../ui/AppInput/AppInput';
import AppTextArea from '../ui/AppTextArea/AppTextArea';

import { StyledPassengerFieldset } from './PassengerFieldset.styles';

interface PassengerFieldsetProps extends IUser {
  handleEditPassengerById: (id: number, data: Partial<IUser>) => void;
  passengerNumber: number;
}

const PassengerFieldset: FC<PassengerFieldsetProps> = ({
  name,
  passport,
  arrivalDate,
  arrivalTime,
  phoneNumber,
  telegramLogin,
  tripComment,
  id,
  handleEditPassengerById,
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
          handleEditPassengerById(id, { name: e.target.value })
        }
      />
      <AppInput
        className="passenger-field__input-box"
        label="Номер загранпаспорта"
        value={passport}
        required
        onChange={(e) =>
          handleEditPassengerById(id, { passport: e.target.value })
        }
      />
      <AppInput
        className="passenger-field__input-box"
        label="Дата отправки"
        value={arrivalDate || ''}
        onChange={(e) =>
          handleEditPassengerById(id, { arrivalDate: e.target.value })
        }
      />
      <AppInput
        className="passenger-field__input-box"
        label="Время отправки"
        value={arrivalTime || ''}
        onChange={(e) =>
          handleEditPassengerById(id, { arrivalTime: e.target.value })
        }
      />
      <AppInput
        className="passenger-field__input-box"
        label="Номер телефона"
        autoComplete="tel"
        value={phoneNumber}
        onChange={(e) =>
          handleEditPassengerById(id, { phoneNumber: e.target.value })
        }
      />
      <AppInput
        className="passenger-field__input-box"
        label="Логин в телеграмме"
        value={telegramLogin}
        onChange={(e) =>
          handleEditPassengerById(id, { telegramLogin: e.target.value })
        }
      />
      <AppTextArea
        className="passenger-field__input-box"
        label="Комментарий к поездке"
        value={tripComment}
        onChange={(e) =>
          handleEditPassengerById(id, { tripComment: e.target.value })
        }
      />
    </StyledPassengerFieldset>
  );
};

export default PassengerFieldset;
