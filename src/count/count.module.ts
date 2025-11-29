import { Module } from '@nestjs/common';
import { CountService } from './count.service';
import { CountController } from './count.controller';

@Module({
  providers: [CountService],
  controllers: [CountController],
})
export class CountModule {}
