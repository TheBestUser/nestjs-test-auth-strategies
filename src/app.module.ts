import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { BearerModule } from '@app/common/bearer';

@Module({
  imports: [BearerModule.forRoot(), AuthModule],
})
export class AppModule {}
