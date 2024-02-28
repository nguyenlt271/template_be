import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import configs from './configs';
import { AuthModule } from './modules/auth/auth.module';
import { StoreModule } from './modules/store/store.module';
import { KeyModule } from './modules/key/key.module';

@Module({
  imports: [
    MongooseModule.forRoot(configs.app.mongoUrl),
    AuthModule,
    StoreModule,
    KeyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
