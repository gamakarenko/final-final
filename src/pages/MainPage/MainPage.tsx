import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useTelegram } from '../../hooks/useTelegram';

import MainButton from '../../components/MainBtn/MainBtn';

import { ReactComponent as OrderIcon } from 'assets/images/Order.svg';
import { ReactComponent as ShareIcon } from 'assets/images/Share.svg';
import { ReactComponent as SearchIcon } from 'assets/images/Search.svg';
import { ReactComponent as TransfersIcon } from 'assets/images/Transfers.svg';
import { ReactComponent as AboutIcon } from 'assets/images/About.svg';
import { ReactComponent as FAQIcon } from 'assets/images/FAQ.svg';

import { StyledMainPage } from './MainPage.styles';

interface MainPageProps {}

export const MainPage: FC<MainPageProps> = () => {
  const navigate = useNavigate();
  const { tg } = useTelegram();

  useEffect(() => {
    tg.expand();
  }, []);

  return (
    <StyledMainPage className="main-page">
      <MainButton
        title="Заказать трансфер"
        icon={<OrderIcon />}
        onClick={() => navigate('/order')}
      />
      <MainButton
        
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
    </StyledMainPage>
  );
};
