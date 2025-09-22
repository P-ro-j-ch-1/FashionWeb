import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/layout.js";
import HomePage from "./container/HomePage/HomePage.js";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        {/* các route khác sẽ thêm sau */}
      </Route>
    </Routes>
  );
}
