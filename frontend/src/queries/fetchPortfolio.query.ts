import { axiosClient } from "./index.ts";
import { IPortfolio } from "../types/portfolios.type.ts";

export async function fetchPortfolioQuery(
  userName: string,
): Promise<IPortfolio> {
  try {
    const response = await axiosClient.get(`portfolios/user/${userName}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching portfolio:", error);
    throw error;
  }
}
