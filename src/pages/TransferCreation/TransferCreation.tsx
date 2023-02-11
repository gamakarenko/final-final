import { useEffect, useState } from 'react';

import PageHeading from '../../components/ui/PageHeading/PageHeading';
import PageText from '../../components/ui/PageText/PageText';
import AppRadioBtn from '../../components/ui/RadioButton/RadioButton';
import AppButton from '../../components/ui/AppButton/AppButton';
import AppInput from '../../components/ui/AppInput/AppInput';
import CarRadioBtn from '../../components/CarRadioBtn/CarRadioBtn';
import YaMap from '../../components/YaMap/YaMap';

import { ICarType, ITripDirection } from './TransferCreation.types';

import { sedanIcon, vitoIcon } from '../../components/images';
import { StyledTransferCreation } from './TransferCreation.styled';
import AppTextArea from '../../components/ui/AppTextArea/AppTextArea';

const TransferCreation = () => {
  const [tripDirection, setTripDirection] = useState<ITripDirection>('fromAirport');
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [location, setLocation] = useState<any>('');
  const [carType, setCarType] = useState<ICarType>('vito');

  return (
    <StyledTransferCreation>
      <PageHeading>Заказать трансфер</PageHeading>

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
          />

          {/* TODO не время, а начало поездки? */}
          <AppInput label="Время поездки" type="time" />
        </div>

        <div>
          <legend className="transfer-fieldset__label">Я отправляюсь:</legend>
          <div className="transfer-fieldset__radio-group">
            <AppRadioBtn
              name="direction"
              value="fromAirport"
              checked={tripDirection === 'fromAirport'}
              onChange={() => setTripDirection('fromAirport')}
            >
              из аэропорта
            </AppRadioBtn>
            <AppRadioBtn
              name="direction"
              value="toAirport"
              checked={tripDirection === 'toAirport'}
              onChange={() => setTripDirection('toAirport')}
            >
              в аэропорт
            </AppRadioBtn>
          </div>
        </div>

        {tripDirection && (
          <>
            <div>
              <p className="transfer-fieldset__label">{tripDirection === 'fromAirport' ? 'Из какого?' : 'В какой?'}</p>

              <div className="transfer-fieldset__radio-group">
                <AppRadioBtn value="Анталья" name="airport">
                  Анталья
                </AppRadioBtn>
                <AppRadioBtn value="Даламан" name="airport">
                  Даламан
                </AppRadioBtn>
              </div>
            </div>

            <div>
              <div className="transfer-fieldset__address-label">
                <p>{tripDirection === 'toAirport' ? 'Откуда?' : 'Куда?'}</p>
                <AppButton
                  className="transfer-fieldset__card-btn"
                  isFilled={false}
                  isUppercase
                  onClick={() => setIsCardVisible((prev) => !prev)}
                >
                  {isCardVisible ? 'Скрыть карту' : 'Выбрать на карте'}
                </AppButton>
              </div>
              <AppTextArea id="suggest" value={location} onChange={(e) => setLocation(e.target.value)} />

              <YaMap isVisible={isCardVisible} location={location} setLocation={setLocation} />
            </div>
          </>
        )}

        <div className="transfer-fieldset__rows-box">
          <CarRadioBtn
            car="Vito"
            name="car-type"
            value="vito"
            checked={carType === 'vito'}
            onChange={(e) => setCarType(e.target.value as ICarType)}
            maxPeople={8}
            img={vitoIcon}
          />
          <CarRadioBtn
            car="Седан"
            name="car-type"
            value="sedan"
            checked={carType === 'sedan'}
            onChange={(e) => setCarType(e.target.value as ICarType)}
            maxPeople={4}
            img={sedanIcon}
          />
        </div>

        <AppInput label="Количество взрослых" type="number" min={0} defaultValue={1} />

        <div className="transfer-fieldset__two-columns-box">
          <AppInput type="number" min={0} defaultValue={0}>
            Количество детей
            <br />
            до 5 лет
          </AppInput>
          <AppInput type="number" min={0} defaultValue={0}>
            Количество детей
            <br />
            6-12 лет
          </AppInput>
        </div>
      </fieldset>
    </StyledTransferCreation>
  );
};

export default TransferCreation;
