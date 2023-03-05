import { FC, useState } from "react";
import { Layout, Typography, Tabs } from "antd";
const { Title } = Typography;
import Data from "./components/Data";

const items = [
  { key: "pverview", label: "Overview", children: "overview" },
  { key: "data", label: "Data", children: <Data /> },
  { key: "asset", label: "Asset", children: "asset" }
];

const Assets: FC<{}> = () => {
  const [tab, setTab] = useState("data");

  const changeTab = (key: string) => {
    setTab(key);
  };

  const currentTabName = () => {
    const index = items.findIndex((v) => v.key === tab);
    return items[index].label;
  };

  return (
    <>
      <Title level={2}>{currentTabName()}</Title>
      <Tabs defaultActiveKey={tab} items={items} onChange={changeTab} />
    </>
  );
};

export default Assets;
