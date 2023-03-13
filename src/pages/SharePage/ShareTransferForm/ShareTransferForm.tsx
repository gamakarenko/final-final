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
  clearOrderInfo,
  editOrderInfo,
  editPassengerByUiKey,
} from 'store/newOrder/newOrder';
import { createOrderThunk } from 'store/Orders/OrdersThunk';

import { StyledTransferChangeForm } from 'components/StyledTransferChangeForm';

export default function ShareTransferForm() {
  const { order, isSendingOrder, errorText } = useAppSelector(
    ({ newOrder, orders }) => ({
      order: newOrder.order,
      isSendingOrder: orders.isOrdersFetching,
      errorText: newOrder.errorText,
    }),
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    currentStepFieldset,
    goNextStep,
    goPrevStep,
    isFirstStep,
    isLastStep,
  } = useMultiStepForm([
    <PassengerStep
      passengers={order.users}
      handleEditPassengerByUiKey={(uiKey, data) =>
        dispatch(editPassengerByUiKey({ uiKey, ...data }))
      }
    >
      <PageParagraph underlined>
        Отлично! Мы&nbsp;почти у&nbsp;цели:) Для оформления трансфера нам
        потребуются некоторые данные о&nbsp;тебе. Пожалуйста, заполни форму
        на&nbsp;каждого пассажира.
      </PageParagraph>
    </PassengerStep>,

    <OrderSummary heading="Подтверждение введённой информации" order={order} />,
  ]);

  
  const handleNextClick: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (!isLastStep) {
      window.scrollTo(0, 0);
      return goNextStep();
    }

    try {
      await dispatch(createOrderThunk(order)).unwrap();

      dispatch(clearOrderInfo());
      navigate('/share/complited');
    } catch {}
  };

  const handleBackClick = () => {
    window.scrollTo(0, 0);
    goPrevStep();
  };

  return (
    <StyledTransferChangeForm className="transfer-creation-form">
      <form onSubmit={handleNextClick}>
        {currentStepFieldset}

        <p className="transfer-creation-form__error-text">{errorText}</p>

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
                disabled={isSendingOrder || Boolean(errorText)}
                className="transfer-creation-form__btn-right"
                type="submit"
              >
                {isLastStep ? 'Отправить' : 'Далее'}
              </AppButton>
            </>
          )}
        </div>
      </form>
    </StyledTransferChangeForm>
  );
}
