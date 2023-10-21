import { useEffect, useState } from 'react';
import { InvoiceResponse } from '..';
import { getInvoices } from '../api/getInvoices';
import { InvoiceTableHeaders } from '../constants/invoice-table-headers';

// A hook containing the logic to fetch invoices, format them, and return them to use in more presentational components
export const useFetchInvoices = () => {
  const [loading, setLoading] = useState<boolean>(true);

  const [invoices, setInvoices] = useState<
    { id: number; [key: string]: string | number }[]
  >([]);

  // Format the invoices so that response values line up with header values
  const formatInvoices = (invoices: InvoiceResponse[]) => {
    const formattedInvoices: {
      id: number;
      [key: string]: string | number;
    }[] = invoices.map((invoice) => ({
      id: invoice.id,
      'Invoice Number': invoice.invoice_number,
      'Vendor Name': invoice.vendor_name,
      'Vendor Address': invoice.remittance_address,
      Total: invoice.total,
      'Invoice Date': invoice.invoice_date,
      'Due Date': invoice.due_date,
    }));

    return formattedInvoices;
  };

  // Simple useEffect to fetch invoices from the API, every 2 seconds (to simulate real-time + avoid refreshing the page)
  // A more robust implementation would be to use something like React-Query to avoid using useEffect + a socket for real time addition of new invoices
  useEffect(() => {
    const interval = setInterval(async () => {
      const formattedInvoices = formatInvoices(await getInvoices());

      setLoading(false);
      setInvoices(formattedInvoices);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return {
    invoices,
    invoiceTableHeaders: InvoiceTableHeaders,
    isLoading: loading,
  };
};
