import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import morgan from 'morgan';
import helmet from 'helmet';
import compression from 'compression';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Initial middleware
  app.use(morgan('dev'));
  app.use(helmet());
  app.use(compression());

  // Running app
  await app.listen(3000, () => {
    Logger.log('Server is running at port: 3000');
  });
}
bootstrap();
