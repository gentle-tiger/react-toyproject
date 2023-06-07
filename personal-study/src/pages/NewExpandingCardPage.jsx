/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

import React from "react";
import NewExpandingCard from "../components/NewExpandingCard/NewExpandingCard";
import PageBtn from "../components/PageBtn";

function NewExpandingCardPage() {
  return (
    <div css={expandingCardCss}>
      <NewExpandingCard />
      <PageBtn />
    </div>
  );
}

export default NewExpandingCardPage;

const expandingCardCss = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
