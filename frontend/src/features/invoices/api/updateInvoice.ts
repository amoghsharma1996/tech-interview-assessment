import { httpClient } from '../../../lib/axios';
import { invoicePUTPath } from './paths';
import { InvoiceResponse } from '..';

export const updateInvoice = async (invoiceId: number) => {
  const { data } = await httpClient.put(invoicePUTPath(invoiceId), {
    status: 'APPROVED',
  });

  return data as InvoiceResponse;
};
