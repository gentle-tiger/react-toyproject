/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

import React, { useState } from "react";
import Button from "./Button";
import ItemAdder from "./ItemAdder";

function NewTodoList() {
  const [list, setList] = useState([]);
  return (
    <div css={todoList}>
      <div css={content}>
        <h1 css={title}> 여행 계획 : 음식편</h1>
        <ItemAdder setList={setList} list={list} />
        <div css={todoItem}>
          {list.map((Item) => console.log(Item))}
          <span>text</span>
          <div>
            <Button background="yellow">삭제</Button>
            <Button primary>완료</Button>
          </div>
        </div>
        <div css={footer}>
          <span>해야할 일이 ${}개 남았습니다.</span>
          <Button primary>초기화</Button>
        </div>
      </div>
    </div>
  );
}

export default NewTodoList;

const todoList = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #b39ddb; // 삭제
`;
const content = css`
  position: relative;
  background-color: #9575cd;
  width: 400px;
  height: 500px;
  padding: 5%;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;
const title = css`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-weight: bold;
  color: white;
  border: 1px solid; //삭제
  padding: 10px 0;
`;

const todoItem = css`
  display: flex;
  justify-content: space-between;

  background-color: #ebc6a4; // 삭제
`;

const footer = css`
  position: absolute; //content를 따라가돌고 햇음
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 10%;
  /* top: 0; */
  bottom: 0;
  left: 0;
  /* right: 0; */
  color: white;
  background-color: #4ebf97; // 삭제
`;
