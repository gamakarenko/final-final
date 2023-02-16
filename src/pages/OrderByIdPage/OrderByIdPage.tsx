import { useParams } from 'react-router-dom';

import { useAppSelector } from 'store/store';
import { IUsersOrder } from 'store/usersOrders/usersOrders';
import { IOrder } from 'types/order';

import OrderSummary from 'pages/TransferCreation/OrderSummary/OrderSummary';

import { StyledOrderByIdPage } from './OrderByIdPage.styled';

const OrderByIdPage = () => {
  const { id } = useParams();

  const { orders } = useAppSelector(({ usersOrders }) => usersOrders);

  const findOrderById = (orders: IUsersOrder[], id: number | string) =>
    orders.find((order) => order.id === Number(id)) || null;

  const convertUglyOrderToNormalOrder = (
    uglyOrder: IUsersOrder | null,
  ): IOrder | null => {
    if (uglyOrder) {
      return {
        adults: uglyOrder.adultsAmount,
        airport: uglyOrder.airport,
        carType: uglyOrder.autoType,
        childrenAbove5: uglyOrder.childrenAbove5,
        childrenUnder5: uglyOrder.childrenUnder5,
        direction: uglyOrder.direction,
        location: uglyOrder.location,
        transferDate: uglyOrder.tripDate.slice(0, 10),
        transferTime: uglyOrder.tripDate!.slice(-5),
        passengers: uglyOrder.users.map((user) => ({
          id: user.id,
          fullName: user.name,
          passportId: user.passport,
          departureDate: user.arrivalDate.slice(0, 10),
          departureTime: user.arrivalDate.slice(-5),
          phoneNumber: user.phoneNumber,
          telegramId: user.telegramLogin,
          transferComment: user.tripComment,
        })),
      };
    }

    return null;
  };

  const currentOrder = findOrderById(orders, id!);
  const convertedOrder = convertUglyOrderToNormalOrder(currentOrder);

  return (
    <StyledOrderByIdPage className='order-by-id-page'>
      Поездка: {currentOrder?.id}
      {convertedOrder ? <OrderSummary heading='Данные поездки' {...convertedOrder} /> : null}
    </StyledOrderByIdPage>
  );
};

export default OrderByIdPage;
