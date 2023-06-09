/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

import React from "react";
import Counter from "../components/Counter";
import { Link } from "react-router-dom";
import PageBtn from "../components/PageBtn";
import ModalBtn from "../components/ModalBtn";

function CounterPage() {
  return (
    <div css={counterPageCss}>
      <Counter />
      <PageBtn />
      <ModalBtn title="counter" text="counter페이지입니다." />
    </div>
  );
}

export default CounterPage;
const counterPageCss = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
