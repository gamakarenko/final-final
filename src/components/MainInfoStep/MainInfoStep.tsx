import { FC, PropsWithChildren} from 'react';

import AppCheckbox from 'components/ui/AppCheckbox/AppCheckbox';
import PageParagraph from 'components/ui/PageParagraph/PageParagraph';
import AppInput from 'components/ui/AppInput/AppInput';
import CarRadioBtn from 'components/CarRadioBtn/CarRadioBtn';
import YaMap from 'components/YaMap/YaMap';

import { IOrder } from 'types/order';
import { NUMBERS_OF_SEATS } from 'utils/constants';
import { sedanIcon, vitoIcon } from '../../images/index';

import { StyledMainInfoStep } from './MainInfoStep.styles';

interface MainInfoStepProps extends PropsWithChildren {
  heading?: string;
  order: IOrder;
  handleChange: (data: Partial<IOrder>) => void;
  className?: string;
}

const MainInfoStep: FC<MainInfoStepProps> = ({
  heading,
  children,
  handleChange,
  order,
  className,
}) => {
  const setStartLocation = (location: string) =>
    handleChange({ startLocation: location });
  const setEndLocation = (location: string) =>
    handleChange({ endLocation: location });

  return (
    <StyledMainInfoStep
      className={`main-info-step${className ? ' ' + className : ''}`}
    >
      {children ? (
        children
      ) : heading ? (
        <PageParagraph underlined>{heading}</PageParagraph>
      ) : null}

      <fieldset className="main-info-fieldset">
        <div className="main-info-fieldset__two-columns-box">
          <AppInput
            label="Дата поездки"
            type="date"
            required
            min={new Date(
              Date.now() + 28 * (60 * 60 * 1000),
            ).toLocaleDateString('en-ca')}
            value={order.transferDate}
            onChange={(e) => handleChange({ transferDate: e.target.value })}
          />

          {/* TODO не время, а начало поездки? */}
          <AppInput
            label="Время поездки"
            type="time"
            required
            value={order.transferTime}
            onChange={(e) => handleChange({ transferTime: e.target.value })}
          />
        </div>

        <YaMap
          location={order.startLocation}
          setLocation={setStartLocation}
          heading="Откуда тебя забрать?"
          required
          minLength={10}
          defaultValue=""
        />

        <YaMap
          location={order.endLocation}
          setLocation={setEndLocation}
          heading="Куда тебя привезти?"
          required
          minLength={10}
          defaultValue=""
        />

        <AppCheckbox
          checked={order.isPickUpFromAirport}
          onChange={(e) =>
            handleChange({ isPickUpFromAirport: e.target.checked })
          }
        >
          Вас забрать из аэропорта?
        </AppCheckbox>

        <div className="main-info-fieldset__rows-box">
          <CarRadioBtn
            car="Vito"
            name="car-type"
            value="vito"
            checked={order.carType === 'vito'}
            onChange={() => handleChange({ carType: 'vito' })}
            maxPeople={NUMBERS_OF_SEATS['vito']}
            img={vitoIcon}
          />
          <CarRadioBtn
            car="Седан"
            name="car-type"
            value="sedan"
            checked={order.carType === 'sedan'}
            onChange={() => handleChange({ carType: 'sedan' })}
            maxPeople={NUMBERS_OF_SEATS['sedan']}
            img={sedanIcon}
          />
        </div>

        <AppInput
          label="Количество взрослых"
          type="number"
          required
          min={1}
          value={order.adultsAmount}
          onChange={(e) =>
            handleChange({ adultsAmount: Number(e.target.value) })
          }
        />

        <div className="main-info-fieldset__two-columns-box">
          <AppInput
            type="number"
            required
            min={0}
            value={order.childrenUnder5}
            onChange={(e) =>
              handleChange({
                childrenUnder5: Number(e.target.value),
              })
            }
          >
            Количество детей
            <br />
            до 5 лет
          </AppInput>
          <AppInput
            type="number"
            required
            min={0}
            value={order.childrenAbove5}
            onChange={(e) =>
              handleChange({
                childrenAbove5: Number(e.target.value),
              })
            }
          >
            Количество детей
            <br />
            6-12 лет
          </AppInput>
        </div>
      </fieldset>
    </StyledMainInfoStep>
  );
};

export default MainInfoStep;
