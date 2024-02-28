import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { StoreStatus } from '../contants';

@Schema({
  timestamps: true,
})
export class Store {
  @Prop({ type: String, trim: true, maxlength: 150 })
  name: string;

  @Prop({ type: String, trim: true, unique: true })
  email: string;

  @Prop({ type: String, required: true })
  password: string;

  @Prop({ type: String, enum: [StoreStatus.Active, StoreStatus.UnActive] })
  status: string;

  @Prop({ type: Boolean, default: false })
  verify: boolean;

  @Prop({ type: Array, default: [] })
  roles: [];
}

export const StoreSchema = SchemaFactory.createForClass(Store);
