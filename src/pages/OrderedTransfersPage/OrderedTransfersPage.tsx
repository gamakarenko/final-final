import { useNavigate } from 'react-router-dom';

import AppButton from 'components/ui/AppButton/AppButton';
import PageHeading from 'components/ui/PageHeading/PageHeading';
import PageParagraph from 'components/ui/PageParagraph/PageParagraph';
import Spinner from 'components/ui/Spinner/Spinner';

import { useAppSelector } from 'store/store';

import ShortOrderCard from './ShortOrderCard/ShortOrderCard';
import PageWrapperWithHeading from 'components/PageWrapperWithHeading/PageWrapperWithHeading';

interface OrderedPageProps {}

const OrderedTransfersPage: React.FunctionComponent<OrderedPageProps> = () => {
  const { isOrdersFetching, orders } = useAppSelector(
    ({ usersOrders }) => usersOrders,
  );

  const navigate = useNavigate();

  return (
    <PageWrapperWithHeading heading='Заказанные поездки'>
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
            className="ordered-transfers-page__order-btn"
            onClick={() => navigate(String(order.id))}
          >
            <ShortOrderCard {...order} />
          </AppButton>
        ))
      )}

      <AppButton
        className="ordered-transfers-page__order-btn"
        isFilled={false}
        onClick={() => navigate('/transfers')}
      >
        Назад
      </AppButton>
    </PageWrapperWithHeading>
  );
};

export default OrderedTransfersPage;
