import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../container/Header/Header.js";
import Footer from "../container/Footer/Footer.js";

export default function Layout() {
  return (
    <div className="app-shell">
      <Header />
      <main className="container" style={{minHeight:"70vh", padding:"24px 0"}}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
