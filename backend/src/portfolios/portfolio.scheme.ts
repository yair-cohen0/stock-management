import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { IPortfolio } from './portfolios.type';

export type PortfolioDocument = HydratedDocument<IPortfolio>;

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

  @Prop([String])
  stocks: string[];
}

export const PortfolioScheme = SchemaFactory.createForClass(Portfolio);
