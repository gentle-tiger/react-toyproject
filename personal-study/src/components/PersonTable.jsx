/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { isAction } from "@reduxjs/toolkit";

import React from "react";

function PersonTable({
  chlidren,
  imgUrl,
  name,
  handleClickInfoOpen,
  text,
  isActive,
  id,
}) {
  return (
    <div>
      <div css={contentCss(isActive)}>
        <div
          css={personInfoWapperCss(isActive)}
          onClick={() => handleClickInfoOpen(id)}
        >
          <img src={imgUrl} css={imgsCss(isActive)}></img>
        </div>
        <div
          css={nameWapperCss(isActive)}
          onClick={() => handleClickInfoOpen(id)}
        >
          {name}
        </div>

        <div css={textContentCss(isActive)}>
          <p css={paragraphCss(isActive)}>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default PersonTable;

const contentCss = (isActive) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5px auto 0px 5px;
  user-select: none;
`;
// img + name
const personInfoWapperCss = (isActive) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #ffde03; // img 백그라운드.
  width: 300px;
  height: ${isActive ? "200px" : "50px"}; // 분홍색 백그라운드 크기
  user-select: none;
  transition: all ease 0.5s 0s;
  cursor: pointer;

  /* will-change: transform; */
`;
// img
const imgsCss = (isActive) => css`
  width: ${isActive ? "70px" : "50px"};
  height: ${isActive ? "70px" : "50px"};
  object-fit: cover;
  border-radius: 50px;
  transform: ${isActive
    ? "none"
    : "translate(-230%, 0%)"}; // 기존으로 돌아오는 것임.
  transition: all ease 0.5s 0s;
  user-select: none;
  will-change: transform;
`;
// name (span 태그)
const nameWapperCss = (isActive) => css`
  position: relative;
  display: flex;
  width: 300px;
  background-color: #ffde03;
  padding: ${isActive ? "0 0px 0 20px" : "0 0 0 10px"};
  font-size: ${isActive ? "2rem" : "null"};
  text-decoration: ${isActive ? "underline" : "null"};
  transition: all ease 0.5s 0s;
  white-space: nowrap;
  cursor: pointer;
`;

// 텍스트를 감싸고 있는 태그
const textContentCss = (isActive) => css`
  transition: all ease 0.5s 0s;
  position: sticky;
  background-color: #0336ff;
  width: 300px;
  margin: 0;
  user-select: none;
`;
const paragraphCss = (isActive) => css`
  height: ${isActive ? "200px" : "0px"};
  padding: ${isActive ? "0px 15px" : "0px"};
  margin: ${isActive ? "20px 0px 20px 0px" : "0px"};
  opacity: ${isActive ? "1" : "0"};
  transition: all ease 0.5s 0s;
  overflow: hidden;
`;
