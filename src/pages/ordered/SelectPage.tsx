import { Button, SxProps } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { backButton } from '../../styles/styles';

interface SelectPageProps {}

const button: SxProps = {
  width: '343px',
  height: '40px',
  background: '#F2F2F2',
  border: '1px solid #007AFF',
  borderRadius: '8px',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '15px',
  lineHeight: '18px',
  textTransform: 'none',
  marginBottom: '10px',
};

const SelectPage: React.FunctionComponent<SelectPageProps> = () => {
  const {id} = useParams()
  const navigate = useNavigate();
  return (
    <div className="page">
      <div>
        <div className="page__title-15">Заказанные поездки</div>
        <hr />
        <br />
        <Button sx={button} onClick={() => navigate(`/transfers/ordered/${id}/change/age`)}>
          Личные данные / Количество пассажиров
        </Button>
        <Button sx={button} onClick={() => navigate(`/transfers/ordered/${id}/change/date`)}>
          Дата / Время / Направление поездки
        </Button>
      </div>
      <Button sx={backButton} onClick={() => navigate(-1)}>
        Назад
      </Button>
    </div>
  );
};

export default SelectPage;
