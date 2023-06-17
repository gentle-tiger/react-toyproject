import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal: {
    show: false,
    content: { title: "", text: "" },
  },
};

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setShowModal(state, action) {
      state.modal.show = action.payload;
    },
    close(state) {
      state.modal.show = !state.modal.show;
    },
    setContents(state, action) {
      state.modal.content = action.payload;
    },
    changeTitle(state, action) {
      state.modal.content.title = action.payload;
    },
    changeText(state, action) {
      state.modal.content.text = action.payload;
    },
  },
});

export const { setShowModal, setContents, close, changeTitle, changeText } =
  layoutSlice.actions;

export default layoutSlice.reducer;
