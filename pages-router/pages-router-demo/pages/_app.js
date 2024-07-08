import Head from "next/head";

import Layout from "../components/layout/layout";
import "@/styles/globals.css";
import { NotificationContextProvider } from "../store/notification-context";

function App({ Component, pageProps }) {
  // Determine which layout to use based on the page
  const getLayout =
    Component.getLayout ||
    ((page) => (
      <Layout>
        <Head>
          <title>default title for all pages</title>
          <meta
            name="description"
            content="default description for all pages"
          />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        {page}
      </Layout>
    ));

  return (
    <NotificationContextProvider>
      {getLayout(<Component {...pageProps} />)}
    </NotificationContextProvider>
  );
}

export default App;
