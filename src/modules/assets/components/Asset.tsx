import { FC } from "react";
import { Select, Table, Tag, Button, Space } from "antd";
import type { ColumnsType } from "antd/es/table";
import { TagType } from "@/models/Tag";
import {
  DeleteOutlined,
  FilterOutlined,
  PlusOutlined,
  SearchOutlined
} from "@ant-design/icons";

interface DataType {
  site: string;
  asset: string;
  ip: string;
  cpe: TagType[];
  company: string;
  specification: string;
  version: string;
  etc: string;
  contact: string;
  system: string;
}

const data: DataType = {
  site: "Site Demo",
  asset: "https://xxx-xxx.com",
  ip: "127.0.0.1",
  cpe: [{ name: "22" }],
  company: "Microsoft",
  specification: "window_server_2003",
  version: "-",
  etc: "*",
  contact: "test@test.com",
  system: "Windows"
};

const columns: ColumnsType<DataType> = [
  {
    title: "Site",
    dataIndex: "site",
    key: "site",
    filters: []
  },
  {
    title: "Asset",
    dataIndex: "asset",
    key: "asset"
  },
  {
    title: "IP Address",
    dataIndex: "ip",
    key: "ip"
  },
  {
    title: "CPE",
    dataIndex: "cpe",
    key: "cpe",
    render: (tags) => (
      <>
        {tags.map((tag: TagType) => {
          return <Tag key={tag.name}>{tag.name.toUpperCase()}</Tag>;
        })}
      </>
    )
  },
  {
    title: "Company",
    dataIndex: "company",
    key: "company"
  },
  {
    title: "Specification",
    dataIndex: "specification",
    key: "specification"
  },
  {
    title: "Version",
    dataIndex: "version",
    key: "version"
  },
  {
    title: "",
    dataIndex: "etc",
    key: "etc",
    align: "center"
  },
  {
    title: "Contact",
    dataIndex: "contact",
    key: "contact"
  },
  {
    title: "Operating System",
    dataIndex: "system",
    key: "system"
  },
  {
    title: "Action",
    dataIndex: "",
    key: "x",
    render: () => (
      <Space size="small">
        <DeleteOutlined />
      </Space>
    ),
    align: "center"
  }
];

const Data: FC<{}> = () => {
  const mockData: DataType[] = [...new Array(15).fill(data)];

  return (
    <>
      <Space style={{ margin: "15px 0" }}>
        <Select
          defaultValue="siteDemo"
          style={{ width: 120 }}
          options={[{ value: "siteDemo", label: "Site Demo" }]}
        />
        <Button type="primary">
          <PlusOutlined />
          Add
        </Button>
        <Button type="primary">
          <SearchOutlined />
          Scan
        </Button>
        <Button type="primary">
          <FilterOutlined />
          Filter
        </Button>
      </Space>
      <Table
        columns={columns}
        dataSource={mockData}
        pagination={{
          defaultPageSize: 10,
          showSizeChanger: true,
          pageSizeOptions: ["10", "20", "30"]
        }}
      />
    </>
  );
};

export default Data;
