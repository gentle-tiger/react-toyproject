/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

import React, { useState } from "react";
import Button from "./NewButton";
import NewButton from "./NewButton";
import { useDispatch } from "react-redux";
import { addList } from "../../redux/slice/newTodoListSlice.js";
function NewItemAdder({ setList, list }) {
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState("");

  /*  input에 입력한 정보를 이벤트 객체를 통해서 가져와 setState에 입데이트 해준다.  */
  const handleChangeInput = (e) => {
    const { value } = e.target;
    setUserInput(value);
    // console.log(value);
  };

  /* input에 입력한 정보를 새로운 배여로 만들어 list에 추가 */
  const handleClickAddInput = () => {
    if (userInput === "" || list.length >= 9) return;
    dispatch(addList(userInput));
    setUserInput(""); // input 태그에 value 값을 userInput 과 연결시켜주어야 한다.
  };
  // console.log(list);

  /* Enter 클리시 item 추가  */
  const handleKeyDownEnter = (e) => {
    const { code } = e;
    // console.log(code);
    if (code === "Enter") handleClickAddInput();
  };
  return (
    <div css={itemAdder}>
      <input
        type="text"
        value={userInput}
        onChange={handleChangeInput}
        onKeyDown={handleKeyDownEnter}
        placeholder="음식"
      />
      <NewButton plus onClick={handleClickAddInput}>
        추가
      </NewButton>
    </div>
  );
}

export default NewItemAdder;

const itemAdder = css`
  display: flex;
  cursor: pointer;
  margin: 10px 0;
  gap: 8px;
  input {
    flex: 1; // 기본 틀 (수정해야함.)
    padding: 16px;
    font-size: 18px;
    border: 1px solid white;
    border-radius: 10px;
    background-color: #e5ea96;
  }
`;
