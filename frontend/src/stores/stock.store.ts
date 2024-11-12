import { action, makeObservable, observable } from "mobx";
import { IStockInfo } from "../types/stocks.type.ts";

class StockStore {
  stock: IStockInfo | null = null;
  setStock(stock: IStockInfo) {
    this.stock = stock;
  }

  constructor() {
    makeObservable(this, {
      stock: observable,
      setStock: action,
    });
  }
}

export const stockStore = new StockStore();
