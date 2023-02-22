import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useTelegram } from '../hooks/useTelegram';

import { ReactComponent as OrderIcon } from 'images/Order.svg';
import { ReactComponent as ShareIcon } from 'images/Share.svg';
import { ReactComponent as SearchIcon } from 'images/Search.svg';
import { ReactComponent as TransfersIcon } from 'images/Transfers.svg';
import { ReactComponent as AboutIcon } from 'images/About.svg';
import { ReactComponent as FAQIcon } from 'images/FAQ.svg';

import MainButton from '../components/MainButton.tsx';

interface MainPageProps {}

export const MainPage: FC<MainPageProps> = () => {
  const [users, setUsers] = useState<any>([]);
  const navigate = useNavigate();
  const { tg } = useTelegram();

  useEffect(() => {
    tg.expand();
  }, []);

  return (
    <div className="main-page">
      <MainButton
        title="Заказать трансфер"
        icon={<OrderIcon />}
        onClick={() => navigate('/order')}
      />
      <MainButton
        disabled
        title="Пошерить трансфер"
        icon={<ShareIcon />}
        onClick={() => navigate('/share')}
      />
      <MainButton
        disabled
        title="Найти попутчиков к своей поездке"
        icon={<SearchIcon />}
      />
      <MainButton
        title="Мои поездки"
        icon={<TransfersIcon />}
        onClick={() => navigate('/transfers')}
      />
      <MainButton
        title="О проекте"
        icon={<AboutIcon />}
        onClick={() => navigate('/about')}
      />
      <MainButton
        title="FAQ"
        icon={<FAQIcon />}
        onClick={() => navigate('/faq')}
      />
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
