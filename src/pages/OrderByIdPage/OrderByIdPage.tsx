import { useNavigate, useParams } from 'react-router-dom';

import { useAppSelector } from 'store/store';

import AppButton from 'components/ui/AppButton/AppButton';
import OrderSummary from 'components/OrderSummary/OrderSummary';

import { findOrderById } from 'utils/findOrderById';

import { StyledOrderByIdPage } from './OrderByIdPage.styled';

const OrderByIdPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { orders } = useAppSelector(({ orders }) => orders);

  const currentOrder = findOrderById(orders, id!);

  return (
    <StyledOrderByIdPage className="order-by-id-page">
      {currentOrder ? (
        <OrderSummary
          heading={`Данные поездки #${currentOrder.id}`}
          order={currentOrder}
        />
      ) : null}

      <AppButton
        className="order-by-id-page__btn"
        onClick={() =>
          navigate('change', { state: { stayInSectionWhenClickBack: true } })
        }
      >
        Изменить данные
      </AppButton>
      <AppButton className="order-by-id-page__btn" isFilled={false}>
        Отменить поездку
      </AppButton>
    </StyledOrderByIdPage>
  );
};

export default OrderByIdPage;
