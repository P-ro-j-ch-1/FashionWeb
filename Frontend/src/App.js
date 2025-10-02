import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./container/Header/Header";
import Footer from "./container/Footer/Footer";
import HomePage from "./container/HomePage/HomePage";
import "./css/App.css";
import LoginWebPage from "./container/Login/LoginWebPage";


export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="container" style={{ minHeight: "70vh", padding: "24px 0" }}>
        <Routes>
          <Route index element={<HomePage />} />
          <Route
                    path="/login"
                    element={
                        <>
                            <LoginWebPage />
                        </>
                    }
                />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
