/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { HiInformationCircle } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { changeTitle, close, changeText } from "../redux/slice/layoutSlice";

function ModalBtn({ title, text }) {
  const { modal } = useSelector((store) => store.layout);

  const dispatch = useDispatch();

  const onClickClose = () => {
    dispatch(close());
    // title , content 바꾸기
    dispatch(changeTitle(title));
    dispatch(changeText(text));
  };

  return (
    <button
      css={modal.content.show ? deAction : isAction}
      onClick={onClickClose}
    >
      <HiInformationCircle />
    </button>
  );
}

export default ModalBtn;
const actionStyles = css`
  position: fixed;
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  min-width: 5%;
  min-height: 24px;
  border: 0;
  border-radius: 5px;
  padding: 4px;
  color: #ffff;
  bottom: 2%;
  right: 8%;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
`;
const isAction = css`
  ${actionStyles}
  background-color: #c8e0c8;
`;

const deAction = css`
  ${actionStyles}
  background-color: #cf5c82;
`;
