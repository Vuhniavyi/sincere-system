import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile/index";
import Home from "./Pages/Home/index";
import News from "./Pages/News/index";
import { Header } from "./Components/Header/index";
import { Footer } from "./Components/Footer/index";
import PrivateRoute from "./Utils/PrivateRoute";
import PublicRoute from "./Utils/PublicRoute";
import { store } from "./Redux/store/index";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <div className="App-wrapper">
            <Header />
            <div className="content">
              <Switch>
                <PublicRoute exact path="/" component={Home} />
                <PublicRoute path="/login" component={Login} />
                <PublicRoute path="/news" component={News} />
                <PrivateRoute path="/profile" component={Profile} />
              </Switch>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
