/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

import ItemAdder from "./ItemAdder";
import Button from "./Button";
import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

function TodoList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((res) => res.json())
      .then((data) => {
        const list = data.map(({ id, title: text, completed: done }) => ({
          id,
          text,
          done,
        }));
        setList(list);
      });
  }, []);

  const handleAllClear = () => {
    setList([]);
  };
  const handleClickDelete = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  return (
    <div className="TodoList" css={todoList}>
      <div id="header">
        <h1 className="title">TodoList</h1>
        <ItemAdder setList={setList}></ItemAdder>
      </div>

      <div id="body">
        {list.map((item) => (
          <TodoItem
            key={item.id}
            text={item.text}
            handleClickDelete={() => handleClickDelete(item.id)}
          />
        ))}
      </div>

      <div id="footer">
        <p>{`할 일이 ${list.length}개 밖에 남지 않았어요!`}</p>
        <Button onClick={handleAllClear}>all clear</Button>
      </div>
    </div>
  );
}
export default TodoList;

const todoList = css`
  background-color: #f4c7c7;
  border: 0;
  border-radius: 10px;
  padding: 50px 50px;
  font-size: 1.3rem;
`;
