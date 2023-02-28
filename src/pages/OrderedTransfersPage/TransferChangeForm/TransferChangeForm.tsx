import { FormEventHandler, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'store/store';
import { useMultiStepForm } from 'hooks/useMultiStepForm';
import {
  clearOrderInfo,
  editOrderInfo,
  editPassengerByUiKey,
} from 'store/newOrder/newOrder';
import { putOrderThunk } from 'store/Orders/OrdersThunk';
import { findOrderById } from 'utils/findOrderById';

import MainInfoStep from 'components/MainInfoStep/MainInfoStep';
import OrderSummary from 'components/OrderSummary/OrderSummary';
import PassengerStep from 'components/PassengerStep/PassengerStep';
import PageParagraph from 'components/ui/PageParagraph/PageParagraph';
import Spinner from 'components/ui/Spinner/Spinner';
import AppButton from 'components/ui/AppButton/AppButton';

import { StyledTransferChangeForm } from 'components/StyledTransferChangeForm';

const TransferChangeForm = () => {
  const { order, orders, isSendingOrder, errorText } = useAppSelector(
    ({ newOrder, orders }) => ({
      orders: orders.orders,
      order: newOrder.order,
      isSendingOrder: orders.isOrdersFetching,
      errorText: newOrder.errorText,
    }),
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const currentOrder = findOrderById(orders, id);

  useEffect(() => {
    dispatch(editOrderInfo(structuredClone(currentOrder)));

    return () => {
      dispatch(clearOrderInfo());
    };
  }, [orders]);

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
        Изменить данные возможно не&nbsp;менее чем за&nbsp;28&nbsp;часов
      </PageParagraph>
      <PageParagraph underlined>
        Внимание! Изменение количества пассажиров может повлиять
        на&nbsp;стоимость поездки.
      </PageParagraph>
    </MainInfoStep>,

    <PassengerStep
      passengers={order.users}
      heading="Личные данные поездки"
      handleEditPassengerByUiKey={(uiKey, data) =>
        dispatch(editPassengerByUiKey({ uiKey, ...data }))
      }
    />,

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
      await dispatch(putOrderThunk(order)).unwrap();

      navigate('/transfers/ordered/changes-saved', { replace: true });
    } catch {}
  };

  const handleBackClick = () => {
    window.scrollTo(0, 0);
    goPrevStep();
  };

  if (!currentOrder) {
    return isSendingOrder ? (
      <Spinner />
    ) : (
      <PageParagraph>Трансфера #{id} не существует.</PageParagraph>
    );
  }

  return isSendingOrder ? (
    <Spinner />
  ) : (
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
                {isLastStep ? 'Сохранить' : 'Далее'}
              </AppButton>
            </>
          )}
        </div>
      </form>
    </StyledTransferChangeForm>
  );
};

export default TransferChangeForm;
