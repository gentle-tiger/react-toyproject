/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

function MainPage() {
  return (
    <div css={[mainPage]}>
      <h1>여기는 메인 페이지 입니다.</h1>
      <NavLink
        css={link}
        to="/counter"
        style={({ isActive }) => ({
          backgroundColor: isActive ? "black" : "#76FF03",
        })}
      >
        Counter
      </NavLink>
      <NavLink
        css={link} // css 도 먹으면서 style 도 같이 먹는다.  단. 우선순위는 css in js < style
        to="/todoList"
        style={({ isActive }) => {
          return isActive ? activeStyle : deactiveStyle;
        }}
      >
        TodoList
      </NavLink>
      <StyledLink to="/expending">ExpendCard</StyledLink>
      <Link css={link} to="/newTodoList">
        NewTodoList
      </Link>
    </div>
  );
}

export default MainPage;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 4px;
  border-radius: 10px;
  background-color: #e609e6;
`;
const mainPage = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  h1 {
    font-size: 50px;
  }
`;

const link = css`
  background-color: #1de9b6;
  color: black;
  text-decoration: none;
  padding: 4px;
  border-radius: 10px;
`;

const activeStyle = {
  backgroundColor: "blue",
  padding: "5px",
  color: "white",
};

const deactiveStyle = {
  backgroundColor: "#ff0059",
  padding: "5px",
  color: "white",
};
