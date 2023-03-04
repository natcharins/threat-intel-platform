import { useState } from "react";
import Link from "next/link";
import { Layout, List } from "antd";
import styles from "./Sidebar.module.css";

const { Sider } = Layout;

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = (value: boolean) => {
    setCollapsed(value);
  };

  return (
    <div className="w-full md:w-60">
      <Sider
        width={256}
        collapsed={collapsed}
        onMouseOver={() => toggleCollapse(false)}
        onMouseOut={() => toggleCollapse(false)}
        className={styles.navbar}
      >
        <List>
          <List.Item>
            <Link href="/">Home</Link>
          </List.Item>
          <List.Item>
            <Link href="/assets">Assets</Link>
          </List.Item>
        </List>
      </Sider>
    </div>
  );
};

export default SideBar;
