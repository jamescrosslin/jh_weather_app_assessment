import express from 'express';
import type { Application, NextFunction, Request, Response } from 'express';
import { CustomError } from './CustomError';

const app: Application = express();
const port = 3000;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: CustomError, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.statusCode || 500;

  res.status(status).json({
    message: err.message,
    err,
  });
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
