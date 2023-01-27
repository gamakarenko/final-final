import { Input, SxProps } from '@mui/material';
import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useTelegram } from '../../../../hooks/useTelegram';
import { addPassengers, fetchTransfers, summ } from '../../../../store/slices/transferSlice';
import { useAppDispatch, useAppSelector } from '../../../../store/store';

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
  
  const [adults, setAdults] = useState()
  const {userId} = useTelegram()
  const { register } = useFormContext();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchTransfers(userId));
    dispatch(addPassengers({adults: adults}))
  }, [adults]);
  const { transfer, transfers } = useAppSelector((state) => state.transfers);
  console.log(transfers);


  return (
    <>
      <p className="order__description">
        Внимание! Изменение количества <br />
        пассажиров может повлиять на стоимость поездки.
      </p>
      <br />
      <hr />
      <div className="label">Количество взрослых</div>
      <Input value={adults} defaultValue={transfer.adults} onChange={(e:any) => setAdults(e.target.value)} type="number" sx={{ ...input, width: '164px' }}/>
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
    </>
  );
};

export default AgeStep;
