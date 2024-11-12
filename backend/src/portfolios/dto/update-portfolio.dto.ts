import { IPortfolio } from '../portfolios.type';

export class UpdatePortfolioDto implements Pick<IPortfolio, 'userName'> {
  userName: string;
  stock: string;
}
