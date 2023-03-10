import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { Layout } from "antd";

import { wrapper } from "../redux/store";
import Header from "@/components/layouts/header/Header";
import SideBar from "@/components/layouts/sidebar/Sidebar";

const App = ({ Component, pageProps }: AppProps) => {
  const { store } = wrapper.useWrappedStore({});
  return (
    <Provider store={store}>
      <Layout style={{ height: "100vh" }}>
        <Header />
        <Layout>
          <SideBar />
          <Component {...pageProps} />
        </Layout>
      </Layout>
    </Provider>
  );
};

export default App;
