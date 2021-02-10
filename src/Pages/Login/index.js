import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useFormInput } from "../../Helpers/FormInput";
import { Login as LoginAction } from "../../Redux/actions/index";
import { USER_CREDENTIALS } from "../../Constants/user";
import "./index.css";

function Login(props) {
  const dispatch = useDispatch();
  const username = useFormInput("");
  const password = useFormInput("");
  const [error, setError] = useState(null);

  const handleLogin = () => {
    if (
      username.value === USER_CREDENTIALS.USARNAME &&
      password.value === USER_CREDENTIALS.PASSWORD
    ) {
      dispatch(LoginAction());
      props.history.push("/profile");
    } else {
      setError(true);
    }
  };

  return (
    <div className="form-wrapper">
      <form>
        <div className="form-title">Login</div>
        <div className="form-inputs">
          <input
            placeholder="Username..."
            type="username"
            {...username}
            autoComplete="new-password"
          />
        </div>
        <div className="form-inputs" style={{ marginTop: 10 }}>
          <input
            placeholder="Password..."
            type="password"
            {...password}
            autoComplete="new-password"
          />
        </div>
        {error && (
          <>
            <div className="error">
              Имя пользователя или пароль введены не верно
            </div>
          </>
        )}
        <button type="button" className="form-button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
