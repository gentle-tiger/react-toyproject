/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

import React, { useEffect, useState } from "react";

function Monster() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("/data/lifeAdvice.json")
      .then((res) => res.json())
      .then((data) => setList(data), console.log());
  }, []);

  return (
    <div>
      <div css={wrapperCss}>
        <div css={containerCss}>
          {list.map((item, index) => (
            <img
              key={index}
              id={index}
              src={item.imgUrl}
              alt={""}
              css={imgCss}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Monster;

const wrapperCss = css`
  display: flex;
  width: 100%;
  height: 100vh;
  border: 1px solid blue;
`;

const containerCss = css`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  border: 1px solid red;
  gap: 10px;
`;
const imgCss = css`
  object-fit: cover;
  min-height: 70px;
  max-height: 70px;

  min-width: 70px;
  max-width: 70px;
  transition: all ease 0.3s 0s;
  border-radius: 10px;
  cursor: pointer;
  :hover {
    transform: translate(40px, 20px) rotate(100deg);
    transform: translate(0px, 40px);
    /* transform: translate(400px, 200px); */
  }
`;
