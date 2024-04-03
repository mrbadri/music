import { Test, TestingModule } from '@nestjs/testing';
import { MusicGateway } from './music.gateway';

describe('MusicGateway', () => {
  let gateway: MusicGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MusicGateway],
    }).compile();

    gateway = module.get<MusicGateway>(MusicGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
