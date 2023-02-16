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
import ShortOrderCard from './ShortOrderCard/ShortOrderCard';

interface OrderedPageProps {}

export const OrderedPage: React.FunctionComponent<OrderedPageProps> = () => {
  const { isOrdersFetching, orders } = useAppSelector(
    ({ usersOrders }) => usersOrders,
  );
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    // dispatch(getUsersOrdersThunk());
    // const options = {method: 'GET', headers: {id: '1'}};
    // fetch('https://6587-82-179-72-69.eu.ngrok.io/api/v1/users/all-transfers', options)
    //   .then(response => response.json())
    //   .then(response => console.log(response))
    //   .catch(err => console.error(err));
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
            className="ordered-transfers-page__order-btn"
            onClick={() => navigate('/')}
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
    </StyledOrderedTransfersPage>
  );
};
