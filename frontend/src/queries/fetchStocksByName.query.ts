import { axiosClient } from "./index.ts";
import { IStockInfo } from "../types/stocks.type.ts";

export async function fetchStocksByName(name: string): Promise<IStockInfo[]> {
  try {
    const response = await axiosClient.get(`stocks/search/${name}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching stocks:", error);
    throw error;
  }
}
