import { FC, FormEventHandler } from 'react';

import AppButton from '../../components/ui/AppButton/AppButton';
import MainInfoStep from '../../components/MainInfoStep/MainInfoStep';
import PassengerStep from '../../components/PassengerStep/PassengerStep';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import Spinner from 'components/ui/Spinner/Spinner';
import PageParagraph from 'components/ui/PageParagraph/PageParagraph';
import PageWrapperWithHeading from 'components/PageWrapperWithHeading/PageWrapperWithHeading';

import { useMultiStepForm } from '../../hooks/useMultiStepForm';
import { createOrderThunk } from '../../store/order/orderThunks';
import {
  addNewPassenger,
  deletePassengerById,
  editOrderInfo,
  editPassengerById,
} from 'store/order/order';
import { useAppDispatch, useAppSelector } from '../../store/store';

import { StyledTransferCreation } from './TransferCreation.styled';

const TransferCreation: FC = () => {
  const { order, isSendingOrder } = useAppSelector(({ order }) => order);
  const dispatch = useAppDispatch();

  const {
    currentStepFieldset,
    goNextStep,
    goPrevStep,
    isFirstStep,
    isLastStep,
  } = useMultiStepForm([
    <MainInfoStep
      order={order}
      handleChange={(data) => dispatch(editOrderInfo(data))}
    >
      <PageParagraph>
        Здесь ты&nbsp;можешь заказ трансфер :)
        <br />
        Водитель встретит тебя в&nbsp;указанном месте и&nbsp;отвезёт туда, куда
        необходимо.
      </PageParagraph>
      <PageParagraph underlined>
        Водитель встретит тебя в&nbsp;указанном месте и&nbsp;отвезёт туда, куда
        необходимо. Забронировать, а&nbsp;также отменить трансфер можно
        не&nbsp;позднее, чем за&nbsp;28&nbsp;часов до&nbsp;поездки. Только так
        мы&nbsp;можем быть уверены, что машина и&nbsp;водитель будут свободны
        для вас :)
      </PageParagraph>
    </MainInfoStep>,

    <PassengerStep
      passengers={order.passengers}
      handleAddPassenger={() => dispatch(addNewPassenger())}
      handleEditPassengerById={(id, data) =>
        dispatch(editPassengerById({ id, ...data }))
      }
      handleDeletePassengerById={(id) => dispatch(deletePassengerById({ id }))}
    >
      <PageParagraph underlined>
        Отлично! Мы&nbsp;почти у&nbsp;цели:) Для оформления трансфера нам
        потребуются некоторые данные о&nbsp;тебе. Пожалуйста, заполни форму
        на&nbsp;каждого пассажира.
      </PageParagraph>
    </PassengerStep>,

    <OrderSummary heading="Подтверждение введённой информации" {...order} />,
  ]);
  //TODO Подумать стоит ли скролить вверх формы при переходе вперед и назад. Может сделать, чтобы кнопки вперед и назад всегда были на виду?
  const handleNextClick: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    window.scrollTo(0, 0);
    if (!isLastStep) {
      return goNextStep();
    }

    dispatch(createOrderThunk(order));
  };

  const handleBackClick = () => {
    window.scrollTo(0, 0);
    goPrevStep();
  };

  //TODO убрать no-validate
  return (
    <PageWrapperWithHeading heading="Заказать трансфер">
      <StyledTransferCreation className="transfer-creation">
        <form onSubmit={handleNextClick} noValidate>
          {currentStepFieldset}

          <div className="transfer-creation__steps-btns-box">
            {isSendingOrder ? (
              <Spinner className="transfer-creation__spinner" />
            ) : (
              <>
                {!isFirstStep && (
                  <AppButton
                    className="transfer-creation__btn-left"
                    disabled={isSendingOrder}
                    isFilled={false}
                    onClick={handleBackClick}
                  >
                    Назад
                  </AppButton>
                )}

                <AppButton
                  disabled={isSendingOrder}
                  className="transfer-creation__btn-right"
                  type="submit"
                >
                  {isLastStep ? 'Отправить' : 'Далее'}
                </AppButton>
              </>
            )}
          </div>
        </form>
      </StyledTransferCreation>
    </PageWrapperWithHeading>
  );
};

export default TransferCreation;
