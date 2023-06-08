import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    { id: 1, text: "hello", done: false },
    { id: 2, text: "hello", done: false },
    { id: 3, text: "hello", done: false },
    { id: 4, text: "hello", done: false },
    { id: 5, text: "hello", done: false },
  ],
};

const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    setList(state, action) {
      state.list = action.payload;
    },
    clearList(state) {
      state.list = [];
    },
    deleteList(state, action) {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
    addList(state, action) {
      const newId =
        state.list.length === 0 ? 1 : state.list[state.list.length - 1].id - 1;
      const newItem = {
        id: newId,
        text: action.payload, // addList의 인자값으로 들어오는 값이 action.payload로 사용한다.
        done: false,
      };
      // const newList = [...prev, newItem]; 이러한 방식으로 하지 않고 기존의 값에 바로 푸시해준다.
      // return newList;   // 코드의 가독성 상승
      state.list.push(newItem);
    },
  },
});

export const { setList, clearList, deleteList, addList } =
  todoListSlice.actions;

export default todoListSlice.reducer;
