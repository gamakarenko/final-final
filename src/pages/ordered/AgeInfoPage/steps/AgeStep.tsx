import { Input, SxProps } from '@mui/material';
import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { fetchTransfers } from '../../../../store/slices/transferSlice';
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
  const { register } = useFormContext();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchTransfers());
  }, []);
  const { transfers } = useAppSelector((state) => state.transfers);
  console.log(transfers);
  const adults = transfers[0]?.adultsAmount;
  const children = transfers[0]?.childrenAmount;

  return (
    <>
      <p className="order__description">
        Внимание! Изменение количества <br />
        пассажиров может повлиять на стоимость поездки.
      </p>
      <br />
      <hr />
      <div className="label">Количество взрослых</div>
      <Input defaultValue={adults} type="number" sx={{ ...input, width: '164px' }} {...register('order.adults')} />
      <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
        <div>
          <div className="label">
            Количество детей
            <br />
            (0-5 лет)
          </div>
          <Input type="number" defaultValue={children} sx={input} {...register('order.childrenUnder5')} />
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

export default AgeStep;
