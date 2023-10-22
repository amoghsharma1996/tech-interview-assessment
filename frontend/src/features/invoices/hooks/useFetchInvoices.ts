import { useEffect, useState } from 'react';
import { getInvoices } from '../api/getInvoices';
import { InvoiceTableHeaders } from '../constants/invoice-table-headers';

export const useFetchInvoices = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [invoices, setInvoices] = useState<
    { id: number; [key: string]: string | number }[]
  >([]);

  // Format the invoices so that response values line up with header values
  const getAndFormatInvoices = async () => {
    const unformattedInvoices = await getInvoices();

    const formattedInvoices: {
      id: number;
      [key: string]: string | number;
    }[] = unformattedInvoices.map((invoice) => ({
      id: invoice.id,
      'Invoice Number': invoice.invoice_number,
      'Vendor Name': invoice.vendor_name,
      'Vendor Address': invoice.remittance_address,
      Total: invoice.total,
      'Invoice Date': invoice.invoice_date,
      'Due Date': invoice.due_date,
    }));

    setInvoices(formattedInvoices);
  };

  // Simple useEffect to fetch invoices from the API, every 2 seconds (to simulate real-time + avoid refreshing the page)
  // A more robust implementation would be to use something like React-Query to avoid using useEffect (+ handle loading, etc.)
  // and also to use a Websocket for real time addition of new invoices
  useEffect(() => {
    const interval = setInterval(async () => {
      await getAndFormatInvoices();
      setIsLoading(false);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return {
    invoices,
    invoiceTableHeaders: InvoiceTableHeaders,
    isLoading,
    fetchInvoices: getAndFormatInvoices,
  };
};
