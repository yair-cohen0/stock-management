import { action, makeObservable, observable } from "mobx";
import { IPortfolio } from "../types/portfolios.type.ts";
import { fetchPortfolioQuery } from "../queries/fetchPortfolio.query.ts";
import { IStockInfo } from "../types/stocks.type.ts";
import { addStockToPortfolioMutation } from "../queries/addStockToPortfolio.mutation.ts";

class PortfolioStore {
  portfolio: IPortfolio | null = null;
  async fetchPortfolio(userName: string) {
    this.portfolio = (await fetchPortfolioQuery(userName)) ?? {
      userName: userName,
      stocks: [],
    };
  }

  async addStockToPortfolio(stock: IStockInfo, userName: string) {
    this.portfolio = await addStockToPortfolioMutation(stock, userName);
  }

  constructor() {
    makeObservable(this, {
      portfolio: observable,
      fetchPortfolio: action,
      addStockToPortfolio: action,
    });
  }
}

export const portfolioStore = new PortfolioStore();
