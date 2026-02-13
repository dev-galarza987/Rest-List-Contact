import { Module } from '@nestjs/common';
import { AgendService } from './agend.service';
import { AgendController } from './agend.controller';

@Module({
  controllers: [AgendController],
  providers: [AgendService],
})
export class AgendModule {}
