/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

import React from "react";
// import TodoList from "../components/TodoList";
// import MainPage from "./MainPage";
// import { Link } from "react-router-dom";
import Test from "../components/Test";
import PageBtn from "../components/PageBtn";
import ModalBtn from "../components/ModalBtn";

function TestPage() {
  return (
    <div>
      <Test />
      <PageBtn />
      <ModalBtn />
    </div>
  );
}

export default TestPage;
