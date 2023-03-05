import { FC } from "react";
import { Layout, Typography } from "antd";
import Dashboard from "./components/Dashboard";
import Data from "./components/Data";
const { Title } = Typography;

const DataLeak: FC<{}> = () => {
  return (
    <Layout>
      <Title level={2}>Data Leak</Title>
      <Dashboard />
      <Data />
    </Layout>
  );
};

export default DataLeak;
