import { AddInvoiceRequest } from './dtos/add-invoice-request.dto';
import { UpdateInvoiceRequest } from './dtos/update-invoice-request.dto';
import { InvoiceService } from './invoice.service';
import Router from 'koa-router';

const invoiceService = new InvoiceService();
const invoiceRouter = new Router({
  prefix: '/Invoices',
});

// this route handles the GET of all invoices
invoiceRouter.get('/', async (ctx) => {
  ctx.body = await invoiceService.getInvoices();
  ctx.status = 200;
});

// this route handles the POST or creation of a new invoice
invoiceRouter.post('/', async (ctx) => {
  const createInvoiceRequest = ctx.request.body;

  ctx.body = await invoiceService.addInvoice(
    createInvoiceRequest as AddInvoiceRequest,
  );
  ctx.status = 200;
});

// this route handles the PUT or update of an invoice status to one of the valid invoice statuses
invoiceRouter.put('/:invoiceId', async (ctx) => {
  const { invoiceId } = ctx.params;
  const updateInvoiceRequest = ctx.request.body;

  ctx.body = await invoiceService.updateInvoiceStatus(
    invoiceId,
    updateInvoiceRequest as UpdateInvoiceRequest,
  );
  ctx.status = 200;
});

export const InvoiceController = invoiceRouter;
