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
  ${(p) =>
    p.plue &&
    css`
      color: green;
      background-color: lightgreen;
    `}

  ${(p) =>
    p.primary && // ㅔprimary 가 있을 때만 적용 &&
    css`
      color: #4ebf97;
      background-color: #dd0c0c;
      line-height: 2;
      font-size: 30px;
      font-weight: bold;
    `};
`;

// color: ${(p) => p.color || "grey"}; // props 를 인자로 받는
// background-color: ${(p) => p.background || "lightwhite"};
