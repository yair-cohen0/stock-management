import { action, makeObservable, observable } from "mobx";
import { IPortfolio } from "../types/portfolios.type.ts";
import { fetchPortfolioQuery } from "../queries/fetchPortfolio.query.ts";
import { IStockInfo } from "../types/stocks.type.ts";
import { addStockToPortfolioMutation } from "../queries/addStockToPortfolio.mutation.ts";
import { removeStockFromPortfolioMutation } from "../queries/removeStockFromPortfolio.mutation.ts";

class PortfolioStore {
  portfolio: IPortfolio | null = null;
  async fetchPortfolio(userName: string) {
    this.portfolio = (await fetchPortfolioQuery(userName)) || {
      userName: userName,
      stocks: [],
    };
  }

  async addStockToPortfolio(stock: IStockInfo, userName: string) {
    this.portfolio = await addStockToPortfolioMutation(stock, userName);
  }

  async removeStockFromPortfolio(stock: IStockInfo, userName: string) {
    this.portfolio = await removeStockFromPortfolioMutation(stock, userName);
  }

  isStockInPortfolio(stock: IStockInfo) {
    return !!this.portfolio?.stocks.some((s) => s.symbol === stock.symbol);
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
