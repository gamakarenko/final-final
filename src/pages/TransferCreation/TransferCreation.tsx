import { FC, useEffect, useState } from 'react';
import AppButton from '../../components/ui/AppButton/AppButton';

import PageHeading from '../../components/ui/PageHeading/PageHeading';
import { useMultiStepForm } from '../../hooks/useMultiStepForm';
import { useAppDispatch, useAppSelector } from '../../store/store';
import MainInfoStep from './MainInfoStep/MainInfoStep';
import PassengerStep from './PassengerStep/PassengerStep';
import { StyledTransferCreation } from './TransferCreation.styled';

const TransferCreation: FC = () => {
  const { order, isSendingOrder } = useAppSelector(({ order }) => order);
  const dispatch = useAppDispatch();

  const { currentStep, goNextStep, goPrevStep, isFirstStep, isLastStep } =
    useMultiStepForm([<MainInfoStep />, <PassengerStep />]);

  return (
    <StyledTransferCreation className="transfer-creation">
      <form>
        <PageHeading>Заказать трансфер</PageHeading>
        {currentStep}
        <div className="transfer-creation__steps-btns-box">
          {!isFirstStep && (
            <AppButton
              className="transfer-creation__btn-left"
              onClick={() => goPrevStep()}
            >
              Назад
            </AppButton>
          )}
          {!isLastStep && (
            <AppButton
              className="transfer-creation__btn-right"
              onClick={() => goNextStep()}
            >
              Далее
            </AppButton>
          )}
        </div>
      </form>
    </StyledTransferCreation>
  );
};

export default TransferCreation;
