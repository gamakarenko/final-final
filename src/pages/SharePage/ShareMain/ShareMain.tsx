import AppButton from 'components/ui/AppButton/AppButton';
import AppInput from 'components/ui/AppInput/AppInput';
import PageParagraph from 'components/ui/PageParagraph/PageParagraph';
import { useNavigate } from 'react-router-dom';
import useUpdateOrderInfo from 'hooks/useUpdateOrderInfo';
import './style.css';
import React from 'react';
import { useAppSelector } from 'store/store';
import useNavigateByCondition from 'hooks/useNavigateByCondition';

export default function ShareMain() {
  const { order } = useAppSelector((state) => state.newOrder);
  const { navigate } = useNavigateByCondition(
    '/share/location',
    () => order.transferDate.length > 3,
  );
  const { updateOrderInfo } = useUpdateOrderInfo();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateOrderInfo('transferDate', event.currentTarget.value);
  };

  return (
    <div className="share-main">
      <PageParagraph>
        В этом разделе мы подготовили для тебя слоты в трансфере, к которым ты
        можешь присоединиться. Ты увидишь вид транспорта, количество пассажиров
        и цену. Если еще никто не записался на какой-то слот, то ты будешь
        первым и мы забронируем машину для тебя! А затем, тебе останется только
        ждать, пока кто-то другой присоединиться :) Либо ты можешь выбрать
        слоты, где уже есть забронированные места! Как только у тебя появятся
        новые попутчики - мы пришел тебе уведомление об изменении стоимости
        поездки :)
      </PageParagraph>
      <PageParagraph>
        Присоединиться к поездке, где уже есть попутчики, можно в любой момент,
        но "стать первым" в каком-то слоте - не позднее, чем за 28 часов до
        начала поездки. Лишь так мы можем быть уверены, что необходимая машина и
        водитель будут свободны для тебя.
      </PageParagraph>
      <PageParagraph>
        Чтобы собрать всех попутчиков в одном месте, мы встречаемся у
        назначенных мест. Это сделано для того, чтобы стоимость поездки
        оставалась для вас фиксированной. Если вы хотите, чтобы трансфер забрал
        вас из определенного места, то, пожалуйста, укажите это в комментариях
        (стоимость поездки для вас изменится).
      </PageParagraph>

      <PageParagraph underlined>
        В умолчанию попутчики встречаются в следующих местах:
        <br />- Каш (город)
        <br />- Даламан (аэропорт)
        <br />- Даламан (город)
        <br />- Анталия (город)
        <br />- Анталия (аэропорт)
      </PageParagraph>

      <AppInput
        label="Пожалуйста, внесите дату поездки в формат ЧЧ/ММ. Например, 03/05 для третьего мая:"
        type="date"
        className="share-main__input"
        required
        value={order.transferDate}
        onChange={(e) => handleChange(e)}
      />

      <AppButton onClick={() => navigate()}>Далее</AppButton>
    </div>
  );
}
