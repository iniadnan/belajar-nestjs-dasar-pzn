import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  send() {
    console.info('send email');
  }
}

export const mailService = new MailService();
