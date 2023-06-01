/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { AiOutlineRollback } from "react-icons/ai";

function PageBtn() {
  return (
    <a css={link} href="/">
      <AiOutlineRollback />
    </a>
  );
}

export default PageBtn;

const link = css`
  position: fixed;
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  width: 5%;
  border: 0;
  border-radius: 5px;
  background-color: #c8e0c8;
  padding: 4px;
  color: #ffff;
  bottom: 2%;
  right: 2%;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
`;
