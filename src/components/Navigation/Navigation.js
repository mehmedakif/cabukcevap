import { Menu, Avatar } from "antd";
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
      <Link
        to={"/profile"}>
        <Avatar src="https://joeschmoe.io/api/v1/random" />
      </Link>,      
    ),
    getItem(
      <Link
        className="styled-button"
        to={"/home"}>
        <HomeOutlined />
        <span>Home</span>
      </Link>,
      "home",
      
    ),
    getItem(
      <Link 
      className="styled-button"
      to={"/profile"}>
        <UserOutlined />
        <span>Profile</span>
      </Link>,
      "profile",
    ),
    getItem(
      <Link 
        to={"/projects"}
        className="styled-button">
        <QuestionCircleOutlined />
        <span>Projects</span>
      </Link>,
      "projects",
    ),
    getItem(
      <Link 
        to={"/howto"}
        className="styled-button">
        <QuestionCircleOutlined />
        <span>How to</span>
      </Link>,
      "howto",
    ),
    getItem(
      <Link 
        to={"/about"}
        className="styled-button">
        <QuestionCircleOutlined />
        <span>About</span>
      </Link>,
      "about",
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
