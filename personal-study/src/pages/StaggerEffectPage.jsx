/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

import React from "react";
import StaggerEffect from "../components/StaggerEffect";

function StaggerEffectPage(props) {
  return (
    <div css={staggerEffectPageCss}>
      <StaggerEffect />
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
