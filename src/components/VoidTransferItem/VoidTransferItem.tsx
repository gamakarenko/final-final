import GreyWrapperHoc from 'hoc/GreyWrapperHoc/GreyWrapperHoc';
import "./style.css"

export default function VoidTransferItem() {
  return (
    <GreyWrapperHoc>
      <div className="void-transfer-item">
        <h3 className="void-transfer-item__title">
          Шеринг поездки от пользователей
        </h3>
        <h5 className="void-transfer-item__subtitle">
          Пока нет ни одной поездки в этом разделе
        </h5>
      </div>
    </GreyWrapperHoc>
  );
}
