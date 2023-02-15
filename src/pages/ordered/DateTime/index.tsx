import { Button, Checkbox, Input, Radio, RadioGroup } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { CheckboxActive, CheckboxChecked } from '../../../components/CheckboxStatus';
import { sedanIcon, vitoIcon } from '../../../images/index';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { button, backButton, input, defaultButton } from '../../../styles/styles';
import { fromAirport, setCarType } from '../../../store/slices/userSlice';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { addPassengers, editTransfer } from '../../../store/slices/transferSlice';

interface DateTimeProps {}

const DateTime: React.FunctionComponent<DateTimeProps> = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const sentData = (d:any, id: number) => {
    dispatch(addPassengers(d))
    dispatch(editTransfer(id, {...transfer, ...d}))
    navigate('/transfers/ordered/final')
  }
  const {transfer} = useAppSelector(state => state.transfers)
  //const { register, handleSubmit } = useForm()
  const validationSchema = yup.object({
    carType: yup.string().required('Обязательное поле'),
    end: yup.string().required('Обязательное поле'),
    pickYouUpFromAirPort: yup.boolean().required('Обязательное поле'),
    start: yup.string().required('Обязательное поле'),
    transferDate: yup.string().required('Обязательное поле'),
    transferTime: yup.string().required('Обязательное поле'),
  });
  const { handleSubmit, register, formState } = useForm<any>({
    mode: 'onBlur',
    resolver: yupResolver(validationSchema),
  });
  const { isValid, errors } = formState;
  console.log(errors, isValid);

  return (
    <form className="transfers-page" style={{ height: '100%' }} onSubmit={handleSubmit((d) => sentData(d, transfer.id))}>
      <div>
        <h1 className="order-title">Заказанные поездки</h1>
        <p>Изменить данные возможно не менее чем за 28 часов</p>
        <hr />
        <div style={{ display: 'flex', gap: '15px' }}>
          <div>
            <div className="label">Дата поездки</div>
            <Input defaultValue={transfer.transferDate} type="date" sx={{ ...input, width: '164px' }} {...register('transferDate')} />
          </div>
          <div>
            <div className="label">Время поездки</div>
            <Input defaultValue={transfer.transferTime} type="time" sx={{ ...input, width: '164px' }} {...register('transferTime')} />
          </div>
        </div>
        <div className="pick">
          <Checkbox
            onClick={(e: any) => dispatch(fromAirport(e.target.checked))}
            defaultChecked={transfer.pickYouUpFromAirPort}
            {...register('pickYouUpFromAirPort')}
          />
          <div>Вас забрать из аэропорта?</div>
        </div>
        <div>
          <div className="step">
            <div>Откуда тебя забрать?</div>
            <Button sx={button}>Выбрать на карте</Button>
          </div>
          <Input defaultValue={transfer.start} sx={input} type="text" {...register('start')} />
          <p className="error">{errors.start?.message as any}</p>
        </div>
        <div>
          <div className="step">
            <div>Куда тебя привести?</div>
            <Button sx={button}>Выбрать на карте</Button>
          </div>
          <Input defaultValue={transfer.end} sx={input} type="text" {...register('end')} />
        </div>
        <RadioGroup defaultValue={transfer.carType}>
          <div className="label">Тип автомобиля</div>
          <div className="type-block">
            <Radio
              sx={{ padding: 0, margin: 0 }}
              onClick={(e: any) => dispatch(setCarType(e.target.value))}
              value={'Vito'}
              icon={<CheckboxActive icon={vitoIcon} title="Vito" info="До 8 человек" />}
              checkedIcon={<CheckboxChecked icon={vitoIcon} title="Vito" info="До 8 человек" />}
              {...register('carType')}
            />
            <Radio
              sx={{ padding: 0, margin: 0 }}
              onClick={(e: any) => dispatch(setCarType(e.target.value))}
              value={'Sedan'}
              icon={<CheckboxActive icon={sedanIcon} title="Sedan" info="До 4 человек" />}
              checkedIcon={<CheckboxChecked icon={sedanIcon} title="Sedan" info="До 4 человек" />}
              {...register('carType')}
            />
          </div>
        </RadioGroup>
      </div>
      <div style={{ marginTop: '15px' }}>
        <Button disabled={!isValid} type="submit" sx={{ ...defaultButton, marginBottom: '15px' }}>
          Сохранить изменения
        </Button>
        <Button sx={backButton} onClick={() => navigate(-1)}>
          Назад
        </Button>
      </div>
    </form>
  );
};

export default DateTime;
