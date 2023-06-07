/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "styled-components";
import React from "react";
import PageBtn from "../components/PageBtn";
import Colors from "../components/Colors/Colors";

function ColorsPage() {
  return (
    <div>
      <Colors />
      <PageBtn />
    </div>
  );
}

export default ColorsPage;
