import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Dashboard from "../pages/Dashboard";

const Router = () => {
  return (
    <Routes>
      <Route path={"*"} element={<NotFound />} />
      <Route path={"/home/*"} element={<Dashboard />} />
    </Routes>

  );
};

export default Router;
