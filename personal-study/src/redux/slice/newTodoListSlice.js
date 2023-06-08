import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};
const newTodoListSlice = createSlice({
  name: "newTodoList",
  initialState,
  reducers: {
    setList(state, action) {
      state.list = action.payload;
    },
    // setList 액션이 dispatch되면 state.list 필드가 action.payload로 업데이트된다.
    // 이를 통해 Redux store 내에서 todoList 슬라이스의 list 상태를 업데이트할 수 있다.
    resetList(state) {
      state.list = [];
    },
    clearList(state, action) {
      state.list = state.list.map((item) =>
        item.id === action.payload ? { ...item, done: !item.done } : item
      );
    },
    deleteList(state, action) {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
    addList(state, action) {
      const newId =
        state.list.length === 0 ? 1 : state.list[state.list.length - 1].id + 1;
      const newItem = {
        id: newId,
        text: action.payload,
        done: false,
      };
      state.list.push(newItem);
    },
  },
});
export const { setList, resetList, clearList, deleteList, addList } =
  newTodoListSlice.actions;
export default newTodoListSlice.reducer;
