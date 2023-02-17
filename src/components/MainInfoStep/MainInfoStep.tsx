import { FC, PropsWithChildren, useState } from 'react';

import PageParagraph from '../ui/PageParagraph/PageParagraph';
import CarRadioBtn from '../CarRadioBtn/CarRadioBtn';
import AppButton from '../ui/AppButton/AppButton';
import AppInput from '../ui/AppInput/AppInput';
import AppTextArea from '../ui/AppTextArea/AppTextArea';
import AppRadioBtn from '../ui/RadioButton/AppRadioBtn';
import YaMap from '../YaMap/YaMap';

import { IOrder } from 'types/order';

import { sedanIcon, vitoIcon } from '../../images/index';

import { StyledMainInfoStep } from './MainInfoStep.styles';

interface MainInfoStepProps extends PropsWithChildren {
  heading?: string;
  order: Partial<IOrder>;
  handleChange: (data: Partial<IOrder>) => void;
}

const MainInfoStep: FC<MainInfoStepProps> = ({
  heading,
  children,
  handleChange,
  order,
}) => {
  const setLocation = (location: string) => handleChange({ location });

  const [isCardVisible, setIsCardVisible] = useState(false);

  return (
    <StyledMainInfoStep>
      {children ? (
        children
      ) : heading ? (
        <PageParagraph underlined>{heading}</PageParagraph>
      ) : null}

      <fieldset className="main-info-fieldset">
        <div className="main-info-fieldset__two-columns-box">
          <AppInput
            label="Дата поездки"
            type="date"
            required
            min={new Date(
              Date.now() + 28 * (60 * 60 * 1000),
            ).toLocaleDateString('en-ca')}
            value={order.transferDate}
            onChange={(e) => handleChange({ transferDate: e.target.value })}
          />

          {/* TODO не время, а начало поездки? */}
          <AppInput
            label="Время поездки"
            type="time"
            required
            value={order.transferTime}
            onChange={(e) => handleChange({ transferTime: e.target.value })}
          />
        </div>

        <div>
          <legend className="main-info-fieldset__label">Я отправляюсь:</legend>
          <div className="main-info-fieldset__radio-group">
            <AppRadioBtn
              name="direction"
              value="fromAirport"
              checked={order.direction === 'fromAirport'}
              onChange={() => handleChange({ direction: 'fromAirport' })}
            >
              из аэропорта
            </AppRadioBtn>
            <AppRadioBtn
              name="direction"
              value="toAirport"
              checked={order.direction === 'toAirport'}
              onChange={() => handleChange({ direction: 'toAirport' })}
            >
              в аэропорт
            </AppRadioBtn>
          </div>
        </div>

        <>
          <div>
            <p className="main-info-fieldset__label">
              {order.direction === 'fromAirport' ? 'Из какого?' : 'В какой?'}
            </p>

            <div className="main-info-fieldset__radio-group">
              <AppRadioBtn
                value="Анталья"
                name="airport"
                checked={order.airport === 'Анталья'}
                onChange={(e) => handleChange({ airport: 'Анталья' })}
              >
                Анталья
              </AppRadioBtn>
              <AppRadioBtn
                value="Даламан"
                name="airport"
                checked={order.airport === 'Даламан'}
                onChange={(e) => handleChange({ airport: 'Даламан' })}
              >
                Даламан
              </AppRadioBtn>
            </div>
          </div>

          <div>
            <div className="main-info-fieldset__address-label">
              <p>{order.direction === 'toAirport' ? 'Откуда?' : 'Куда?'}</p>
              <AppButton
                className="main-info-fieldset__card-btn"
                isFilled={false}
                isUppercase
                onClick={() => setIsCardVisible((prev) => !prev)}
              >
                {isCardVisible ? 'Скрыть карту' : 'Выбрать на карте'}
              </AppButton>
            </div>
            <AppTextArea
              id="suggest"
              required
              value={order.location}
              onChange={(e) => handleChange({ location: e.target.value })}
            />

            <YaMap
              isVisible={isCardVisible}
              location={order.location!}
              setLocation={setLocation}
            />
          </div>
        </>

        <div className="main-info-fieldset__rows-box">
          <CarRadioBtn
            car="Vito"
            name="car-type"
            value="vito"
            checked={order.carType === 'vito'}
            onChange={() => handleChange({ carType: 'vito' })}
            maxPeople={8}
            img={vitoIcon}
          />
          <CarRadioBtn
            car="Седан"
            name="car-type"
            value="sedan"
            checked={order.carType === 'sedan'}
            onChange={() => handleChange({ carType: 'sedan' })}
            maxPeople={4}
            img={sedanIcon}
          />
        </div>

        <AppInput
          label="Количество взрослых"
          type="number"
          required
          min={1}
          value={order.adults}
          onChange={(e) =>
            handleChange({ adults: e.target.value as unknown as number })
          }
        />

        <div className="main-info-fieldset__two-columns-box">
          <AppInput
            type="number"
            required
            min={0}
            value={order.childrenUnder5}
            onChange={(e) =>
              handleChange({
                childrenUnder5: e.target.value as unknown as number,
              })
            }
          >
            Количество детей
            <br />
            до 5 лет
          </AppInput>
          <AppInput
            type="number"
            required
            min={0}
            value={order.childrenAbove5}
            onChange={(e) =>
              handleChange({
                childrenAbove5: e.target.value as unknown as number,
              })
            }
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
