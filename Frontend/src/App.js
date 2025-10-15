import "./css/App.css";
import Header from "./container/Header/Header";
import Footer from "./container/Footer/Footer";
import HomePage from "./container/HomePage/HomePage";
import ShopPage from "./container/Shop/ShopPage";
import HomePageAdmin from "./container/System/HomePageAdmin";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router";
import LoginWebPage from "./container/Login/LoginWebPage";
import UserHomePage from "./container/User/UserHomePage";
import ShopCartPage from "./container/ShopCart/ShopCartPage";
import DetailProductPage from "./container/DetailProduct/DetailProductPage";


function App() {
    return (
        <Router>
            <Routes>
                {/* Public Routes */}
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
                    path="/shop"
                    element={
                        <>
                            <Header />
                            <ShopPage />
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
                <Route
                    path="/user/*"
                    element={
                        JSON.parse(localStorage.getItem("userData")) ? (
                            <>
                                <Header />
                                <UserHomePage />
                                <Footer />
                            </>
                        ) : (
                            <Navigate to="/login" />
                        )
                    }
                />
                <Route
                    path="/shopcart"
                    element={
                        <>
                            <Header />
                            <ShopCartPage />
                            <Footer />
                        </>
                    }
                />
                <Route
                    path="/detail-product/:id"
                    element={
                        <>
                            <Header />
                            <DetailProductPage />
                            <Footer />
                        </>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
