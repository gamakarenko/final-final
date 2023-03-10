import arrowIcon from "assets/images/arrow.svg"
import { getMonthNameInGenitiveCase } from "utils/getMonthNameInGenitiveCase";
import "./style.css"
type WayProps = {
  date: string;
  startLocation: string;
  endLocation: string;
};

export default function Way({ date, startLocation, endLocation }: WayProps) {
  

  return (
    <div className="way">
      <h4 className="way__title">{getMonthNameInGenitiveCase(new Date(date))}</h4>
      <div className="way-content">
        <strong className="way-content__location">{startLocation}</strong>
        <img src={arrowIcon} alt="Стрелка" />
        <strong className="way-content__location">{endLocation}</strong>
      </div>
    </div>
  );
}
