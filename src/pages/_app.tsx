import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { Layout } from "antd";
import Head from "next/head";

import { wrapper } from "../redux/store";
import Header from "@/components/layouts/header/Header";
import SideBar from "@/components/layouts/sidebar/Sidebar";

const App = ({ Component, pageProps }: AppProps) => {
  const { store } = wrapper.useWrappedStore({});
  return (
    <Provider store={store}>
      <Head>
        <title>Threat Intel Platform</title>
      </Head>
      <Layout style={{ height: "100vh" }}>
        <Header />
        <Layout>
          <SideBar />
          <Layout style={{ padding: 15 }}>
            <Component {...pageProps} />
          </Layout>
        </Layout>
      </Layout>
    </Provider>
  );
};

export default App;
