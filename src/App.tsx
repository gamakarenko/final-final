import ScrollToTop from 'components/ScrollToTop/ScrollToTop';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { Slide, ToastContainer } from 'react-toastify';

import { useAppDispatch } from 'store/store';
import { getOrdersThunk } from 'store/Orders/OrdersThunk';

const tg = (window as any).Telegram.WebApp;
const user = tg?.initDataUnsafe?.user;

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getOrdersThunk());


  }, []);

  return (
    <>
      <ScrollToTop />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Slide}
      />
      <div style={{display: 'grid', placeContent: 'center', padding: 5 }}>{user?.id ? user.id : 'tg not found'}</div>
      <Outlet />
    </>
  );
}

export default App;
