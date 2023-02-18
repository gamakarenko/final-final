import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { router } from 'routes/routes';
import { Provider } from 'react-redux';
import { store } from './store/store';

import './styles/index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
