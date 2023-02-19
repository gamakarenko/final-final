import { Outlet } from 'react-router-dom';

import PageWrapperWithHeading from 'components/PageWrapperWithHeading/PageWrapperWithHeading';

export const AboutPage = () => {
  return (
    <PageWrapperWithHeading heading="О проекте" backTo="/">
      <Outlet />
    </PageWrapperWithHeading>
  );
};
