import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import PassengerStep from 'components/PassengerStep/PassengerStep';

import {
  addNewPassenger,
  clearOrderInfo,
  deletePassengerById,
  editOrderInfo,
  editPassengerById,
} from 'store/newOrder/newOrder';
import { useAppDispatch, useAppSelector } from 'store/store';

import { StyledChangePassengersPage } from './ChangePassengersPage.styles';
import { findOrderById } from 'utils/findOrderById';
import { putOrderThunk } from 'store/Orders/OrdersThunk';
import AppButton from 'components/ui/AppButton/AppButton';
import Spinner from 'components/ui/Spinner/Spinner';

const ChangePassengersPage = () => {
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

    return () => {
      dispatch(clearOrderInfo());
    }
  }, []);

  const sendEditedOrder = async () => {
    try {
      await dispatch(putOrderThunk(newOrder)).unwrap();

      navigate('/transfers/ordered/changes-saved', { replace: true });
    } catch {}
  };

  return (
    <StyledChangePassengersPage className="change-passenger-step">
      <PassengerStep
        className="change-passenger-step__form"
        heading="Личные данные поездки"
        passengers={newOrder.users}
        handleAddPassenger={() => dispatch(addNewPassenger())}
        handleEditPassengerById={(id, data) =>
          dispatch(editPassengerById({ id, ...data }))
        }
        handleDeletePassengerById={(id) =>
          dispatch(deletePassengerById({ id }))
        }
      />

      {isSendingData ? (
        <Spinner />
      ) : (
        <AppButton onClick={sendEditedOrder}>Сохранить изменения</AppButton>
      )}
    </StyledChangePassengersPage>
  );
};

export default ChangePassengersPage;
