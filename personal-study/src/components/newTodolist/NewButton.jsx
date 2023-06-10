/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

// import styled from "@emotion/styled";
import styled from "styled-components";

function NewButton({ children, ...props }) {
  /// props 를 한 번에 모아서 가져오고 넣어준다.
  return <StyledButton {...props}>{children}</StyledButton>;
}

export default NewButton;

const StyledButton = styled.button`
  background-color: #ffffff;
  border-radius: 5px;
  border: none;
  padding: 4px 8px;
  font-weight: bold;
  line-height: 1.2;
  cursor: pointer;
  &:hover {
    background: #e1e9ef;
  }
  &:active {
    background: #dde3e8;
  }
  ${(p) =>
    p.clear &&
    `
      color: #1565C0;
      background-color: #ffffff;
      &:hover{
        background: #a5b7c6;

        }
      &:active {
      background: #86a9c8;
        }
    `}
  ${(p) =>
    p.delete &&
    `
      color: #B71C1C;
      background-color: #ffffff;
      &:hover{
        background: #d6acac;

      }
      &:active {
    background: #d77878;
  }
    `}

  ${(p) =>
    p.reset && // ㅔprimary 가 있을 때만 적용 &&
    `
      color: #33691E;
      line-height: 1.6;
      &:hover{
        background: #bde4ae;

        }
      &:active {
      background: #7cb067;
        }
    `};
  ${(p) =>
    p.plus && // ㅔprimary 가 있을 때만 적용 &&
    `
      color: grey;
      line-height: 1.6;
      &:hover{
        background: #b3b4b3;
        transition: background ease 1s 0s;

        }
      &:active {
        color : white;
      background: #646663;
        }
    `};
  ${(p) =>
    p.modal &&
    `
      color: #ffff;
      background-color : #b92fdc;
      padding : 8px 16px;
      font-size: 12px;
      font-weight : lighter;
      &:hover{
        background-color : #b92fdc;
        }
      &:active {
        color: #b92fdc;
      background: #ffff;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
        }
  `}
`;
