/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

import React from "react";
function Colors() {
  return (
    <div css={colors}>
      <div className="header" css={header}>
        header
      </div>
      <div className="body" css={body}>
        <div className="colorBox">
          <div className="color1"></div>
          <div className="color2"></div>
          <div className="color3"></div>
          <div className="color4"></div>
          <div className="color5"></div>
          <div className="color6"></div>
          <div className="color7"></div>
          <div className="color8"></div>
          <div className="color9"></div>
          <div className="color10"></div>
          <div className="color11"></div>
          <div className="color12"></div>
          <div className="color13"></div>
          <div className="color14"></div>
          <div className="color15"></div>
          <div className="color16"></div>
          <div className="color17"></div>
          <div className="color18"></div>
          <div className="color19"></div>
          <div className="color20"></div>
          <div className="color21"></div>
          <div className="color22"></div>
          <div className="color23"></div>
          <div className="color24"></div>
          <div className="color25"></div>
          <div className="color26"></div>
          <div className="color27"></div>
          <div className="color28"></div>
          <div className="color29"></div>
          <div className="color30"></div>
          <div className="color31"></div>
          <div className="color32"></div>
          <div className="color33"></div>
          <div className="color34"></div>
          <div className="color35"></div>
          <div className="color36"></div>
          <div className="color37"></div>
          <div className="color38"></div>
        </div>
      </div>
      <div className="footer" css={footer}>
        footer
      </div>
    </div>
  );
}

export default Colors;

const colors = css`
  box-sizing: border-box;
  display: grid;
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
  grid-template-rows: 1fr 3fr 1fr;
  grid-template-areas:
    "header header header"
    "body body body"
    "footer footer footer";
`;
const header = css`
  grid-area: header;
  background-color: black;
`;
const body = css`
  grid-area: body;
  background-color: lightgrey;

  .colorBox {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    div {
      background-color: white;
      padding: 10px 10px;
      border: 1px solid;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
      height: 10px;
      :hover {
        height: 100%;
        transition: all ease 1s;
      }
    }
    .color1 {
      background-color: #f3e5f5;
    }
    .color2 {
      background-color: #e1bee7;
    }
    .color3 {
      background-color: #ce93d8;
    }
    .color4 {
      background-color: #ba68c8;
    }
    .color5 {
      background-color: #ab47bc;
    }
    .color6 {
      background-color: #9c27b0;
    }
    .color7 {
      background-color: #8e24aa;
    }
    .color8 {
      background-color: #7b1fa2;
    }
    .color9 {
      background-color: #6a1b9a;
    }
    .color10 {
      background-color: #4a148c;
    }
    .color11 {
      background-color: #6a1b9a;
    }
    .color2 {
      background-color: #f3e5f5;
    }
    .color13 {
      background-color: #7b1fa2;
    }
    .color14 {
      background-color: #8e24aa;
    }
    .color15 {
      background-color: #9c27b0;
    }
    .color16 {
      background-color: #ab47bc;
    }
    .color17 {
      background-color: #ba68c8;
    }
    .color18 {
      background-color: #ce93d8;
    }
    .color19 {
      background-color: #e1bee7;
    }
    .color20 {
      background-color: #f3e5f5;
    }
    .color21 {
      background-color: #b2ebf2;
    }
    .color22 {
      background-color: #4dd0e1;
    }
    .color23 {
      background-color: #00bcd4;
    }
    .color24 {
      background-color: #00acc1;
    }
    .color25 {
      background-color: #0097a7;
    }
    .color26 {
      background-color: #00796b;
    }
    .color27 {
      background-color: #009688;
    }
    .color28 {
      background-color: #4db6ac;
    }
    .color29 {
      background-color: #80cbc4;
    }
    .color30 {
      background-color: #b2dfdb;
    }
    .color31 {
      background-color: #64ffda;
    }
    .color32 {
      background-color: #1de9b6;
    }
    .color33 {
      background-color: #00bfa5;
    }
    .color34 {
      background-color: #388e3c;
    }
    .color35 {
      background-color: #4caf50;
    }
    .color36 {
      background-color: #66bb6a;
    }
    .color37 {
      background-color: #81c784;
    }
    .color38 {
      background-color: #a5d6a7;
    }
    .color36 {
      background-color: #b9f6ca;
    }
    .color37 {
      background-color: #69f0ae;
    }
    .color38 {
      background-color: #00e676;
    }
  }
`;
const footer = css`
  grid-area: footer;
  background-color: yellow;
`;
