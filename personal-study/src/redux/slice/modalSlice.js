import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModal: false,
  pageContents: { title: "타이틀", content: "컨텐츠" },
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setShowModal(state, action) {
      state.showModal = action.payload;
    },
    close(state) {
      state.showModal = !state.showModal;
    },
    setPageContents(state, action) {
      state.pageContents = action.payload;
    },
    changeTitle(state, action) {
      state.pageContents.title = action.payload;
    },
    changeContent(state, action) {
      state.pageContents.content = action.payload;
    },
  },
});

export const { setShowModal, close, pageContents, changeTitle, changeContent } =
  modalSlice.actions;

export default modalSlice.reducer;
