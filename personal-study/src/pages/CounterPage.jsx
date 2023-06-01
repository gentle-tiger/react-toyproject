/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

import React from "react";
import Counter from "../components/Counter";
import { Link } from "react-router-dom";
import PageBtn from "../components/PageBtn";

function CounterPage() {
  return (
    <div>
      <Counter />
      <PageBtn />
    </div>
  );
}

export default CounterPage;
