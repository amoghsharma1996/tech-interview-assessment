import { DateOnlyDataType } from 'sequelize';
import ValidInvoiceCurrency from '../types/valid-invoice-currencies';

export interface AddInvoiceRequest {
  invoice_number: string;
  total: string;
  currency: ValidInvoiceCurrency;
  invoice_date: DateOnlyDataType;
  due_date: DateOnlyDataType;
  vendor_name: string;
  remittance_address: string;
}
