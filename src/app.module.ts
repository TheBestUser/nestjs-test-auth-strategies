import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BearerModule } from './bearer';

@Module({
  imports: [BearerModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}