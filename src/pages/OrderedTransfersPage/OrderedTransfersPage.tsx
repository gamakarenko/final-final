import { useNavigate } from 'react-router-dom';

import AppButton from 'components/ui/AppButton/AppButton';
import PageHeading from 'components/ui/PageHeading/PageHeading';
import PageParagraph from 'components/ui/PageParagraph/PageParagraph';
import Spinner from 'components/ui/Spinner/Spinner';

import { StyledOrderedTransfersPage } from './OrderedTransfersPage.styled';
import { useAppDispatch, useAppSelector } from 'store/store';
import { useEffect } from 'react';
import { getUsersOrdersThunk } from 'store/usersOrders/userOrdersThunk';

import { tempData } from './tempData';

interface OrderedPageProps {}

export const OrderedPage: React.FunctionComponent<OrderedPageProps> = () => {
  const { isOrdersFetching, orders } = useAppSelector(
    ({ usersOrders }) => usersOrders,
  );
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    // dispatch(getUsersOrdersThunk());

    const options = {method: 'GET', headers: {id: '1'}};

    fetch('https://a2e2-37-20-208-79.eu.ngrok.io/api/v1/users/all-transfers', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }, []);

  return (
    <StyledOrderedTransfersPage className="ordered-transfers-page">
      <PageHeading className="ordered-transfers-page__heading">
        Заказанные поездки
      </PageHeading>

      <PageParagraph underlined>
        Чтобы изменить личную информацию, дату, время поездки и&nbsp;другие
        данные&nbsp;&mdash; нажмите на интересующую поездку
      </PageParagraph>

      {isOrdersFetching ? (
        <Spinner />
      ) : (
        tempData.map((order) => (
          <AppButton
            key={order.id}
            disabled={order.isEnded}
            size="big"
            textAlign="left"
            onClick={() => navigate('/')}
          >
            <PageParagraph>Забронированная поездка #{order.id} </PageParagraph>

            <PageParagraph>
              Откуда:{' '}
              {order.direction === 'fromAirport'
                ? order.airport
                : order.location}
            </PageParagraph>
            <PageParagraph>
              Куда:{' '}
              {order.direction === 'toAirport' ? order.airport : order.location}
            </PageParagraph>

            <PageParagraph>Дата: {order.tripDate.slice(0, 10)}</PageParagraph>
            <PageParagraph>Время: {order.tripDate.slice(-5)}</PageParagraph>
          </AppButton>
        ))
      )}

      <AppButton isFilled={false} onClick={() => navigate('/transfers')}>
        Назад
      </AppButton>
    </StyledOrderedTransfersPage>
  );
};
