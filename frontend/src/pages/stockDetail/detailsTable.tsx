import React from "react";
import { Descriptions } from "antd";
import { IStockPrice } from "../../types/stocks.type.ts";

interface DetailsTableProps {
  stockDetails: IStockPrice | null | undefined;
}

export const DetailsTable: React.FC<DetailsTableProps> = ({ stockDetails }) => {
  return (
    <Descriptions title="Stock Details" bordered>
      <Descriptions.Item label="Symbol">
        {stockDetails?.symbol}
      </Descriptions.Item>
      <Descriptions.Item label="Name">{stockDetails?.name}</Descriptions.Item>
      <Descriptions.Item label="Price">{stockDetails?.price}</Descriptions.Item>
      <Descriptions.Item label="Change %">
        {stockDetails?.changesPercentage}
      </Descriptions.Item>
      <Descriptions.Item label="Change">
        {stockDetails?.change}
      </Descriptions.Item>
      <Descriptions.Item label="Day Low">
        {stockDetails?.dayLow}
      </Descriptions.Item>
      <Descriptions.Item label="Day High">
        {stockDetails?.dayHigh}
      </Descriptions.Item>
      <Descriptions.Item label="Year High">
        {stockDetails?.yearHigh}
      </Descriptions.Item>
      <Descriptions.Item label="Year Low">
        {stockDetails?.yearLow}
      </Descriptions.Item>
      <Descriptions.Item label="Market Cap">
        {stockDetails?.marketCap}
      </Descriptions.Item>
      <Descriptions.Item label="Price Avg 50">
        {stockDetails?.priceAvg50}
      </Descriptions.Item>
      <Descriptions.Item label="Price Avg 200">
        {stockDetails?.priceAvg200}
      </Descriptions.Item>
      <Descriptions.Item label="Exchange">
        {stockDetails?.exchange}
      </Descriptions.Item>
      <Descriptions.Item label="Volume">
        {stockDetails?.volume}
      </Descriptions.Item>
      <Descriptions.Item label="Avg Volume">
        {stockDetails?.avgVolume}
      </Descriptions.Item>
      <Descriptions.Item label="Open">{stockDetails?.open}</Descriptions.Item>
      <Descriptions.Item label="Previous Close">
        {stockDetails?.previousClose}
      </Descriptions.Item>
      <Descriptions.Item label="EPS">{stockDetails?.eps}</Descriptions.Item>
      <Descriptions.Item label="PE">{stockDetails?.pe}</Descriptions.Item>
      <Descriptions.Item label="Earnings Announcement">
        {stockDetails?.earningsAnnouncement}
      </Descriptions.Item>
      <Descriptions.Item label="Shares Outstanding">
        {stockDetails?.sharesOutstanding}
      </Descriptions.Item>
      <Descriptions.Item label="Timestamp">
        {stockDetails?.timestamp
          ? new Date(stockDetails.timestamp * 1000).toLocaleString()
          : ""}
      </Descriptions.Item>
    </Descriptions>
  );
};
