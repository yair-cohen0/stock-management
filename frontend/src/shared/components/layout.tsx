import Sider from "antd/es/layout/Sider";
import { Menu, Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { LoginModal } from "../../pages/login";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { Gallery } from "../../pages/gallery";
import { Portfolio } from "../../pages/portfolio";
import { StockDetail } from "../../pages/stockDetail";
import React from "react";
import { AccountBookFilled, UserOutlined } from "@ant-design/icons";

export const Layout_: React.FC = () => {
  const location = useLocation();

  const menuItems = [
    {
      key: "/",
      icon: <UserOutlined />,
      label: <Link to="/">Gallery</Link>,
    },
    {
      key: "/portfolio",
      icon: <AccountBookFilled />,
      label: <Link to="/portfolio">Portfolio</Link>,
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          selectedKeys={[location.pathname]}
          items={menuItems}
        ></Menu>
      </Sider>
      <Layout>
        <Header style={{ background: "#fff", padding: 0, textAlign: "center" }}>
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
  );
};
