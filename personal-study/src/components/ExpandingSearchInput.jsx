/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css, ClassNames } from "@emotion/react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function ExpandingSearchInput() {
  const [state, setState] = useState(false);
  const [userInput, setUserInput] = useState("");

  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    const { value } = e.target;
    setUserInput(() => value);
    console.log(value); // console.log
  };
  const handleClick = (e) => {
    const { className } = e.target;
    if (
      className === "css-bxvpqy-ExpandingSearchInput"
        ? setState((prev) => !prev)
        : null
    );
  };

  const navigateToPurchase = () => {
    if (userInput === "") return;
    navigate("/");
  };
  const handleKeyDownEnter = (e) => {
    const { code } = e;
    if (userInput === "") return;
    if (code === "Enter") return navigate("/"); // "/purchase"
    // console.log
  };
  // console.log(state);
  return (
    <div css={wrapperCss} onClick={handleClick}>
      <div css={containerCss}>
        {/* <div css={expandingSearch(state)}> */}
        <input
          type="text"
          value={userInput}
          css={expandingSearchInput(state)}
          onKeyDown={handleKeyDownEnter}
          onChange={handleChangeInput}
          placeholder="Search..."
        />
        {/* </div> */}

        <button css={expandingSearchBtn} onClick={navigateToPurchase}>
          <FontAwesomeIcon icon={faMagnifyingGlass} fontSize={24} />
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
// const expandingSearch = (state) => {
//   return css`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 45px; // btn이랑 맞춤.
//     border-radius: 2px;
//     width: 100%;
//     flex: ${state ? "1" : "0"};
//     transition: all ease 0.5s 0s;
//   `;
// };

const expandingSearchInput = (state) => css`
  border: 0;
  height: 45px; // btn이랑 맞춤
  outline: none; // 클릭시 보이는 테두리 안 보이도록 하기.
  padding: 0 12px;
  font-weight: bold;
  width: 100%;
  background-color: white;
  flex: ${state ? "1" : "0"};
  transition: all ease 0.5s 0s;

  // 대안
  background-color: ${state ? "#ffff" : "#1d87e9"};

  /* border: 1px solid red; */
  /* visibility: hidden; */
  /* visibility: ${state ? "visible" : "hidden"}; */
  /* display: ${state ? "inline" : "none"}; */
`;

const expandingSearchBtn = css`
  display: flex;
  justify-content: center;
  align-items: center; // search icon 정가운데로 위치.
  min-width: 45px; // btn은 정 사각형을 휴지하도록 함.
  min-height: 45px; // input이랑 맞춤
  border: 0;
  background-color: #ffffff;
`;
