import { Route, Routes } from "react-router-dom";
import NotFound from "../Pages/NotFound";
import Container from "../Components/Container";

const ContentRouter = () => {
  return (
    <Routes>
      <Route path={"*"} element={<Container />} />
    </Routes>
  );
};

export default ContentRouter;
