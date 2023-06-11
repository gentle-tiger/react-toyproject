/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

import { VscClose } from "react-icons/vsc";
// import { Button } from "./Button";
import NewButton from "../components/NewTodoList/NewButton";
import { useDispatch } from "react-redux";
import { close } from "../redux/slice/modalSlice";

function Modal({ title, content }) {
  const dispatch = useDispatch();

  const onClickClose = () => {
    dispatch(close());
  };
  return (
    <div css={modal}>
      <div css={modalBox}>
        <div className="header">
          {title} <VscClose size={24} onClick={onClickClose} />
        </div>
        <div className="body">{content}</div>
        <div className="footer">
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
  /* width: 100%; */
  /* height: 100%; */
  /* z-index: 9001; */
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
  /* width: 100%; */
  /* height: 100%; */
  width: 20rem;
  /* max-height: 10rem; */
  /* min-height: 10rem; */
  border-radius: 10px;
  padding: 8px;
  border: 1px solid blue;
  z-index: 9002;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 3rem;
    /* z-index: 9002; */

    /* border: 1px solid red; */
  }
  .body {
    width: 100%;
    height: 100%;
    min-height: 3rem;
    /* border: 1px solid black; */
    border-top: 1px solid lightgrey;
    border-bottom: 1px solid lightgrey;
    padding: 8px 0;
    /* z-index: 9002; */
  }
  .footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 3rem;
    width: 100%;
    /* z-index: 9002; */

    /* border: 1px solid blue; */
  }
`;
