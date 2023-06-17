/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { AiOutlineMenu } from "react-icons/ai";

// import { Link } from 'react-router-dom';
// import {  } from "@emotion/react";
// import { useDispatch } from "react-redux";
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import styled from "styled-components";
import ModalBtn from "../components/ModalBtn";
import { useState } from "react";
import UiPages from "./UiPageLink";
import ExpandingCardPage from "./ExpandingCardPage";
import UiPageLink from "./UiPageLink";
import NewExpandingCardPage from "./NewExpandingCardPage";
import TestPage from "./TestPage";
import CounterPage from "./CounterPage";
import TodoListPage from "./TodoListPage";
import NewTodoListPage from "./NewTodoListPage";
import ExpandingSearchInputPage from "./ExpandingSearchInputPage";
import ColorsPage from "./ColorsPage";
import ModalPage from "./ModalPage";
import Button from "../components/Button";

function MainPage({ component }) {
  // uiInfo 보여주는 상태값
  const [isUiInfo, setIsUiInfo] = useState(false);

  const handleClickOpenUiPages = () => {
    setIsUiInfo((prev) => !prev);
  };

  return (
    <div css={mainPageCss}>
      <div className="headLine">
        <div css={headLine}>
          <h1>UI Challenge 50</h1>
        </div>
        <div css={btnHeader}>
          <Button onClick={handleClickOpenUiPages}>
            <AiOutlineMenu font={200} />
          </Button>
        </div>
      </div>
      <div css={contentsCss}>
        <div css={uiInfoHeaderCss(isUiInfo)}>
          {/* 여기에는 page를 넣을 거야 */}
          <UiPageLink />
        </div>
        <div css={pageInfoHeaderCss(isUiInfo)}>
          <div>
            {component}
            여기서 어떠한 값을 받아서 그 값에 따라 화면을 바꿔야 할 거 같음.
          </div>
        </div>
      </div>
      <ModalBtn title="main" text="반갑습니다. main페이지입니다." />
    </div>
  );
}

export default MainPage;
// transition: all 0.2s cubic-bezier(0.7, 0, 0.3, 1);
// overflow: scroll;

const mainPageCss = css`
  width: 100vw;
  height: 100vh;
`;
const headLine = css`
  height: 35px;
  text-align: center;
  background-color: #000000;
  color: #ffffff;
  font-family: Source Sans Pro, Helvetica Neue, sans-serif;
  font-size: 24px;
  letter-spacing: 0.2rem;
  padding: 20px;
  height: 70px;
  text-decoration: overline;
`;
const btnHeader = css`
  background-color: #ffffff;
  color: #000000;
`;

// Info 와 page 화면을 구분해 놓은 컨텐츠
const contentsCss = css`
  display: flex;
`;
const uiInfoHeaderCss = (isUiInfo) => css`
  width: ${isUiInfo ? "300px" : "0px"};
  height: 100vh;
  background-color: #ffffff;
  transition: width 0.2s cubic-bezier(0.7, 0, 0.3, 1);
  overflow-x: scroll;
  /* ------ 기본 스택 ------ */
`;

const pageInfoHeaderCss = (isUiInfo) => css`
  width: ${isUiInfo ? "80rem" : "100rem"};
  height: 100vh;
  background-color: #000000;
  transition: width 0.2s cubic-bezier(0.7, 0, 0.3, 1);
  /* ------ 기본 스택 ------ */
  color: white;
`;
