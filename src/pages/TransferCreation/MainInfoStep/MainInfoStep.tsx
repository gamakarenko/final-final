import { FC, useState } from 'react';

import CarRadioBtn from '../../../components/CarRadioBtn/CarRadioBtn';
import AppButton from '../../../components/ui/AppButton/AppButton';
import AppInput from '../../../components/ui/AppInput/AppInput';
import AppTextArea from '../../../components/ui/AppTextArea/AppTextArea';
import AppRadioBtn from '../../../components/ui/RadioButton/AppRadioBtn';
import YaMap from '../../../components/YaMap/YaMap';

import { sedanIcon, vitoIcon } from '../../../components/images';

import { StyledMainInfoStep } from './MainInfoStep.styles';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { editOrderInfo } from '../../../store/order/order';
import PageParagraph from '../../../components/ui/PageParagraph/PageParagraph';

const MainInfoStep: FC = () => {
  const { order } = useAppSelector(({ order }) => order);
  const dispatch = useAppDispatch();
  const setLocation = (location: string) =>
    dispatch(editOrderInfo({ location }));

  const [isCardVisible, setIsCardVisible] = useState(false);

  return (
    <StyledMainInfoStep>
      <PageParagraph>
        Здесь ты&nbsp;можешь заказ трансфер :)
        <br />
        Водитель встретит тебя в&nbsp;указанном месте и&nbsp;отвезёт туда, куда
        необходимо.
      </PageParagraph>

      <PageParagraph underlined>
        Водитель встретит тебя в&nbsp;указанном месте и&nbsp;отвезёт туда, куда
        необходимо. Забронировать, а&nbsp;также отменить трансфер можно
        не&nbsp;позднее, чем за&nbsp;28&nbsp;часов до&nbsp;поездки. Только так
        мы&nbsp;можем быть уверены, что машина и&nbsp;водитель будут свободны
        для вас :)
      </PageParagraph>

      <fieldset className="transfer-fieldset">
        <div className="transfer-fieldset__two-columns-box">
          <AppInput
            label="Дата поездки"
            type="date"
            required
            min={new Date(
              Date.now() + 28 * (60 * 60 * 1000),
            ).toLocaleDateString('en-ca')}
            value={order.transferDate}
            onChange={(e) =>
              dispatch(editOrderInfo({ transferDate: e.target.value }))
            }
          />

          {/* TODO не время, а начало поездки? */}
          <AppInput
            label="Время поездки"
            type="time"
            required
            value={order.transferTime}
            onChange={(e) =>
              dispatch(editOrderInfo({ transferTime: e.target.value }))
            }
          />
        </div>

        <div>
          <legend className="transfer-fieldset__label">Я отправляюсь:</legend>
          <div className="transfer-fieldset__radio-group">
            <AppRadioBtn
              name="direction"
              value="fromAirport"
              checked={order.direction === 'fromAirport'}
              onChange={() =>
                dispatch(editOrderInfo({ direction: 'fromAirport' }))
              }
            >
              из аэропорта
            </AppRadioBtn>
            <AppRadioBtn
              name="direction"
              value="toAirport"
              checked={order.direction === 'toAirport'}
              onChange={() =>
                dispatch(editOrderInfo({ direction: 'toAirport' }))
              }
            >
              в аэропорт
            </AppRadioBtn>
          </div>
        </div>

        <>
          <div>
            <p className="transfer-fieldset__label">
              {order.direction === 'fromAirport' ? 'Из какого?' : 'В какой?'}
            </p>

            <div className="transfer-fieldset__radio-group">
              <AppRadioBtn
                value="Анталья"
                name="airport"
                checked={order.airport === 'Анталья'}
                onChange={(e) =>
                  dispatch(editOrderInfo({ airport: 'Анталья' }))
                }
              >
                Анталья
              </AppRadioBtn>
              <AppRadioBtn
                value="Даламан"
                name="airport"
                checked={order.airport === 'Даламан'}
                onChange={(e) =>
                  dispatch(editOrderInfo({ airport: 'Даламан' }))
                }
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
              required
              value={order.location}
              onChange={(e) =>
                dispatch(editOrderInfo({ location: e.target.value }))
              }
            />

            <YaMap
              isVisible={isCardVisible}
              location={order.location}
              setLocation={setLocation}
            />
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
          required
          min={1}
          value={order.adults}
          onChange={(e) =>
            dispatch(
              editOrderInfo({ adults: e.target.value as unknown as number }),
            )
          }
        />

        <div className="transfer-fieldset__two-columns-box">
          <AppInput
            type="number"
            required
            min={0}
            value={order.childrenUnder5}
            onChange={(e) =>
              dispatch(
                editOrderInfo({
                  childrenUnder5: e.target.value as unknown as number,
                }),
              )
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
              dispatch(
                editOrderInfo({
                  childrenAbove5: e.target.value as unknown as number,
                }),
              )
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
