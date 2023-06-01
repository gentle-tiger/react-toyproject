/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

import Button from "./Button";
import { useState } from "react";

function ItemAdder({ setList }) {
  const [userInput, setUserInput] = useState("");

  const handleChangeInput = (e) => {
    const { value } = e.target;
    setUserInput(() => value);
    console.log(value); // console.log
  };

  // 왜 이렇게 하는건지 제대로 알아두자.
  const handleClickAdd = () => {
    if (userInput === "") return;
    setList((prev) => {
      const newId = prev.length === 0 ? 1 : prev[prev.length - 1].id + 1;
      const newItem = {
        id: newId,
        text: userInput,
        done: false,
      };
      const newList = [...prev, newItem];
      console.log(newList);
      return newList;
    });
    setUserInput("");
  };

  const handleKeyDownEnter = (e) => {
    const { code } = e;
    if (code === "Enter") handleClickAdd();
    console.log(code === "Enter" ? true : false); // console.log
  };
  return (
    <div className="ItemAdder" css={AddInput}>
      <input
        type="text"
        value={userInput}
        onChange={handleChangeInput}
        onKeyDown={handleKeyDownEnter}
      />
      <Button onClick={handleClickAdd}>추가</Button>
    </div>
  );
}
export default ItemAdder;

const AddInput = css`
  display: flex;
  input {
    flex: 1;
    padding: 15px;
    border-radius: 10px 0 0 10px;
    border: 0;
    font-size: 1.2rem;
    cursor: pointer;
  }
  Button {
    background-color: orange;
    border-radius: 0 10px 10px 0;
    border: 0;
    font-size: 1.2rem;
    cursor: pointer;
  }
`;
