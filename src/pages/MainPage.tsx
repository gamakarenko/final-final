import { useNavigate } from 'react-router-dom';
import * as React from 'react';
import MainButton from '../components/MainButton.tsx';
import { AboutIcon, FAQIcon, OrderIcon, SearchIcon, ShareIcon, TransfersIcon } from '../components/svg';

interface MainPageProps {}

export const MainPage: React.FC<MainPageProps> = () => {
  const [kek, setkek] = React.useState(false)
  const navigate = useNavigate();
  //@ts-ignore
  let tg = window?.Telegram?.WebApp;
  let user = tg?.initDataUnsafe?.user;
  React.useEffect(() => {
    tg.expand();
    tg.MainButton.show()
    tg.MainButton.setParams({
      text: 'Отправить данные'
  })
  
  }, []);

  React.useEffect(() => {
    tg.onEvent('mainButtonClicked', () => {
      tg.sendData("kek"); 
    });
  }, [kek])

  const handleSend = () => {
   setkek((prev) => !prev)
    console.log(tg)
  }
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
      <MainButton onClick={handleSend} title="Найти попутчиков к своей поездке" icon={<SearchIcon />} />
      <MainButton title="Мои поездки" icon={<TransfersIcon />} onClick={() => navigate('/transfers')} />
      <MainButton title="О проекте" icon={<AboutIcon />} onClick={() => navigate('/about')} />
      <MainButton title="FAQ" icon={<FAQIcon />} onClick={() => navigate('/faq')} />
    </div>
  );
};
