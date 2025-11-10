import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
	const config = app.get(ConfigService)

  const logger = new Logger(AppModule.name)

  app.useGlobalPipes(
		new ValidationPipe({
			transform: true
		})
	)


  const PORT = config.getOrThrow<number>('HTTP_PORT')
  const HOST = config.getOrThrow<string>('HTTP_HOST')
  
  app.enableCors({
	origin: true,
	credentials: true
  })
try {
		await app.listen(PORT)

		logger.log(`🚀 Server is running at: ${HOST}`)
	} catch (error) {
		logger.error(`❌ Failed to start server: ${error.message}`, error)
		process.exit(1)
	}
}

bootstrap();
