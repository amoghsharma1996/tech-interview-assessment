export const BASE_INVOICE_URL = '/invoices';

export const invoiceGETPath = () => `${BASE_INVOICE_URL}`;

export const invoicePUTPath = (invoiceId: number) =>
  `${BASE_INVOICE_URL}/${invoiceId}`;
