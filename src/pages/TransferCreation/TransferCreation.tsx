import { FC, FormEventHandler } from 'react';

import AppButton from '../../components/ui/AppButton/AppButton';
import MainInfoStep from './MainInfoStep/MainInfoStep';
import PassengerStep from './PassengerStep/PassengerStep';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import Spinner from 'components/ui/Spinner/Spinner';

import { useMultiStepForm } from '../../hooks/useMultiStepForm';
import { createOrderThunk } from '../../store/order/orderThunks';
import { useAppDispatch, useAppSelector } from '../../store/store';

import { StyledTransferCreation } from './TransferCreation.styled';
import PageWrapperWithHeading from 'components/PageWrapperWithHeading/PageWrapperWithHeading';

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
    <MainInfoStep />,
    <PassengerStep />,
    <OrderSummary heading="Подтверждение введённой информации" {...order} />,
  ]);

  const handleNextClick: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (!isLastStep) {
      return goNextStep();
    }

    dispatch(createOrderThunk(order));
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
                    onClick={() => goPrevStep()}
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
