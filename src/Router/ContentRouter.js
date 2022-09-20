import { Route, Routes } from "react-router-dom";
import Container from "../Components/Container"
import Profile from "../Pages/Profile/Profile";
import About from "../Pages/About/About";

const ContentRouter = () => {
  return (
    <Routes>
      <Route path={"about"} element={<About  />} />
      <Route path={"profile"} element={<Profile />} />
      <Route path={"*"} element={<Container />} />
    </Routes>
  );
};

export default ContentRouter;
