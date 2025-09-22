import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  const navigate = useNavigate();

  let user = null;
  try {
    const raw = localStorage.getItem("userData");
    if (raw) user = JSON.parse(raw);
  } catch {}

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    navigate("/login", { replace: true });
  };

  return (
    <header className="main_menu" style={{borderBottom:"1px solid #eee"}}>
      <div className="container d-flex align-items-center justify-content-between" style={{height:60}}>
        <Link to="/" className="logo" style={{fontWeight:700, textDecoration:"none", color:"#222"}}>
          FashionWeb
        </Link>

        <nav className="d-flex align-items-center" style={{gap:16}}>
          <NavLink to="/" end>Trang chủ</NavLink>
          <NavLink to="/shop">Cửa hàng</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/cart">Giỏ hàng</NavLink>

          {user ? (
            <div className="d-flex align-items-center" style={{gap:12}}>
              <NavLink to="/user">Xin chào, {user.firstName || "User"}</NavLink>
              {user.roleId === "R1" && <NavLink to="/admin">Admin</NavLink>}
              <button onClick={logout} className="btn btn-link p-0" style={{cursor:"pointer"}}>
                Đăng xuất
              </button>
            </div>
          ) : (
            <NavLink to="/login">Đăng nhập</NavLink>
          )}
        </nav>
      </div>
    </header>
  );
}
