import ValidInvoiceStatus from '../types/valid-invoice-statuses';

export interface UpdateInvoiceRequest {
  status: ValidInvoiceStatus;
}
