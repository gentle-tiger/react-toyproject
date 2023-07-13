/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

import ModalBtn from "../components/ModalBtn";
import { useState } from "react";
import Monster from "../components/Monster";

function MonsterPage() {
  return (
    <div css={monsterPageCss}>
      <Monster />
      <ModalBtn title="monster" text="반갑습니다. monster페이지입니다." />
    </div>
  );
}

export default MonsterPage;

const monsterPageCss = css`
  background-color: #5ced46;
  width: 100%;
  height: 100%;
`;
