import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import configs from './configs';

@Module({
  imports: [MongooseModule.forRoot(configs.app.mongoUrl)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
