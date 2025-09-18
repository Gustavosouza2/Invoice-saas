import { createZodDto } from '@anatine/zod-nestjs';
import z from 'zod';

const createUserSchema = z.object({
  createdAt: z.date().default(new Date()),
  email: z.string().email('Invalid email'),
  name: z.string().min(1, 'Name is required'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
  phone: z.string().min(9, 'Phone number must be at least 9 characters long'),
});

export class CreateUserDto extends createZodDto(createUserSchema) {}
