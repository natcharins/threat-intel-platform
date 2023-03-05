import { FC, useState } from "react";
import { Table, Tag, Button, Space } from "antd";
import type { ColumnsType } from "antd/es/table";
import { TagType } from "@/models/Tag";

interface DataType {
  type: string;
  asset: string;
  ref: string;
  lastUpdated: string;
  status: TagType[];
}

const data: DataType = {
  type: "Internet Name - Unresolved",
  asset: "https://xxx-xxx.com",
  ref: "",
  lastUpdated: "2023-04-01 17:00:01",
  status: [{ name: "New", color: "processing" }]
};

const columns: ColumnsType<DataType> = [
  {
    title: "Data Type",
    dataIndex: "type",
    key: "type",
    filters: []
  },
  {
    title: "Assets",
    dataIndex: "asset",
    key: "asset"
  },
  {
    title: "Reference",
    dataIndex: "ref",
    key: "ref"
  },
  {
    title: "Last updated",
    dataIndex: "lastUpdated",
    key: "lastUpdated"
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    filters: [],
    render: (tags) => (
      <>
        {tags.map((tag: TagType) => {
          return (
            <Tag color={tag.color} key={tag.name}>
              {tag.name.toUpperCase()}
            </Tag>
          );
        })}
      </>
    )
  }
];

const Data: FC<{}> = () => {
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

  const mockData: DataType[] = [...new Array(15).fill(data)];

  return (
    <>
      <Space style={{ margin: "15px 0" }}>
        <Button type="primary">Export</Button>
      </Space>
      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection
        }}
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
