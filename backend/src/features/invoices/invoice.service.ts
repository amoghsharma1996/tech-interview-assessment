import { AddInvoiceRequest } from './dtos/add-invoice-request.dto';
import { UpdateInvoiceRequest } from './dtos/update-invoice-request.dto';
import { Invoice } from './models/base-invoice-entity';

export class InvoiceService {
  async getInvoices() {
    // only return invoices that are PENDING
    try {
      const invoices = await Invoice.findAll({
        where: {
          status: 'PENDING',
        },
      });
      return invoices;
    } catch (error) {
      console.error(error);
      throw new Error('There was an error fetching the invoices.');
    }
  }

  // when creating a new invoice, set it to status PENDING
  async addInvoice(addInvoiceRequest: AddInvoiceRequest) {
    try {
      const newInvoice = await Invoice.create({
        ...addInvoiceRequest,
        status: 'PENDING',
      });
      return newInvoice;
    } catch (error) {
      console.error(error);
      throw new Error('There was an error creating the invoice.');
    }
  }

  // update an invoice's status
  async updateInvoiceStatus(
    id: string | number,
    updateInvoiceRequest: UpdateInvoiceRequest,
  ) {
    const invoiceToUpdate = await Invoice.findByPk(id);
    if (!invoiceToUpdate) {
      throw new Error('The invoice does not exist.');
    }

    try {
      invoiceToUpdate.status = updateInvoiceRequest.status;
      await invoiceToUpdate.save();

      return invoiceToUpdate;
    } catch (error) {
      console.error(error);
      throw new Error('There was an error updating the invoice.');
    }
  }
}
