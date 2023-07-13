/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function PageLink() {
  // uiPage 숨기고 펼치는 거
  const [isInfoOpend, setIsInfoOpend] = useState(false);

  const handleClickInfoOpend = () => {
    setIsInfoOpend((prev) => !prev);
    console.log(isInfoOpend);
  };
  return (
    <div css={linkList}>
      <div css={uiPageNav}>
        <span css={uiPageNavInfo} onClick={handleClickInfoOpend}>
          REACT UI PAGES
        </span>
        <div css={infoItems(isInfoOpend)}>
          <NavLink to="/test">Test</NavLink>
          <NavLink to="/counter">Counter</NavLink>
          <NavLink to="/todoList">TodoList</NavLink>
          <NavLink to="/expanding">ExpandCard</NavLink>
          <NavLink to="/newExpanding">NewExpandCard</NavLink>
          <NavLink to="/newTodoList">NewTodoList</NavLink>
          <NavLink to="/expandingSearchInput">ExpandingSearchInput</NavLink>
          <NavLink to="/colors">Colors</NavLink>
          <NavLink to="/modal">Modal</NavLink>
          <NavLink to="/catInfo">CatInfo</NavLink>
          <NavLink to="/staggerEffect">StaggerEffect</NavLink>
          <NavLink to="/monster">Monster</NavLink>
        </div>
      </div>
    </div>
  );
}

export default PageLink;
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
  .active {
    background-color: black;
  }
`;
//  (Link 태그)
const NavLink = styled(Link)`
  color: #000;
  text-decoration: none;
  user-select: none;
  font-size: 0.4rem;
  user-select: none;
  cursor: pointer;
  :hover {
    color: red;
  }
`;
