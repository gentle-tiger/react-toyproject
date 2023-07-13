/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

import React from "react";
import StaggerEffect from "../components/StaggerEffect";
import ModalBtn from "../components/ModalBtn";
import PageBtn from "../components/PageBtn";

function StaggerEffectPage(props) {
  return (
    <div css={staggerEffectPageCss}>
      <StaggerEffect />
      <ModalBtn
        title="staggerEffect"
        text="반갑습니다. staggerEffect페이지입니다."
      />
      <PageBtn />
    </div>
  );
}

export default StaggerEffectPage;

const staggerEffectPageCss = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
