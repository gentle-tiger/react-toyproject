/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

import React from "react";
import Button from "./Button";

const TodoItem = ({ text, handleClickDelete }) => {
  return (
    <div className="TodoItem" css={todoItems}>
      <span css={impact}>{text}</span>
      <Button onClick={handleClickDelete}>삭제</Button>
    </div>
  );
};

export default TodoItem;

const todoItems = css`
  display: flex;
  justify-content: center;
  margin: 8px 0 8px 0;
`;
const impact = css`
  border: 1px solid grey;
  border-radius: 5px;
  padding: 5px 10px;
`;
