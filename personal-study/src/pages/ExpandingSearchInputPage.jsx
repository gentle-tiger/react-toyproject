/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

import React from "react";
import PageBtn from "../components/PageBtn";
import ModalBtn from "../components/ModalBtn";
import ExpandingSearchInput from "../components/ExpandingSearchInput";

function ExpandingSearchInputPage(props) {
  return (
    <div css={expandingSearchInputcss}>
      <ExpandingSearchInput />
      <PageBtn />
      <ModalBtn />
    </div>
  );
}

export default ExpandingSearchInputPage;

const expandingSearchInputcss = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
