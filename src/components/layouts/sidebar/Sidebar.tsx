import { useState } from "react";
import Link from "next/link";
import { Layout, List } from "antd";
import { useRouter } from "next/router";

import styles from "./Sidebar.module.css";
import Icon from "@ant-design/icons";
import { HomeIcon } from "../../../../public/assets/icons/home";
import { AssetIcon } from "../../../../public/assets/icons/asset";
import { VirusIcon } from "../../../../public/assets/icons/virus";
import { ShieldIcon } from "../../../../public/assets/icons/shield";
import classNames from "classnames";

const { Sider } = Layout;

const menu = [
  { name: "Home", link: "/", icon: HomeIcon },
  { name: "Assets", link: "/assets", icon: AssetIcon },
  { name: "Compromised", link: "/compromised", icon: VirusIcon },
  { name: "Data Leak", link: "/data-leak", icon: ShieldIcon }
];

const SideBar = () => {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = (value: boolean) => {
    setCollapsed(value);
  };

  return (
    <Sider
      width={256}
      collapsed={collapsed}
      onMouseOver={() => toggleCollapse(false)}
      onMouseOut={() => toggleCollapse(true)}
      className={styles.navbar}
    >
      <List>
        {menu.map((v) => {
          return (
            <List.Item className={styles.navbar_item} key={v.name}>
              <Link
                href={v.link}
                className={classNames(
                  styles.link,
                  router.pathname === v.link && styles.link_active
                )}
              >
                <Icon component={v.icon} className={styles.icon} />
                {v.name}
              </Link>
            </List.Item>
          );
        })}
      </List>
    </Sider>
  );
};

export default SideBar;
