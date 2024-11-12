import React from "react";
import { Input } from "antd";

const { Search } = Input;

interface SearchBarProps {
  handleSearch: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ handleSearch }) => {
  return (
    <>
      <Search
        placeholder="Enter search text"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={handleSearch}
      />
    </>
  );
};
