import { Button, SxProps } from '@mui/material';
import { textAlign } from '@mui/system';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { cancelButton } from '../styles/styles';

interface MyTransfersPageProps {}

const ButtonStyle: SxProps = {
  width: '343px',
  height: '47px',
  background: '#007AFF',
  borderRadius: '10px',
  fontStyle: 'normal',
  fontWeight: '510',
  fontSize: '14px',
  lineHeight: '17px',
  color: 'white',
  textTransform: 'none',
  textAlign: 'start',
  display: 'block',
  padding: '15px',
  marginBottom: '15px',
  '&:hover': {
    backgroundColor: '#007AFF',
  },
  '&:disabled': {
    backgroundColor: '#AFAFAF',
  },
};

export const MyTransfersPage: React.FunctionComponent<MyTransfersPageProps> = () => {
  const navigate = useNavigate();
  //@ts-ignore
  // let tg = window?.Telegram?.WebApp;
  // const back = tg.BackButton;
  // back.show();
  // back.onClick(() => navigate('/'));
  return (
    <div className="transfers-page" style={{ height: '100vh', justifyContent: 'space-between' }}>
      <div>
        <div className="transfers-page__title">Мои поездки</div>
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
      <Button sx={cancelButton} onClick={() => navigate('/')}>
        Назад
      </Button>
    </div>
  );
};
