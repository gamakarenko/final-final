import { FC, PropsWithChildren } from 'react';

import PassengerFieldset from '../PassengerFieldset/PassengerFieldset';
import PageText from '../ui/PageText/PageText';
import PageParagraph from '../ui/PageParagraph/PageParagraph';
import AppButton from '../ui/AppButton/AppButton';

import { IUser } from 'types/order';

import { StyledPassengerStep } from './PassengerStep.styles';

interface PassengerStepProps extends PropsWithChildren {
  heading?: string;
  passengers: IUser[];
  handleAddPassenger: () => void;
  handleEditPassengerById: (id: number, data: Partial<IUser>) => void;
  handleDeletePassengerById: (id: number) => void;
  className?: string;
}

const PassengerStep: FC<PassengerStepProps> = ({
  children,
  heading,
  passengers,
  handleAddPassenger,
  handleEditPassengerById,
  handleDeletePassengerById,
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

      {passengers.map((passenger) => (
        <PassengerFieldset
          key={passenger.id}
          {...passenger}
          handleEditPassengerById={handleEditPassengerById}
          handleDeletePassengerById={handleDeletePassengerById}
        />
      ))}

      <PageText className="passenger-step__hint">
        При возникновении вопросов на&nbsp;этапе бронирования, пожалуйста,
        обратитесь к&nbsp;ассистенту @...
      </PageText>

      <AppButton
        className="passenger-step__add-btn"
        isFilled={false}
        onClick={handleAddPassenger}
      >
        Добавить пассажира
      </AppButton>
    </StyledPassengerStep>
  );
};

export default PassengerStep;
