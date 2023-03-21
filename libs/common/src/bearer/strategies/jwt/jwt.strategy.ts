import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JWT } from './jwt.constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, JWT) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'E/t8neZEVXyNx+h7',
    });
  }

  validate(payload) {
    if (!payload.user) {
      throw new UnauthorizedException();
    }

    return JSON.parse(payload.user);
  }
}
