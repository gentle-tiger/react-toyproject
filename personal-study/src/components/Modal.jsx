/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

import { VscClose } from "react-icons/vsc";
// import { Button } from "./Button";
import NewButton from "../components/NewTodoList/NewButton";
import { useDispatch, useSelector } from "react-redux";
import { close, content } from "../redux/slice/layoutSlice";

function Modal() {
  const { content } = useSelector((store) => store.layout.modal);
  const dispatch = useDispatch();

  const onClickClose = () => {
    dispatch(close());
  };

  return (
    <div css={modal}>
      <div css={modalBox}>
        <div css={header}>
          {content.title} <VscClose size={24} onClick={onClickClose} />
        </div>
        <div css={body}>{content.text}</div>
        <div css={footer}>
          <NewButton modal onClick={onClickClose}>
            Close
          </NewButton>
        </div>
      </div>
    </div>
  );
}

export default Modal;
const modal = css`
  position: relative;
`;
const modalBox = css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  width: 20rem;
  border-radius: 10px;
  padding: 8px;
  border: 1px solid blue;
  z-index: 9002;
`;
const header = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 3rem;
`;

const body = css`
  width: 100%;
  height: 100%;
  min-height: 3rem;
  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
  padding: 8px 0;
`;
const footer = css`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 3rem;
  width: 100%;
`;
