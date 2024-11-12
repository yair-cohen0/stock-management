import { IPortfolio } from '../portfolios.type';

export class CreatePortfolioDto implements IPortfolio {
  userName: string;
  stocks: string[];
}
