import { createZodDto } from '@anatine/zod-nestjs';
import z from 'zod';

const updateInvoiceSchema = z.object({
  date: z.date(),
  cost: z.number(),
  part_name: z.string(),
  labor_cost: z.number(),
  total_amount: z.number(),
  customer_name: z.string(),
  vehicle_model: z.string(),
  service_price: z.number(),
  license_plate: z.string(),
  invoice_number: z.number(),
  service_description: z.string(),
});

export class UpdateInvoiceDto extends createZodDto(updateInvoiceSchema) {}
