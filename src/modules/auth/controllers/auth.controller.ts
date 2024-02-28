import { Body, Controller, Post } from '@nestjs/common';
import { CreateStoreDto } from '../payloads';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/store/signup')
  async storeSignUp(@Body() store: CreateStoreDto) {
    return this.authService.createStore(store);
  }
}
