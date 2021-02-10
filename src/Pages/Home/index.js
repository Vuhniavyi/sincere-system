import React from "react";
import { ConfettiAnimation } from "../../Components/Confetty/index";
import SmileImg from "../../Assets/smile.png";
import "./index.css";

function Home() {
  return (
    <div className="home-wrapper">
      <ConfettiAnimation />
      <div className="home-wrapper-title">
        Добро пожаловать на главную страницу!!!
      </div>
      <img className="home-img" src={SmileImg} alt="smile" />
    </div>
  );
}

export default Home;
