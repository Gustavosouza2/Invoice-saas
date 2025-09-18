import { Injectable } from '@nestjs/common';
import { PrismaClient } from 'generated/prisma';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceRoleKey) {
  throw new Error('Supabase environment variables are not set.');
}

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);
@Injectable()
export class FilesService {
  private prisma = new PrismaClient();

  async findById(id: string) {
    return this.prisma.file.findUnique({ where: { id } });
  }

  async uploadFileToSupabase(file: Express.Multer.File) {
    const filePath = `invoices/${Date.now()}_${file.originalname}`;
    const { error } = await supabase.storage
      .from('invoices')
      .upload(filePath, file.buffer, {
        contentType: file.mimetype,
        upsert: true,
      });

    if (error) {
      throw new Error('Error uploading file to Supabase:');
    }

    const { data: publicUrlData } = supabase.storage
      .from('invoices')
      .getPublicUrl(filePath);

    return publicUrlData?.publicUrl;
  }
}
