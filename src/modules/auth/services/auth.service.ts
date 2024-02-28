import { Injectable } from '@nestjs/common';
import { CreateStoreDto } from '../payloads';
import { StoreService } from 'src/modules/store/services/store.service';
import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';
import { KeyService } from 'src/modules/key/services/key.service';
import utils from 'src/utils';

@Injectable()
export class AuthService {
  constructor(
    private storeService: StoreService,
    private keyService: KeyService,
  ) {}

  async createStore(data: CreateStoreDto) {
    const storeExisted = await this.storeService.checkStoreByEmail(data.email);
    if (storeExisted)
      return {
        status: 400,
        meta: {
          message: 'Store was registed',
        },
      };
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const store = await this.storeService.createNewStore({
      ...data,
      password: hashedPassword,
    });
    const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa' as any, {
      modulusLength: 4096,
      publicKeyEncoding: {
        type: 'pkcs1',
        format: 'pem',
      },
      privateKeyEncoding: {
        type: 'pkcs1',
        format: 'pem',
      },
    });
    const publicKeyString = await this.keyService.createNewKey(
      store._id,
      publicKey,
    );
    const { accessToken, refreshToken } = await utils.default.createTokenPair(
      {
        userId: store._id,
        email: store.email,
        roles: store.roles,
      },
      publicKeyString,
      privateKey,
    );

    return {
      code: 200,
      meta: {
        id: store._id,
        email: store.email,
        roles: store.roles,
        accessToken,
        refreshToken,
      },
    };
  }
}
