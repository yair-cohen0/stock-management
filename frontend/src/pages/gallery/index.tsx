import React, { useState } from "react";
import { SearchBar } from "./searchBar.tsx";
import { useQuery } from "@tanstack/react-query";
import { fetchStocksByName } from "../../queries/fetchStocksByName.query.ts";
import { StocksList } from "../../shared/components/stocksList.tsx";
import { Divider, Typography } from "antd";

export const Gallery: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const stocksQuery = useQuery({
    queryKey: ["todos", searchTerm],
    queryFn: () => fetchStocksByName(searchTerm),
    enabled: !!searchTerm,
  });

  const handleSearch = (symbol: string) => {
    setSearchTerm(symbol);
  };

  return (
    <>
      <Typography.Title level={2}>Gallery</Typography.Title>
      <SearchBar handleSearch={handleSearch} />
      <Divider />
      {stocksQuery.isLoading ? (
        <p>Loading...</p>
      ) : (
        <StocksList stocks={stocksQuery.data || []} />
      )}
    </>
  );
};
