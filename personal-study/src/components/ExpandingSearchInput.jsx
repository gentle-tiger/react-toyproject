/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";
// import { MdSearch } from "react-icons/md";
function ExpandingSearchInput() {
  return (
    <div css={wrapperCss}>
      <div css={expandingSearch}>
        <input type="text" css={expandingSearchInput} />
        <button css={expandingSearchBtn}>
          <FontAwesomeIcon icon="fa-regular fa-magnifying-glass" />
        </button>
      </div>
    </div>
  );
}

export default ExpandingSearchInput;

const wrapperCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #1d87e9;
`;
const expandingSearch = css`
  /* background-color: white; */
  /* justify-content: center; */
  /* align-items: center; */
  display: flex;
  height: 3rem;
  width: 16rem;
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
`;
const expandingSearchInput = css`
  border: 0;
  height: 45px; // btn이랑 맞춤
  width: 100%; // 넓이는 고정으로 두었음.
  background-color: white;
  outline: none; // 클릭시 보이는 테두리 안 보이도록 하기.
  padding: 0 12px;
  font-weight: bold;
  border-radius: 2px 0 0 2px; // 아주 살짝 되어 있음.
`;
const expandingSearchBtn = css`
  display: flex;
  align-items: center; // search icon 정가운데로 위치.
  width: 45px; // btn은 정 사각형을 휴지하도록 함.
  height: 45px; // input이랑 맞춤
  border: 0;
  border-radius: 0 2px 2px 0; // 아주 살짝 되어 있음.
  background-color: white;
`;
