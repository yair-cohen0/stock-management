import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { IPortfolio } from './portfolios.type';
import { IStockInfo } from '../stocks/stocks.type';

export type PortfolioDocument = HydratedDocument<IPortfolio>;

@Schema()
class StockInfo implements IStockInfo {
  @Prop()
  symbol: string;

  @Prop()
  name: string;

  @Prop()
  currency: string;

  @Prop()
  stockExchange: string;

  @Prop()
  exchangeShortName: string;
}

@Schema({
  collection: 'portfolios',
  toJSON: {
    transform: (_, ret) => {
      ret.id = ret._id;
      delete ret._id;
    },
  },
})
export class Portfolio implements IPortfolio {
  @Prop()
  userName: string;

  @Prop([StockInfo])
  stocks: IStockInfo[];
}

export const PortfolioScheme = SchemaFactory.createForClass(Portfolio);
