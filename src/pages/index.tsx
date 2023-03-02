import { Inter } from "next/font/google";
import { Layout, Space } from "antd";
import styles from "@/styles/Home.module.css";

const { Header, Footer, Sider, Content } = Layout;

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
      <Layout>
        <Sider>Sider</Sider>
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </Space>
  );
};

export default Home;
