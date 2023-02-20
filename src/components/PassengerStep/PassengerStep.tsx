import { FC, PropsWithChildren } from 'react';

import PassengerFieldset from '../PassengerFieldset/PassengerFieldset';
import PageText from '../ui/PageText/PageText';
import PageParagraph from '../ui/PageParagraph/PageParagraph';

import { IUser } from 'types/order';

import { StyledPassengerStep } from './PassengerStep.styles';

interface PassengerStepProps extends PropsWithChildren {
  heading?: string;
  passengers: IUser[];
  handleEditPassengerById: (id: number, data: Partial<IUser>) => void;
  className?: string;
}

const PassengerStep: FC<PassengerStepProps> = ({
  children,
  heading,
  passengers,
  handleEditPassengerById,
  className,
}) => {
  return (
    <StyledPassengerStep
      className={`passenger-step${className ? ' ' + className : ''}`}
    >
      {children ? (
        children
      ) : heading ? (
        <PageParagraph underlined>{heading}</PageParagraph>
      ) : null}

      {passengers.map((passenger, index) => (
        <PassengerFieldset
          key={passenger.id}
          {...passenger}
          passengerNumber={index + 1}
          handleEditPassengerById={handleEditPassengerById}
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
