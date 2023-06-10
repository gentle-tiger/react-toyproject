import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModal: false,
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
    // test(state) {
    //   console.log(state.showModal + "연결");
    // },
  },
});

export const { setShowModal, close /* test */ } = modalSlice.actions;

export default modalSlice.reducer;
