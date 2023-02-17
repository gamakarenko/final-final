import { createBrowserRouter } from 'react-router-dom';

import App from 'App';
//TODO не удалять неактивные импорты, потом почистить лишние компоненты
import CancelChangePage from 'pages/ordered/CancelChange';
import SelectPage from 'pages/ordered/SelectPage';
import { InfoStep } from 'pages/ordered/AgeInfoPage/steps/InfoStep';
import AgeStep from 'pages/ordered/AgeInfoPage/steps/AgeStep';
import DateTime from 'pages/ordered/DateTime/index';
import FinalPage from 'pages/ordered/FinalPage';
import TransferCreation from 'pages/TransferCreation/TransferCreation';
import SharePage from 'pages/SharePage';
import FAQPage from 'pages/FAQPage';
import InfoPage from 'pages/AboutPage/InfoPage';
import ReviewPage from 'pages/AboutPage/ReviewPage';
import OrderedTransfersPage from 'pages/OrderedTransfersPage/OrderedTransfersPage';
import OrderByIdPage from 'pages/OrderByIdPage/OrderByIdPage';
import OrderedTransfersList from 'pages/OrderedTransfersPage/OrderedTransfersList/OrderedTransfersList';
import SelectChangeOptionsPage from 'components/SelectChangeOptionsPage/SelectChangeOptionsPage';
import ChangePassengersPage from 'components/ChangePassengersPage/ChangePassengersPage';
import ChangeMainInfoPage from 'components/ChangeMainInfoPage/ChangeMainInfoPage';
import { MainPage } from 'pages/MainPage';
import { MyTransfersPage } from 'pages/MyTransfersPage/MyTransfersPage';
import { AboutPage } from 'pages/AboutPage/AboutPage';
import { Example } from 'pages/Example';
import TransferCreationComplete from 'pages/TransferCreationComplete/TransferCreationComplete';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: 'order',
        element: <TransferCreation />,
      },
      {
        path: 'order/complete',
        element: <TransferCreationComplete />,
      },
      {
        path: 'share',
        element: <SharePage />,
      },

      {
        path: 'transfers',
        element: <MyTransfersPage />,
      },
      {
        path: 'transfers/ordered',
        element: <OrderedTransfersPage />,
        children: [
          { index: true, element: <OrderedTransfersList /> },
          {
            path: ':id',
            element: <OrderByIdPage />,
          },
          {
            path: ':id/change',
            element: <SelectChangeOptionsPage />,
          },
          {
            path: ':id/change/main-info',
            element: <ChangeMainInfoPage />,
          },
          {
            path: ':id/change/passengers',
            element: <ChangePassengersPage />,
          },
        ],
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'about/info',
        element: <InfoPage />,
      },
      {
        path: 'about/review',
        element: <ReviewPage />,
      },

      {
        path: 'example',
        element: <Example />,
      },
      {
        path: 'faq',
        element: <FAQPage />,
      },
    ],
  },
]);
