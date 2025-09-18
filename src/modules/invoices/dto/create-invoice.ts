import { createZodDto } from '@anatine/zod-nestjs';
import z from 'zod';

const createInvoiceSchema = z.object({
  date: z.date(),
  part_name: z.string().min(1, 'Part name is required'),
  cost: z.number().min(0, 'Cost must be a positive number'),
  customer_name: z.string().min(1, 'Customer name is required'),
  vehicle_model: z.string().min(1, 'Vehicle model is required'),
  license_plate: z.string().min(1, 'Vehicle plate is required'),
  invoice_number: z.number().min(1, 'Invoice number is required'),
  labor_cost: z.number().min(0, 'Labor cost must be a positive number'),
  service_description: z.string().min(1, 'Service description is required'),
  total_amount: z.number().min(0, 'Total amount must be a positive number'),
  service_price: z.number().min(0, 'Service price must be a positive number'),
  userId: z.string().min(1, 'User ID is required'),
});

export class CreateInvoiceDto extends createZodDto(createInvoiceSchema) {}
