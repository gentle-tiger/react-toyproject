import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoListPage from "./pages/TodoListPage";
import CounterPage from "./pages/CounterPage";
import MainPage from "./pages/MainPage";
import ExpendingCardPage from "./pages/ExpendingCardPage";
import NewTodoListPage from "./pages/NewTodoListPage";
import TestPage from "./pages/TestPage";
import ColorsPage from "./pages/ColorsPage";
import NewExpendingCardPage from "./pages/NewExpendingCardPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/counter" element={<CounterPage />} />
        <Route path="/todoList" element={<TodoListPage />} />
        <Route path="/expending" element={<ExpendingCardPage />} />
        <Route path="/newExpending" element={<NewExpendingCardPage />} />
        <Route path="/newTodoList" element={<NewTodoListPage />} />
        <Route path="/colors" element={<ColorsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
