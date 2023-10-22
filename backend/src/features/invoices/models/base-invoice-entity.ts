import { Sequelize, DataTypes, DateOnlyDataType, Model } from 'sequelize';
import { AppDB } from '../../../db';
import { ValidInvoiceCurrency } from '../types/valid-invoice-currencies';
import { ValidInvoiceStatus } from '../types/valid-invoice-statuses';
import { BaseModel } from '../../shared/models/base-entity';
import { InvoiceCurrencies } from '../enums/invoice-currencies.enum';
import { InvoiceStatuses } from '../enums/invoice-statuses.enum';

interface BaseInvoiceModel {
  invoice_number: string;
  total: string;
  currency: ValidInvoiceCurrency;
  invoice_date: DateOnlyDataType;
  due_date: DateOnlyDataType;
  vendor_name: string;
  remittance_address: string;
  status: ValidInvoiceStatus;
}

interface InvoiceInstance extends Model<BaseInvoiceModel>, BaseInvoiceModel {}

export const Invoice = AppDB.define<
  InvoiceInstance,
  BaseInvoiceModel & BaseModel
>('Invoice', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  invoice_number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  total: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  currency: {
    type: DataTypes.ENUM(...Object.values(InvoiceCurrencies)),
    allowNull: false,
  },
  invoice_date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  due_date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  vendor_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  remittance_address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM(...Object.values(InvoiceStatuses)),
    allowNull: false,
    defaultValue: 'PENDING',
  },
});

// Synchronizes the model with the database (creates table if doesn't exist)
AppDB.sync();
