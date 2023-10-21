import { BaseResponseEntity } from '../../../types';
import { InvoiceCurrencies } from '../constants/invoice-currencies.enum';
import { InvoiceStatuses } from '../constants/invoice-statuses.enum';

export interface InvoiceResponse extends BaseResponseEntity {
  invoice_number: string;
  total: string;
  currency: ValidInvoiceCurrency;
  invoice_date: string;
  due_date: string;
  vendor_name: string;
  remittance_address: string;
  status: ValidInvoiceStatus;
}

export type ValidInvoiceCurrency = keyof typeof InvoiceCurrencies;

export type ValidInvoiceStatus = keyof typeof InvoiceStatuses;
