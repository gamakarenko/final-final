import { Accordion, AccordionDetails, AccordionSummary, Button, SxProps, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PassengerBlock from '../../components/Passenger/PassangerBlock';
import { fetchTransferById } from '../../store/slices/transferSlice';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { backButton } from '../../styles/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


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
  margin: '15px 0',
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
  const { id } = useParams();
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchTransferById(id))
  }, [])

  const { transfer } = useAppSelector((state) => state.transfers);
  const navigate = useNavigate();
  return (
    <div
      className="page-long"
    >
      <div className="transfers-page__title-s">Заказанные поездки</div>
      <p>Данные поездки</p>
      <br />
      <hr />
      <br />
      {
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <PassengerBlock title="Дата поездки" description={transfer?.transferDate} />
              <PassengerBlock title="Время поездки" description={transfer?.transferTime} />
            </div>
            <PassengerBlock title="Откуда тебя забрать?" description={transfer?.start} />
            <PassengerBlock title="Куда привести?" description={transfer?.end} />
            <PassengerBlock title="Тип автомобиля" description={transfer?.carType} />
            <br />
            <div style={{marginBottom: "15px"}}>
            {transfer.passengers && transfer.passengers.map((i: any, index: any) => {
                return (
                  <Accordion key={i.id}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <h3 className="passss">{`Пассажир ${index + 1}`}</h3>
                    </AccordionSummary>
                    <AccordionDetails>
                    <div>
                      <hr />
                      <br />
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
                    </AccordionDetails>
                  </Accordion>
                );
              })}
              </div>
          </>
      }
      <div className="" style={{ marginTop: 'auto' }}>
        <Button sx={buttonComplete} onClick={() => navigate(`/transfers/ordered/${id}/change`)}>
          Изменить данные
        </Button>
        <Button sx={button}>Отменить поездку</Button>
        <Button sx={backButton} onClick={() => navigate('/transfers/ordered')}>
          Назад
        </Button>
      </div>
    </div>
  );
};

export default CancelChangePage;
