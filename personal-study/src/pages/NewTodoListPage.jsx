import React from "react";
import PageBtn from "../components/PageBtn";
import NewTodoList from "../components/NewTodoList/NewTodoList";
import ModalBtn from "../components/ModalBtn";

function NewTodoListPage() {
  return (
    <div>
      <NewTodoList />
      <PageBtn />
      <ModalBtn />
    </div>
  );
}

export default NewTodoListPage;
