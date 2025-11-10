import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthAdapter } from '@/utils/validate-auth';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly authAdapter: AuthAdapter) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const authId = request.headers['x-auth-id']; // ключ передаётся в заголовке
    if (!authId) {
      throw new UnauthorizedException('Не указан ключ авторизации');
    }

    const user = await this.authAdapter.validateAuthId(authId);
    if (!user) {
      throw new UnauthorizedException('Неверный ключ авторизации');
    }

    // Можно сохранить пользователя в request, если нужно потом использовать
    request.user = user;

    return true;
  }
}
