import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { StoreModule } from '../store/store.module';
import { KeyModule } from '../key/key.module';

@Module({
  imports: [StoreModule, KeyModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
