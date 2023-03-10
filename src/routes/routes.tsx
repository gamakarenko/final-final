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
import Share from 'pages/SharePage/Share';
import ShareMain from 'pages/SharePage/ShareMain/ShareMain';
import ShareLocation from 'pages/SharePage/ShareLocation/ShareLocation';
import SharePassengers from 'pages/SharePage/SharePassengers/SharePassengers';
import ShareTransfers from 'pages/SharePage/ShareTransfers/ShareTransfers';
import ShareTransferForm from 'pages/SharePage/ShareTransferForm/ShareTransferForm';
import ShareCompleted from 'pages/SharePage/ShareCompleted/ShareCompleted';
import ShareResult from 'pages/SharePage/ShareResult/ShareResult';

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
        path: 'share',
        element: <Share />,
        children: [
          {
            index: true,
            element: <ShareMain />,
          },

          {
            path: 'location',
            element: <ShareLocation />,
          },

          {
            path: 'passengers',
            element: <SharePassengers />,
          },

          {
            path: 'transfers',
            element: <ShareTransfers />,
          },
          { path: 'form', element: <ShareTransferForm /> },
          { path: 'complited', element: <ShareCompleted /> },
          { path: 'result', element: <ShareResult /> },
        ],
      },

      {
        path: 'faq',
        element: <FaqPage />,
      },
    ],
  },
]);
