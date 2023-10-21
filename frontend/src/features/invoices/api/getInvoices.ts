import { httpClient } from '../../../lib/axios';
import { invoiceGETPath } from './paths';
import { InvoiceResponse } from '..';

export const getInvoices = async () => {
  const { data } = await httpClient.get(invoiceGETPath);

  return data as InvoiceResponse[];
};
