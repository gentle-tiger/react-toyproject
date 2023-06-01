import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoListPage from "./pages/TodoListPage";
import CounterPage from "./pages/CounterPage";
import MainPage from "./pages/MainPage";
import ExpendingCardPage from "./pages/ExpendingCardPage";
import NewTodoListPage from "./pages/NewTodoListPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/counter" element={<CounterPage />} />
        <Route path="/todoList" element={<TodoListPage />} />
        <Route path="/expending" element={<ExpendingCardPage />} />
        <Route path="/newTodoList" element={<NewTodoListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
