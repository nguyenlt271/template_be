import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Store } from '../schemas/store.schema';
import { Model } from 'mongoose';
import { CreateStoreDto } from '../payloads';


@Injectable()
export class StoreService {
  constructor(@InjectModel(Store.name) private storeModel: Model<Store>) {}

  async checkStoreByEmail(email: string) {
    return this.storeModel.findOne({ email }).lean();
  }

  async createNewStore(data: CreateStoreDto) {
    const store = await this.storeModel.create(data);
    return await store.save();
  }
}
