import { useNavigate } from 'react-router-dom';
import * as React from 'react';
import MainButton from '../components/MainButton.tsx';
import { AboutIcon, FAQIcon, OrderIcon, SearchIcon, ShareIcon, TransfersIcon } from '../components/svg';

interface MainPageProps {}

export const MainPage: React.FC<MainPageProps> = () => {
  const [users, setUsers] = React.useState<any>([]);
  const navigate = useNavigate();
  //@ts-ignore
  let tg = window?.Telegram?.WebApp;
  let user = tg?.initDataUnsafe?.user;
  console.log('Сам объект', tg.initData);

  React.useEffect(() => {
    tg.expand();
    fetch('https://tg-bot-teal.vercel.app/api/user/reg')
      .then((res) => res.json())
      .then((res) => {
        let kek = res;
        setUsers(kek);
        console.log(kek);
      });
    // tg.sendData(JSON.stringify({kek: 'lul'}))
  }, []);

  //@ts-ignore
  const back = tg.BackButton;
  back.hide();

  return (
    <div className="main-page">
      {/* <span>Тестирование получения данных</span>
            <span>{"Username" +" "+ user?.username}</span>
            <span>{"Имя" + " " + user?.first_name}</span>
            <span>{"ID" + " " + user?.id}</span>
            <span>{"Фамилия"+" "+user?.last_name}</span>
            <span>{"Язык"+ " " +user?.language_code}</span> */}
      <MainButton title="Заказать трансфер" icon={<OrderIcon />} onClick={() => navigate('/order')} />
      <MainButton disabled={true} title="Пошерить трансфер" icon={<ShareIcon />} onClick={() => navigate('/share')} />
      <MainButton disabled title="Найти попутчиков к своей поездке" icon={<SearchIcon />} />
      <MainButton title="Мои поездки" icon={<TransfersIcon />} onClick={() => navigate('/transfers')} />
      <MainButton title="О проекте" icon={<AboutIcon />} onClick={() => navigate('/about')} />
      <MainButton title="FAQ" icon={<FAQIcon />} onClick={() => navigate('/faq')} />
      <MainButton title="FAQ" icon={<FAQIcon />} onClick={() => navigate('/kek')} />
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
