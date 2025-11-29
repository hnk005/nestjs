import { Controller, Get, Post } from '@nestjs/common';
import { CountService, CountServiceStateless } from './count.service';

@Controller('counts')
export class CountController {
  constructor(
    private readonly countService: CountService,
    private readonly countServiceStateless: CountServiceStateless,
  ) {}

  @Post('/increment')
  increment() {
    return `statefull: ${this.countService.increment()} | stateless: ${this.countServiceStateless.increment()}`;
  }

  @Post('/decrement')
  decrement() {
    return `statefull: ${this.countService.decrement()} | stateless: ${this.countServiceStateless.decrement()}`;
  }

  @Get()
  getCount() {
    return `statefull: ${this.countService.getCount()} | stateless: ${this.countServiceStateless.getCount()}`;
  }
}
