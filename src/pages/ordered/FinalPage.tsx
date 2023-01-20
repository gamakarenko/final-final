import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { defaultButton } from '../../styles/styles';

interface FinalPageProps {}

const FinalPage: React.FunctionComponent<FinalPageProps> = () => {
  const navigate = useNavigate();
  return (
    <div className="transfers-page">
      <div>
        <h1 className="transfer-page__title">Заказанные поездки</h1>
        <br />
        <p>Спасибо! Изменения приняты :) Ассистент свяжется с тобой за 24 поездки, чтобы подтвердить информацию.</p>
      </div>
      <Button sx={defaultButton} onClick={() => navigate('/')}>
        Вернуться на главную
      </Button>
    </div>
  );
};

export default FinalPage;
