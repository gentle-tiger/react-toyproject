/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

import React from "react";
import NewExpandingCard from "../components/NewExpandingCard/NewExpandingCard";
import PageBtn from "../components/PageBtn";
import ModalBtn from "../components/ModalBtn";

function NewExpandingCardPage() {
  return (
    <div css={expandingCardCss}>
      <NewExpandingCard />
      <PageBtn />
      <ModalBtn
        title="NewExpandingCard"
        text="반갑습니다. newExpandingCard 페이지입니다."
      />
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
