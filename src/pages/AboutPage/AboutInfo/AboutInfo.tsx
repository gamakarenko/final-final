import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import AppButton from 'components/ui/AppButton/AppButton';
import PageParagraph from 'components/ui/PageParagraph/PageParagraph';

const AboutInfo: FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <PageParagraph>
        ☀️ Этот ассистент создан командой&nbsp;Co. для того, чтобы сделать твою
        жизнь в&nbsp;Каше удобнее. Однако у&nbsp;нас ещё много проектов, которые
        могли&nbsp;бы помочь тебе. Знакомься!
      </PageParagraph>

      <PageParagraph>
        @Co_Assistant_Bot&nbsp;&mdash; Личный городской ассистент по&nbsp;Кашу.
        Бот, решающий бытовые задачи: от&nbsp;поиска жилья до&nbsp;звонка
        юристу. А&nbsp;если остались вопросы, поможет живой ассистент.
      </PageParagraph>

      <PageParagraph>
        🏞️ Вдохновение и&nbsp;красота:{' '}
        <a href="https://www.instagram.com/co.mmunity_/" target="_blank">
          instagram.com/co.mmunity_/
        </a>
      </PageParagraph>

      <PageParagraph>
        @Covilling_Kas_Turkiye&nbsp;&mdash; Журнал&nbsp;&mdash; по&nbsp;жизни
        и&nbsp;работе в&nbsp;Каше, а&nbsp;также у нас есть Закрытое сообщество
        резидентов&nbsp;&mdash; тех, кто присоединился к нашему коммьюнити
      </PageParagraph>

      <PageParagraph>
        Covilling.com&nbsp;&mdash; коливинг на&nbsp;премиальных виллах
        на&nbsp;полуострове Каша: мы живем, работаем и&nbsp;отдыхаем
        в&nbsp;формате work-life balance в&nbsp;среде людей на одной волне
      </PageParagraph>

      <PageParagraph>
        Co.Center &amp;&nbsp;Co.Working&nbsp;&mdash; панорамное пространство
        в&nbsp;центре Каша: днём работает в&nbsp;режиме коворкинга,
        вечером&nbsp;&mdash; как площадка для ивентов с экспертами
      </PageParagraph>

      <PageParagraph>
        Co.Travel&nbsp;&mdash; совместные путешествия по&nbsp;окрестностям Каша
        организованные нашим партнёром TravelSlow
      </PageParagraph>

      <PageParagraph>
        Co.Delivery&nbsp;&mdash; доставка готовой еды из&nbsp;любимых ресторанов
        Каша
      </PageParagraph>

      <PageParagraph>
        Co.Relocate&nbsp;&mdash; помощь в&nbsp;релокации &laquo;под ключ&raquo;:
        оформление страховки, ВНЖ, ИП&nbsp;и&nbsp;банковского счет
      </PageParagraph>

      <PageParagraph>
        ✋🏼 Поделись ботом с&nbsp;друзьями, если доволен сервисом или оставь
        обратную связь о&nbsp;своё опыте &darr;
      </PageParagraph>

      <AppButton
        onClick={() =>
          navigate('/about/review', {
            state: { stayInSectionWhenClickBack: true },
          })
        }
      >
        Оставить отзыв
      </AppButton>
    </>
  );
};

export default AboutInfo;
