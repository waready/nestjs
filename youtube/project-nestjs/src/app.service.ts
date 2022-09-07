import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getUsers(): string[]{
    return ['peru','boivia','otro'];
  }
}
