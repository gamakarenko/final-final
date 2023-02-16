import { createBrowserRouter } from 'react-router-dom';

import App from 'App';

import TransferCreation from 'pages/TransferCreation/TransferCreation';
import SharePage from 'pages/SharePage';
import FAQPage from 'pages/FAQPage';
import InfoPage from 'pages/AboutPage/InfoPage';
import ReviewPage from 'pages/AboutPage/ReviewPage';
import CancelChangePage from 'pages/ordered/CancelChange';
import SelectPage from 'pages/ordered/SelectPage';
import AgeStep from 'pages/ordered/AgeInfoPage/steps/AgeStep';
import DateTime from 'pages/ordered/DateTime/index';
import FinalPage from 'pages/ordered/FinalPage';
import { MainPage } from 'pages/MainPage';
import { MyTransfersPage } from 'pages/MyTransfersPage/MyTransfersPage';
import { OrderedPage } from 'pages/OrderedTransfersPage/OrderedTransfersPage';
import { AboutPage } from 'pages/AboutPage/AboutPage';
import { Example } from 'pages/Example';
import { InfoStep } from 'pages/ordered/AgeInfoPage/steps/InfoStep';

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
        path: 'share',
        element: <SharePage />,
      },

      {
        path: 'transfers',
        element: <MyTransfersPage />,
      },
      {
        path: 'transfers/ordered',
        element: <OrderedPage />,
      },
      {
        path: 'transfers/ordered/:id',
        element: <CancelChangePage />,
      },
      {
        path: 'transfers/ordered/:id/change',
        element: <SelectPage />,
      },
      {
        path: 'transfers/ordered/:id/change/age',
        element: <AgeStep />,
      },
      {
        path: 'transfers/ordered/:id/change/passenger',
        element: <InfoStep />,
      },
      {
        path: 'transfers/ordered/:id/change/date',
        element: <DateTime />,
      },
      {
        path: 'transfers/ordered/final',
        element: <FinalPage />,
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
