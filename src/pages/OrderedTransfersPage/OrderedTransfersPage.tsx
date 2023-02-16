import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import PageWrapperWithHeading from 'components/PageWrapperWithHeading/PageWrapperWithHeading';

const OrderedTransfersPage: FC = () => {

  return (
    <PageWrapperWithHeading heading="Заказанные поездки">
       <Outlet/>
    </PageWrapperWithHeading>
  );
};

export default OrderedTransfersPage;
