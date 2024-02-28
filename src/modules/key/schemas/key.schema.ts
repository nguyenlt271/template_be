import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema({
  timestamps: true,
})
export class Key {
  @Prop({ type: Types.ObjectId, required: true, ref: 'Store' })
  userId: Types.ObjectId;

  @Prop({ type: String, required: true })
  publicKey: String;

  @Prop({ type: Array, required: true, default: [] })
  privateKeys: [];
}

export const KeySchema = SchemaFactory.createForClass(Key);
