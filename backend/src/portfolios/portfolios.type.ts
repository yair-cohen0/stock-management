import { IStockInfo } from '../stocks/stocks.type';

export interface IPortfolio {
  userName: string;
  stocks: IStockInfo[];
}
