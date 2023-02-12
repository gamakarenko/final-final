import { FC } from 'react';
import {
  deletePassengerById,
  editPassengerById,
} from '../../store/order/order';
import { useAppDispatch } from '../../store/store';

import { IPassenger } from '../../types/order';

import AppButton from '../ui/AppButton/AppButton';
import AppInput from '../ui/AppInput/AppInput';
import AppTextArea from '../ui/AppTextArea/AppTextArea';

import { StyledPassengerFieldset } from './PassengerFieldset.styles';

const PassengerFieldset: FC<IPassenger> = ({
  fullName,
  passportId,
  departureDate,
  departureTime,
  phoneNumber,
  telegramId,
  transferComment,
  id,
}) => {
  const dispatch = useAppDispatch();

  return (
    <StyledPassengerFieldset className="passenger-field">
      <AppInput
        label="ФИО"
        autoComplete="name"
        value={fullName}
        onChange={(e) =>
          dispatch(editPassengerById({ id, fullName: e.target.value }))
        }
      />
      <AppInput
        label="Номер загранпаспорта"
        value={passportId}
        onChange={(e) =>
          dispatch(editPassengerById({ id, passportId: e.target.value }))
        }
      />
      <AppInput
        label="Дата отправки"
        value={departureDate}
        onChange={(e) =>
          dispatch(editPassengerById({ id, departureDate: e.target.value }))
        }
      />
      <AppInput
        label="Время отправки"
        value={departureTime}
        onChange={(e) =>
          dispatch(editPassengerById({ id, departureTime: e.target.value }))
        }
      />
      <AppInput
        label="Номер телефона"
        autoComplete="tel"
        value={phoneNumber}
        onChange={(e) =>
          dispatch(editPassengerById({ id, phoneNumber: e.target.value }))
        }
      />
      <AppInput
        label="Логин в телеграмме"
        value={telegramId}
        onChange={(e) =>
          dispatch(editPassengerById({ id, telegramId: e.target.value }))
        }
      />
      <AppTextArea
        label="Комментарий к поездке"
        value={transferComment}
        onChange={(e) =>
          dispatch(editPassengerById({ id, transferComment: e.target.value }))
        }
      />

      <AppButton
        className="passenger-field__del-btn"
        isFilled={false}
        onClick={() => dispatch(deletePassengerById({ id }))}
      >
        Удалить пассажира
      </AppButton>
    </StyledPassengerFieldset>
  );
};

export default PassengerFieldset;
