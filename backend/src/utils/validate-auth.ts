// shared/adapters/auth.adapter.ts
import { PrismaService } from '@/infra/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthAdapter {
  constructor(private prisma: PrismaService) {}

  async validateAuthId(authId: string) {
    if (!authId) return null;

    return await this.prisma.extensionAuth.findUnique({
      where: { authId },
    });
  }
}
