import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Container from "../components/Container";

const ContentRouter = () => {
  return (
    <Routes>
      <Route path={"*"} element={<Container />} />
    </Routes>
  );
};

export default ContentRouter;
