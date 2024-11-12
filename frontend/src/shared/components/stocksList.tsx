import React, { useCallback } from "react";
import { List, Typography } from "antd";
import { IStockInfo } from "../../types/stocks.type.ts";
import { Link } from "react-router-dom";
import { stockStore } from "../../stores/stock.store.ts";

interface StocksListProps {
  stocks: IStockInfo[];
}

export const StocksList: React.FC<StocksListProps> = ({ stocks }) => {
  const selectStock = useCallback((stock: IStockInfo) => {
    stockStore.setStock(stock);
  }, []);

  return (
    <div>
      <List
        style={{ maxHeight: "70vh", overflowY: "auto" }}
        bordered
        dataSource={stocks}
        renderItem={(stock) => (
          <Link onClick={() => selectStock(stock)} to={`/stock`}>
            <List.Item>
              <Typography.Text>
                {stock.symbol} - {stock.name}
              </Typography.Text>
            </List.Item>
          </Link>
        )}
      />
    </div>
  );
};
