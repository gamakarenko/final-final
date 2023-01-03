import { Button, SxProps } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface InfoPageProps {}

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

const InfoPage: React.FunctionComponent<InfoPageProps> = () => {
  const navigate = useNavigate();
  //@ts-ignore
  let tg = window?.Telegram?.WebApp;
  const back = tg.BackButton;
  back.show();
  back.onClick(() => navigate('/about'));
  return (
    <div className="transfers-page">
      <div style={{ marginBottom: '0px' }} className="transfers-page__title">
        О проекте
      </div>
      <br />
      <hr />
      <br />
      <p className="about-text">
        ☀️ Этот ассистент создан командой Co. для того, чтобы сделать твою жизнь в Каше удобнее. Однако у нас ещё много
        проектов, которые могли бы помочь тебе. Знакомься!
        <br />
        <br />
        @Co_Assistant_Bot - Личный городской ассистент по Кашу. Бот, решающий бытовые задачи: от поиска жилья до звонка
        юристу. А если остались вопросы, поможет живой ассистент.
        <br />
        <br />
        🏞 Вдохновение и красота:{' '}
        <a style={{ textDecoration: 'underline' }} href="https://www.instagram.com/co.mmunity_/">
          https://www.instagram.com/co.mmunity_/
        </a>
        <br />
        <br />
        @Covilling_Kas_Turkiye - Журнал - по жизни и работе в Каше, а также у нас есть Закрытое сообщество резидентов -
        тех, кто присоединился к нашему коммьюнити
        <br />
        <br />
        Covilling.com — коливинг на премиальных виллах на полуострове Каша: мы живем, работаем и отдыхаем в формате
        work-life balance в среде людей на одной волне
        <br />
        <br />
        Co.Center & Co.Working — панорамное пространство в центре Каша: днём работает в режиме коворкинга, вечером — как
        площадка для ивентов с экспертами
        <br />
        <br />
        Co.Travel — совместные путешествия по окрестностям Каша организованные нашим партнёром TravelSlow
        <br />
        <br />
        Co.Delivery — доставка готовой еды из любимых ресторанов Каша
        <br />
        <br />
        Co.Relocate — помощь в релокации “под ключ”: оформление страховки, ВНЖ, ИП и банковского счет
        <br />
        <br />
        ✋🏼 Поделись ботом с друзьями, если доволен сервисом или оставь обратную связь о своё опыте ↓
      </p>
      <Button sx={ButtonStyle} onClick={() => navigate('/about/review')}>
        Оставить отзыв
      </Button>
    </div>
  );
};

export default InfoPage;
