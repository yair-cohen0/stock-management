import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { AccountBookFilled, UserOutlined } from "@ant-design/icons";
import { Gallery } from "./pages/gallery";
import { Portfolio } from "./pages/portfolio";
import { Login } from "./pages/login";
import { Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Header } from "antd/es/layout/layout";
import { StockDetail } from "./pages/stockDetail";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<AccountBookFilled />}>
              <Link to="/portfolio">Portfolio</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/gallery">Gallery</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header
            style={{ background: "#fff", padding: 0, textAlign: "center" }}
          >
            <h2>Stock Management</h2>
          </Header>
          <Content
            style={{ margin: "24px 16px", padding: 24, background: "#fff" }}
          >
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/stock/:symbol" element={<StockDetail />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
