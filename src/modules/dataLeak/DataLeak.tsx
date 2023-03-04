import { FC } from "react";
import { Layout, Typography } from "antd";
import Dashboard from "./components/dashboard";
const { Title } = Typography;

const DataLeak: FC<{}> = () => {
  return (
    <Layout>
      <Title level={2}>Data Leak</Title>
      <Dashboard />
    </Layout>
  );
};

export default DataLeak;
