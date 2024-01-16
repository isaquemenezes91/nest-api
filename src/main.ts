import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { swagger } from './common/doc/swagger';
import { serverConfig } from './common/config/server.config';

async function bootstrap() {
  const appServerConfig = serverConfig();
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  swagger(app,appServerConfig.environment);
  await app.listen(3000);
}
bootstrap();
