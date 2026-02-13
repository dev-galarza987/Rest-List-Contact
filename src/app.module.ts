import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AgendModule } from './agend/agend.module';

@Module({
  imports: [AgendModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
