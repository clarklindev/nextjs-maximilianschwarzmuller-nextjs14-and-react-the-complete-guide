import Layout from "../components/layout/layout";
import "@/styles/globals.css";

function App({ Component, pageProps }) {
  // Determine which layout to use based on the page
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  return getLayout(<Component {...pageProps} />);
}

export default App;
