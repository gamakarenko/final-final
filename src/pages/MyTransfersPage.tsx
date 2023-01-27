import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { backButton, ButtonStyle } from '../styles/styles';

interface MyTransfersPageProps {}

export const MyTransfersPage: React.FunctionComponent<MyTransfersPageProps> = () => {
  const navigate = useNavigate();
  return (
    <div className="page">
      <div>
        <div className="page__title-30">Мои поездки</div>
        <Button sx={ButtonStyle} onClick={() => navigate('/transfers/ordered')}>
          Заказанные поездки
        </Button>
        <Button disabled sx={ButtonStyle}>
          Пошеренные поездки
        </Button>
        <Button disabled sx={ButtonStyle}>
          Внесенные поездки
        </Button>
      </div>
      <Button sx={backButton} onClick={() => navigate('/')}>
        Назад
      </Button>
    </div>
  );
};
