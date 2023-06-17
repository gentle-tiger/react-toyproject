/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

import React from "react";
import TodoList from "../components/TodoList";
import MainPage from "./MainPage";
import { Link } from "react-router-dom";
import PageBtn from "../components/PageBtn";
import ModalBtn from "../components/ModalBtn";

function TodoListPage() {
  return (
    <div css={todoListPageCss}>
      <TodoList />
      <PageBtn />
      <ModalBtn title="todoList" text="todoList입니다.!" />
    </div>
  );
}

export default TodoListPage;

const todoListPageCss = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
