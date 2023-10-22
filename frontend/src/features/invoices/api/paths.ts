export const BASE_INVOICE_URL = '/Invoices';

export const invoiceGETPath = () => `${BASE_INVOICE_URL}`;

export const invoicePUTPath = (invoiceId: number) =>
  `${BASE_INVOICE_URL}/${invoiceId}`;
