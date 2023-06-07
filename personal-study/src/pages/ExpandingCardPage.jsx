/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

import React from "react";
import ExpandingCard from "../components/ExpandingCard";
import PageBtn from "../components/PageBtn";

function ExpandingCardPage() {
  return (
    <div css={expandingPageCss}>
      <ExpandingCard />
      <PageBtn />
    </div>
  );
}

export default ExpandingCardPage;
const expandingPageCss = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
