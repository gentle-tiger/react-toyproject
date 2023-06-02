/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

import React, { useState } from "react";
import Button from "./Button";
import ItemAdder from "./ItemAdder";
import TodoItem from "./TodoItem";

// fetch("/src/data/NewTodoList.json")
//   .then((res) => res.json())
//   .then((data) => data, []);

const menu = [
  { id: 1, text: "엽기떡볶이(매운맛)", done: false },
  { id: 2, text: "불닭볶음면", done: false },
  { id: 3, text: "역전 우동", done: false },
  { id: 4, text: "햄버거", done: false },
  { id: 5, text: "오니기리", done: false },
];

function NewTodoList() {
  const [list, setList] = useState(menu);

  const handleClickReset = () => {
    setList([]);
  };

  /* handleClickDelete 함수의 인자로 item.id 의 값을 직접 줘어, 이벤트 객체가 통과하도록 하였다. 
  filter 함수를 통해서 인자로 들어오는 id의 값과 일치하는 값은 제외한 나머지를 남기도록 한다. ! == 
   그래서 함수를 props 로 전달할 때 그냥 주는 것이 아니라 item.id를 넣어서 보내주어야 한다. 
   바로 실행되지 않게 하기 위해서  콜백함수로 전달해준다. */
  const handleClickDelete = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
    console.log(newList);
  };

  const handleClickClear = () => {
    console.log("완료");
  };
  return (
    <div css={todoList}>
      <div css={content}>
        <h1 css={title}> 여행 계획 : 음식편</h1>
        <ItemAdder setList={setList} list={list} />

        <div className="todoItem">
          {list.map((item) => (
            <TodoItem
              key={item.id}
              id={item.id}
              text={item.text}
              done={item.done}
              handleClickDelete={() => handleClickDelete(item.id)}
              handleClickClear={handleClickClear}
            />
          ))}
        </div>
        <div css={footer}>
          <span>해야할 일이 {list.length}개 남았습니다.</span>
          <Button primary onClick={handleClickReset}>
            초기화
          </Button>
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
  background-color: #b19bd9; // 삭제
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
