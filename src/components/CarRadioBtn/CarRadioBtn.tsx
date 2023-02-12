import { FC, InputHTMLAttributes } from 'react';
import { ICarType } from '../../types/order';

import { StyledCarRadioBtn } from './CarRadioBtn.styles';

interface CarRadioBtnProps extends InputHTMLAttributes<HTMLInputElement> {
  img: string;
  car: string;
  maxPeople: number;
  value: ICarType;
}

const CarRadioBtn: FC<CarRadioBtnProps> = ({ img, car, maxPeople, ...rest }) => {
  return (
    <StyledCarRadioBtn className="car-radio-btn">
      <input type="radio" className="car-radio-btn__input" {...rest} />
      <label className="car-radio-btn__label">
        <img className="car-radio-btn__img" src={img} alt="" />
        <p className="car-radio-btn__heading">{car}</p>
        <p className="car-radio-btn__max-people">До {maxPeople} человек</p>
      </label>
    </StyledCarRadioBtn>
  );
};

export default CarRadioBtn;
