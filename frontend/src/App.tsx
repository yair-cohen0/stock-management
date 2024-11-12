import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { AccountBookFilled, UserOutlined } from "@ant-design/icons";
import { Gallery } from "./pages/gallery";
import { Portfolio } from "./pages/portfolio";
import { LoginModal } from "./pages/login";
import { Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Header } from "antd/es/layout/layout";
import { StockDetail } from "./pages/stockDetail";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App: React.FC = () => {
  const menuItems = [
    {
      key: "1",
      icon: <UserOutlined />,
      label: <Link to="/">Gallery</Link>,
    },
    {
      key: "2",
      icon: <AccountBookFilled />,
      label: <Link to="/portfolio">Portfolio</Link>,
    },
  ];

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider collapsible>
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["1"]}
              items={menuItems}
            ></Menu>
          </Sider>
          <Layout>
            <Header
              style={{ background: "#fff", padding: 0, textAlign: "center" }}
            >
              <h2>Stock Management</h2>
            </Header>
            <LoginModal />
            <Content
              style={{ margin: "24px 16px", padding: 24, background: "#fff" }}
            >
              <Routes>
                <Route path="/" element={<Gallery />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/stock" element={<StockDetail />} />
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
