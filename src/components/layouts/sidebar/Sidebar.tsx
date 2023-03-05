import { ComponentType, SVGProps, useState } from "react";
import Link from "next/link";
import { Layout, Menu, MenuProps } from "antd";
import { useRouter } from "next/router";

import styles from "./Sidebar.module.css";
import Icon, {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined
} from "@ant-design/icons";
import { HomeIcon } from "../../../../public/assets/icons/home";
import { AssetIcon } from "../../../../public/assets/icons/asset";
import { VirusIcon } from "../../../../public/assets/icons/virus";
import { ShieldIcon } from "../../../../public/assets/icons/shield";
import classNames from "classnames";

const { Sider } = Layout;

interface MenuLink {
  link: string;
  name: string;
}

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key,
  icon?: React.ReactNode | null,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type
  } as MenuItem;
}

const SideBar = () => {
  const router = useRouter();

  const getLink = (v: MenuLink) => {
    return (
      <Link
        href={v.link}
        className={classNames(
          styles.link,
          router.pathname === v.link && styles.link_active
        )}
      >
        {v.name}
      </Link>
    );
  };

  const getIcon = (icon: ComponentType<SVGProps<SVGSVGElement>>) => {
    return <Icon component={icon} className={styles.icon} />;
  };

  const items: MenuProps["items"] = [
    getItem(getLink({ name: "Home", link: "/" }), "home", getIcon(HomeIcon)),

    getItem(
      getLink({ name: "Assets", link: "/assets" }),
      "assets",
      getIcon(AssetIcon),
      [getItem("Hosts", "hosts", null), getItem("Keywords", "keywords", null)]
    ),

    getItem(
      getLink({ name: "Compromised", link: "/compromised" }),
      "compromised",
      getIcon(VirusIcon)
    ),
    getItem(
      getLink({ name: "Data Leak", link: "/data-leak" }),
      "data-leak",
      getIcon(ShieldIcon)
    )
  ];

  return (
    <Sider width={256} className={styles.navbar}>
      <Menu
        style={{ width: 256 }}
        defaultSelectedKeys={["home"]}
        items={items}
        mode="inline"
        inlineCollapsed={false}
      />
    </Sider>
  );
};

export default SideBar;
