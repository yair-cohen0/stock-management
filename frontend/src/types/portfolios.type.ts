import { IStockInfo } from "./stocks.type.ts";

export interface IPortfolio {
  userName: string;
  stocks: IStockInfo[];
}
