import React from "react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Layout_ } from "./shared/components/layout.tsx";

const App: React.FC = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout_ />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
