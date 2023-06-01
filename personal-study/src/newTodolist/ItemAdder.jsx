/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

import React, { useState } from "react";
import Button from "./Button";

function ItemAdder({ setList, list }) {
  const [userInput, setUserInput] = useState(" ");
  const handleChangeInput = (e) => {
    const { value } = e.target;
    setUserInput(value);
    console.log(value);
  };

  const handleClickAddInput = () => {
    // if (setUserInput === " ") return;
    setList((prev) => {
      const newId = prev.length === 0 ? 1 : prev[prev.length - 1].id + 1;

      const newItem = {
        id: newId,
        text: userInput,
        done: false,
      };
      const newList = [...prev, newItem];
      return newList;
    });
    setUserInput("");
  };
  console.log(list);
  const handleKeyDownEnter = (e) => {
    const { code } = e;
    console.log(code);
    if (code === "Enter") handleClickAddInput();
  };
  return (
    <div css={itemAdder}>
      <input
        type="text"
        onChange={handleChangeInput}
        onKeyDown={handleKeyDownEnter}
      />
      <Button plue onClick={handleClickAddInput}>
        추가
      </Button>
    </div>
  );
}

export default ItemAdder;
const itemAdder = css`
  display: flex;
  background-color: #673ab7;
  input {
    flex: 1; // 기본 틀 (수정해야함.)
  }
`;
