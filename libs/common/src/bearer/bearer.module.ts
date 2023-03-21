import { DynamicModule, Global, Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { PassportModule } from '@nestjs/passport';
import { JwtAuthGuard, JwtStrategy, JwtRefreshStrategy } from './strategies';

@Global()
@Module({})
export class BearerModule {
  public static forRoot(): DynamicModule {
    return {
      global: true,
      module: BearerModule,
      imports: [
        // PassportModule.register({ defaultStrategy: JWT }),
      ],
      providers: [
        JwtStrategy,
        JwtRefreshStrategy,
        {
          provide: APP_GUARD,
          useClass: JwtAuthGuard,
        },
      ],
      // exports: [PassportModule],
    };
  }
}
