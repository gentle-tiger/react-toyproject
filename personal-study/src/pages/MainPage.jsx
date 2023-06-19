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
import UiComponent from "../components/UiComponent";

function MainPage({ component }) {
  // uiInfo 보여주는 상태값
  const [isUiInfo, setIsUiInfo] = useState(false);

  const handleClickOpenUiPages = () => {
    setIsUiInfo((prev) => !prev);
  };
  const Title = "UI Challenge 50";
  return (
    <div css={mainPageCss}>
      <div className="headLine">
        <div css={headLine}>
          <h1>{Title}</h1>
        </div>
        <div css={btnHeader}>
          <Button css={pageInfoBtn} onClick={handleClickOpenUiPages}>
            <AiOutlineMenu font={200} />
          </Button>
        </div>
      </div>
      <div css={contentsCss}>
        <div css={uiInfoHeaderCss(isUiInfo)}>
          <UiPageLink />
        </div>
        <div css={pageInfoHeaderCss(isUiInfo)}>
          <div css={pageContainerCss}>
            <UiComponent />
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
  font-size: 36px;
  letter-spacing: 0.2rem;
  padding: 20px;
  height: 70px;
  text-decoration: overline;
`;
const btnHeader = css`
  background-color: #ffffff;
  color: #000000;
`;
const pageInfoBtn = css``;

// Info 와 page 화면을 구분해 놓은 컨텐츠
const contentsCss = css`
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
