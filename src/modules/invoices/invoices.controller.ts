import { FileInterceptor } from '@nestjs/platform-express';
// import { AuthGuard } from '@nestjs/passport';
import {
  Get,
  // Req,
  Body,
  Post,
  Query,
  Patch,
  Delete,
  // UseGuards,
  Controller,
  UploadedFile,
  UseInterceptors,
  Param,
} from '@nestjs/common';

import { InvoicesService } from './invoices.service';
import { CreateInvoiceDto } from './dto/create-invoice';
import { UpdateInvoiceDto } from './dto/update-invoice';
// import { type InvoiceRequest } from 'src/types/invoice';
@Controller('invoices')
export class InvoicesController {
  constructor(private readonly invoicesService: InvoicesService) {}

  // @UseGuards(AuthGuard('jwt'))
  @Post('/create-invoice')
  @UseInterceptors(FileInterceptor('file'))
  createInvoice(
    @Body() CreateInvoiceDto: CreateInvoiceDto,
    @UploadedFile() file: Express.Multer.File
    // @Req() req: InvoiceRequest
  ) {
    return this.invoicesService.createInvoice(CreateInvoiceDto, file);
  }

  // @UseGuards(AuthGuard('jwt'))
  @Get('/get-invoices')
  findAllInvoices(@Query('page') page = 1, @Query('per_page') per_page = 10) {
    return this.invoicesService.findAllInvoices(Number(page), Number(per_page));
  }

  @Get('/get-invoice/:id')
  findInvoiceById(@Param('id') id: string) {
    return this.invoicesService.findInvoiceById(id);
  }

  @Patch('/update-invoice/:id')
  updateInvoice(
    @Param('id') id: string,
    @Body() updateInvoice: Partial<UpdateInvoiceDto>
  ) {
    return this.invoicesService.updateInvoice(id, updateInvoice);
  }

  @Delete('/delete-invoice/:id')
  removeInvoice(@Param('id') id: string) {
    return this.invoicesService.removeInvoice(id);
  }
}
