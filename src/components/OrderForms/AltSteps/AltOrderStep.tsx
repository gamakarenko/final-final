import { Button, Checkbox, Input, Radio, RadioGroup } from '@mui/material';
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

  useEffect(() => {
    ymaps.ready(() => onLoad(ymaps));
    ymaps.ready(() => init('map'));
    ymaps.ready(() => init('map2'));

    // let socket = new WebSocket('wss://ws.bitmex.com/realtimePlatform')

    // socket.onopen = function() {
    //   console.log("Соединение установлено.");
    //   //@ts-ignore
    // socket.send(`{"op": "subscribe", "args": ["chat"]}`)
    // };

    // socket.onclose = function(event) {
    //   if (event.wasClean) {
    //     console.log('Соединение закрыто чисто');
    //   } else {
    //     console.log('Обрыв соединения'); // например, "убит" процесс сервера
    //   }
    //   console.log('Код: ' + event.code + ' причина: ' + event.reason);
    // };

    // socket.onmessage = function(event) {
    //   const data = JSON.parse(event?.data)
    //   const next = {
    //     nick: data?.data[0]?.user,
    //     message: data?.data[0]?.message
    //   }
    //   setMessage((prev) => [...prev, next])
    // };

    // socket.onerror = function() {
    //   console.log("Ошибка ");
    // };
  }, [isShow]);

  const { register } = useFormContext();
  const dispatch = useAppDispatch();
  const { isAirport, carType } = useAppSelector((state) => state.user);
  return (
    <>
      {/* <h3>Окошко в одно сообщение)</h3>
    <div id='box' style={{height: '200px', overflow: 'auto'}}>
      {message.map((el) => <div key={el.message} style={{ display: 'flex', gap: '10px', marginTop: "10px",}}>
        <div style={{fontWeight: '700'}}>{el?.nick}</div>
        <div>{el?.message}</div>
      </div>)}
      </div> */}
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
      {isShow && <div id="map" style={{ width: '100%', height: '400px' }}></div>}
      <div>
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

export const AltOrderStep = memo(AltOrderStepWithout);
