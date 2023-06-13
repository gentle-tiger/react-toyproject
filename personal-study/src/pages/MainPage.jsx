/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { close } from "../redux/slice/modalSlice";
import ModalBtn from "../components/ModalBtn";

function MainPage() {
  return (
    <div css={[mainPage]}>
      <h1>여기는 메인 페이지 입니다.</h1>
      <div css={link}>
        <StyledLink to="/test">Test</StyledLink>
        <StyledLink to="/counter">Counter</StyledLink>
        <StyledLink to="/todoList">TodoList</StyledLink>
        <StyledLink to="/expanding">ExpandCard</StyledLink>
        <StyledLink to="/newExpanding">NewExpandCard</StyledLink>
        <StyledLink to="/newTodoList">NewTodoList</StyledLink>
        <StyledLink to="/expandingSearchInput">ExpandingSearchInput</StyledLink>
        <StyledLink to="/colors">Colors</StyledLink>
        <Link to="/modal">Modal</Link>
      </div>
      <ModalBtn title="main" content="반갑습니다. main페이지입니다." />{" "}
    </div>
  );
}

export default MainPage;

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
  display: flex;
  gap: 10px;
`;
const StyledLink = styled(Link)`
  background-color: #e77f35;
  color: #ffffff;
  text-decoration: none;
  padding: 8px;
  border-radius: 10px;
`;
// const activeStyle = {
//   backgroundColor: "blue",
//   padding: "5px",
//   color: "white",
// };

// const deactiveStyle = {
//   backgroundColor: "#ff0059",
//   padding: "5px",
//   color: "white",
// };
