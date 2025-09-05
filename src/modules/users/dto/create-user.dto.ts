import { createZodDto } from '@anatine/zod-nestjs';
import z from 'zod';

export const createUserSchema = z.object({
  email: z.string().email('Invalid email'),
  name: z.string().min(1, 'Name is required'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
  createdAt: z.date().default(new Date()),
});

export class CreateUserDto extends createZodDto(createUserSchema) {}
