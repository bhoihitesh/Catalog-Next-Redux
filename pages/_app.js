import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Layout from "../Component/layout";
import { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./App/store";
import { useRouter } from "next/router";
import Login from "./login";
function MyApp({ Component, pageProps }) {
  let router = useRouter();
  console.log("router", router);
  useEffect(() => {
    import("../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  useEffect(() => {
    if (router.pathname === "/") {
      router.push("/login");
    }
  }, [router.pathname]);
  return (
    <>
      <Provider store={store}>
        {router.pathname === "/login" ? (
          <Login />
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </Provider>
    </>
  );
}

export default MyApp;
