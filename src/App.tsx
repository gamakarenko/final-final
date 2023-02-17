import ScrollToTop from 'components/ScrollToTop/ScrollToTop';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { useAppDispatch } from 'store/store';
import { getOrdersThunk } from 'store/Orders/OrdersThunk';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getOrdersThunk());
  }, []);

  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}

export default App;
