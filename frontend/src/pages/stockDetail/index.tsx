import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchStockPrice } from "../../queries/fetchStockDetails.query.ts";
import { Descriptions } from "antd";

export const StockDetail: React.FC = () => {
  const params = useParams();

  const stockDetailQuery = useQuery({
    queryKey: ["stockDetail", params.symbol],
    queryFn: async () =>
      params.symbol ? fetchStockPrice(params.symbol) : Promise.resolve(null),
  });

  return (
    <>
      {stockDetailQuery.isLoading ? (
        <div>Loading...</div>
      ) : (
        <Descriptions title="Stock Details" bordered>
          <Descriptions.Item label="Symbol">
            {stockDetailQuery.data?.symbol}
          </Descriptions.Item>
          <Descriptions.Item label="Name">
            {stockDetailQuery.data?.name}
          </Descriptions.Item>
          <Descriptions.Item label="Price">
            {stockDetailQuery.data?.price}
          </Descriptions.Item>
          <Descriptions.Item label="Change %">
            {stockDetailQuery.data?.changesPercentage}
          </Descriptions.Item>
          <Descriptions.Item label="Change">
            {stockDetailQuery.data?.change}
          </Descriptions.Item>
          <Descriptions.Item label="Day Low">
            {stockDetailQuery.data?.dayLow}
          </Descriptions.Item>
          <Descriptions.Item label="Day High">
            {stockDetailQuery.data?.dayHigh}
          </Descriptions.Item>
          <Descriptions.Item label="Year High">
            {stockDetailQuery.data?.yearHigh}
          </Descriptions.Item>
          <Descriptions.Item label="Year Low">
            {stockDetailQuery.data?.yearLow}
          </Descriptions.Item>
          <Descriptions.Item label="Market Cap">
            {stockDetailQuery.data?.marketCap}
          </Descriptions.Item>
          <Descriptions.Item label="Price Avg 50">
            {stockDetailQuery.data?.priceAvg50}
          </Descriptions.Item>
          <Descriptions.Item label="Price Avg 200">
            {stockDetailQuery.data?.priceAvg200}
          </Descriptions.Item>
          <Descriptions.Item label="Exchange">
            {stockDetailQuery.data?.exchange}
          </Descriptions.Item>
          <Descriptions.Item label="Volume">
            {stockDetailQuery.data?.volume}
          </Descriptions.Item>
          <Descriptions.Item label="Avg Volume">
            {stockDetailQuery.data?.avgVolume}
          </Descriptions.Item>
          <Descriptions.Item label="Open">
            {stockDetailQuery.data?.open}
          </Descriptions.Item>
          <Descriptions.Item label="Previous Close">
            {stockDetailQuery.data?.previousClose}
          </Descriptions.Item>
          <Descriptions.Item label="EPS">
            {stockDetailQuery.data?.eps}
          </Descriptions.Item>
          <Descriptions.Item label="PE">
            {stockDetailQuery.data?.pe}
          </Descriptions.Item>
          <Descriptions.Item label="Earnings Announcement">
            {stockDetailQuery.data?.earningsAnnouncement}
          </Descriptions.Item>
          <Descriptions.Item label="Shares Outstanding">
            {stockDetailQuery.data?.sharesOutstanding}
          </Descriptions.Item>
          <Descriptions.Item label="Timestamp">
            {stockDetailQuery.data?.timestamp
              ? new Date(
                  stockDetailQuery.data.timestamp * 1000,
                ).toLocaleString()
              : ""}
          </Descriptions.Item>
        </Descriptions>
      )}
    </>
  );
};
