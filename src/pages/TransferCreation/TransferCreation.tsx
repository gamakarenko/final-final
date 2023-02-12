import { useEffect, useState } from 'react';

import PageHeading from '../../components/ui/PageHeading/PageHeading';
import MainInfoStep from './MainInfoStep/MainInfoStep';
import { StyledTransferCreation } from './TransferCreation.styled';

const TransferCreation = () => {
  return (
    <StyledTransferCreation>
      <form>
        <PageHeading>Заказать трансфер</PageHeading>
        <MainInfoStep/>
      </form>
    </StyledTransferCreation>
  );
};

export default TransferCreation;
