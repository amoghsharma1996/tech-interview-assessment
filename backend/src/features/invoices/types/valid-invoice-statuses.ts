import { InvoiceStatuses } from '../enums/invoice-statuses.enum';

type ValidInvoiceStatus = keyof typeof InvoiceStatuses;

export default ValidInvoiceStatus;
