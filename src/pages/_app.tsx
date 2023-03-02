import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { wrapper } from "../redux/store";
import { Layout } from "antd";

const App = ({ Component, pageProps }: AppProps) => {
  const { store } = wrapper.useWrappedStore({});
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default App;
