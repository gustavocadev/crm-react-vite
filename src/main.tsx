import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import NewClient, { action as clientAction } from './routes/newClient';
import Index, { loader as clientsLoader } from './routes/index';
import ErrorPage from './components/ErrorPage';
import EditClient, {
  loader as editClientLoader,
  action as editClientAction,
} from './routes/editClient';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: clientsLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: '/clientes/new',
        element: <NewClient />,
        action: clientAction,
      },
      {
        path: '/clientes/:id',
        element: <EditClient />,
        loader: editClientLoader,
        action: editClientAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
