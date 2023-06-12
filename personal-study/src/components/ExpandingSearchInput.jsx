/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css, ClassNames } from "@emotion/react";

import React, { useState } from "react";
function ExpandingSearchInput() {
  const [state, setState] = useState(false);

  const handleClick = (e) => {
    const { className } = e.target;
    if (
      className === "css-bxvpqy-ExpandingSearchInput"
        ? setState((prev) => !prev)
        : null
    );
  };

  console.log(state);
  return (
    <div css={wrapperCss} onClick={handleClick}>
      <div css={containerCss}>
        <div css={expandingSearch(state)}>
          <input
            type="text"
            css={expandingSearchInput(state)}
            placeholder="Search..."
          />
        </div>

        <button css={expandingSearchBtn}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.8em"
            viewBox="0 0 512 512"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
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
const containerCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

//  input 박스를 안 보이도로 하려면 이 css의 width 를 바꿔야함.
const expandingSearch = (state) => {
  return css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 45px; // btn이랑 맞춤.
    border-radius: 2px;
    width: 100%;
    flex: ${state ? "1" : "0"};
    transition: all ease 0.5s 0s;
  `;
};

const expandingSearchInput = (state) => css`
  border: 0;
  height: 45px; // btn이랑 맞춤
  outline: none; // 클릭시 보이는 테두리 안 보이도록 하기.
  padding: 0 12px;
  font-weight: bold;
  width: 100%;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  visibility: ${state ? "visible" : "hidden"};
  display: ${state ? "inline" : "none"};
`;

const expandingSearchBtn = (state) => css`
  display: flex;
  justify-content: center;
  align-items: center; // search icon 정가운데로 위치.
  min-width: 45px; // btn은 정 사각형을 휴지하도록 함.
  min-height: 45px; // input이랑 맞춤
  border: 0;
  background-color: #ffffff;
`;
