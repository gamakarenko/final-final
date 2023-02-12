import { FC, useEffect, useState } from 'react';

import CarRadioBtn from '../../../components/CarRadioBtn/CarRadioBtn';
import AppButton from '../../../components/ui/AppButton/AppButton';
import AppInput from '../../../components/ui/AppInput/AppInput';
import AppTextArea from '../../../components/ui/AppTextArea/AppTextArea';
import PageText from '../../../components/ui/PageText/PageText';
import AppRadioBtn from '../../../components/ui/RadioButton/AppRadioBtn';
import YaMap from '../../../components/YaMap/YaMap';

import { sedanIcon, vitoIcon } from '../../../components/images';

import { StyledMainInfoStep } from './MainInfoStep.styles';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { editOrderInfo } from '../../../store/order/order';

interface MainInfoStepProps {}

const MainInfoStep: FC<MainInfoStepProps> = () => {
  const { order } = useAppSelector(({ order }) => order);
  const dispatch = useAppDispatch();
  const setLocation = (location: string) => dispatch(editOrderInfo({ location }));

  const [isCardVisible, setIsCardVisible] = useState(false);

  return (
    <StyledMainInfoStep>
      <PageText className="transfer-creation__paragraph">
        Здесь ты можешь заказ трансфер :)
        <br />
        Водитель встретит тебя в указанном месте и отвезёт туда, куда необходимо.
      </PageText>

      <PageText className="transfer-creation__bottom-paragraph">
        Водитель встретит тебя в указанном месте и отвезёт туда, куда необходимо. Забронировать, а также отменить
        трансфер можно не позднее, чем за 28 часов до поездки. Только так мы можем быть уверены, что машина и водитель
        будут свободны для вас :)
      </PageText>

      <fieldset className="transfer-fieldset">
        <div className="transfer-fieldset__two-columns-box">
          <AppInput
            label="Дата поездки"
            type="date"
            min={new Date(Date.now() + 28 * (60 * 60 * 1000)).toLocaleDateString('en-ca')}
            value={order.transferDate}
            onChange={(e) => dispatch(editOrderInfo({ transferDate: e.target.value }))}
          />

          {/* TODO не время, а начало поездки? */}
          <AppInput
            label="Время поездки"
            type="time"
            value={order.transferTime}
            onChange={(e) => dispatch(editOrderInfo({ transferTime: e.target.value }))}
          />
        </div>

        <div>
          <legend className="transfer-fieldset__label">Я отправляюсь:</legend>
          <div className="transfer-fieldset__radio-group">
            <AppRadioBtn
              name="direction"
              value="fromAirport"
              checked={order.direction === 'fromAirport'}
              onChange={() => dispatch(editOrderInfo({ direction: 'fromAirport' }))}
            >
              из аэропорта
            </AppRadioBtn>
            <AppRadioBtn
              name="direction"
              value="toAirport"
              checked={order.direction === 'toAirport'}
              onChange={() => dispatch(editOrderInfo({ direction: 'toAirport' }))}
            >
              в аэропорт
            </AppRadioBtn>
          </div>
        </div>

        <>
          <div>
            <p className="transfer-fieldset__label">{order.direction === 'fromAirport' ? 'Из какого?' : 'В какой?'}</p>

            <div className="transfer-fieldset__radio-group">
              <AppRadioBtn
                value="Анталья"
                name="airport"
                checked={order.airport === 'Анталья'}
                onChange={(e) => dispatch(editOrderInfo({ airport: 'Анталья' }))}
              >
                Анталья
              </AppRadioBtn>
              <AppRadioBtn
                value="Даламан"
                name="airport"
                checked={order.airport === 'Даламан'}
                onChange={(e) => dispatch(editOrderInfo({ airport: 'Даламан' }))}
              >
                Даламан
              </AppRadioBtn>
            </div>
          </div>

          <div>
            <div className="transfer-fieldset__address-label">
              <p>{order.direction === 'toAirport' ? 'Откуда?' : 'Куда?'}</p>
              <AppButton
                className="transfer-fieldset__card-btn"
                isFilled={false}
                isUppercase
                onClick={() => setIsCardVisible((prev) => !prev)}
              >
                {isCardVisible ? 'Скрыть карту' : 'Выбрать на карте'}
              </AppButton>
            </div>
            <AppTextArea
              id="suggest"
              value={order.location}
              onChange={(e) => dispatch(editOrderInfo({ location: e.target.value }))}
            />

            <YaMap isVisible={isCardVisible} location={order.location} setLocation={setLocation} />
          </div>
        </>

        <div className="transfer-fieldset__rows-box">
          <CarRadioBtn
            car="Vito"
            name="car-type"
            value="vito"
            checked={order.carType === 'vito'}
            onChange={(e) => dispatch(editOrderInfo({ carType: 'vito' }))}
            maxPeople={8}
            img={vitoIcon}
          />
          <CarRadioBtn
            car="Седан"
            name="car-type"
            value="sedan"
            checked={order.carType === 'sedan'}
            onChange={(e) => dispatch(editOrderInfo({ carType: 'sedan' }))}
            maxPeople={4}
            img={sedanIcon}
          />
        </div>

        <AppInput
          label="Количество взрослых"
          type="number"
          min={1}
          value={order.adults}
          onChange={(e) => dispatch(editOrderInfo({ adults: e.target.value as unknown as number }))}
        />

        <div className="transfer-fieldset__two-columns-box">
          <AppInput
            type="number"
            min={0}
            value={order.childrenUnder5}
            onChange={(e) => dispatch(editOrderInfo({ childrenUnder5: e.target.value as unknown as number }))}
          >
            Количество детей
            <br />
            до 5 лет
          </AppInput>
          <AppInput
            type="number"
            min={0}
            value={order.childrenAbove5}
            onChange={(e) => dispatch(editOrderInfo({ childrenAbove5: e.target.value as unknown as number }))}
          >
            Количество детей
            <br />
            6-12 лет
          </AppInput>
        </div>
      </fieldset>
    </StyledMainInfoStep>
  );
};

export default MainInfoStep;
