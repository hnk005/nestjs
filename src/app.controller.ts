import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() // Define the controller for handling incoming requests
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // Define a GET endpoint at the root path
  getHello(): string {
    return this.appService.getHello(); // Call the service method to get the greeting message
  }
}
