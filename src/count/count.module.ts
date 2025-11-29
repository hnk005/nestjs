import { Module } from '@nestjs/common';
import { CountService, CountServiceStateless } from './count.service';
import { CountController } from './count.controller';

@Module({
  providers: [CountService, CountServiceStateless],
  controllers: [CountController],
})
export class CountModule {}
