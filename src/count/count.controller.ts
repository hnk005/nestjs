import { Controller, Get, Post } from '@nestjs/common';
import { CountService } from './count.service';

@Controller('counts')
export class CountController {
  constructor(private readonly countService: CountService) {}

  @Post('/increment')
  increment() {
    return this.countService.increment();
  }

  @Post('/decrement')
  decrement() {
    return this.countService.decrement();
  }

  @Get()
  getCount() {
    return this.countService.getCount();
  }
}
