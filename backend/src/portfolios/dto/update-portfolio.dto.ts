import { IPortfolio } from '../portfolios.type';
import { IStockInfo } from '../../stocks/stocks.type';

export class UpdatePortfolioDto implements Pick<IPortfolio, 'userName'> {
  userName: string;
  stock: IStockInfo;
}
