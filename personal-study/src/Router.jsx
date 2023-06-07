import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoListPage from "./pages/TodoListPage";
import CounterPage from "./pages/CounterPage";
import MainPage from "./pages/MainPage";
import ExpandingCardPage from "./pages/ExpandingCardPage";
import NewTodoListPage from "./pages/NewTodoListPage";
import TestPage from "./pages/TestPage";
import ColorsPage from "./pages/ColorsPage";
import NewExpandingCardPage from "./pages/NewExpandingCardPage";
import ModalPage from "./pages/ModalPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/counter" element={<CounterPage />} />
        <Route path="/todoList" element={<TodoListPage />} />
        <Route path="/expanding" element={<ExpandingCardPage />} />
        <Route path="/newExpanding" element={<NewExpandingCardPage />} />
        <Route path="/newTodoList" element={<NewTodoListPage />} />
        <Route path="/colors" element={<ColorsPage />} />
        <Route path="/modal" element={<ModalPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
