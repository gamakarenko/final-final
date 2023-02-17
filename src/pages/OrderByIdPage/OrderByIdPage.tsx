import { useNavigate, useParams } from 'react-router-dom';

import { useAppSelector } from 'store/store';
import { IUsersOrder } from 'store/Orders/Orders';

import AppButton from 'components/ui/AppButton/AppButton';
import OrderSummary from 'components/OrderSummary/OrderSummary';

import { convertUglyOrderToNormalOrder } from 'utils/convertUglyOrderToNormalOrder';

import { StyledOrderByIdPage } from './OrderByIdPage.styled';

const OrderByIdPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { orders } = useAppSelector(({ usersOrders }) => usersOrders);

  const findOrderById = (orders: IUsersOrder[], id: number | string) =>
    orders.find((order) => order.id === Number(id)) || null;

  const currentOrder = findOrderById(orders, id!);
  const convertedOrder = convertUglyOrderToNormalOrder(currentOrder);

  return (
    <StyledOrderByIdPage className="order-by-id-page">
      {convertedOrder ? (
        <OrderSummary heading={`Данные поездки #${convertedOrder.id}`} {...convertedOrder} />
      ) : null}

      <AppButton className="order-by-id-page__btn" onClick={() => navigate('change')}>Изменить данные</AppButton>
      <AppButton className="order-by-id-page__btn" isFilled={false}>
        Отменить поездку
      </AppButton>
    </StyledOrderByIdPage>
  );
};

export default OrderByIdPage;
