import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtRefreshAuthGuard, PublicRoute } from '@app/common/bearer';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() { user }: any): string {
    return user;
  }

  @PublicRoute()
  @Post('refresh')
  @UseGuards(JwtRefreshAuthGuard)
  refreshToken(@Req() { user }: any) {
    return user;
  }
}
