import { Button, Input, SxProps } from '@mui/material';
import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useTelegram } from '../../../../hooks/useTelegram';
import { addPassengers, editTransfer, fetchTransfers, summ } from '../../../../store/slices/transferSlice';
import { useAppDispatch, useAppSelector } from '../../../../store/store';
import { backButton, defaultButton } from '../../../../styles/styles';
import { yupResolver } from '@hookform/resolvers/yup';

interface AgeStepProps {}

const input: SxProps = {
  width: '100%',
  minHeight: '45px',
  background: '#E9E9E9',
  border: '1px solid #ADADAD',
  borderRadius: '5px',
  outline: 'none',
  paddingLeft: '1rem',
  paddingRight: '1rem',
  '&:before': {
    borderBottom: 'none',
  },
};

const AgeStep: React.FunctionComponent<AgeStepProps> = () => {
  const navigate = useNavigate()
  const {userId} = useTelegram()
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchTransfers(userId));
  }, []);
  const { transfer } = useAppSelector((state) => state.transfers);

  const validationSchema = yup.object({
    adults: yup.string().required('Обязательное поле'),
    childrenUnder5: yup.string().required('Обязательное поле'),
    childrenAbove5: yup.string().required('Обязательное поле'),
  });
  const { handleSubmit, register, formState } = useForm<any>({
    mode: 'onBlur',
    resolver: yupResolver(validationSchema),
  });
  const { isValid, errors } = formState;
  console.log(errors, isValid);

  const sentData = (d:any, id: number) => {
    dispatch(addPassengers(d))
    dispatch(editTransfer(id, {...transfer, ...d}))
    navigate('/transfers/ordered/final')
  }
  return (
    <>
    <form onSubmit={handleSubmit((d) => sentData(d, transfer.id))}>
      <p className="order__description">
        Внимание! Изменение количества <br />
        пассажиров может повлиять на стоимость поездки.
      </p>
      <br />
      <hr />
      <div className="label">Количество взрослых</div>
      <Input defaultValue={transfer.adults} {...register('adults')} type="number" sx={{ ...input, width: '164px' }}/>
      <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
        <div>
          <div className="label">
            Количество детей
            <br />
            (0-5 лет)
          </div>
          <Input type="number" defaultValue={transfer.childrenUnder5} sx={input} {...register('childrenUnder5')} />
        </div>
        <div>
          <div className="label">
            Количество детей
            <br />
            (6-12 лет)
          </div>
          <Input type="number" defaultValue={transfer.childrenAbove5} sx={input} {...register('childrenAbove5')} />
        </div>
      </div>
      <div style={{ display: 'flex', gap: '15px' }}>
          <Button sx={backButton} onClick={() => navigate(-1)}>
            Назад
          </Button>
          <Button disabled={!isValid} type='submit' sx={defaultButton}>
            Далее
          </Button>
        </div>
      </form>
    </>
  );
};

export default AgeStep;
