import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import PageWrapperWithHeading from 'components/PageWrapperWithHeading/PageWrapperWithHeading';

const TransferCreation: FC = () => {
  return (
    <PageWrapperWithHeading heading="Заказать трансфер" backTo="/">
      <Outlet />
    </PageWrapperWithHeading>
  );
};

export default TransferCreation;
