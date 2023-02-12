import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../store/store';
import { createOrderThunk } from '../store/order/orderThunks';
import { useTelegram } from '../hooks/useTelegram';

import MainButton from '../components/MainButton.tsx';
import { AboutIcon, FAQIcon, OrderIcon, SearchIcon, ShareIcon, TransfersIcon } from '../components/svg';

interface MainPageProps {}

export const MainPage: FC<MainPageProps> = () => {
  const [users, setUsers] = useState<any>([]);
  const navigate = useNavigate();
  const { tg } = useTelegram();

  const dispatch = useAppDispatch();

  useEffect(() => {
    tg.expand();

    //TODO убрать тестовый диспатч
    dispatch(
      createOrderThunk({
        transferDate: '',
        transferTime: '',
        pickYouUpFromAirPort: true,
        start: '',
        end: '',
        carType: 'sedan',
        adults: 1,
        childrenUnder5: 0,
        childrenAbove5: 0,
        passengers: [
          {
            fullName: '',
            passportId: '',
            departureDate: '',
            departureTime: '',
            phoneNumber: '',
            telegramId: '',
            transferComment: '',
          },
        ],
      }),
    );
  }, []);

  return (
    <div className="main-page">
      <MainButton title="Заказать трансфер" icon={<OrderIcon />} onClick={() => navigate('/order')} />
      <MainButton disabled title="Пошерить трансфер" icon={<ShareIcon />} onClick={() => navigate('/share')} />
      <MainButton disabled title="Найти попутчиков к своей поездке" icon={<SearchIcon />} />
      <MainButton title="Мои поездки" icon={<TransfersIcon />} onClick={() => navigate('/transfers')} />
      <MainButton title="О проекте" icon={<AboutIcon />} onClick={() => navigate('/about')} />
      <MainButton title="FAQ" icon={<FAQIcon />} onClick={() => navigate('/faq')} />
      {users.map((user: any) => (
        <div
          style={{
            backgroundColor: 'var(--tg-theme-button-color)',
            color: 'var(--tg-theme-button-text-color)',
            height: '2rem',
            marginBottom: '10px',
            borderRadius: '5px',
          }}
          key={user.id}
        >
          {user.email}
        </div>
      ))}
    </div>
  );
};
