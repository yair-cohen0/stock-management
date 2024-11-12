import { axiosClient } from "./index.ts";
import { IStockInfo } from "../types/stocks.type.ts";
import { IPortfolio } from "../types/portfolios.type.ts";

export async function removeStockFromPortfolioMutation(
  stock: IStockInfo,
  userName: string,
): Promise<IPortfolio> {
  try {
    const response = await axiosClient.put(`portfolios/remove-stock`, {
      stock,
      userName,
    });
    return response.data;
  } catch (error) {
    console.error("Error remove stock from portfolio:", error);
    throw error;
  }
}
