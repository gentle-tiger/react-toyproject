/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handlePlusBtn = () => {
    setCount(() => count + 1);
  };
  const handleMinusBtn = () => {
    setCount(() => count - 1);
  };
  const handleKeyDownPlus = (e) => {
    const { code } = e;
    if (code === "NumpadAdd") handlePlusBtn();
  };
  const handleKeyDownMinus = (e) => {
    const { code } = e;
    console.log(code);
    if (code === "NumpadSubtract") handleMinusBtn();
  };
  return (
    <div className="Counter" css={counter}>
      <h1 css={h1}>Counter</h1>
      <div css={buttons}>
        <button
          className="plusBtn"
          onClick={handlePlusBtn}
          onKeyDown={handleKeyDownPlus}
          css={plusBtn}
        >
          +
        </button>
        <div css={textCss(count)}>{count}</div>
        <button
          onClick={handleMinusBtn}
          onKeyDown={handleKeyDownMinus}
          css={minusBtn}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
const textCss = (count) => {
  const over10 = count > 10;

  return css`
    color: ${over10 ? "red" : "black"};
    font-size: ${over10 ? "50px" : null};
  `;
};

const counter = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #38d7dd;
  border-radius: 5px;
`;
const h1 = css`
  border: 1px solid white;
  font-size: 2.2rem;
`;
const buttons = css`
  display: flex;
  gap: 25px;
`;
const plusBtn = css`
  background-color: bisque;
  border: 0;
  border-radius: 5px;
`;

const minusBtn = css`
  background-color: rebeccapurple;
  border: 0;
  border-radius: 5px;
`;
