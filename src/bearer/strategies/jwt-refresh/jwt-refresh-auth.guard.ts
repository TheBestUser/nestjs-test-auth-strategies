import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JWT_REFRESH } from './jwt-refresh.constants';

@Injectable()
export class JwtRefreshAuthGuard extends AuthGuard(JWT_REFRESH) {
  canActivate(context: ExecutionContext) {
    if (context.getType() === 'rpc') {
      return true;
    }

    return super.canActivate(context);
  }
}
