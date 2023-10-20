import { Model } from 'sequelize';

export interface BaseModel {
  id: number;
  created_at: Date;
  last_modified_at: Date;
}

export interface InvoiceInstance extends Model<BaseModel>, BaseModel {}
