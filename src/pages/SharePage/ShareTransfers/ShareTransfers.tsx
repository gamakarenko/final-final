import Underline from 'components/ui/Underline/Underline';
import Way from 'components/Way/Way';
import { useAppSelector } from 'store/store';
import './style.css';
import TransfersItem from 'components/TransfersItem/TransfersItem';
import VoidTransferItem from 'components/VoidTransferItem/VoidTransferItem';

export default function ShareTransfers() {
  const { order } = useAppSelector(({ newOrder }) => newOrder);
  return (
    <div className="share-transfers">
      <Underline />
      <Way
        date={order.transferDate}
        startLocation={order.startLocation}
        endLocation={order.endLocation}
      />
      <Underline />
      <TransfersItem />
      <TransfersItem />
      <Underline />

      <VoidTransferItem />

    </div>
  );
}
