import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [], // Add any modules you want to import here
  controllers: [AppController], // Register your controllers here
  providers: [AppService], // Register your providers here
  exports: [], // Export any modules or providers if needed
})
// Define and export the main application module
export class AppModule {}
