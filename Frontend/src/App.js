import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./container/Header/Header";
import Footer from "./container/Footer/Footer";
import HomePage from "./container/HomePage/HomePage";
import "./css/App.css";
import LoginWebPage from "./container/Login/LoginWebPage";
import ShopPage from "./container/Shop/ShopPage";
import HomePageAdmin from "./container/System/HomePageAdmin";
import { Navigate } from "react-router-dom";


export default function App() {
  return (
    <div className="app">
      
      <main className="container" >
        <Routes>
          <Route
                    path="/"
                    element={
                        <>
                            <Header />
                            <HomePage />
                            <Footer />
                        </>
                    }
                />
          <Route
                    path="/login"
                    element={
                        <>
                            <Header />
                            <LoginWebPage />
                            <Footer />
                        </>
                    }
                />
          <Route
                    path="/shop"
                    element={
                        <>
                            <Header />
                            <ShopPage />
                            <Footer />
                        </>
                    }
                />
          {/* Protected Routes */}
                <Route
                    path="/admin/*"
                    element={
                        JSON.parse(localStorage.getItem("userData")) &&
                        (JSON.parse(localStorage.getItem("userData")).roleId ===
                            "R1" ||
                            JSON.parse(localStorage.getItem("userData"))
                                .roleId === "R4") ? (
                            <HomePageAdmin />
                        ) : (
                            <Navigate to="/login" />
                        )
                    }
                />
        </Routes>
      </main>
      
    </div>
  );
}
