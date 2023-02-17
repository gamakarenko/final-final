import { FC } from 'react';

import { IPassenger } from '../../types/order';

import AppButton from '../ui/AppButton/AppButton';
import AppInput from '../ui/AppInput/AppInput';
import AppTextArea from '../ui/AppTextArea/AppTextArea';

import { StyledPassengerFieldset } from './PassengerFieldset.styles';

interface PassengerFieldsetProps extends IPassenger {
  handleEditPassengerById: (id: number, data: Partial<IPassenger>) => void;
  handleDeletePassengerById: (id: number) => void;
}

const PassengerFieldset: FC<PassengerFieldsetProps> = ({
  fullName,
  passportId,
  departureDate,
  departureTime,
  phoneNumber,
  telegramId,
  transferComment,
  id,
  handleEditPassengerById,
  handleDeletePassengerById,
}) => {

  return (
    <StyledPassengerFieldset className="passenger-field">
      <AppInput
        className="passenger-field__input-box"
        label="ФИО"
        autoComplete="name"
        required
        value={fullName}
        onChange={(e) =>
          handleEditPassengerById(id, { fullName: e.target.value })
        }
      />
      <AppInput
        className="passenger-field__input-box"
        label="Номер загранпаспорта"
        value={passportId}
        required
        onChange={(e) =>
          handleEditPassengerById(id, { passportId: e.target.value })
        }
      />
      <AppInput
        className="passenger-field__input-box"
        label="Дата отправки"
        value={departureDate}
        onChange={(e) =>
          handleEditPassengerById(id, { departureDate: e.target.value })
        }
      />
      <AppInput
        className="passenger-field__input-box"
        label="Время отправки"
        value={departureTime}
        onChange={(e) =>
          handleEditPassengerById(id, { departureTime: e.target.value })
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
        value={telegramId}
        onChange={(e) =>
          handleEditPassengerById(id, { telegramId: e.target.value })
        }
      />
      <AppTextArea
        className="passenger-field__input-box"
        label="Комментарий к поездке"
        value={transferComment}
        onChange={(e) =>
          handleEditPassengerById(id, { transferComment: e.target.value })
        }
      />

      <AppButton
        className="passenger-field__del-btn"
        isFilled={false}
        onClick={() => handleDeletePassengerById(id)}
      >
        Удалить пассажира
      </AppButton>
    </StyledPassengerFieldset>
  );
};

export default PassengerFieldset;
