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
import OrderHomePage from "./container/Order/OrderHomePage";
import TopMenu from "./container/Header/TopMenu";
import PaymentSuccess from "./container/User/PaymentSuccess";
import VnpayPaymentPage from "./container/Order/VnpayPaymentPage";
import VnpayPaymentSuccess from "./container/Order/VnpayPaymentSuccess";
import VoucherHomePage from "./container/Voucher/VoucherHomePage";
import BlogPage from "./container/Blog/BlogPage";
import DetailBlog from "./container/Blog/DetailBlog";

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
                
                <Route
                    path="/payment/success"
                    element={
                        <>
                            <Header />
                            <PaymentSuccess />
                            <Footer />
                        </>
                    }
                />
                <Route
                    path="/payment/vnpay"
                    element={
                        <>
                            <TopMenu />
                            <VnpayPaymentPage />
                            <Footer />
                        </>
                    }
                />
                <Route
                    path="/payment/vnpay_return"
                    element={
                        <>
                            <TopMenu />
                            <VnpayPaymentSuccess />
                            <Footer />
                        </>
                    }
                />
                <Route
                    path="/voucher"
                    element={
                        <>
                            <Header />
                            <VoucherHomePage />
                            <Footer />
                        </>
                    }
                />
                <Route
                    path="/blog"
                    element={
                        <>
                            <Header />
                            <BlogPage />
                            <Footer />
                        </>
                    }
                />
                <Route
                    path="/blog-detail/:id"
                    element={
                        <>
                            <Header />
                            <DetailBlog />
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
                <Route
                    path="/order/:userId"
                    element={
                        <>
                            <TopMenu />
                            <OrderHomePage />
                            <Footer />
                        </>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
