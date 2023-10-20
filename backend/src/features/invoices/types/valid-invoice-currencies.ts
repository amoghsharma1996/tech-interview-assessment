import { InvoiceCurrencies } from '../enums/invoice-currencies';

type ValidInvoiceCurrency = keyof typeof InvoiceCurrencies;

export default ValidInvoiceCurrency;
