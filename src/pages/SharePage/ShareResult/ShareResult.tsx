import AppButton from 'components/ui/AppButton/AppButton';
import PageParagraph from 'components/ui/PageParagraph/PageParagraph';
import { useNavigate } from 'react-router-dom';
import "./style.css"

export default function ShareResult() {
  const nav = useNavigate();

  return (
    <div className="share-result">
      <PageParagraph>
        Ассистент свяжется с вами в течение за 24 ч. до отправления для
        подтверждения бронирования.
      </PageParagraph>
      <PageParagraph>
        Как только кто-то пошерит поездку вместе с тобой, тебе придёт
        уведомление об изменении стоимости поездки. Также мы напомним тебе о
        месте и дате встречи за 12 часов до поездки :)
      </PageParagraph>
      <PageParagraph>
        Теперь твоя бронь доступна в разделе: Мои поездки. Там же ты сможешь её
        отменить или изменить данные.
      </PageParagraph>

      <div className='share-result__menu'>
      <AppButton className="share-btn" onClick={() => nav("/")}>
        Завершить
      </AppButton>

      <AppButton
        className=""
        isFilled={false}
          onClick={() => nav("/transfers")}
      >
        Мои поездки
      </AppButton>
      </div>

    </div>
  );
}
