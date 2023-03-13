import Underline from 'components/ui/Underline/Underline';
import Way from 'components/Way/Way';
import { useAppSelector } from 'store/store';
import './style.css';
import TransfersItem from 'components/TransfersItem/TransfersItem';
import VoidTransferItem from 'components/VoidTransferItem/VoidTransferItem';
import useNavigateByCondition from 'hooks/useNavigateByCondition';

export default function ShareTransfers() {
  const { order } = useAppSelector(({ newOrder }) => newOrder);
  const { navigate } = useNavigateByCondition('/share/form', () => true);

  return (
    <div className="share-transfers">
      <button onClick={() => navigate()}>awdaw</button>
      <Underline />
      <Way
        date={order.transferDate}
        startLocation={order.startLocation}
        endLocation={order.endLocation}
      />
      <Underline />
      <div className="share-transfers__list">
        <TransfersItem />
        <TransfersItem />
      </div>

      <Underline />

      <VoidTransferItem />
    </div>
  );
}
