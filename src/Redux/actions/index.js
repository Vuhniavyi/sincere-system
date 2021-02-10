export function Login() {
  localStorage.setItem("authorized", true);
  return {
    type: "LOGIN_USER",
    payload: {
      username: "Admin",
      description:
        "Здесь должно быть описание профиля пользователя. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      avatar: "https://wallpaperaccess.com/full/256074.jpg",
    },
  };
}

export function Logout() {
  localStorage.setItem("authorized", false);
  return {
    type: "LOGOUT_USER",
  };
}
