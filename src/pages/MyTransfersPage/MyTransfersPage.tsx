import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import AppButton from 'components/ui/AppButton/AppButton';

import { StyledMyTransfersPage } from './MyTransfersPage.styles';
import PageWrapperWithHeading from 'components/PageWrapperWithHeading/PageWrapperWithHeading';

export const MyTransfersPage: FC = () => {
  const navigate = useNavigate();

  return (
    <PageWrapperWithHeading heading="Мои поездки">
      <StyledMyTransfersPage className="my-transfers-page">
        <AppButton
          textAlign="left"
          size="big"
          className="my-transfers-page__btn"
          onClick={() => navigate('/transfers/ordered')}
        >
          Заказанные поездки
        </AppButton>
        <AppButton
          textAlign="left"
          size="big"
          className="my-transfers-page__btn"
          disabled
        >
          Пошеренные поездки
        </AppButton>
        <AppButton
          textAlign="left"
          size="big"
          className="my-transfers-page__btn"
          disabled
        >
          Внесенные поездки
        </AppButton>
      </StyledMyTransfersPage>
    </PageWrapperWithHeading>
  );
};
