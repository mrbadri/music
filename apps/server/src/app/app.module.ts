import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MusicGateway } from './music.gateway';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, MusicGateway],
})
export class AppModule {}
