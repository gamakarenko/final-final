import { FC, PropsWithChildren } from 'react';

import PassengerFieldset from '../PassengerFieldset/PassengerFieldset';
import PageText from '../ui/PageText/PageText';
import PageParagraph from '../ui/PageParagraph/PageParagraph';

import { IUser } from 'types/order';

import { StyledPassengerStep } from './PassengerStep.styles';
import { joinClasses } from 'utils/joinClasses';

interface PassengerStepProps extends PropsWithChildren {
  heading?: string;
  passengers: IUser[];
  handleEditPassengerByUiKey: (uiKey: number, data: Partial<IUser>) => void;
  className?: string;
}

const PassengerStep: FC<PassengerStepProps> = ({
  children,
  heading,
  passengers,
  handleEditPassengerByUiKey,
  className,
}) => {
  return (
    <StyledPassengerStep className={joinClasses('passenger-step', className)}>
      {children ? (
        children
      ) : heading ? (
        <PageParagraph underlined>{heading}</PageParagraph>
      ) : null}

      {passengers.map((passenger, index) => (
        <PassengerFieldset
          key={passenger.uiKey}
          {...passenger}
          passengerNumber={index + 1}
          handleEditPassengerByUiKey={handleEditPassengerByUiKey}
        />
      ))}

      <PageText className="passenger-step__hint">
        При возникновении вопросов на&nbsp;этапе бронирования, пожалуйста,
        обратитесь к&nbsp;ассистенту @...
      </PageText>
    </StyledPassengerStep>
  );
};

export default PassengerStep;
