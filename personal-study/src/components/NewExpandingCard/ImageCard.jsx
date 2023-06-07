/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

import React from "react";

function ImageCard({ id, imgUrl, name, isActive, onClick }) {
  return (
    <div css={wrapperCss(isActive)} onClick={() => onClick(id)}>
      <div css={imageCardCss(imgUrl)} />
      <span css={nameCss(isActive)}>{name}</span>
    </div>
    //     <div css={wrapperCss(isActive)} onClick={() => onClick(id)}>
    //     <div css={imageCardCss(imgUrl, isActive)} />
    //     <span css={nameCss(isActive)}>{name}</span>
    //   </div>
  );
}

export default ImageCard;

const wrapperCss = (isActive) => css`
  position: relative;
  /* flex: 1; */
  flex: ${isActive ? 8 : 1};
  width: 100%;
  height: 100%;
  border-radius: 30px;
  overflow: hidden;
  transition: flex ease 0.3s;
`;

const imageCardCss = (imgUrl) => css`
  height: 100%;
  background-image: ${'url("' + imgUrl + '")'};
  background-size: cover;
  transition: transform ease 0.3s;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
`;

const nameCss = (isActive) => css`
  position: absolute;
  bottom: 10px;
  left: 20px;
  color: white;
  font-size: 24px;
  font-weight: bold;
  white-space: nowrap;
  word-break: keep-all;
  opacity: ${isActive ? 1 : 0};
  transition: opacity ease 0.5s 0.3s;
`;
