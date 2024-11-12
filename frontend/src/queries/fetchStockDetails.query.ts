import { axiosClient } from "./index.ts";
import { IStockPrice } from "../types/stocks.type.ts";

export async function fetchStockPrice(symbol: string): Promise<IStockPrice> {
  try {
    const response = await axiosClient.get(`stocks/price/${symbol}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching stock price:", error);
    throw error;
  }
}
