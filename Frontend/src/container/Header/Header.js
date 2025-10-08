import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.scss";
import TopMenu from "./TopMenu";        

const Header = (props) => {
    return (
        <header className="header_area">
            <TopMenu />
            <div className="main_menu">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light w-100">
                        {/* Brand and toggle get grouped for better mobile display */}
                        <NavLink to="/" className="navbar-brand logo_h">
                            <img src="/resources/img/logo.png" alt="" />
                        </NavLink>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                        {/* Collect the nav links, forms, and other content for toggling */}
                        <div
                            className="collapse navbar-collapse offset w-100"
                            id="navbarSupportedContent"
                        >
                            <div className="row w-100 mr-0">
                                <div className="col-lg-9 pr-0">
                                    <ul className="nav navbar-nav center_nav pull-right">
                                        <li className="nav-item">
                                            <NavLink
                                                exact
                                                to="/"
                                                className="nav-link"
                                                activeClassName="selected"
                                                activeStyle={{
                                                    color: "#71cd14",
                                                }}
                                            >
                                                Trang chủ
                                            </NavLink>
                                        </li>
                                        <li className="nav-item ">
                                            <NavLink
                                                to="/shop"
                                                className="nav-link"
                                                activeClassName="selected"
                                                activeStyle={{
                                                    color: "#71cd14",
                                                }}
                                            >
                                                Cửa hàng
                                            </NavLink>
                                        </li>
                                        <li className="nav-item ">
                                            <NavLink
                                                to="/blog"
                                                className="nav-link"
                                                activeClassName="selected"
                                                activeStyle={{
                                                    color: "#71cd14",
                                                }}
                                            >
                                                Tin tức
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink
                                                to="/voucher"
                                                className="nav-link"
                                                activeClassName="selected"
                                                activeStyle={{
                                                    color: "#71cd14",
                                                }}
                                            >
                                                Giảm giá
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink
                                                to="/about"
                                                className="nav-link"
                                                activeClassName="selected"
                                                activeStyle={{
                                                    color: "#71cd14",
                                                }}
                                            >
                                                Giới thiệu
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-3 pr-0">
                                    <ul className="nav navbar-nav navbar-right right_nav pull-right">
                                        <li className="nav-item">
                                            <Link
                                                to={"/user/messenger"}
                                                className="icons"
                                            >
                                                <i class="fa-brands fa-facebook-messenger"></i>
                                            </Link>
                                            
                                        </li>
                                        <li className="nav-item">
                                            <Link
                                                to={"/shopcart"}
                                                className="icons"
                                            >
                                                <i className="ti-shopping-cart" />
                                            </Link>
                                            <span className="box-quantity-cart">
                                                
                                            </span>
                                        </li>
                                        <li className="nav-item">
                                            <Link
                                                
                                                
                                                className="icons"
                                            >
                                                <i
                                                    className="ti-user"
                                                    aria-hidden="true"
                                                />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};
export default Header;
