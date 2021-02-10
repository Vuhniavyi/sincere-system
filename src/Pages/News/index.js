import React from "react";
import NewsBlock from "../../Components/NewsBlock/index";
import NewImg from "../../Assets/new-img.png";
import UserLogo from "../../Assets/userLogo.svg";
import "./index.css";

function News() {
  return (
    <div className="all-news-wrapper">
      <div className="all-news-title-wrapper">
        <div className="all-news-title all-news-title-first">Новости</div>
        <div className="all-news-title all-news-title-second">
          SincereSystems
        </div>
      </div>
      <NewsBlock
        image={NewImg}
        userLogo={UserLogo}
        title="Презентация компании Sincere Systems"
        content="<p>Приглашаем Вас на офлайн презентацию компании Sincere Systems.<br> Уже 14.02.2020 в 15:00 состоится презентация компании в Казахстане, г. Темиртау, Мира 71/2, Сити Центр</p>"
        userName="SincereSystems"
        date="2020-02-13"
      />
      <NewsBlock
        image={NewImg}
        userLogo={UserLogo}
        title="Приглашаем Вас на офлайн презентацию компании Sincere Systems"
        content="<p>Anim occaecat incididunt sint velit officia reprehenderit ad elit elit consectetur culpa incididunt. Ex incididunt pariatur fugiat ex anim <br> ullamco ea. Non quis aliquip irure excepteur Lorem veniam fugiat fugiat ut do et eiusmod. Est Lorem eu dolor ea mollit velit sint.<br><br> Adipisicing tempor occaecat nostrud ex fugiat et commodo incididunt id amet commodo aliqua ea. Ea elit reprehenderit eiusmod<br> cupidatat magna exercitation sunt. Sint eiusmod est nulla velit esse. Link View mollit aliqua elit laborum nulla irure.<br> Nisi irure ullamco eiusmod irure reprehenderit ea dolor qui voluptate officia.</p>"
        userName="SincereSystems"
        date="2020-02-13"
      />
    </div>
  );
}

export default News;
