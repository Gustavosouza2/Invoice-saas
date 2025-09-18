import { Request } from 'express';

export interface InvoiceRequest extends Request {
  user: {
    userId: string;
    email: string;
  };
}
