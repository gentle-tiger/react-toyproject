/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

import React from "react";
import PageBtn from "../components/PageBtn";
import NewTodoList from "../components/NewTodoList/NewTodoList";
import ModalBtn from "../components/ModalBtn";

function NewTodoListPage() {
  return (
    <div css={newTodoListPage}>
      <NewTodoList />
      <PageBtn />
      <ModalBtn
        title="NewTodoList"
        text="반갑습니다. NewTodoList 페이지입니다."
      />
    </div>
  );
}

export default NewTodoListPage;
const newTodoListPage = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
