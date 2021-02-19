import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Text from "./components/Text";
import Images from "./components/Images";
import Videos from "./components/Videos";
import Table from "./components/Table";
import Email from "./components/Email";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Body />
    </BrowserRouter>
  )
}

function Body() {
  return (
    <Switch>
      <Route path="/images" exact component={Images}></Route>
      <Route path="/videos" exact component={Videos}></Route>
      <Route path="/table" exact component={Table}></Route>
      <Route path="/email" exact component={Email}></Route>
      <Route path="/" component={Text} />
    </Switch>
  )
}