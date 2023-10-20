import { Context, Next } from 'koa';

async function errorMiddleware(ctx: Context, next: Next) {
  try {
    // Continue
    await next();
  } catch (error) {
    // Handle other types of errors, if necessary
    ctx.status = 500;
    ctx.body = {
      error: {
        message: 'An unknown error occurred.',
      },
    };
  }
}

export default errorMiddleware;
