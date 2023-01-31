import { Button, Checkbox, Input, Radio, RadioGroup, TextField } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { fromAirport, setCarType } from '../../../store/slices/userSlice';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { button, input } from '../../../styles/styles';
import { CheckboxActive, CheckboxChecked } from '../../CheckboxStatus';
import { sedanIcon, vitoIcon } from '../../images';
import { memo, useEffect, useState } from 'react';
import { useYmaps } from '../../../hooks/useYmaps';

interface OrderStepProps {}

const AltOrderStepWithout: React.FC<OrderStepProps> = () => {
  // const [message, setMessage] = useState([])
  // console.log(message)
  const [isShow, setIsShow] = useState(false);
  const { onLoad, ymaps, init, start, setStart } = useYmaps();
  const { isAirport, carType } = useAppSelector((state) => state.user);
  useEffect(() => {
    ymaps.ready(() => onLoad(ymaps));
    ymaps.ready(() => init('map'));
    ymaps.ready(() => init('map2'));
  }, [isShow]);

  const { register } = useFormContext();
  const dispatch = useAppDispatch();

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
          <input className='input-date' type="date" min={ new Date(Date.now() + 28 * (60 * 60 * 1000) ).toLocaleDateString('en-ca')} style={{ width: '164px' }} {...register('order.transferDate')} />
        </div>
        <div>
          <div className="label">Время поездки</div>
          <input className='input-date' type="time" {...register('order.transferTime')} />
        </div>
      </div>
      
      
      <RadioGroup value={isAirport}>
      <div className='step-airport'>
        <Radio value={true} {...register('order.pickYouUpFromAirPort')} onChange={(e: any) => dispatch(fromAirport(JSON.parse(e.target.value)))}/>
        <div>Вас забрать из аэропорта?</div>
      </div>
      
      {isAirport && <RadioGroup sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <div className='step-airport'>
          <Radio value='Анталья' {...register('order.start')}/>
          <div>Анталья</div>
        </div>


        <div className='step-airport'>
          <Radio value='Даламан' {...register('order.start')}/>
          <div>Даламан</div>
        </div>
      </RadioGroup>}

      <div className='step-airport'>
        <Radio value={false} {...register('order.pickYouUpFromAirPort')} onChange={(e: any) => dispatch(fromAirport(JSON.parse(e.target.value)))}/>
        <div>Вас отвезти в аэропорт?</div>
      </div>

      {!isAirport && <RadioGroup sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <div className='step-airport'>
          <Radio value={'Анталья'} {...register('order.end')}/>
          <div>Анталья</div>
        </div>


        <div className='step-airport'>
          <Radio value={'Даламан'} {...register('order.end')}/>
          <div>Даламан</div>
        </div>
      </RadioGroup>}

      </RadioGroup>
      
      {isShow && <div id="map" style={{ width: '100%', height: '400px' }}></div>}
      {!isAirport && <div>
        <div className="step">
          <div>Откуда тебя забрать?</div>
          <Button onClick={() => setIsShow((prev) => !prev)} sx={button}>
            {isShow ? 'Скрыть' : 'Выбрать на карте'}
          </Button>
        </div>
        <Input
          id="suggest"
          sx={input}
          value={start}
          type="text"
          {...register('order.start', { onChange: (e) => setStart(e.target.value) })}
        />
      </div>}


      {isAirport && <div>
        <div className="step">
          <div>Куда тебя привести?</div>
          <Button sx={button}>Выбрать на карте</Button>
        </div>
        <Input id="suggest" sx={input} value={start} type="text" {...register('order.end', { onChange: (e) => setStart(e.target.value) })} />
      </div>}
      


      
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
