/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

import React from "react";
import ExpendingCard from "../components/ExpendingCard";
import PageBtn from "../components/PageBtn";

function ExpendingCardPage() {
  return (
    <div>
      <ExpendingCard />
      <PageBtn />
    </div>
  );
}

export default ExpendingCardPage;
