import { useNavigate } from 'react-router-dom';
import * as React from 'react';
import MainButton from '../components/MainButton.tsx';
import { AboutIcon, FAQIcon, OrderIcon, SearchIcon, ShareIcon, TransfersIcon } from '../components/svg';
import { useTelegram } from '../hooks/useTelegram';

interface MainPageProps {}

export const MainPage: React.FC<MainPageProps> = () => {
  const [users, setUsers] = React.useState<any>([]);
  const navigate = useNavigate();
  const {tg} = useTelegram()

  React.useEffect(() => {
    tg.expand();
  }, []);

  return (
    <div className="main-page">
      <MainButton title="Заказать трансфер" icon={<OrderIcon />} onClick={() => navigate('/order')} />
      <MainButton disabled={true} title="Пошерить трансфер" icon={<ShareIcon />} onClick={() => navigate('/share')} />
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
