import * as React from "react";
import { render } from "react-dom";
import { css, StyleSheet } from "aphrodite";
import { Layout, BackTop } from "antd";
import * as serviceWorker from "./serviceWorker";
import "antd/dist/antd.min.css";
import "./index.css";
import LinksList from "./Components/LinksList";
import { Links } from "./types/link";
import PullRefresh from "react-pullrefresh";

const { Header, Content } = Layout;

const styles = StyleSheet.create({
  headerArea: {
    width: "100vw",
    height: "10vh",
  },
  headerTxt: {
    color: "#ffffff",
    textAlign: "center",
    position: "relative",
    top: "50%",
    transform: "translateY(-50%)",
  },
  contentArea: {
    fontFamily: "sans-serif",
    width: "100vw",
    height: "100vh",
  },
});

const App = () => (
  <PullRefresh onRefresh={() => window.location.reload()}>
    <div className={css(styles.contentArea)}>
      <Layout>
        <Header className={css(styles.headerArea)}>
          <h2 className={css(styles.headerTxt)}>ConnecTouch Mobile</h2>
        </Header>
        <Content>
          <LinksList
            defaultState={{
              isActivated: false,
              filter: ``,
              links: [] as Array<Links>,
              limit: null,
            }}
          />
        </Content>
        <BackTop />
      </Layout>
    </div>
  </PullRefresh>
);

render(<App />, document.getElementById("root"));

serviceWorker.register();
