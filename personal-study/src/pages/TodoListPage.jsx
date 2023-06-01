/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

import React from "react";
import TodoList from "../components/TodoList";
import MainPage from "./MainPage";
import { Link } from "react-router-dom";
import PageBtn from "../components/PageBtn";

function TodoListPage() {
  return (
    <div>
      <TodoList />
      <PageBtn />
    </div>
  );
}

export default TodoListPage;
