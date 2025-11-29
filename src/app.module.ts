import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CountModule } from './count/count.module';
import { LoggerMiddleware } from './logger.service';

@Module({
  imports: [CountModule], // Add any modules you want to import here
  controllers: [AppController], // Register your controllers here
  providers: [AppService], // Register your providers here
  exports: [], // Export any modules or providers if needed
})
// Define and export the main application module
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
