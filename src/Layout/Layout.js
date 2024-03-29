import { Layout } from "antd";
import AppHeader from "../Components/Header/AppHeader";
import Router from "../Router/Router";
import "./Layout.scss";

const AppLayout = () => {
  return (
    <Layout className={"app-layout"}>
        <AppHeader/>
        <Router />
    </Layout>
  );
};

export default AppLayout;