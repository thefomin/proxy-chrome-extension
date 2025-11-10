import { Module } from '@nestjs/common'
import { AuthModule } from './auth/auth.module'
import { ProxyModule } from './proxy/proxy.module'
import { AuthGuard } from '@/shared/auth.guard'
import { AuthAdapter } from '@/utils/validate-auth'

@Module({
	imports: [
        AuthModule,
		ProxyModule
	],
	providers: [
		
	]
})
export class ApiModule {}