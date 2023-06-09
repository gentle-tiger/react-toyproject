/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

// import React from 'react'

import NewItemAdder from "./NewItemAdder";
import NewButton from "./NewButton";
import NewTodoItem from "./NewTodoItem";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setList,
  resetList,
  clearList,
  deleteList,
} from "../../redux/slice/newTodoListSlice.js";

function NewTodoList() {
  const dispatch = useDispatch();
  const { list } = useSelector((store) => store.newTodoList);
  // const [list, setList] = useState([]);
  useEffect(() => {
    fetch("/data/newTodoList.json").then((res) =>
      res.json().then((data) => dispatch(setList(data)))
    );
  }, []);

  const handleClickReset = () => {
    dispatch(resetList());
    // setList([]);
  };

  /* handleClickDelete 함수의 인자로 item.id 의 값을 직접 주어, 이벤트 객체가 통과하도록 하였다. 
  filter 함수를 통해서 인자로 들어오는 id의 값과 일치하는 값은 제외한 나머지를 남기도록 한다. ! == 
   그래서 함수를 props 로 전달할 때 그냥 주는 것이 아니라 item.id를 넣어서 보내주어야 한다. 
   바로 실행되지 않게 하기 위해서  콜백함수로 전달해준다. */
  const handleClickDelete = (id) => {
    dispatch(deleteList(id));
    // const newList = list.filter((item) => item.id !== id);
    // setList(newList);
  };

  /* 배열 안의 객체의 속성값에 접근하는 방법 ( 벨로퍼트 참고 ) */
  const handleClickClear = (id) => {
    dispatch(clearList(id));
  };
  // console.log(list.length);
  return (
    <div css={todoList}>
      <div css={content}>
        <h1 css={title}> 여행 계획 : 음식편</h1>
        <NewItemAdder setList={setList} list={list} />

        <div>
          {list.map((item) => (
            <NewTodoItem
              key={item.id}
              id={item.id}
              text={item.text}
              done={item.done}
              handleClickDelete={() => handleClickDelete(item.id)}
              handleClickClear={() => handleClickClear(item.id)}
            />
          ))}
        </div>
        <div css={footer}>
          <span css={listLimited(list)}>
            해야할 일이 {list.length}개 남았습니다.
          </span>
          <NewButton reset onClick={handleClickReset}>
            초기화
          </NewButton>
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
  width: 100%;
  height: 100%;
`;
const content = css`
  position: relative;
  background-color: white;
  width: 300px;
  height: 400px;
  padding: 5%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;
const title = css`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
  color: #75dd75;
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

  //
`;

// const TodoItemTransiton = css`
//   transition: all ease 1s 0s;
// `;

// const listLength = (list) => {
//   const count = list.length > 9;
//   css`
//     color: red; /* ${count ? "null" : "red"} */
//   `;
// };
const listLimited = (list) => {
  const count = list.length >= 9;
  return css`
    color: ${count ? "red" : "null"};
    font-weight: ${count ? "bold" : "null"};
  `;
};
