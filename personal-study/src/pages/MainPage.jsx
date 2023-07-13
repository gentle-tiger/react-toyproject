/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { AiOutlineMenu } from "react-icons/ai";

import {
  BrowserRouter,
  Link,
  NavLink,
  Route,
  Router,
  Routes,
} from "react-router-dom";
import ModalBtn from "../components/ModalBtn";
import { useState } from "react";
import PageLink from "./PageLink";
import Button from "../components/Button";
import TestPage from "./TestPage";
import CounterPage from "./CounterPage";
import TodoListPage from "./TodoListPage";
import ExpandingCardPage from "./ExpandingCardPage";
import NewExpandingCardPage from "./NewExpandingCardPage";
import NewTodoListPage from "./NewTodoListPage";
import ExpandingSearchInputPage from "./ExpandingSearchInputPage";
import ColorsPage from "./ColorsPage";
// import ModalPage from "./ModalPage";
import CatInfoPage from "./CatInfoPage";
import StaggerEffectPage from "./StaggerEffectPage";
import MonsterPage from "./MonsterPage";
// import { Router } from "../Router";
// import { Route, Routes } from "react-router-dom";

function MainPage() {
  // uiInfo 보여주는 상태값
  const [isUiInfo, setIsUiInfo] = useState(true);

  // uiPage 숨기고 펼치는 거
  const [isInfoOpend, setIsInfoOpend] = useState(true);

  const handleClickOpenUiPages = () => {
    setIsUiInfo((prev) => !prev);
  };

  const handleClickInfoOpend = () => {
    setIsInfoOpend((prev) => !prev);
    console.log(isInfoOpend);
  };
  const Title = "UI Challenge 404";
  return (
    <div css={mainPageCss}>
      <div className="header">
        <div css={headLine}>
          <h1>{Title}</h1>
        </div>

        <div css={btnHeader}>
          <Button css={pageInfoBtn} onClick={handleClickOpenUiPages}>
            <AiOutlineMenu font={200} />
          </Button>
          <img
            css={headerImg}
            src="https://cdn.pixabay.com/photo/2014/10/26/14/36/light-bulb-503881_1280.jpg"
            alt=""
          />
        </div>
      </div>
      <div css={contentsCss}>
        <div css={uiInfoHeaderCss(isUiInfo)}>
          <div css={linkList}>
            <div css={uiPageNav}>
              <span css={uiPageNavInfo} onClick={handleClickInfoOpend}>
                REACT UI PAGES
              </span>
              <div css={infoItems(isInfoOpend)}>
                {/*  link 태그를 맵 함수를 통해서 돌림 */}
                {/* {users.map((user, index)=>(<NavLink key={index} to={user.id}>{user.name}</NavLink>))} */}
                <NavLink to="/test">Test</NavLink>
                <NavLink to="/counter">Counter</NavLink>
                <NavLink to="/todoList">TodoList</NavLink>
                <NavLink to="/expanding">ExpandCard</NavLink>
                <NavLink to="/newExpanding">NewExpandCard</NavLink>
                <NavLink to="/newTodoList">NewTodoList</NavLink>
                <NavLink to="/expandingSearchInput">
                  ExpandingSearchInput
                </NavLink>
                <NavLink to="/colors">Colors</NavLink>
                {/* <NavLink to="/modal">Modal</NavLink> */}
                <NavLink to="/catInfo">CatInfo</NavLink>
                <NavLink to="/staggerEffect">StaggerEffect</NavLink>
                <NavLink to="/monster">Monster</NavLink>
              </div>
            </div>
            <div>
              {" "}
              items
              {/* <div css={uiPageNav}>
        <span css={uiPageNavInfo} onClick={handleClickInfoOpend}>
          11 REACT UI PAGES
        </span>
        <div css={infoItems(isInfoOpend)}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
        </div>
      </div>
      <div css={uiPageNav}>
        <span css={uiPageNavInfo} onClick={handleClickInfoOpend}>
          22 REACT UI PAGES
        </span>
        <div css={infoItems(isInfoOpend)}>
          <div>10</div>
          <div>11</div>
          <div>12</div>
          <div>13</div>
          <div>14</div>
          <div>15</div>
          <div>16</div>
          <div>17</div>
          <div>18</div>
          <div>19</div>
          <div>20</div>
          <div>21</div>
          <div>22</div>
        </div>
      </div>
      <div css={uiPageNav}>
        <span css={uiPageNavInfo} onClick={handleClickInfoOpend}>
          33 REACT UI PAGES
        </span>
        <div css={infoItems(isInfoOpend)}>
          <div>23</div>
          <div>24</div>
          <div>25</div>
          <div>26</div>
          <div>27</div>
          <div>28</div>
          <div>29</div>
          <div>30</div>
          <div>31</div>
          <div>32</div>
          <div>33</div>
          <div>34</div>
          <div>35</div>
          <div>36</div>
          <div>37</div>
          <div>38</div>
        </div>
      </div> */}
            </div>
          </div>
        </div>
        <div css={pageInfoHeaderCss(isUiInfo)}>
          <div /* css={pageContainerCss} */>
            {/* <Router /> */}
            <Routes>
              <Route path="/" element={<h1>메인 페이지입니다.</h1>} />
              <Route path="/test" element={<TestPage />} />
              <Route path="/counter" element={<CounterPage />} />
              <Route path="/todoList" element={<TodoListPage />} />
              <Route path="/expanding" element={<ExpandingCardPage />} />
              <Route path="/newExpanding" element={<NewExpandingCardPage />} />
              <Route path="/newTodoList" element={<NewTodoListPage />} />
              <Route
                path="/expandingSearchInput"
                element={<ExpandingSearchInputPage />}
              />
              <Route path="/colors" element={<ColorsPage />} />
              {/* <Route path="/modal" element={<ModalPage />} /> */}
              <Route path="/catInfo" element={<CatInfoPage />} />
              <Route path="/staggerEffect" element={<StaggerEffectPage />} />
              <Route path="/monster" element={<MonsterPage />} />
            </Routes>
            {/* </Router> */}
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
  background-color: #a03434;
  color: #ffffff;
  font-family: Source Sans Pro, Helvetica Neue, sans-serif;
  font-size: 36px;
  letter-spacing: 0.2rem;
  padding: 20px;
  height: 70px;
  text-decoration: overline;
`;
const btnHeader = css`
  display: flex;
  max-width: 70px;
  max-height: 70px;
  background-color: #ffffff;
  color: #000000;
  background-size: cover;
`;
const headerImg = css`
  max-width: 70px;
  max-height: 70px;
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
  width: 100%;
  height: 100%;
  background-color: #d8e580;
  /* padding: 30px 20px; */
  transition: width 0.2s cubic-bezier(0.7, 0, 0.3, 1);
  /* ------ 기본 스택 ------ */
  color: white;
`;

// const pageContainerCss = (isUiInfo) => css`
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
const linkList = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  padding: 1.2rem 0.6rem;
  user-select: none;
`;
// 네비게이션 묶음
const uiPageNav = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
// 네비게이션 묶음의 span 태그
const uiPageNavInfo = css`
  font-size: 0.7rem;
  user-select: none;
  font-weight: bold;
  cursor: pointer;
  outline: none;
`;
// link 들만 모여 있는 곳
const infoItems = (isInfoOpend) => css`
  display: flex;
  flex-direction: column;
  user-select: none;
  /* height: ${isInfoOpend ? "0px" : "300px"}; */
  height: auto;
  gap: 4px;
  display: ${isInfoOpend ? "none" : "flex"};
  transition: all 0.2s cubic-bezier(0.7, 0, 0.3, 1);
  padding-left: 10px;
  text-decoration: none;

  .active {
    background-color: black;
    background-size: contain;
    color: white;
  }
`;
