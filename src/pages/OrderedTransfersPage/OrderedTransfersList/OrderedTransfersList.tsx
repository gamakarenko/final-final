import { useNavigate } from 'react-router-dom';

import { useAppSelector } from 'store/store';

import AppButton from 'components/ui/AppButton/AppButton';
import Spinner from 'components/ui/Spinner/Spinner';
import ShortOrderCard from 'components/ShortOrderCard/ShortOrderCard';
import PageParagraph from 'components/ui/PageParagraph/PageParagraph';

import { StyledOrderedTransfersList } from './OrderedTransfersList.styles';

const OrderedTransfersList = () => {
  const { isOrdersFetching, orders } = useAppSelector(
    ({ usersOrders }) => usersOrders,
  );

  const navigate = useNavigate();

  return (
    <StyledOrderedTransfersList className="ordered-transfers-list">
      <PageParagraph underlined>
        Чтобы изменить личную информацию, дату, время поездки и&nbsp;другие
        данные&nbsp;&mdash; нажмите на интересующую поездку
      </PageParagraph>
      {isOrdersFetching ? (
        <Spinner />
      ) : (
        orders.map((order) => (
          <AppButton
            key={order.id}
            disabled={order.isEnded}
            size="big"
            textAlign="left"
            className="ordered-transfers-list__order-btn"
            onClick={() => navigate(String(order.id))}
          >
            <ShortOrderCard {...order} />
          </AppButton>
        ))
      )}
    </StyledOrderedTransfersList>
  );
};

export default OrderedTransfersList;
