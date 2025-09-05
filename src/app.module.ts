import { Module } from '@nestjs/common';

import { InvoicesModule } from './modules/invoices/invoices.module';
import { UsersModule } from './modules/users/users.module';
import { FilesModule } from './modules/files/files.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [UsersModule, InvoicesModule, FilesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
