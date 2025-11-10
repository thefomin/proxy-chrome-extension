import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { IS_DEV_ENV } from './shared/is-dev'
import { PrismaModule } from './infra/prisma.module'
import { ApiModule } from './api/api.module'


@Module({
	imports: [
		ConfigModule.forRoot({
			ignoreEnvFile: !IS_DEV_ENV,
			isGlobal: true
		}),
		PrismaModule,
		ApiModule
	],
	controllers: [],
	providers: []
})
export class AppModule {}