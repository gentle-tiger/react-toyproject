/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

import Modal from "../components/Modal";
import { useDispatch, useSelector } from "react-redux";
import ModalBtn from "../components/ModalBtn";

function ModalPage({ close }) {
  return (
    <div css={modalPageCss}>
      <ModalBtn />
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
