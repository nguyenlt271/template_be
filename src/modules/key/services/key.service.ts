import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Key } from '../schemas/key.schema';
import { Model, Types } from 'mongoose';

@Injectable()
export class KeyService {
  constructor(@InjectModel(Key.name) private keyModel: Model<Key>) {}

  async createNewKey(userId: Types.ObjectId | string, publicKey: any) {
    // To String public key => Object (rsa) => string
    const publicKeyString: string = publicKey.toString();
    const token = await this.keyModel.create({
      userId,
      publicKey,
    });
    return token ? publicKeyString : null;
  }
}
