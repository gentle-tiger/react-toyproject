/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

import Modal from "../components/Modal";

function ModalPage() {
  const handleClickClose = () => {
    console.log("close");
  };
  return (
    <div css={modalPageCss}>
      <Modal
        title="redux 복습"
        content="redux 꼭 복습하자!!"
        onClickClose={handleClickClose}
      />
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
`;
