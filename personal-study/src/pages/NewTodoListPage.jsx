import React from "react";
import PageBtn from "../components/PageBtn";
import NewTodoList from "../components/NewTodoList/NewTodoList";
import ModalBtn from "../components/ModalBtn";

function NewTodoListPage() {
  return (
    <div>
      <NewTodoList />
      <PageBtn />
      <ModalBtn
        title="NewTodoList"
        content="반갑습니다. NewTodoList 페이지입니다."
      />
    </div>
  );
}

export default NewTodoListPage;
