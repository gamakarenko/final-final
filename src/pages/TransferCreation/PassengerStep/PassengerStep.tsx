import { FC } from 'react';

import { useAppDispatch, useAppSelector } from '../../../store/store';
import { addNewPassenger } from '../../../store/order/order';

import PassengerFieldset from '../../../components/PassengerFieldset/PassengerFieldset';
import PageText from '../../../components/ui/PageText/PageText';
import PageParagraph from '../../../components/ui/PageParagraph/PageParagraph';
import AppButton from '../../../components/ui/AppButton/AppButton';

import { StyledPassengerStep } from './PassengerStep.styles';

interface PassengerStepProps {}

const PassengerStep: FC<PassengerStepProps> = () => {
  const { passengers } = useAppSelector(({ order }) => order.order);
  const dispatch = useAppDispatch();
  
  return (
    <StyledPassengerStep className='passenger-step'>
      <PageParagraph underlined={true}>
        Отлично! Мы почти у цели:) Для оформления трансфера нам потребуются некоторые данные о тебе. Пожалуйста, заполни
        форму на каждого пассажира.
      </PageParagraph>

      {passengers.map((passenger) => (
        <PassengerFieldset key={passenger.id} {...passenger} />
      ))}

      <PageText className='passenger-step__hint'>При возникновении вопросов на этапе бронирования, пожалуйста, обратитесь к ассистенту @...</PageText>

      <AppButton  className='passenger-step__add-btn' isFilled={false} onClick={() => dispatch(addNewPassenger())}>Добавить пассажира</AppButton>
    </StyledPassengerStep>
  );
};

export default PassengerStep;
