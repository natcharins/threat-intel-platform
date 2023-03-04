import { FC, useState } from "react";
import { Layout, Typography, Space } from "antd";
const { Title } = Typography;
import styles from "./DataLeak.module.css";

const DataLeak: FC<{}> = () => {
  const [tab, setTab] = useState("data");

  return (
    <Layout>
      <Space>
        <Title level={2}>Data Leak</Title>
      </Space>
    </Layout>
  );
};

export default DataLeak;
