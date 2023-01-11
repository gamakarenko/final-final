import { Button, Checkbox, FormGroup, Input, Radio, RadioGroup, SxProps } from '@mui/material';
import { usePlacesWidget } from 'react-google-autocomplete';
import { useFormContext } from 'react-hook-form';
import { fromAirport, setCarType } from '../../../store/slices/userSlice';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { button, input } from '../../../styles/styles';
import { CheckboxActive, CheckboxChecked } from '../../CheckboxStatus';
import { sedanIcon, vitoIcon } from '../../images';
import Autocomplete from "react-google-autocomplete";
import { useEffect } from 'react';

interface OrderStepProps {}

export const AltOrderStep: React.FC<OrderStepProps> = () => {
//@ts-ignore
const ymaps = window.ymaps
function onLoad (ymaps: any) {
  var suggestView = new ymaps.SuggestView('suggest', {results: 5})
  var suggestView = new ymaps.SuggestView('suggest2', {results: 5});
}

useEffect(() => {
onLoad(ymaps)
ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.76, 37.64],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 7
        });
    }

}, [])

  const { register } = useFormContext();
  const dispatch = useAppDispatch();
  const { isAirport, carType } = useAppSelector((state) => state.user);
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
      <div style={{ display: 'flex', gap: '15px' }}>
        <div>
          <div className="label">Дата поездки</div>
          <Input type="date" sx={{ ...input, width: '164px' }} {...register('order.transferDate')} />
        </div>
        <div>
          <div className="label">Время поездки</div>
          <Input type="time" sx={{ ...input, width: '164px' }} {...register('order.transferTime')} />
        </div>
      </div>
      <div className="pick">
        <Checkbox
          onClick={(e: any) => dispatch(fromAirport(e.target.checked))}
          checked={isAirport}
          {...register('order.pickYouUpFromAirPort')}
        />
        <div>Вас забрать из аэропорта?</div>
      </div>
      <div id="map" style={{width: "100%", height: "400px"}}></div>
      <div>
        <div className="step">
          <div>Откуда тебя забрать?</div>
          <Button  sx={button}>Выбрать на карте</Button>
        </div>
        <Input id="suggest" sx={input} type="text" {...register('order.start')} required/>
      </div>
      <div>
        <div className="step">
          <div>Куда тебя привести?</div>
          <Button sx={button}>Выбрать на карте</Button>
        </div>
        <Input id="suggest2" sx={input} type="text" {...register('order.end')} />
      </div>
      <RadioGroup value={carType}>
        <div className="label">Тип автомобиля</div>
        <div className="type-block">
          <Radio
            sx={{ padding: 0, margin: 0 }}
            onClick={(e: any) => dispatch(setCarType(e.target.value))}
            value={'Vito'}
            icon={<CheckboxActive icon={vitoIcon} title="Vito" info="До 8 человек" />}
            checkedIcon={<CheckboxChecked icon={vitoIcon} title="Vito" info="До 8 человек" />}
            {...register('order.carType')}
          />
          <Radio
            sx={{ padding: 0, margin: 0 }}
            onClick={(e: any) => dispatch(setCarType(e.target.value))}
            value={'Sedan'}
            icon={<CheckboxActive icon={sedanIcon} title="Sedan" info="До 4 человек" />}
            checkedIcon={<CheckboxChecked icon={sedanIcon} title="Sedan" info="До 4 человек" />}
            {...register('order.carType')}
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
          <Input type="number" sx={input} {...register('order.childrenUnder5')} />
        </div>
        <div>
          <div className="label">
            Количество детей
            <br />
            (6-12 лет)
          </div>
          <Input type="number" sx={input} {...register('order.childrenAbove5')} />
        </div>
      </div>
    </>
  );
};
