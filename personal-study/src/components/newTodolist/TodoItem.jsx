/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "styled-components";

import React, { useState } from "react";
import Button from "./Button";

function TodoItem({ done, text, handleClickDelete, handleClickClear }) {
  const [isClicked, setIsClicked] = useState(false);

  /* isClicked의 상태값을 바꾸고, 버튼을 활성화 시킨다. */
  const handleClickViewBtn = () => {
    setIsClicked((prev) => !prev); // 여기서 prev는 isClicked의 값이다.
  };
  // console.log("done : " + done);
  return (
    <div css={done ? textLine : todoItem}>
      {/* 삼항 연산자를 통한 done에 따라 css 적용 */}
      <span onClick={handleClickViewBtn}>{text}</span>

      {isClicked ? (
        <div>
          <Button delete onClick={handleClickDelete}>
            삭제
          </Button>
          <Button clear onClick={handleClickClear}>
            완료
          </Button>
        </div>
      ) : null}
    </div>
  );
}

export default TodoItem;
const todoItem = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 4px 0;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    flex: 1;
    background-color: #a8e9bb;
    padding: 4px 8px;

    cursor: pointer;
    &:hover {
      background-color: #96c4a3;
      transition: background-color ease 0.3s 0s;
    }
  }
`;
// const buttonOpen = (isClicked) => css`
//   display: ${isClicked ? null : "none"};
// `;
/*  done의 상태값이 바뀌면 span 태그의 text에 밑줄이 생긴다.  */
const textLine = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: line-through;
  color: white;
  flex: 1;
  transition: all ease 1s 0s;
  margin: 0 0 4px 0;
  cursor: pointer;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    font-size: 16px;
    padding: 4px 8px;
    border-radius: 5px;
    background-color: #a09f9f;
    transition: all ease 1s 0s;

    &:hover {
      background-color: #bababa;
      border-radius: 5px;
    }
  }
`;
