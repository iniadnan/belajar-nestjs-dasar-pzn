import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { response } from 'express';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be able to say hello', () => {
    const response = service.sayHello('Adnan');
    expect(response).toBe('Hello Adnan');
  });
});
