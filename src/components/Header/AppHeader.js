import React, { useState } from "react";
import { Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import Navigation from "../Navigation/Navigation";
import "./AppHeader.scss"

const AppHeader = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <Layout.Header className={"app-header"}>
      {/* <Link to={"/"}>
        <img className="logo-ts" src={logo} alt={"logo"} />
      </Link> */}
      <div className={"mobileHidden"}>
        <Navigation />
      </div>
      <div className="mobileVisible">
        <MenuOutlined style={{ fontSize: 20 }} onClick={showDrawer} />
        <Drawer
          placement="right"
          closable={true}
          onClose={onClose}
          visible={visible}
        >
          <Navigation />
        </Drawer>
      </div>
    </Layout.Header>
  );
};

export default AppHeader;
