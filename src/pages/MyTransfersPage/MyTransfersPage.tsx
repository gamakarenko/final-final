import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import AppButton from 'components/ui/AppButton/AppButton';
import PageHeading from 'components/ui/PageHeading/PageHeading';

import { StyledMyTransfersPage } from './MyTransfersPage.styles';

export const MyTransfersPage: FC = () => {
  const navigate = useNavigate();

  return (
    <StyledMyTransfersPage className="my-transfers-page">
      <PageHeading className="my-transfers-page__heading">
        Мои поездки
      </PageHeading>

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
      <AppButton
        className="my-transfers-page__btn"
        isFilled={false}
        onClick={() => navigate('/')}
      >
        Назад
      </AppButton>
    </StyledMyTransfersPage>
  );
};
