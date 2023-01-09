import { Button } from '@mui/material';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchTransfers } from '../../store/slices/transferSlice';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { backButton } from '../../styles/styles';

interface OrderedPageProps {}

export const OrderedPage: React.FunctionComponent<OrderedPageProps> = () => {
  const { transfers } = useAppSelector((state) => state.transfers);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchTransfers());
  }, []);
  const navigate = useNavigate();
  //@ts-ignore
  // let tg = window?.Telegram?.WebApp;
  // const back = tg.BackButton;
  // back.show();
  // back.onClick(() => navigate('/transfers'));
  return (
    <div className="transfers-page" style={{ height: '100vh', justifyContent: 'space-between' }}>
      <div>
        <div className="transfers-page__title-s">Заказанные поездки</div>
        <p>
          Чтобы изменить личную информацию, дату, <br />
          время поездки и другие данные - нажмите на <br />
          интересующую поездку
        </p>
        <br />
        <hr />
        <br />
        {transfers.map((transfer: any) => (
          <div className="order-block-wrap" onClick={() => navigate('/transfers/ordered/11')}>
            <div className="order-block-title">{`Забронированная поездка #${transfer?.id}`}</div>

            <div className="order-block">
              <div>Откуда:</div>
              <div>{transfer?.startPlace}</div>
            </div>

            <div className="order-block">
              <div>Куда:</div>
              <div>{transfer?.endPlace}</div>
            </div>

            <div className="order-block">
              <div>Дата:</div>
              <div>{transfer?.tripDate?.slice(0, 10)}</div>
            </div>

            <div className="order-block">
              <div>Время:</div>
              <div>{transfer?.tripDate?.slice(10)}</div>
            </div>
          </div>
        ))}
      </div>
      <Button sx={backButton} onClick={() => navigate('/transfers')}>
        Назад
      </Button>
    </div>
  );
};
