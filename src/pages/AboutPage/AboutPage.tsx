import { Button, SxProps } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { cancelButton } from '../../styles/styles';

interface AboutPageProps {}

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
};

export const AboutPage: React.FunctionComponent<AboutPageProps> = () => {
  const navigate = useNavigate();
  //@ts-ignore
  // let tg = window?.Telegram?.WebApp;
  // const back = tg.BackButton;
  // back.show();
  // back.onClick(() => navigate('/'));
  return (
    <div className="transfers-page" style={{ height: '100vh', justifyContent: 'space-between' }}>
      <div>
        <div className="transfers-page__title">О проекте</div>
        <Button sx={ButtonStyle} onClick={() => navigate('/about/info')}>
          Больше о нас
        </Button>
        <Button sx={ButtonStyle} onClick={() => navigate('/about/review')}>
          Оставить отзыв
        </Button>
      </div>
      <Button sx={cancelButton} onClick={() => navigate(-1)}>
        Назад
      </Button>
    </div>
  );
};
