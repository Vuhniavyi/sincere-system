import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../Assets/logo.png";
import facebook from "../../Assets/facebook.png";
import insta from "../../Assets/insta.png";
import "./index.css";

export function Footer() {
  return (
    <footer className="footer">
      <NavLink exact to="/" className="footer-logo-link">
        <img className="footer-logo" src={logo} alt="logo" />
      </NavLink>
      <div className="footer-documents">
        <div className="footer-title footer-documents-title">Документы</div>
        <div className="footer-documents-links">
          <div className="footer-documents-link-block">
            <div className="footer-documents-link-icon"></div>
            <a href="#" className="footer-documents-link">
              Условия использования
            </a>
          </div>
          <div className="footer-documents-link-block">
            <div className="footer-documents-link-icon"></div>
            <a href="#" className="footer-documents-link">
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </div>
      <div className="footer-contacts">
        <div className="footer-title footer-contacts-title">Контакты</div>
        <div className="footer-contacts-icons">
          <a
            href="https://www.facebook.com/"
            className="footer-contacts-every-icon footer-contacts-facebook"
          >
            <img src={facebook} alt="facebook" />
          </a>
          <a
            href="https://www.instagram.com/"
            className="footer-contacts-every-icon footer-contacts-insta"
          >
            <img src={insta} alt="insta" />
          </a>
        </div>
      </div>
    </footer>
  );
}
