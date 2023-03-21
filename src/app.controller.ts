import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtRefreshAuthGuard } from './bearer';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() { user }: any): string {
    return user;
  }

  @Post('refresh')
  @UseGuards(JwtRefreshAuthGuard)
  refreshToken(@Req() { user }: any) {
    return user;
  }
}
