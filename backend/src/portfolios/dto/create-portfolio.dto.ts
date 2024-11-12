import { IPortfolio } from '../portfolios.type';
import { IStockInfo } from '../../stocks/stocks.type';

export class CreatePortfolioDto implements IPortfolio {
  userName: string;
  stocks: IStockInfo[];
}
