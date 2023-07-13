/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

import React from "react";
import ExpandingCard from "../components/ExpandingCard";
import PageBtn from "../components/PageBtn";
import NewButton from "../components/NewTodoList/NewButton";
import ModalBtn from "../components/ModalBtn";
import { useDispatch, useSelector } from "react-redux";
import { close, test } from "../redux/slice/layoutSlice";
// import ModalPage from "./ModalPage";
// import Modal from "../components/Modal";

function ExpandingCardPage() {
  return (
    <div css={expandingPageCss}>
      <ExpandingCard />
      <PageBtn />
      <ModalBtn
        title="expandingPage"
        text="반갑습니다. expandingPage페이지입니다."
      />
    </div>
  );
}

export default ExpandingCardPage;
const expandingPageCss = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
