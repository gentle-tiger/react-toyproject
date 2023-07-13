/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

import styled from "@emotion/styled";
import "./styles/reset.css";
import TodoList from "./components/TodoList";
import Counter from "./components/Counter";
import Router from "./Router";
import { Provider, useSelector } from "react-redux";
import store from "./redux/store";
import Modal from "./components/Modal";
import NewButton from "./components/NewTodoList/NewButton";
import ModalBtn from "./components/ModalBtn";
import MainPage from "./pages/MainPage";
import ModalContext from "./content/ModalContext";
import { BrowserRouter, Routes } from "react-router-dom";
// import NewButton from "./components/NewTodoList/NewButton";
// import Button from "./components/Button";

function App() {
  console.log("App Reder되었당!!!");

  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <ModalContext>
            <MainPage />
          </ModalContext>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;

// 위의 코드는 Redux를 React 앱과 통합하기 위한 예시입니다.
// App 컴포넌트는 Provider 컴포넌트로 감싸져 있으며, store prop에 Redux store 객체가 전달됩니다.
// 이로 인해 하위 컴포넌트에서 Redux의 상태 및 액션에 접근할 수 있게 됩니다. 그리고 Router 컴포넌트를 렌더링하여 라우팅을 처리하고
// 해당 경로에 맞는 컴포넌트를 렌더링합니다.
// 즉, App 컴포넌트는 Redux store를 설정하고, Provider를 사용하여 하위 컴포넌트에서 Redux를 사용할 수 있도록 제공합니다.
// 그리고 Router 컴포넌트를 사용하여 라우팅을 처리합니다.

// Provider 컴포넌트
// Redux를 React 앱과 통합하기 위해 제공되는 컴포넌트입니다.
// Provider 컴포넌트는 Redux store를 React 컴포넌트 트리에 주입하여 하위 컴포넌트에서 Redux를 사용할 수 있게 해줍니다.

// store: 앞서 설명한 Redux store 객체를 가져옵니다. 이 store 객체는 Redux에서 상태 관리를 수행하고,
// 컴포넌트에서 Redux 상태를 사용하거나 업데이트할 수 있게 해줍니다.

//
