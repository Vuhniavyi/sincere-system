import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import logo from "../../Assets/logo.png";
import { Logout } from "../../Redux/actions/index";
import "./index.css";

export function Header() {
  const dispatch = useDispatch();
  const userIsAuth = useSelector((state) => state.userIsAuth);

  const handleLogout = () => {
    dispatch(Logout());
  };
  return (
    <header className="header">
      <NavLink exact to="/" className="header-logo-link">
        <img className="header-logo" src={logo} alt={"logo"} />
      </NavLink>
      <nav>
        <NavLink exact activeClassName="active" to="/">
          Главная
        </NavLink>
        <NavLink activeClassName="active" to="/profile">
          Профиль
        </NavLink>
        <NavLink activeClassName="active" to="/news">
          Новости
        </NavLink>
        {userIsAuth ? (
          <NavLink
            onClick={handleLogout}
            className="logout"
            activeClassName="active"
            to="/login"
          >
            Выход
          </NavLink>
        ) : (
          <NavLink className="login" activeClassName="active" to="/login">
            ВХОД
          </NavLink>
        )}
      </nav>
    </header>
  );
}
