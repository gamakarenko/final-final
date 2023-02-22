import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'store/store';

import AppButton from 'components/ui/AppButton/AppButton';
import OrderSummary from 'components/OrderSummary/OrderSummary';
import PageParagraph from 'components/ui/PageParagraph/PageParagraph';

import { deleteOrderThunk } from 'store/Orders/OrdersThunk';
import { findOrderById } from 'utils/findOrderById';
import { IOrder } from 'types/order';

import { StyledTwoColumnBox } from 'components/StyledTwoColumnBox';
import { StyledOrderByIdPage } from './OrderByIdPage.styled';

const OrderByIdPage = () => {
  const [isDeletingConfirm, setIsDeletingConfirm] = useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const { orders } = useAppSelector(({ orders }) => orders);

  const currentOrder = findOrderById(orders, id!);

  const deleteOrder = async (order: IOrder | null) => {
    if (order) {
      try {
        await dispatch(deleteOrderThunk(order)).unwrap();

        navigate('/transfers/ordered');
      } catch {}
    }
  };

  return (
    <StyledOrderByIdPage className="order-by-id-page">
      {currentOrder ? (
        <OrderSummary
          heading={`Данные поездки #${currentOrder.id}`}
          order={currentOrder}
        />
      ) : null}

      {isDeletingConfirm ? (
        <>
          <PageParagraph className='order-by-id-page__deleting-text'>
            Вы действительно хотите отменить поездку?
          </PageParagraph>
          <StyledTwoColumnBox>
            <AppButton
              isFilled={false}
              onClick={() => deleteOrder(currentOrder)}
            >
              Да
            </AppButton>
            <AppButton onClick={() => setIsDeletingConfirm(false)}>
              Нет
            </AppButton>
          </StyledTwoColumnBox>
        </>
      ) : (
        <>
          <AppButton
            className="order-by-id-page__btn"
            onClick={() =>
              navigate('change', {
                state: { stayInSectionWhenClickBack: true },
              })
            }
          >
            Изменить данные
          </AppButton>
          <AppButton
            className="order-by-id-page__btn"
            isFilled={false}
            onClick={() => setIsDeletingConfirm(true)}
          >
            Отменить поездку
          </AppButton>
        </>
      )}
    </StyledOrderByIdPage>
  );
};

export default OrderByIdPage;
