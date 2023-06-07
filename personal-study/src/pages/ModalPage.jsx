/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

import Modal from "../components/Modal";

function ModalPage() {
  return (
    <div css={modalPageCss}>
      <Modal />
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
