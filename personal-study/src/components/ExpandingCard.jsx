/* eslint-disable jsx-a11y/alt-text */
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

import React, { useState } from "react";
import dog1 from "../assets/images/dog1.png";
import dog2 from "../assets/images/dog2.png";
import dog3 from "../assets/images/dog3.png";
import dog4 from "../assets/images/dog4.png";
import dog5 from "../assets/images/dog5.png";

// 어떤 사진이 체크되어있는지 기록하는 스테이트를 만들어서 클릭한 요소별로 다른 이모션 css를 적용하도록 구현해보세요!

const dogImages = [dog1, dog2, dog3, dog4, dog5];
// const happy = ["행복", "편안함", "즐거움", "외로움", "졸림"];

function ExpandingCard() {
  const [state, setState] = useState(1);

  const handleClickImage = (index) => {
    setState(index);
    // console.log("index 현재: " + index);
  };
  //   console.log("state 비동기: " + state);

  return (
    <div css={imageFlex}>
      {dogImages.map((item, index) => (
        <img
          key={index}
          src={item}
          alt={`dog${index}`}
          //   id={index}
          onClick={() => handleClickImage(index)}
          //   state={state}
          css={[dogImage, ImageCss(index, state)]}
        />
      ))}
    </div>
  );
}
export default ExpandingCard;

const imageFlex = css`
  display: flex;
  width: 60vw;
  height: 40vh;
  gap: 20px;
`;
const dogImage = css`
  display: flex;
  border-radius: 16px;
  object-fit: cover;
  width: 30px;
`;

const ImageCss = (index, state) => css`
  display: flex;
  flex: ${state === index ? "1" : null};

  /* transition: all ease 1s 0s; */
  transition-property: flex;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  transition-delay: 0s;
`;
