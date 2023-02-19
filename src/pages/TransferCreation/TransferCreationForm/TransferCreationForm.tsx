import { FormEventHandler } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'store/store';

import MainInfoStep from 'components/MainInfoStep/MainInfoStep';
import OrderSummary from 'components/OrderSummary/OrderSummary';
import PassengerStep from 'components/PassengerStep/PassengerStep';
import AppButton from 'components/ui/AppButton/AppButton';
import PageParagraph from 'components/ui/PageParagraph/PageParagraph';
import Spinner from 'components/ui/Spinner/Spinner';

import { useMultiStepForm } from 'hooks/useMultiStepForm';
import {
  addNewPassenger,
  clearOrderInfo,
  deletePassengerById,
  editOrderInfo,
  editPassengerById,
} from 'store/newOrder/newOrder';
import { createOrderThunk } from 'store/Orders/OrdersThunk';

import { StyledTransferCreationForm } from './TransferCreationForm.styles';

const TransferCreationForm = () => {
  const { order, isSendingOrder } = useAppSelector(({ newOrder, orders }) => ({
    order: newOrder.order,
    isSendingOrder: orders.isOrdersFetching,
  }));
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

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
      passengers={order.users}
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

    <OrderSummary heading="Подтверждение введённой информации" order={order} />,
  ]);
  //TODO Подумать стоит ли скролить вверх формы при переходе вперед и назад. Может сделать, чтобы кнопки вперед и назад всегда были на виду?
  const handleNextClick: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (!isLastStep) {
      window.scrollTo(0, 0);
      return goNextStep();
    }

    try {
      dispatch(clearOrderInfo());
      await dispatch(createOrderThunk(order)).unwrap();

      navigate('/order/complete');
    } catch {}
  };

  const handleBackClick = () => {
    window.scrollTo(0, 0);
    goPrevStep();
  };

  return (
    <StyledTransferCreationForm className="transfer-creation-form">
      <form onSubmit={handleNextClick} noValidate>
        {currentStepFieldset}

        <div className="transfer-creation-form__steps-btns-box">
          {isSendingOrder ? (
            <Spinner className="transfer-creation-form__spinner" />
          ) : (
            <>
              {!isFirstStep && (
                <AppButton
                  className="transfer-creation-form__btn-left"
                  disabled={isSendingOrder}
                  isFilled={false}
                  onClick={handleBackClick}
                >
                  Назад
                </AppButton>
              )}

              <AppButton
                disabled={isSendingOrder}
                className="transfer-creation-form__btn-right"
                type="submit"
              >
                {isLastStep ? 'Отправить' : 'Далее'}
              </AppButton>
            </>
          )}
        </div>
      </form>
    </StyledTransferCreationForm>
  );
};

export default TransferCreationForm;
