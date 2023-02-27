import { createBrowserRouter } from 'react-router-dom';

import App from 'App';
import TransferCreation from 'pages/TransferCreation/TransferCreation';
import AboutInfo from 'pages/AboutPage/AboutInfo/AboutInfo';
import AboutReview from 'pages/AboutPage/AboutReview/AboutReview';
import OrderedTransfersPage from 'pages/OrderedTransfersPage/OrderedTransfersPage';
import OrderByIdPage from 'pages/OrderByIdPage/OrderByIdPage';
import OrderedTransfersList from 'pages/OrderedTransfersPage/OrderedTransfersList/OrderedTransfersList';
import TransferCreationComplete from 'pages/TransferCreation/TransferCreationComplete/TransferCreationComplete';
import TransferCreationForm from 'pages/TransferCreation/TransferCreationForm/TransferCreationForm';
import { MainPage } from 'pages/MainPage/MainPage';
import { MyTransfersPage } from 'pages/MyTransfersPage/MyTransfersPage';
import { AboutPage } from 'pages/AboutPage/AboutPage';
import AboutMain from 'pages/AboutPage/AboutMain/AboutMain';
import ChangesSaved from 'pages/OrderedTransfersPage/ChangesSaved/ChangesSaved';
import TransferChangeForm from 'pages/OrderedTransfersPage/TransferChangeForm/TransferChangeForm';
import FaqPage from 'pages/FaqPage/FaqPage';

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
            element: <AboutInfo />,
          },
          {
            path: 'review',
            element: <AboutReview />,
          },
        ],
      },

      {
        path: 'faq',
        element: <FaqPage />,
      },
    ],
  },
]);
