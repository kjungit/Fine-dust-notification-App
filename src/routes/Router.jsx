import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Common/Layout";
import FavoriteArea from "../pages/FavoriteArea";
import MyArea from "../pages/MyArea";
import SearchArea from "../pages/SearchArea";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="myArea" element={<MyArea />} />
        <Route path="searchArea" element={<SearchArea />} />
        <Route path="favoriteArea" element={<FavoriteArea />} />
      </Route>
    </Routes>
  );
}

export default Router;
