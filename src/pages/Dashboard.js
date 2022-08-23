import { Layout } from "antd";
import ContentRouter from "../Router/ContentRouter";
import "../Pages/Dashboard.scss";

const Dashboard = () => {
  return (

        <Layout.Content className={"app-content"}>
          <div className="content-background">
            <ContentRouter />
          </div>
        </Layout.Content>
  );
};

export default Dashboard;