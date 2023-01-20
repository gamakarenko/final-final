import React, { useCallback, useEffect, useState } from 'react';
import { useTelegram } from '../hooks/useTelegram';
import { createTransfer } from '../store/slices/userSlice';
import { useAppDispatch } from '../store/store';

const Form = () => {
  const dispatch = useAppDispatch();
  const [country, setCountry] = useState('');
  const [street, setStreet] = useState('');
  const [subject, setSubject] = useState('physical');
  const { tg } = useTelegram();

  const onSendData = useCallback(() => {
    const data = {
      country,
      street,
      subject,
    };
    tg.sendData(
      JSON.stringify({
        order: {
          adults: '1',
          childrenAbove5: '1',
          childrenUnder5: '1',
          transferDate: '2022-11-2',
          transferTime: '11:31',
          end: 'координаты',
          start: 'координаты',
          carType: 'sedan',
          pickYouUpFromAirPort: 'true',
          passengers: [
            {
              transferComment: 'Со мной поедже',
              telegramId: 'petrov',
              phoneNumber: 79005553535,
              passportId: 'FFGHGHF2332NJ',
              fullName: 'Иванов Иван Иванович',
              departureDate: '2222',
              departureTime: '2222',
            },
            {
              transferComment: 'Со мной не собака',
              telegramId: 'petrof',
              phoneNumber: 790055535335,
              passportId: 'FFGHGHF32NJ',
              fullName: 'Иванов Петр Иванович',
              departureDate: '2222',
              departureTime: '2222',
            },
          ],
        },
      }),
    );
    dispatch(
      createTransfer({
        order: {
          adults: '1',
          childrenAbove5: '1',
          childrenUnder5: '1',
          transferDate: '2022-11-2',
          transferTime: '11:31',
          end: 'координаты',
          start: 'координаты',
          carType: 'sedan',
          pickYouUpFromAirPort: 'true',
          passengers: [
            {
              transferComment: 'Со мной поедже',
              telegramId: 'petrov',
              phoneNumber: 79005553535,
              passportId: 'FFGHGHF2332NJ',
              fullName: 'Иванов Иван Иванович',
              departureDate: '2222',
              departureTime: '2222',
            },
            {
              transferComment: 'Со мной не собака',
              telegramId: 'petrof',
              phoneNumber: 790055535335,
              passportId: 'FFGHGHF32NJ',
              fullName: 'Иванов Петр Иванович',
              departureDate: '2222',
              departureTime: '2222',
            },
          ],
        },
      }),
    );
  }, [country, street, subject]);

  useEffect(() => {
    tg.onEvent('mainButtonClicked', onSendData);
    return () => {
      tg.offEvent('mainButtonClicked', onSendData);
    };
  }, [onSendData]);

  useEffect(() => {
    tg.MainButton.setParams({
      text: 'Отправить данные',
    });
  }, []);

  useEffect(() => {
    if (!street || !country) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }, [country, street]);

  const onChangeCountry = (e: any) => {
    setCountry(e.target.value);
  };

  const onChangeStreet = (e: any) => {
    setStreet(e.target.value);
  };

  const onChangeSubject = (e: any) => {
    setSubject(e.target.value);
  };

  return (
    <div className={'form'}>
      <h3>Введите ваши данные</h3>
      <input className={'input'} type="text" placeholder={'Страна'} value={country} onChange={onChangeCountry} />
      <input className={'input'} type="text" placeholder={'Улица'} value={street} onChange={onChangeStreet} />
      <select value={subject} onChange={onChangeSubject} className={'select'}>
        <option value={'physical'}>Физ. лицо</option>
        <option value={'legal'}>Юр. лицо</option>
      </select>
    </div>
  );
};

export default Form;
