import { useNavigate } from 'react-router-dom';

import AppButton from 'components/ui/AppButton/AppButton';
import PageHeading from 'components/ui/PageHeading/PageHeading';
import PageParagraph from 'components/ui/PageParagraph/PageParagraph';

import { StyledOrderedTransfersPage } from './OrderedTransfersPage.styled';

interface OrderedPageProps {}

export const OrderedPage: React.FunctionComponent<OrderedPageProps> = () => {

  const navigate = useNavigate();

  return (
    <StyledOrderedTransfersPage className="ordered-transfers-page">
      <PageHeading className="ordered-transfers-page__heading">
        Заказанные поездки
      </PageHeading>

      <PageParagraph underlined>
        Чтобы изменить личную информацию, дату, время поездки и&nbsp;другие
        данные&nbsp;&mdash; нажмите на интересующую поездку
      </PageParagraph>

      {[].map((el) => el)}

      <AppButton isFilled={false} onClick={() => navigate('/transfers')}>
        Назад
      </AppButton>
    </StyledOrderedTransfersPage>
  );
};
