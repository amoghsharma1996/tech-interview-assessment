import { Navigate, Route, Routes } from 'react-router-dom';
import { InvoiceManager } from './InvoiceManager';

export const InvoiceRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<InvoiceManager />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
};
