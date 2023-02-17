import { useParams } from 'react-router-dom';

import MainInfoStep from 'components/MainInfoStep/MainInfoStep';
import PageParagraph from 'components/ui/PageParagraph/PageParagraph';

import { useAppDispatch, useAppSelector } from 'store/store';

import { findOrderById } from 'utils/findOrderById';

import { StyledChangeMainInfoPage } from './ChangeMainInfoPage.styles';

const ChangeMainInfoPage = () => {
  const { orders } = useAppSelector(({ orders }) => orders);
  const dispatch = useAppDispatch();

  const { id } = useParams();

  const order = findOrderById(orders, id);

  return (
    <StyledChangeMainInfoPage>
      <MainInfoStep
        // TODO ордер может быть пустым?
        order={order!}
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
