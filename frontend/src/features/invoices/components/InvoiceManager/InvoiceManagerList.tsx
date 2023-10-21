import { BasicTable } from '../../../../components';
import { useFetchInvoices } from '../../hooks';

export const InvoiceManagerList = () => {
  const { invoices, invoiceTableHeaders, isLoading } = useFetchInvoices();

  if (isLoading) return <>Loading!</>;

  if (!invoices.length) return <>There are no invoices, please create some!</>;

  return <BasicTable data={invoices} columnHeaders={invoiceTableHeaders} />;
};
