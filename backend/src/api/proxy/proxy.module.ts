import { PrismaService } from '@/infra/prisma.service';
import { Module } from '@nestjs/common';
import { ProxyController } from './proxy.controller';
import { ProxyService } from './proxy.service';
import { AuthAdapter } from '@/utils/validate-auth';
import { AuthGuard } from '@/shared/auth.guard';

@Module({
  controllers: [ProxyController],
  providers: [ProxyService, PrismaService, AuthGuard,
		AuthAdapter],
})
export class ProxyModule {}
