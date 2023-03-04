import { Inter } from "next/font/google";
import { Layout, Typography } from "antd";

const { Title } = Typography;

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <Layout style={{ textAlign: "center" }}>
      <Title>Threat Intel Platform</Title>
    </Layout>
  );
};

export default Home;
