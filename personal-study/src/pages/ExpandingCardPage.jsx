/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

import React from "react";
import ExpandingCard from "../components/ExpandingCard";
import PageBtn from "../components/PageBtn";
import NewButton from "../components/NewTodoList/NewButton";
import ModalBtn from "../components/ModalBtn";
import { useDispatch, useSelector } from "react-redux";
import { close, test } from "../redux/slice/modalSlice";
import ModalPage from "./ModalPage";
import Modal from "../components/Modal";

function ExpandingCardPage() {
  const { ShowModal } = useSelector((store) => store.modal);
  return (
    <div css={expandingPageCss}>
      <ExpandingCard />
      <PageBtn />
      {ShowModal ? (
        <Modal
          title="ExpandingCardPage"
          content="ExpandingCardPage에 대한 내용입니다ㅏㅏㅏ"
        />
      ) : (
        <ModalBtn />
      )}
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
