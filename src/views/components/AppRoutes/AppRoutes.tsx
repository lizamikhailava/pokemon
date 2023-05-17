import { Routes, Route } from "react-router-dom";
import { Paths } from "../../../utils/constants";
import { ErrorPage } from "../../pages/ErrorPage/ErrorPage";
import { HomePage } from "../../pages/HomePage/HomePage";
import { SearchPage } from "../../pages/SearchPage/SearchPage";

export const AppRoutes = () => (
  <Routes>
    <Route path={Paths.HOME} element={<HomePage />} />
    <Route path={Paths.SEARCH} element={<SearchPage />} />
    <Route path={Paths.ERROR} element={<ErrorPage />} />
  </Routes>
);
