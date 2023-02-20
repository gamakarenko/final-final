import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'store/store';

import MainInfoStep from 'components/MainInfoStep/MainInfoStep';
import PageParagraph from 'components/ui/PageParagraph/PageParagraph';
import AppButton from 'components/ui/AppButton/AppButton';
import Spinner from 'components/ui/Spinner/Spinner';

import { clearOrderInfo, editOrderInfo } from 'store/newOrder/newOrder';
import { putOrderThunk } from 'store/Orders/OrdersThunk';
import { findOrderById } from 'utils/findOrderById';

import { StyledChangeMainInfoPage } from './ChangeMainInfoPage.styles';

const ChangeMainInfoPage = () => {
  const { orders, newOrder, isSendingData } = useAppSelector(
    ({ orders, newOrder }) => ({
      orders: orders.orders,
      newOrder: newOrder.order,
      isSendingData: orders.isOrdersFetching,
    }),
  );

  const dispatch = useAppDispatch();

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const order = findOrderById(orders, id);

    dispatch(editOrderInfo(structuredClone(order)));
  }, []);

  const sendEditedOrder = async () => {
    try {
      await dispatch(putOrderThunk(newOrder)).unwrap();

      dispatch(clearOrderInfo());
      navigate('/transfers/ordered/changes-saved', { replace: true });
    } catch {}
  };

  return (
    <StyledChangeMainInfoPage className="change-main-info-page">
      <MainInfoStep
        className="change-main-info-page__form"
        order={newOrder}
        handleChange={(data) => dispatch(editOrderInfo(data))}
      >
        <PageParagraph>
          Изменить данные возможно не&nbsp;менее чем за&nbsp;28&nbsp;часов
        </PageParagraph>
        <PageParagraph underlined>
          Внимание! Изменение количества пассажиров может повлиять
          на&nbsp;стоимость поездки.
        </PageParagraph>
      </MainInfoStep>

      {isSendingData ? (
        <Spinner />
      ) : (
        <AppButton onClick={sendEditedOrder}>Сохранить изменения</AppButton>
      )}
    </StyledChangeMainInfoPage>
  );
};

export default ChangeMainInfoPage;
