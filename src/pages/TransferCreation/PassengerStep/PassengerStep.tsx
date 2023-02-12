import { FC } from 'react';

import { useAppDispatch, useAppSelector } from '../../../store/store';

import PassengerFieldset from '../../../components/PassengerFieldset/PassengerFieldset';
import PageText from '../../../components/ui/PageText/PageText';

import { StyledPassengerStep } from './PassengerStep.styles';
import AppButton from '../../../components/ui/AppButton/AppButton';
import { addNewPassenger } from '../../../store/order/order';

interface PassengerStepProps {}

const PassengerStep: FC<PassengerStepProps> = () => {
  const { passengers } = useAppSelector(({ order }) => order.order);
  const dispatch = useAppDispatch();
  
  return (
    <StyledPassengerStep className='passenger-step'>
      <PageText className="transfer-creation__bottom-paragraph">
        Отлично! Мы почти у цели:) Для оформления трансфера нам потребуются некоторые данные о тебе. Пожалуйста, заполни
        форму на каждого пассажира.
      </PageText>

      {passengers.map((passenger) => (
        <PassengerFieldset key={passenger.id} {...passenger} />
      ))}

      <PageText className='passenger-step__hint'>При возникновении вопросов на этапе бронирования, пожалуйста, обратитесь к ассистенту @...</PageText>

      <AppButton  className='passenger-step__add-btn' isFilled={false} onClick={() => dispatch(addNewPassenger())}>Добавить пассажира</AppButton>
    </StyledPassengerStep>
  );
};

export default PassengerStep;
