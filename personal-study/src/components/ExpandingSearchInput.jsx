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
    console.log(className);
    if (className.includes("wrapper") ? setState((prev) => !prev) : null);
  };
  console.log(state);

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
  return (
    <div css={wrapperCss(state)} className="wrapper" onClick={handleClick}>
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
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            fontSize={24}
            color="#8344da"
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
  width: 100vw;
  height: 100vh;
  background-color: ${state ? "#8344da" : "#e64f4f"};
`;
const containerCss = css`
  display: flex;
  justify-content: center;
`;

const expandingSearchInput = (state) => css`
  width: ${state ? "100%" : "0%"};
  border: 0;
  padding: ${state ? "8px" : "0px"};
  outline: none;
  transition-property: width padding;
  transition-duration: 0.5s;
`;

const expandingSearchBtn = css`
  min-height: 2.5rem;
  min-width: 2.5rem;
  border: 0;
  background-color: #31e670;
  &:hover {
    background-color: #ffff00;
  }
`;
