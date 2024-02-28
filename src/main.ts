import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import morgan from 'morgan';
import helmet from 'helmet';
import compression from 'compression';
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

  // Running app
  await app.listen(configs.app.port, () => {
    Logger.log('Server is running at port: ', configs.app.port);
  });
}
bootstrap();
