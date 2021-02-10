import React from "react";
import ReactHtmlParser from "react-html-parser";
import "./index.css";

function NewsBlock({ image, userLogo, title, content, userName, date }) {
  return (
    <div className="news-block-wrapper">
      <img className="news-logo" src={image} alt="news-logo" />
      <div className="news-content-wrapper">
        <div className="news-content">
          <div className="news-title">{title}</div>
          <div className="news-content-text"> {ReactHtmlParser(content)} </div>
        </div>
        <div className="news-author">
          <img className="news-author-img" src={userLogo} alt="news-author" />
          <div className="news-author-text">
            <div className="news-author-name">{userName}</div>
            <div className="news-author-date">{date}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsBlock;
