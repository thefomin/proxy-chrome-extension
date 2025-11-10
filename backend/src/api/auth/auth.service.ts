import { PrismaService } from '@/infra/prisma.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(private prismaService: PrismaService) {}

  async register() {
    const authId = Array.from({ length: 16 }, () =>
      Math.floor(Math.random() * 10)
    ).join('');

    const user = await this.prismaService.extensionAuth.create({
      data: { authId },
    });

    return { authId: user.authId };
  }

 public async findUserById(authId: string) {
  console.log('auth ', JSON.stringify(authId))
    return await this.prismaService.extensionAuth.findUnique({
      where: { authId },
    });
  }

  async login(dto: { authId: string }) {
    const user = await this.findUserById(dto.authId);

    if (!user) {
      throw new UnauthorizedException(
        'Пользователя с таким ключом не существует.'
      );
    }

    return user;
  }
}
