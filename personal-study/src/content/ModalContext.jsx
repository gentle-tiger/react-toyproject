import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../components/Modal";
import { close } from "../redux/slice/layoutSlice";

function ModalContext({ children }) {
  const { modal } = useSelector((store) => store.layout);

  return (
    <>
      {modal.show && <Modal title="title" text="content" />}
      {children}
    </>
  );
} // children 이 있어야 생김

export default ModalContext;
