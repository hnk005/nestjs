import { Injectable, Scope } from '@nestjs/common';

// Statefull service to handle business logic
// Mark as injectable so it can be injected as a dependency
@Injectable() // scope default is singleton
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

// Stateles service to handle business logic
// performace slower than stateful because new instance created per request
@Injectable({ scope: Scope.REQUEST }) // add scope to make it stateless
export class AppServiceStateless {
  getHello(): string {
    return 'Hello World!';
  }
}

// Transient service to handle business logic
@Injectable({ scope: Scope.TRANSIENT }) // add scope to make it transient
export class AppServiceStateDependent {
  getHello(): string {
    return 'Hello from Another Service!';
  }
}
