import { Injectable } from '@nestjs/common';

@Injectable()
export class RabbitMQService {
  async sendEvent(event: string, payload: any): Promise<void> {
    console.log(`RabbitMQ event sent: ${event}`, payload);
  }
}
