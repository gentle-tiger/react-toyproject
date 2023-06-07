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

// const Img1 = (state) => {
//   if (state === 1)
//     return css`
//       display: flex;
//       flex: 1;
//       transition: all ease 1s 0s;
//       border: 10px solid red;
//     `;
// };

/* flex: 1; // 이게 왜 있어야 하지? */
/* transition: all ease 1s 0s; */
/* height: 100%; */
/* transition-delay: 1s; */
/* transition-timing-function: ease-in-out; */

// &:hover {
//   display: flex;
//   transition: all ease 1s 0s;
//   transition-duration: 2s;
//   transition-property: all;
//   transition-timing-function: ease;
//   flex: 1;
// }

// const Image0 = css`;
//   display: flex;
//   border: 1px solid red;
//   flex: 1;
// `;
// const Image1 = css`
//   display: flex;
// `;
// const Image2 = css`
//   display: flex;
// `;
// const Image3 = css`
//   display: flex;
// `;
// const Image4 = css`
//   display: flex;
// `;

// 사용 가능

// function Study() {
//   const [string, setString] = useState(0);

//   const handleClickNumber = (e) => {
//     // img 태그의 src 속성에서 파일명을 분리
//     const url = e.target.src.split("/");
//     const file = url[url.length - 1].split(".");
//     const fileName = file[0];
//     const fileNumber = fileName.split("dog")[1]; // 숫자
//     // console.log(fileNumber);

//     // img 태그의 alt 속성에서 숫자를 가져옴
//     const className = e.target.alt.split("dog")[1];
//     // console.log(className);
//     if (fileNumber === className) {
//       //   setString(fileName, split("dog"));
//       console.log("fileName : " + fileNumber, "className : " + className);
//     } else {
//       alert(
//         "경고 -> " +
//           "fileNumber : " +
//           fileNumber +
//           "!==" +
//           "className : " +
//           className
//       );
//     }
//   };

//   console.log("string : " + string);
//   return (
//     <div className="mainContainer" css={mainContainer}>
//       <div className="subContainer" css={subContainer}>
//         <div>
//           <img
//             src={`${process.env.PUBLIC_URL}/public_assets/dog1.gif`}
//             className="img"
//             alt="dog1"
//             //   onClick={handleClickNumber}
//             //   css={[imgClick(string)]}
//           />{" "}
//           <p>Jolly</p>
//         </div>

// // const animation =
// const mainContainer = css``;

//     p {
//       position: absolute;
//       display: none;
//       /* border: 1px solid red; */
//       top: 185px;
//       left: 10px;
//     }

//       p {
//         &:hover {
//           display: block;
//           color: white;
//           font-size: 24px;
//           font-weight: bold;
//         }
//       }
//     }
//   }
// `;
