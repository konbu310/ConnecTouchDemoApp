import * as React from "react";
import {render} from "react-dom";
import {css, StyleSheet} from "aphrodite";
import {Layout} from "antd";
import * as serviceWorker from './serviceWorker';
import "antd/dist/antd.css";
import './index.css';
import LinksList from "./Components/LinksList";
import {Links} from "./types/link";

const { Header, Content, Footer } = Layout;

const styles = StyleSheet.create({
    headerArea: {
        color: "	#ffffff"
    },
    paragraphArea: {
        marginTop: "3%"
    },
    contentArea: {
        fontFamily: "sans-serif",
        textAlign: "center",
        width: "100%",
        height: "100%"
    }
});

const App = () => (
    <div className={css(styles.contentArea)}>
        <Layout>
            <Header>
                <h1 className={css(styles.headerArea)}>ConnecTouch Mobile</h1>
            </Header>
            <Content>
                <h2 className={css(styles.paragraphArea)}>
                    ConnecTouchのデモアプリです
                </h2>
                <LinksList defaultState={{isActivated: false, filter: ``, links: [] as Array<Links>}}/>
            </Content>
            <Footer>
                <a href="https://github.com/Hykwtakumin/ConnecTouchDemoApp">view source</a>
            </Footer>
        </Layout>
    </div>
);

render(<App />, document.getElementById("root"));

serviceWorker.unregister();
