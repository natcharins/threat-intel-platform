import { FC, useState, useEffect } from "react";
import { Layout, Typography, Tag, Space, Switch, Table, Button } from "antd";
import { ColumnsType } from "antd/es/table";

const { Title } = Typography;
import styles from "./Data.module.css";
import { DataType } from "@/models/DataLeak";
import { TagStatus } from "@/models/Tag";
import {
  CommentOutlined,
  DeleteOutlined,
  EditOutlined
} from "@ant-design/icons";

const columns: ColumnsType<DataType> = [
  {
    title: "Site",
    dataIndex: "site",
    key: "site"
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
    filters: [
      { text: "Public", value: "public" },
      { text: "Dark Web", value: "darkWeb" }
    ]
  },
  {
    title: "Source",
    dataIndex: "source",
    key: "source"
  },
  {
    title: "Ceyword",
    dataIndex: "keyword",
    key: "keyword"
  },
  {
    title: "Content",
    dataIndex: "content",
    key: "content"
  },
  {
    title: "Severity",
    key: "severity",
    dataIndex: "severity",
    filters: [],
    render: (value: string) => {
      return severityStatus.map((v) => {
        if (v.key === value) {
          return (
            <Tag color={v.color} key={v.name}>
              {v.name.toUpperCase()}
            </Tag>
          );
        }
      });
    }
  },
  {
    title: "Monitoring Status",
    key: "monitoringStatus",
    dataIndex: "monitoringStatus",
    filters: [],
    render: (value: string) => {
      return monitoringStatus.map((v) => {
        if (v.key === value) {
          return (
            <Tag color={v.color} key={v.name}>
              {v.name.toUpperCase()}
            </Tag>
          );
        }
      });
    }
  },
  {
    title: "Date Feed",
    dataIndex: "date",
    key: "date"
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (value: boolean) => (
      <Switch checked={value} onChange={(v) => console.log("status: ", v)} />
    )
  },
  {
    title: "Action",
    dataIndex: "",
    key: "x",
    render: () => (
      <Space size="small">
        <CommentOutlined />
        <EditOutlined />
        <DeleteOutlined />
      </Space>
    )
  }
];

const mockData = {
  site: "Site Demo",
  type: "public",
  source: "-",
  keyword: "mobile",
  content: "https://xxx-xxx.com",
  severity: "high",
  monitoringStatus: "reported",
  date: "2023-04-01 17:00",
  status: true
};

const severityStatus: Array<TagStatus> = [
  { key: "critical", name: "Critical", color: "red" },
  { key: "high", name: "High", color: "volcano" },
  { key: "medium", name: "Medium", color: "gold" },
  { key: "low", name: "Low", color: "green" },
  { key: "veryLow", name: "Very Low", color: "cyan" }
];

const monitoringStatus: Array<TagStatus> = [
  { key: "reported", name: "Reported", color: "green" },
  { key: "close", name: "Close", color: "volcano" },
  { key: "inProgress", name: "Progress", color: "gold" }
];

const Dashboard: FC<{}> = () => {
  const [data, setData] = useState<Array<DataType>>();
  const [selectionType, setSelectionType] = useState<"checkbox" | "radio">(
    "checkbox"
  );

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    }
  };

  useEffect(() => {
    setData(new Array(15).fill(mockData));
  }, []);

  return (
    <Layout>
      <Title level={3}>Severity</Title>
      <Space className={styles.table_helper}>
        <Space size={2}>
          {severityStatus.map((v: TagStatus) => {
            return (
              <Tag color={v.color} style={{ margin: 0 }}>
                {v.name}
              </Tag>
            );
          })}
        </Space>
        <Button type="primary">Export</Button>
      </Space>
      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection
        }}
        columns={columns}
        dataSource={data}
        pagination={{
          defaultPageSize: 10,
          showSizeChanger: true,
          pageSizeOptions: ["10", "20", "30"]
        }}
      />
    </Layout>
  );
};

export default Dashboard;
