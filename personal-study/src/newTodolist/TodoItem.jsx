/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

import React from "react";
import Button from "./Button";

function TodoItem({ id, text, handleClickDelete, handleClickClear }) {
  return (
    <div css={todoItem}>
      <span>{text}</span>
      <div>
        <Button background="yellow" onClick={handleClickDelete}>
          삭제
        </Button>
        <Button primary onClick={handleClickClear}>
          완료
        </Button>
      </div>
    </div>
  );
}

export default TodoItem;
const todoItem = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid white;
    border-radius: 5px;
    background-color: #e2bfbf;
    flex: 1;
    line-height: 1.3;
  }
`;
