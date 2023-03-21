import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { JwtRefreshAuthGuard, PublicRoute } from '@app/common/bearer';

@Controller('auth')
export class AuthController {
  @Get()
  // uses APP_GUARD
  getUserWithAccessToken(@Req() { user }: any): string {
    return user;
  }

  @PublicRoute()
  @Post('refresh')
  @UseGuards(JwtRefreshAuthGuard)
  getUserWithRefreshToken(@Req() { user }: any) {
    return user;
  }
}
