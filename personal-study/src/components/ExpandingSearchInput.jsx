/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css, ClassNames } from "@emotion/react";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Colors from "./Colors/Colors";
import { BsFillSearchHeartFill } from "react-icons/bs";

// 에러
// 버튼에서 icon에 해당 되는 곳을 클릭하면 에러가 뜸. icon 을 바탕화면으로 인식하는 것 같음.
function ExpandingSearchInput() {
  const [state, setState] = useState(false);
  const [userInput, setUserInput] = useState("");

  const navigate = useNavigate();

  const handleChangeBackground = (e) => {
    const { className } = e.target;
    // console.log(className);
    // console.log(className.includes("wrapper"));
    className.includes("wrapper")
      ? setState((prev) => !prev)
      : alert("잘못된 접근입니다.");
  };
  const handleChangeInput = (e) => {
    const { value } = e.target;
    setUserInput(() => value);
    console.log(value); // console.log
  };

  console.log(state);

  const navigateToPurchase = (e) => {
    console.log(userInput);
    if (userInput === "") return;
    navigate("/");
  };

  // input에 값이 없으면 enter가 실행되지 않도록 한다.
  const handleKeyDownEnter = (e) => {
    const { code } = e;
    if (userInput === "") return;
    if (code === "Enter") return navigate("/"); // "/purchase"
    // console.log
  };

  return (
    <div
      css={wrapperCss(state)}
      className="wrapper"
      onClick={handleChangeBackground}
    >
      <div css={containerCss}>
        <input
          type="text"
          value={userInput}
          css={expandingSearchInput(state)}
          onKeyDown={handleKeyDownEnter}
          onChange={handleChangeInput}
          placeholder="Search..."
        />

        <button css={expandingSearchBtn} onClick={navigateToPurchase}>
          <BsFillSearchHeartFill
            fontSize={20}
            color={state ? "#8344da" : "#e64f4f"}
            // onClick={navigateToPurchase}
          />
        </button>
      </div>
    </div>
  );
}

export default ExpandingSearchInput;

const wrapperCss = (state) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${state ? "#8344da" : "#e64f4f"};
  transition: background-color ease 0.5s 0s;
`;
const containerCss = css`
  display: flex;
  justify-content: center;
  width: auto;
  height: auto;
`;

const expandingSearchInput = (state) => css`
  width: ${state ? "100%" : "0%"};
  border: 0;
  padding: ${state ? "8px" : "0px"};
  outline: none;
  transition-property: width padding;
  transition-duration: 0.7s;
`;

const expandingSearchBtn = css`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 2.5rem;
  min-width: 2.5rem;
  border: 0;
  background-color: #31e670;
  transition: background-color 0.5s;
  cursor: pointer;
  &:hover {
    background-color: #ffff00;
  }
`;
const searchIcon = (state) => css`
  color: ${state ? "#8344da" : "#e64f4f"};
`;
