/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}
export default Button;
