let initialState =
  JSON.parse(localStorage.getItem("authorized")) === true
    ? {
        userIsAuth: true,
        user: {
          username: "Admin",
          description:
            "Здесь должно быть описание профиля пользователя. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          avatar: "https://wallpaperaccess.com/full/256074.jpg",
        },
      }
    : {
        userIsAuth: false,
        user: {
          username: "",
          description: "",
        },
      };

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN_USER":
      return { userIsAuth: true, user: { ...action.payload } };
    case "LOGOUT_USER":
      return { userIsAuth: false, user: { ...initialState.user } };
    default:
      return state;
  }
}
