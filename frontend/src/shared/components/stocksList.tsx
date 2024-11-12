import React from "react";
import { List, Typography } from "antd";
import { IStockInfo } from "../../types/stocks.type.ts";
import { Link } from "react-router-dom";

interface StocksListProps {
  stocks: IStockInfo[];
}

export const StocksList: React.FC<StocksListProps> = ({ stocks }) => {
  return (
    <div>
      <Typography.Title level={3}>Stocks List</Typography.Title>
      <List
        bordered
        dataSource={stocks}
        renderItem={(stock) => (
          <Link to={`/stock/${stock.symbol}`}>
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
