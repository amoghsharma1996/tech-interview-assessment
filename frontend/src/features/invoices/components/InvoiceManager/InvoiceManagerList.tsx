import { useCallback, useState } from 'react';
import { BasicTable } from '../../../../components';
import { BasicButton } from '../../../../components/Button/BasicButton';
import { useFetchInvoices } from '../../hooks';
import { updateInvoice } from '../../api/updateInvoice';

export const InvoiceManagerList = () => {
  const [invoiceId, setInvoiceId] = useState<number>(0);
  const { invoices, invoiceTableHeaders, isLoading, fetchInvoices } =
    useFetchInvoices();

  // After approving an invoice, refetch the list of invoices to get the latest 'pending' set
  const handleApproveClick = useCallback(async () => {
    await updateInvoice(invoiceId);
    await fetchInvoices();
  }, [fetchInvoices, invoiceId]);

  if (isLoading)
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>Loading!</div>
    );

  if (!invoices.length)
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        There are no invoices, please create some!
      </div>
    );

  return (
    <>
      <div style={{ display: 'flex', marginBottom: 8, alignItems: 'center' }}>
        <h2 style={{ marginLeft: 'auto' }}>Invoices</h2>
        <BasicButton
          style={{ marginLeft: 'auto' }}
          text="Approve"
          handleClick={handleApproveClick}
        />
      </div>
      <BasicTable
        data={invoices}
        columnHeaders={invoiceTableHeaders}
        onRowSelect={(rowId: number) => setInvoiceId(rowId)}
      />
    </>
  );
};
