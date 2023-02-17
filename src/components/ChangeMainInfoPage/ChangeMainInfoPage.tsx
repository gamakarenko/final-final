import { useParams } from 'react-router-dom';

import MainInfoStep from 'components/MainInfoStep/MainInfoStep';
import PageParagraph from 'components/ui/PageParagraph/PageParagraph';

import { useAppDispatch, useAppSelector } from 'store/store';

import { StyledChangeMainInfoPage } from './ChangeMainInfoPage.styles';
import { convertUglyOrderToNormalOrder } from 'utils/convertUglyOrderToNormalOrder';

const ChangeMainInfoPage = () => {
  const { orders } = useAppSelector(({ usersOrders }) => usersOrders);
  const dispatch = useAppDispatch();

  const { id } = useParams();

  const order = id ? orders.find((order) => order.id === Number(id)) : null;

  return (
    <StyledChangeMainInfoPage>
      <MainInfoStep
        order={convertUglyOrderToNormalOrder(order) || {}}
        handleChange={() => null}
      >
        <PageParagraph>
          Изменить данные возможно не&nbsp;менее чем за&nbsp;28&nbsp;часов
        </PageParagraph>
        <PageParagraph underlined>
          Внимание! Изменение количества пассажиров может повлиять
          на&nbsp;стоимость поездки.
        </PageParagraph>
      </MainInfoStep>
    </StyledChangeMainInfoPage>
  );
};

export default ChangeMainInfoPage;
