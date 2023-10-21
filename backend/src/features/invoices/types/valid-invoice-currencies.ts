import { InvoiceCurrencies } from '../enums/invoice-currencies.enum';

export type ValidInvoiceCurrency = keyof typeof InvoiceCurrencies;
