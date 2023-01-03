import { Button, SxProps } from '@mui/material';
import PassengerBlock from '../../components/Passenger/PassangerBlock';
import { useAppSelector } from '../../store/store';

interface CancelChangePageProps {}

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
  marginBottom: '20px',
  marginTop: '15px',
};

const buttonComplete: SxProps = {
  width: '343px',
  height: '40px',
  background: '#007AFF',
  borderRadius: '8px',
  color: 'white',
  fontSize: '15px',
  textTransform: 'none',
};

const CancelChangePage: React.FunctionComponent<CancelChangePageProps> = () => {
  const { transfers } = useAppSelector((state) => state.transfers);
  return (
    <div
      className="transfer-page"
      style={{ height: '100vh', flexDirection: 'column', display: 'flex', padding: '15px 16px' }}
    >
      <div className="transfers-page__title-s">Заказанные поездки</div>
      <p>Данные поездки</p>
      <br />
      <hr />
      <br />
      {transfers.map((transfer: any) => {
        return (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <PassengerBlock title="Дата поездки" description={transfer?.tripDate?.slice(0, 10)} />
              <PassengerBlock title="Время поездки" description={transfer?.tripDate?.slice(10)} />
            </div>
            <PassengerBlock title="Откуда тебя забрать?" description={transfer?.startPlace} />
            <PassengerBlock title="Куда привести?" description={transfer?.endPlace} />
            <PassengerBlock title="Тип автомобиля" description={transfer?.autoType} />
            <br />
            {transfers?.passengers &&
              transfers?.passengers.map((i: any, index: any) => {
                return (
                  <div key={index}>
                    <hr />
                    <br />
                    <h3 className="passss">{`Пассажир ${index + 1}`}</h3>
                    <PassengerBlock title="ФИО" description={i?.fullName ? i?.fullName : '-'} />
                    <PassengerBlock title="Номер загранпаспорта" description={i?.passportId ? i?.passportId : '-'} />
                    <PassengerBlock
                      title="Дата и время прилёта"
                      description={
                        i?.departureDate && i?.departureTime ? i?.departureDate + ' ' + i?.departureTime : '-'
                      }
                    />
                    <PassengerBlock title="Номер рейса" description={'-'} />
                    <PassengerBlock title="Номер телефона" description={i?.phoneNumber ? i?.phoneNumber : '-'} />
                    <PassengerBlock title="Электронная почта" description="-" />
                    <PassengerBlock title="Логин в телеграмме" description={i?.telegramId ? i?.telegramId : '-'} />
                    <PassengerBlock
                      title="Комментарий к поездке"
                      description={i?.transferComment ? i?.transferComment : '-'}
                    />
                  </div>
                );
              })}
          </>
        );
      })}
      <div className="" style={{ marginTop: 'auto' }}>
        <Button sx={buttonComplete}>Изменить данные</Button>
        <Button sx={button}>Отменить поездку</Button>
      </div>
    </div>
  );
};

export default CancelChangePage;
