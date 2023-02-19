import { memo, useEffect, useState } from 'react';

import { CheckboxActive, CheckboxChecked } from '../../../CheckboxStatus';

import { ITripDirection } from './AltOrderStep.types';

import { Button, Input, Radio, RadioGroup } from '@mui/material';
import { useFormContext } from 'react-hook-form';

import { setCarType } from '../../../../store/slices/userSlice';
import { useAppDispatch, useAppSelector } from '../../../../store/store';
import { useYmaps } from '../../../../hooks/useYmaps';

import { sedanIcon, vitoIcon } from '../../../../images/index';
import { button, input } from '../../../../styles/styles';
import { StyledTripDirection } from './AltOrderStep.styles';
import AppRadioButton from '../../../ui/AppRadioButton/AppRadioBtn';

interface OrderStepProps {}

const AltOrderStepWithout: React.FC<OrderStepProps> = () => {
  const [tripDirection, setTripDirection] = useState<ITripDirection>(null);

  const [isCardVisible, setIsCardVisible] = useState(false);
  const { onLoad, ymaps, init, location, setLocation } = useYmaps();
  // const [location, setLocation] = useState('')

  const { isAirport, carType } = useAppSelector((state) => state.user);

  useEffect(() => {
    ymaps.ready(() => onLoad(ymaps));
    ymaps.ready(() => init('map'));
  }, []);

  const { register } = useFormContext();
  const dispatch = useAppDispatch();

  const getStartOrEndRegistry = () => {
    if (tripDirection) {
      return tripDirection === 'fromAirport' ? register('order.start') : register('order.end');
    }

    return {};
  };

  //TODO убрать br
  return (
    <>
      <p className="order__description">
        Здесь ты можешь заказ трансфер :)
        <br />
        Водитель встретит тебя в указанном месте и<br />
        отвезёт туда, куда необходимо.
        <br />
        <br />
        Забронировать, а также отменить трансфер <br />
        можно не позднее, чем за 28 часов до <br />
        поездки. Только так мы можем быть уверены, <br />
        что машина и водитель будут свободны для <br />
        вас :)
      </p>
      <br />
      <hr />
      <div style={{ display: 'flex', gap: '15px', marginBottom: 10 }}>
        <div>
          <div className="label">Дата поездки</div>
          <input
            className="input-date"
            type="date"
            min={new Date(Date.now() + 28 * (60 * 60 * 1000)).toLocaleDateString('en-ca')}
            style={{ width: '164px' }}
            {...register('order.transferDate')}
          />
        </div>

        <div>
          {/* TODO не время, а начало поездки? */}
          <div className="label">Время поездки</div>
          <input className="input-date" type="time" {...register('order.transferTime')} />
        </div>
      </div>

      <StyledTripDirection>
        <legend>Я отправляюсь:</legend>
        <div className="trip-direction__radio-group">
          <AppRadioButton
            name="direction"
            value="fromAirport"
            checked={tripDirection === 'fromAirport'}
            onChange={() => setTripDirection('fromAirport')}
          >
            из аэропорта
          </AppRadioButton>
          <AppRadioButton
            name="direction"
            value="toAirport"
            checked={tripDirection === 'toAirport'}
            onChange={() => setTripDirection('toAirport')}
          >
            в аэропорт
          </AppRadioButton>
        </div>
      </StyledTripDirection>

      <div>
        {tripDirection === 'fromAirport' ? 'Из какого?' : 'В какой?'}

        <RadioGroup sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
          <AppRadioButton value="Анталья" {...getStartOrEndRegistry()}>
            Анталья
          </AppRadioButton>
          <AppRadioButton value="Даламан" {...getStartOrEndRegistry()}>
            Даламан
          </AppRadioButton>
        </RadioGroup>
      </div>

      <div>
        <div className="step">
          <div>Куда?</div>
          <Button sx={button} onClick={() => setIsCardVisible((prev) => !prev)}>
            {isCardVisible ? 'Скрыть карту' : 'Выбрать на карте'}
          </Button>
        </div>
        <Input
          id="suggest"
          sx={input}
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          type="text"
          {...getStartOrEndRegistry()}
        />
      </div>

      <div id="map" style={{ width: '100%', height: 400, display: isCardVisible ? 'block' : 'none' }} />

      <RadioGroup value={carType}>
        <div className="label">Тип автомобиля</div>
        <div className="type-block">
          <Radio
            sx={{ padding: 0, margin: 0 }}
            value={'Vito'}
            icon={<CheckboxActive icon={vitoIcon} title="Vito" info="До 8 человек" />}
            checkedIcon={<CheckboxChecked icon={vitoIcon} title="Vito" info="До 8 человек" />}
            {...register('order.carType')}
            onClick={(e: any) => dispatch(setCarType(e.target.value))}
          />
          <Radio
            sx={{ padding: 0, margin: 0 }}
            value={'Sedan'}
            icon={<CheckboxActive icon={sedanIcon} title="Sedan" info="До 4 человек" />}
            checkedIcon={<CheckboxChecked icon={sedanIcon} title="Sedan" info="До 4 человек" />}
            {...register('order.carType')}
            onClick={(e: any) => dispatch(setCarType(e.target.value))}
          />
        </div>
      </RadioGroup>
      <div className="label">Количество взрослых</div>
      <Input type="number" sx={input} {...register('order.adults')} />
      <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
        <div>
          <div className="label">
            Количество детей
            <br />
            (0-5 лет)
          </div>
          <Input defaultValue={0} type="number" sx={input} {...register('order.childrenUnder5')} />
        </div>
        <div>
          <div className="label">
            Количество детей
            <br />
            (6-12 лет)
          </div>
          <Input defaultValue={0} type="number" sx={input} {...register('order.childrenAbove5')} />
        </div>
      </div>
    </>
  );
};

export const AltOrderStep = memo(AltOrderStepWithout);
