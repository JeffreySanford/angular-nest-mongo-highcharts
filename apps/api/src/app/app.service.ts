import { Injectable } from '@nestjs/common';
import { Message } from '@broken-leaf/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
