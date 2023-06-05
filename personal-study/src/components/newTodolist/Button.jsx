/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

// import styled from "@emotion/styled";
import styled from "styled-components";

function Button({ children, ...props }) {
  /// props 를 한 번에 모아서 가져오고 넣어준다.
  return <StyledButton {...props}>{children}</StyledButton>;
}

export default Button;

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
`;
