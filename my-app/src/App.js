import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Text from "./components/Text";
import Images from "./components/Images";
import Videos from "./components/Videos";
import Table from "./components/Table";
import Email from "./components/Email";

export default function App() {
  let [TabId, setTabId] = useState(0);

  return (
    <>
      <header>
        <h3 className="nav-brand">Vincent Tieu's PA2</h3>
        <nav>
          <ul className="nav-links">
            <li>
              { 
                TabId === 0 ? 
                <a className="page-selected" onClick={() => setTabId(0)}>Text</a> : 
                <a onClick={() => setTabId(0)}>Text</a>
              }
            </li>
            <li>
              {
                TabId === 1 ?
                <a className="page-selected" onClick={() => setTabId(1)}>Images</a> :
                <a onClick={() => setTabId(1)}>Images</a>
              }
            </li>
            <li>
              {
                TabId === 2 ?
                <a className="page-selected" onClick={() => setTabId(2)}>Videos</a> :
                <a onClick={() => setTabId(2)}>Videos</a>
              }
            </li>
            <li>
              {
                TabId === 3 ?
                <a className="page-selected" onClick={() => setTabId(3)}>Table</a> :
                <a onClick={() => setTabId(3)}>Table</a>
              }
            </li>
            <li>
              {
                TabId === 4 ?
                <a className="page-selected" onClick={() => setTabId(4)}>Email</a> :
                <a onClick={() => setTabId(4)}>Email</a>
              }
            </li>
          </ul>
        </nav>
      </header>
      <Body TabId={TabId}/>
    </>
  )
}

function Body(props) {
  let TabId = props.TabId;
  const components = [<Text/>, <Images/>, <Videos/>, <Table/>, <Email/>];
  return (
    <>
      {components[TabId]}
    </>
  )
}