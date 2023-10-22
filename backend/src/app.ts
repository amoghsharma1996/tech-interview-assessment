import Koa from 'koa';
import parser from 'koa-bodyparser';
import cors from '@koa/cors';
import errorMiddleware from './middleware/error.middleware';
import Router from 'koa-router';
import { InvoiceController } from './features/invoices';

const App = new Koa();
const router = new Router();
const port = 8000;

// Import all controllers
router.use(InvoiceController.routes());

App.use(parser())
  .use(cors())
  .use(router.routes())
  .use(router.allowedMethods())
  .use(errorMiddleware)
  .listen(port, () => {
    console.log(`Server is listening on http://127.0.0.1:${port}/`);
  });
