import React from "react";
import { useSelector } from "react-redux";
import Typical from "react-typical";
import "./index.css";

function Profile() {
  const user = useSelector((state) => state.user);
  return (
    <div className="profile-wrapper">
      <div className="profile-title">
        <Typical
          steps={[1000, `Welcome, ${user.username}!`]}
          loop={1}
          wrapper="h1"
        />
      </div>
      <div className="profile-info">
        <div className="profile-image">
          <img className="avatar-img" src={user.avatar} alt="avatar" />
        </div>
        <div className="profile-info-block">
          <Typical steps={[3000, `${user.description}`]} loop={1} wrapper="p" />
        </div>
      </div>
    </div>
  );
}

export default Profile;
