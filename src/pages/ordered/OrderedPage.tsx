import { Button, Skeleton } from '@mui/material';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTelegram } from '../../hooks/useTelegram';
import { fetchTransfers } from '../../store/slices/transferSlice';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { backButton } from '../../styles/styles';

interface OrderedPageProps {}

export const OrderedPage: React.FunctionComponent<OrderedPageProps> = () => {
  const { transfers, isLoading } = useAppSelector((state) => state.transfers);
  const dispatch = useAppDispatch();
  const {userId} = useTelegram()
  console.log(transfers);
  useEffect(() => {
    dispatch(fetchTransfers(userId));
  }, []);
  const navigate = useNavigate();
  //@ts-ignore
  // let tg = window?.Telegram?.WebApp;
  // const back = tg.BackButton;
  // back.show();
  // back.onClick(() => navigate('/transfers'));
  return (
    <div className="page-long">
      <div>
        <div className="page__title-20">Заказанные поездки</div>
        <p>
          Чтобы изменить личную информацию, дату, <br />
          время поездки и другие данные - нажмите на <br />
          интересующую поездку
        </p>
        <br />
        <hr />
        <br />
        <div className="order-wrap">
          {isLoading ? 
          <Skeleton variant="rounded" width={343} height={149} sx={{borderRadius: "10px", marginBottom: "10px"}}/>
          :
          transfers.map((transfer: any) => (
            <div
              key={transfer.id}
              className="order-block"
              onClick={() => navigate(`/transfers/ordered/${transfer.id}`)}
            >
              <div className="order-block-title">{`Забронированная поездка #${transfer?.id}`}</div>

              <div className="order-row">
                <div>Откуда:</div>
                <div>{transfer?.start}</div>
              </div>

              <div className="order-row">
                <div>Куда:</div>
                <div>{transfer?.end}</div>
              </div>

              <div className="order-row">
                <div>Дата:</div>
                <div>{transfer?.transferTime}</div>
              </div>

              <div className="order-row">
                <div>Время:</div>
                <div>{transfer?.transferDate}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Button sx={backButton} onClick={() => navigate('/transfers')}>
        Назад
      </Button>
    </div>
  );
};
