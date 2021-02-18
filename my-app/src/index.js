import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import Text from "./pages/Text";
import Images from "./pages/Images";
import Videos from "./pages/Videos";
import Table from "./pages/Table";
import Email from "./pages/Email";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Text} />
        <Route path="/images" exact component={Images}></Route>
        <Route path="/videos" exact component={Videos}></Route>
        <Route path="/table" exact component={Table}></Route>
        <Route path="/email" exact component={Email}></Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
