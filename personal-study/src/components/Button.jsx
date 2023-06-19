/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "styled-components";

function Button({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}
export default Button;

const StyledButton = styled.button`
  border: 0;
  font-size: 24px;
  background-color: #393737;
  padding: 10px 20px;
  color: white;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;
