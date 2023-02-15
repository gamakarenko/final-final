import { ReactElement, useState } from 'react';

export const useMultiStepForm = (steps: ReactElement[]) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const goNextStep = () => {
    setCurrentStepIndex((i) => {
      if (i >= steps.length - 1) {
        return i;
      }

      return i + 1;
    });
  };

  const goPrevStep = () => {
    setCurrentStepIndex((i) => {
      if (i <= 0) {
        return i;
      }

      return i - 1;
    });
  };

  return {
    currentStepIndex,
    currentStepFieldset: steps[currentStepIndex],
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    goNextStep,
    goPrevStep,
  };
};
