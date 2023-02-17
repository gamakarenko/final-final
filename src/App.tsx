import ScrollToTop from 'components/ScrollToTop/ScrollToTop';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { useAppDispatch } from 'store/store';
import { getUsersOrdersThunk } from 'store/usersOrders/userOrdersThunk';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUsersOrdersThunk());
  }, []);

  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}

export default App;
