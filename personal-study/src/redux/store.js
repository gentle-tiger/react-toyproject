import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import todoListSlice from "./slice/todoListSlice";
import newTodoListSlice from "./slice/newTodoListSlice";

const middlewares = [];
if (process.env.NODE_ENV === "development") middlewares.push(logger);

const store = configureStore({
  reducer: {
    todoList: todoListSlice,
    newTodoList: newTodoListSlice,
  },
  middleware: middlewares,
});

export default store;

// Redux는 JavaScript 앱의 상태 관리를 위한 상태 컨테이너 라이브러리입니다.
// store는 Redux의 핵심 요소 중 하나로, 앱의 전역 상태를 저장하고 관리하는 역할을 합니다.
// store.js 파일은 Redux store를 생성하고 구성하는 역할을 수행합니다.

// configureStore: Redux Toolkit에서 제공하는 함수로, Redux store를 구성하기 위해 사용됩니다.
// configureStore 함수는 몇 가지 구성 옵션을 받아서 Redux store를 생성합니다.
// 이 함수의 첫 번째 매개변수로는 reducer가 전달되는데,여기서는 빈 객체가 전달되어 있습니다.
// 실제 앱에서는 액션에 따라 상태를 변경하는 리듀서 함수를 작성해야 합니다.

// logger: Redux 미들웨어 중 하나로, 개발 환경에서만 동작하도록 설정되어 있습니다.
// 미들웨어는 액션이 디스패치되어 리듀서에 도달하기 전에 중간에서 동작하는 함수입니다.
// logger 미들웨어는 액션이 디스패치될 때마다 해당 액션과 현재 상태에 대한 로그를 출력합니다.

// middlewares: 미들웨어 배열로, 개발 환경에서만 logger를 포함합니다.
// 개발 환경에서는 Redux 액션과 상태의 변경 내용을 추적하고 디버깅하기 위해 로그를 사용할 수 있습니다.
// 위의 코드에서는 configureStore 함수를 호출하여 Redux store를 생성하고,
// reducer와 middlewares를 설정한 후, 생성된 store를 store 변수에 할당하고 내보내고 있습니다.
// 이렇게 생성된 store는 앱의 다른 파일에서 가져와서 사용할 수 있습니다.
