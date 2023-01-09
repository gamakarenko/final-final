import { Button, Input, SxProps } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { cancelButton } from '../../styles/styles';

interface ReviewPageProps {}

const input: SxProps = {
  width: '100%',
  minHeight: '45px',
  background: '#E9E9E9',
  border: '1px solid #ADADAD',
  borderRadius: '5px',
  outline: 'none',
  paddingLeft: '1rem',
  paddingRight: '1rem',
  '&:before': {
    borderBottom: 'none',
  },
};

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
  display: 'block',
  padding: '15px',
  marginTop: '15px',
  marginBottom: '15px',
  '&:hover': {
    backgroundColor: '#007AFF',
  },
};

const ReviewPage: React.FunctionComponent<ReviewPageProps> = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  //@ts-ignore
  let tg = window?.Telegram?.WebApp;
  // const back = tg.BackButton;
  // back.show();
  // back.onClick(() => navigate('/about'));
  // const popUp = tg.PopupParams
  // const popBtn = tg.PopupButton
  // popUp({title: 'Отзыв отправлен', message: 'Благодарим Вас за фидбек'});
  // popBtn({type: 'ok'})

  return (
    <div className="transfers-page">
      <div>
        <div style={{ marginBottom: '0px' }} className="transfers-page__title">
          О проекте
        </div>
        <br />
        <hr />
        <br />
        <p>
          #обратнаясвязь
          <br />
          👩🏻‍💻 Это Transfer.Bot версии 1.0
          <br />
          Мы очень старались сделать этот бот <br />
          удобным и функциональным. Однако, <br />
          признаём, что впереди большой путь до <br />
          совершенства. В скором времени мы <br />
          планируем расширить список подключенных направлений.
          <br />
          <br />
          🖤 Мы открыты к обратной связи и будем благодарны твоим идеям по улучшению помощника!
          <br />
          <br />
          Есть ли что-то, что можно улучшить? Какие <br />
          ещё города ты бы хотел увидеть в боте? <br />
          Место для фидбэка⤵️
          <br />
          <br />
        </p>
        <form onSubmit={handleSubmit((e) => console.log(e))}>
          <div className="info-label">Твой отзыв</div>
          <Input type="text" sx={input} multiline={true} minRows={3} {...register('review')} />
          <Button
            type="submit"
            sx={ButtonStyle}
            onClick={() => {
              tg.showAlert('Отзыв отправлен');
              navigate('/');
            }}
          >
            Оставить отзыв
          </Button>
          <Button sx={cancelButton} onClick={() => navigate(-1)}>
            Назад
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ReviewPage;
