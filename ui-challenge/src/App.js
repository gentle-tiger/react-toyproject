/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

import React from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";

function Content() {
  return (
    <div>
      <h2>Content</h2>
      Content...
    </div>
  );
}
function Topics() {
  return (
    <div>
      <h2>Topics</h2>
      Topics...
    </div>
  );
}
function Home() {
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  );
}

function App() {
  return (
    <div>
      <div>
        <h1>React Router DOM example</h1>
        <ul css={link}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/topics">Topics</NavLink>
          </li>
          <li>
            <NavLink to="content">Content</NavLink>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/topics" element={<Topics></Topics>}></Route>
        <Route path="/content" element={<Content></Content>}></Route>
      </Routes>
    </div>
  );
}

export default App;

const link = css`
  /* border: 1px solid red; */
  li > .active {
    background-color: yellow;
  }
`;
