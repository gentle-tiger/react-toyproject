/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

import Modal from "../components/Modal";
import { useDispatch, useSelector } from "react-redux";
import ModalBtn from "../components/ModalBtn";
import PageBtn from "../components/PageBtn";

function ModalPage() {
  return (
    <div css={modalPageCss}>
      <PageBtn />
      <ModalBtn title="modal" text="반갑습니다. modal 페이지입니다." />
    </div>
  );
}

export default ModalPage;
const modalPageCss = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: grey;
`;
