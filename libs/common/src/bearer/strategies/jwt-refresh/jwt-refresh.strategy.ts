import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JWT_REFRESH } from './jwt-refresh.constants';

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(
  Strategy,
  JWT_REFRESH,
) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromBodyField('refreshToken'),
      ignoreExpiration: false,
      secretOrKey: 'E/t8neZEVXyNx+h7',
    });
  }

  validate(payload: any) {
    if (!payload.user) {
      throw new UnauthorizedException();
    }

    return JSON.parse(payload.user);
  }
}
