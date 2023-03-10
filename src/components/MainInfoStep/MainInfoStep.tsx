import { FC, PropsWithChildren } from 'react';

import sedanIcon from 'assets/images/sedan.png';
import vitoIcon from 'assets/images/vito.png';

import AppCheckbox from 'components/ui/AppCheckbox/AppCheckbox';
import PageParagraph from 'components/ui/PageParagraph/PageParagraph';
import AppInput from 'components/ui/AppInput/AppInput';
import CarRadioBtn from 'components/CarRadioBtn/CarRadioBtn';
import YaMap from 'components/YaMap/YaMap';
import InfoCell from 'components/InfoCell/InfoCell';

import { IOrder } from 'types/order';
import { NUMBERS_OF_SEATS } from 'utils/constants';
import { compareAddress, filterNumbers, setLength } from './MainInfoStep.utils';
import { joinClasses } from 'utils/joinClasses';

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

  const calculateTransferCost = () => {
    if (order.carType === 'sedan' && compareAddress(order, 'даламан', 'каш')) {
      return 105;
    }
    if (order.carType === 'vito' && compareAddress(order, 'даламан', 'каш')) {
      return 135;
    }

    if (order.carType === 'sedan' && compareAddress(order, 'анталья', 'каш')) {
      return 115;
    }
    if (order.carType === 'vito' && compareAddress(order, 'анталья', 'каш')) {
      return 145;
    }

    return null;
  };

  const transferCost = calculateTransferCost();

  return (
    <StyledMainInfoStep
      className={joinClasses('app-main-info-stepicon-btn', className)}
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

          <AppInput
            label="Время поездки"
            type="time"
            required
            value={order.transferTime}
            onChange={(e) => handleChange({ transferTime: e.target.value })}
          />
        </div>

        <div className="main-info-fieldset__rows-box">
          Автомобиль
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
          type="text"
          required
          min={1}
          value={order.adultsAmount}
          onChange={(e) =>
            handleChange({
              adultsAmount: setLength(filterNumbers(e.target.value), 2),
            })
          }
        />

        <div className="main-info-fieldset__two-columns-box">
          <AppInput
            type="text"
            required
            min={0}
            value={order.childrenUnder5}
            onChange={(e) =>
              handleChange({
                childrenUnder5: setLength(filterNumbers(e.target.value), 2),
              })
            }
          >
            Количество детей
            <br />
            до 5 лет
          </AppInput>
          <AppInput
            type="text"
            required
            min={0}
            value={order.childrenAbove5}
            onChange={(e) => {
              handleChange({
                childrenAbove5: setLength(filterNumbers(e.target.value), 2),
              });
            }}
          >
            Количество детей
            <br />
            6-12 лет
          </AppInput>
        </div>

        <YaMap
          location={order.startLocation}
          setLocation={setStartLocation}
          heading="Откуда тебя забрать?"
          caption="адрес отправления"
          required
        />

        <YaMap
          location={order.endLocation}
          setLocation={setEndLocation}
          heading="Куда тебя привезти?"
          caption="адрес прибытия"
          required
        />

        <AppCheckbox
          checked={order.isPickUpFromAirport}
          onChange={(e) =>
            handleChange({ isPickUpFromAirport: e.target.checked })
          }
        >
          Вас забрать из аэропорта?
        </AppCheckbox>

        {transferCost ? (
          <InfoCell
            heading=""
            data={`Расчетная стоимость поездки: $${transferCost}`}
            caption="* конечная стоимость может отличаться"
          />
        ) : null}
      </fieldset>
    </StyledMainInfoStep>
  );
};

export default MainInfoStep;
