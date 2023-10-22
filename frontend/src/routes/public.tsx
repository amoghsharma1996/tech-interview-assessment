import { Navigate } from 'react-router-dom';
import { InvoiceRoutes } from '../features/invoices';

export const publicRoutes = [
  {
    path: '/invoices/*',
    element: <InvoiceRoutes />,
  },
  { path: '/*', element: <Navigate to="/invoices" /> },
];
