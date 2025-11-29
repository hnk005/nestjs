import { Injectable, Scope } from '@nestjs/common';

@Injectable()
export class CountService {
  private counts: number = 0;

  increment(): number {
    this.counts += 1;
    return this.counts;
  }

  decrement(): number {
    this.counts -= 1;
    return this.counts;
  }

  getCount(): number {
    return this.counts;
  }
}

@Injectable({ scope: Scope.REQUEST })
export class CountServiceStateless {
  private counts: number = 0;

  increment(): number {
    this.counts += 1;
    return this.counts;
  }

  decrement(): number {
    this.counts -= 1;
    return this.counts;
  }

  getCount(): number {
    return this.counts;
  }
}
