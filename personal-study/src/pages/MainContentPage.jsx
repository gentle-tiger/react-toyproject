/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import React from "react";
import UiComponent from "../components/UiComponent";
import PageLink from "./PageLink";

function MainContentPage(isUiInfo) {
  return (
    <div css={contentCss}>
      <div css={uiInfoHeaderCss(isUiInfo)}>
        <PageLink />
      </div>
      <div css={pageInfoHeaderCss(isUiInfo)}>
        <div css={pageContainerCss}>
          <UiComponent />
        </div>
      </div>
    </div>
  );
}

export default MainContentPage;
// Info 와 page 화면을 구분해 놓은 컨텐츠
const contentCss = css`
  display: flex;
`;
// icon 모음
const uiInfoHeaderCss = (isUiInfo) => css`
  width: ${isUiInfo ? "300px" : "0px"};
  height: 100vh;
  background-color: #ffffff;
  transition: width 0.2s cubic-bezier(0.7, 0, 0.3, 1);
  overflow-x: scroll;
  /* ------ 기본 스택 ------ */
`;
// page 보여주는 화면
const pageInfoHeaderCss = (isUiInfo) => css`
  width: 100%; /* ${isUiInfo ? "80rem" : "100rem"}; */
  height: 100vh;
  background-color: #000000;
  padding: 30px 20px;
  transition: width 0.2s cubic-bezier(0.7, 0, 0.3, 1);
  /* ------ 기본 스택 ------ */
  color: white;
`;

const pageContainerCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;
