import { Menu } from "antd";
import { HomeOutlined, UserOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./Navigation.scss";

const Navigation = () => {
  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }

  const items = [
    getItem(
      <Link to={"/home"}>
        <span>Home</span>
      </Link>,
      "home",
      <HomeOutlined />
    ),
    getItem(
      <Link to={"/profile"}>
        <span>Profile</span>
      </Link>,
      "profile",
      <UserOutlined />
    ),
    getItem(
      <Link to={"/about"}>
        <span>About</span>
      </Link>,
      "about",
      <QuestionCircleOutlined />
    ),
  ];

  return (
    <Menu
      mode={"horizontal"}
      className={"navigation-gt"}
      items={items}
      theme={"light"}
    ></Menu>
  );
};

export default Navigation;
