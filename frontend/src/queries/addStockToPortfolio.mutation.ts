import { axiosClient } from "./index.ts";
import { IStockInfo } from "../types/stocks.type.ts";
import { IPortfolio } from "../types/portfolios.type.ts";

export async function addStockToPortfolioMutation(
  stock: IStockInfo,
  userName: string,
): Promise<IPortfolio> {
  try {
    const response = await axiosClient.put(`portfolios/add-stock`, {
      stock,
      userName,
    });
    return response.data;
  } catch (error) {
    console.error("Error add stock to portfolio:", error);
    throw error;
  }
}
