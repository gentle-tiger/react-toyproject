/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { AiOutlineMenu } from "react-icons/ai";

// import { Link } from 'react-router-dom';
// import {  } from "@emotion/react";
// import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import { close } from "../redux/slice/modalSlice";
import ModalBtn from "../components/ModalBtn";
import { useState } from "react";
import Pages from "./UiPages";
import UiPages from "./UiPages";

function MainPage() {
  const [isUiInfo, setIsUiInfo] = useState(false);
  const [isUiInfoContainer, setIsUiInfoContainer] = useState(false);

  const handleClickOpenUiPages = () => {
    setIsUiInfo((prev) => !prev);
  };

  const handleClickItemsClose = () => {
    setIsUiInfoContainer((prev) => !prev);
  };
  console.log(isUiInfoContainer);
  return (
    <div css={mainPage}>
      <div className="header">
        <div css={headLine}>
          <h1>UI Challenge 50</h1>
        </div>
        <div css={content}>
          <button css={iconWapper} onClick={handleClickOpenUiPages}>
            <AiOutlineMenu font={200} />
          </button>

          <div css={infoOpen(isUiInfo)}>
            <div css={uiPagesOpen(isUiInfo)}>
              <div css={uiItems(isUiInfoContainer)}>
                <span onClick={handleClickItemsClose} css={uiInfoContainer}>
                  UI PAGES
                </span>
                <ol css={olPagelink(isUiInfoContainer)}>
                  <UiPages />
                </ol>
                {/* <span onClick={handleClickItemsClose} css={uiInfoContainer}>
                    UI PAGES
                  </span> */}
              </div>
            </div>
          </div>
        </div>
        <div css={footer}></div>
      </div>
      <ModalBtn title="main" content="반갑습니다. main페이지입니다." />
    </div>
  );
}

export default MainPage;

const mainPage = css`
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
`;
const headLine = css`
  height: 35px;
  text-align: center;
  background-color: #ffff;
  color: #000000;
  font-family: Source Sans Pro, Helvetica Neue, sans-serif;
  font-size: 24px;
  letter-spacing: 0.2rem;
  padding: 4px;
`;
const content = css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70px;

  background-color: #0000;
`;
const iconWapper = css`
  display: flex;
  justify-content: center;
  align-items: center; // icon 가운데 조정
  border: 0;
  background-color: #000000;
  color: #ffffff;
  width: 70px;
  height: 70px;
  font-size: 50px;
  cursor: pointer;

  :hover {
    color: lightgray;
  }
`;

// UI ContentInfo
const infoOpen = (isUiInfo) => css`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  position: absolute;
  top: 70px; // 이거 위치 어떻게 못하나?? 조금된 거 같은 기분이긴 함.
  left: 0px;
  width: ${isUiInfo ? "200px" : "0px"};
  height: 700px;
  overflow: scroll;
  /* padding: ${isUiInfo
    ? "30p x 20px;"
    : "0px"} // 패딩을 아예 없애야 할 것 같음 */

  background-color: #ffffff;
  border: 1px solid black;
  transition: all 0.2s cubic-bezier(0.7, 0, 0.3, 1);
`;

const uiPagesOpen = (isUiInfo) => css`
  display: flex;
  flex-direction: column;
  width: 150px;
  height: 300px;
  text-decoration: none;
  color: #c52525;
`;

// UI PAGES  (SPAN 태그의 상위태그)
const uiItems = (isUiInfoContainer) => css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-weight: bold;
  user-select: none;
`;
const uiInfoContainer = css`
  text-align: center; // 일단 임시로 놓은 거 임.
  color: red;
  border-radius: 10px;
  cursor: pointer;
  padding-top: 16px;
`;

// UI PAGES  (SPAN 태그)
const olPagelink = (isUiInfoContainer) => css`
  position: absolute;
  top: 60px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
  color: red;
`;
/* visibility: ${isUiInfoContainer ? "hidden" : "visible"}; */

const footer = css`
  width: 100%;
  height: 100%;
  border: 10px solid red;
`;
