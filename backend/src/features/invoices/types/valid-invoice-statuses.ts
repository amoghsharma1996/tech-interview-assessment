import { InvoiceStatuses } from '../enums/invoice-statuses.enum';

export type ValidInvoiceStatus = keyof typeof InvoiceStatuses;
