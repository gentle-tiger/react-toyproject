/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { HiInformationCircle } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { close } from "../redux/slice/modalSlice";

function ModalBtn({ onClick }) {
  const { showModal } = useSelector((store) => store.modal);

  const dispatch = useDispatch();

  const onClickClose = () => {
    dispatch(close());
  };
  return (
    <button css={showModal ? deAction : isAction} onClick={onClickClose}>
      <HiInformationCircle />
    </button>
  );
}

export default ModalBtn;

const isAction = css`
  position: fixed;
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  width: 5%;
  height: 24px;
  border: 0;
  border-radius: 5px;
  background-color: #c8e0c8;
  padding: 4px;
  color: #ffff;
  bottom: 2%;
  right: 8%;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
`;
const deAction = css`
  position: fixed;
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  width: 5%;
  height: 24px;
  border: 0;
  border-radius: 5px;
  background-color: #cf5c82;
  padding: 4px;
  color: #ffff;
  bottom: 2%;
  right: 8%;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
`;
