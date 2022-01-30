import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<User> {
    //const user = await this.appService.createUser("Rhea");
    return this.appService.deleteUser(2);
  }
}
