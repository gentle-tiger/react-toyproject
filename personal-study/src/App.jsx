/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

import "./styles/reset.css";
import TodoList from "./components/TodoList";
import Counter from "./components/Counter";
import Router from "./Router";

function App() {
  return (
    <div className="App" css={app}>
      <Router />
    </div>
  );
}

export default App;

const app = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: beige;
`;
