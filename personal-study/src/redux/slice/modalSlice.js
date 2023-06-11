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
  },
});

export const { setShowModal, close } = modalSlice.actions;

export default modalSlice.reducer;
