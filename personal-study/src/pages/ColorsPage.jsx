/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "styled-components";
import React from "react";
import PageBtn from "../components/PageBtn";
import Colors from "../components/Colors/Colors";
import ModalBtn from "../components/ModalBtn";
import Modal from "../components/Modal";

function ColorsPage() {
  return (
    <div css={colorPageCss}>
      <Colors />
      <PageBtn />
      {/* <ModalBtn /> */}
    </div>
  );
}

export default ColorsPage;
const colorPageCss = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
