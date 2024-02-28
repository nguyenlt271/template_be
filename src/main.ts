import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';
import * as morgan from 'morgan';
import * as compression from 'compression';
import * as dotenv from 'dotenv';
import configs from './configs';

// Enable env
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Initial middleware
  app.use(morgan('dev'));
  app.use(helmet());
  app.use(compression());

  // Global Configs
  app.useGlobalPipes(new ValidationPipe());

  // Running app
  await app.listen(configs.app.port, () => {
    Logger.log(`Server is running at port: ${configs.app.port}`);
  });
}
bootstrap();
