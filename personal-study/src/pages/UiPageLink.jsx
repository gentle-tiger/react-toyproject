/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function UiPageLink() {
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
          <CustomLink to="/test">Test</CustomLink>
          <CustomLink to="/counter">Counter</CustomLink>
          <CustomLink to="/todoList">TodoList</CustomLink>
          <CustomLink to="/expanding">ExpandCard</CustomLink>
          <CustomLink to="/newExpanding">NewExpandCard</CustomLink>
          <CustomLink to="/newTodoList">NewTodoList</CustomLink>
          <CustomLink to="/expandingSearchInput">
            ExpandingSearchInput
          </CustomLink>
          <CustomLink to="/colors">Colors</CustomLink>
          <CustomLink to="/modal">Modal</CustomLink>
          <CustomLink to="/catInfo">CatInfo</CustomLink>
        </div>
      </div>
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
  );
}

export default UiPageLink;
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
`;
//  (Link 태그)
const CustomLink = styled(Link)`
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
