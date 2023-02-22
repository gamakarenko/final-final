import { createBrowserRouter } from 'react-router-dom';

import App from 'App';
import TransferCreation from 'pages/TransferCreation/TransferCreation';
import SharePage from 'pages/SharePage';
import FAQPage from 'pages/FAQPage/FAQPage';
import InfoPage from 'pages/AboutPage/InfoPage';
import ReviewPage from 'pages/AboutPage/ReviewPage';
import OrderedTransfersPage from 'pages/OrderedTransfersPage/OrderedTransfersPage';
import OrderByIdPage from 'pages/OrderByIdPage/OrderByIdPage';
import OrderedTransfersList from 'pages/OrderedTransfersPage/OrderedTransfersList/OrderedTransfersList';
import TransferCreationComplete from 'pages/TransferCreation/TransferCreationComplete/TransferCreationComplete';
import TransferCreationForm from 'pages/TransferCreation/TransferCreationForm/TransferCreationForm';
import { MainPage } from 'pages/MainPage';
import { MyTransfersPage } from 'pages/MyTransfersPage/MyTransfersPage';
import { AboutPage } from 'pages/AboutPage/AboutPage';
import { Example } from 'pages/Example';
import AboutMain from 'pages/AboutPage/AboutMain/AboutMain';
import SelectChangeOptionsPage from 'pages/OrderedTransfersPage/SelectChangeOptionsPage/SelectChangeOptionsPage';
import ChangeMainInfoPage from 'pages/OrderedTransfersPage/ChangeMainInfoPage/ChangeMainInfoPage';
import ChangePassengersPage from 'pages/OrderedTransfersPage/ChangePassengersPage/ChangePassengersPage';
import ChangesSaved from 'pages/OrderedTransfersPage/ChangesSaved/ChangesSaved';
import TransferChangeForm from 'pages/OrderedTransfersPage/TransferChangeForm/TransferChangeForm';

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
        children: [
          { index: true, element: <TransferCreationForm /> },
          { path: 'complete', element: <TransferCreationComplete /> },
        ],
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
            element: <TransferChangeForm />,
          },
          // {
          //   path: ':id/change',
          //   element: <SelectChangeOptionsPage />,
          // },
          // {
          //   path: ':id/change/main-info',
          //   element: <ChangeMainInfoPage />,
          // },
          // {
          //   path: ':id/change/passengers',
          //   element: <ChangePassengersPage />,
          // },
          {
            path: 'changes-saved',
            element: <ChangesSaved />,
          },
        ],
      },
      {
        path: 'about',
        element: <AboutPage />,
        children: [
          {
            index: true,
            element: <AboutMain />,
          },
          {
            path: 'info',
            element: <InfoPage />,
          },
          {
            path: 'review',
            element: <ReviewPage />,
          },
        ],
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
