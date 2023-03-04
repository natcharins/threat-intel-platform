import { FC } from "react";
import Header from "@/components/layouts/header/Header";
import SideBar from "@/components/layouts/sidebar/Sidebar";
import { Layout } from "antd";

const { Content } = Layout;

interface Props {
  children: React.ReactNode;
}

const Main: FC<Props> = ({ children }) => {
  return (
    <Layout className="flex flex-col" style={{ height: "100vh" }}>
      <Header />
      <Layout className="flex flex-col md:flex-row flex-1">
        <SideBar />
        <Content className="flex-1">{children}</Content>
      </Layout>
    </Layout>
  );
};

export default Main;
