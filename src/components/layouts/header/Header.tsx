import { FC } from "react";
import { Layout, Divider } from "antd";
const { Header } = Layout;

const HeaderComponent: FC<{}> = () => {
  return (
    <Header>
      <Divider style={{ width: "100%", marginTop: 0, marginBottom: 0 }} />
    </Header>
  );
};

export default HeaderComponent;
